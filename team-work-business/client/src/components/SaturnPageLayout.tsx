import {Canvas} from "@react-three/fiber";
import Stars from "./Stars";
import {animated, useSpring} from "@react-spring/three";
import {
    useSpring as useSpringWeb,
    animated as animatedWeb
} from '@react-spring/web'
import Saturn from "./Saturn";
import {Text} from "@react-three/drei";
import {useTrail} from "@react-spring/web";
import {useState} from "react";
import {Link} from "react-router-dom";

const AnimatedLink = animatedWeb(Link);

const AnimatedText = animated(Text);
const SaturnPageLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    const saturnAnimation = useSpring({
        from: {position: [0, 0, 0]},
        to: {position: isLoading ? [0, 0, 0] : [-3, 0, 0]},
        config: {
            mass: 5,
            tension: 250,
            friction: 30,
            precision: 0.0001,
        },
    });

    const btnAnimation = useSpringWeb({
        to: {
            opacity: isLoading ? 0 : 1,
            transform: isLoading ? 'translateY(10px)' : 'translateY(0)'
        },
    });

    const text = ['Saturn', 'Space', 'Star'];

    const trail = useTrail(text.length, {
        config: {

            mass: 5,
            tension: 250,
            friction: 30,
            precision: 0.0001,
        },
        from: {opacity: 0, position: [0, 0, 0], height: 0},
        to: {
            position: isLoading ? [0, 0, 0] : [2, 0, 0], // Изменение по индексу
            opacity: isLoading ? 0 : 1,
            height: 110,
        },
    });


    return (
        <>
            <Canvas
                camera={{position: [0, 0, 10], fov: 60}}
                style={{

                    width: '100%',
                    height: '100%',
                    position: 'absolute',

                }}
            >

                <Stars/>

                <ambientLight intensity={0.1}/>

                <directionalLight
                    position={[4, 0, 6]}
                    intensity={2}
                />
                <pointLight position={[-10, -10, -10]}/>

                <animated.group
                    position={
                        saturnAnimation.position.to((x, y, z) => [x, y, z])}
                >

                    <Saturn setIsLoading={setIsLoading}/>

                </animated.group>

                {trail.map((props, index) => (

                    <group position={[0, index - 1, 0]}
                           key={index}>

                        <AnimatedText
                            position={props.position.to((x, y, z) => [x, y + index * 0.2, z])}
                            fontSize={1}
                            fillOpacity={props.opacity}
                            color="white"
                            textAlign={"left"}
                            anchorX={"left"}
                        >

                            {text[index]}

                        </AnimatedText>

                    </group>

                ))}

            </Canvas>

            {!isLoading && <div style={{

                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',


            }}>

                <AnimatedLink to={'/market'} style={{
                    ...btnAnimation,
                    background: 'linear-gradient(90deg, #00c6fb, #005bea)',
                    padding: "10px 30px",
                    display: 'block',
                    borderRadius: '10px',
                    width: 'fit-content',
                    margin: '650px auto 0'
                }}>

                    Market

                </AnimatedLink>

            </div>}
        </>
    );
};

export default SaturnPageLayout;