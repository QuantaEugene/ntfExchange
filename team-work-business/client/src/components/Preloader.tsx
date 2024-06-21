import {useSpring, animated} from "@react-spring/web";

const Preloader = () => {

    const preloaderAnimation = useSpring({

        from: {transform: 'translateY(-3vh)'},
        to: async (next) => {
            await next({transform: 'translateY(3vh)'});
            await next({transform: 'translateY(-3vh)'})
        },
        config: {duration: 1000},
        loop: true,

    });

    return (

        <div style={{

            position: "absolute",
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        }}>

            <animated.img
                style={{
                    ...preloaderAnimation,
                    width: '180px',
                }}
                src={"/Снимок экрана 2024-06-10 001620.png"}/>

        </div>
    );
};

export default Preloader;
