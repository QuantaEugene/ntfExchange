import React, {useEffect, useRef, useState} from "react";
import {
    DoubleSide,
    Group,
    Texture,
    TextureLoader
} from "three";
import {useFrame, useLoader} from "@react-three/fiber";
import {animated} from "@react-spring/three";
interface SaturnProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

const loadTexture = (url: string): Promise<Texture> => {
    return new Promise((resolve, reject) => {
        const loader = new TextureLoader();
        loader.load(url, resolve, undefined, reject);
    });
};

const Saturn: React.FC<SaturnProps> = ({setIsLoading}) => {

    const groupRef = useRef<Group>(null);

    const [preloader] = useLoader(TextureLoader, [
        '/Снимок экрана 2024-06-10 001620.png',
    ]);

    const [saturnTexture, setSaturnTexture] = useState<Texture | null>(null);

    const [saturnNormalTexture, setSaturnNormalTexture] = useState<Texture | null>(null);

    const [ringsTexture, setRingsTexture] = useState<Texture | null>(null);

    useEffect(() => {

        (async () => {

            const [saturnBaseColor, saturnNormalMap, ringsBaseColor] = await Promise.all([

                loadTexture('/model/img-compressed.png'),
                loadTexture('/model/NormalMap (5)-compressed.png'),
                loadTexture('/model/small_ring_tex-compressed.png'),

            ]);

            setSaturnTexture(saturnBaseColor);

            setSaturnNormalTexture(saturnNormalMap);

            setRingsTexture(ringsBaseColor);

            setIsLoading(false);

        })()

    }, [setIsLoading]);

    useFrame(({ clock }) => {

        if (groupRef.current) {

            const elapsed = clock.getElapsedTime();

            groupRef.current.rotation.y = elapsed * 0.5;

        }
    });

    if (!saturnTexture && !saturnNormalTexture && !ringsTexture) {

        return (<mesh position={[0, 0, 0]}>

            <planeGeometry args={[9, 4]}/>

            <meshStandardMaterial map={preloader}/>

        </mesh>)

    } else {

        return (

            <>

                <group rotation={[0.1, 0.0, -0.2]}>

                    <animated.group ref={groupRef}>

                        <mesh>

                            <sphereGeometry args={[2, 64, 64]}/>

                            <meshStandardMaterial
                                map={saturnTexture}
                                normalMap={saturnNormalTexture}
                                roughness={1}
                                metalness={0}
                            />

                        </mesh>

                        <mesh rotation={[Math.PI / 2, 0, 0]}>

                            <ringGeometry
                                args={[2.5, 4.5, 64]}/>

                            <meshStandardMaterial
                                map={ringsTexture}
                                side={DoubleSide}
                                transparent={true}
                            />

                        </mesh>

                    </animated.group>

                </group>

            </>
        );
    }
};

export default Saturn;