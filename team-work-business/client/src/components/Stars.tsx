import {useMemo, useRef} from "react";
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const Stars = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Создание массива звезд с помощью useMemo для оптимизации производительности
    const stars = useMemo(() => {

        const temp = [];

        for (let i = 0; i < 1000; i++) {

            let x = THREE.MathUtils.randFloatSpread(200); // Диапазон от -300 до 300

            if(x >= -10 && x <= 5) {
                x-=26
            }

            let y = THREE.MathUtils.randFloatSpread(200);

            if(y >= -3 && y <= 3) {
                y-=20
            }

            const z = THREE.MathUtils.randFloatSpread(200);

            temp.push({x, y, z});

        }

        return temp;

    }, []);

    useFrame(() => {

        if (groupRef.current) {

            groupRef.current.children.forEach((star: THREE.Object3D) => {

                star.position.z += 0.1;

                if (star.position.z > 50) {

                    star.position.x = THREE.MathUtils.randFloatSpread(200); // Диапазон от -300 до 300\

                    if(star.position.x >= -10 && star.position.x <= 5) {
                        star.position.x-=26
                    }

                    star.position.y = THREE.MathUtils.randFloatSpread(200);

                    if(star.position.y >= -3 && star.position.y <= 3) {
                        star.position.y-=20;
                    }

                    star.position.z = THREE.MathUtils.randFloatSpread(200);

                }
            });
        }
    });

    return (

        <group ref={groupRef}>

            {stars.map((star, index) => (

                <mesh key={index}
                      position={[star.x, star.y, star.z]}>

                    <sphereGeometry args={[0.1, 16, 16]}/>

                    <meshBasicMaterial color="white"/>

                </mesh>

            ))}

        </group>
    );
};

export default Stars;