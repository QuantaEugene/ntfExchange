import {
    lazy, Suspense,
} from 'react';
import Preloader from "../components/Preloader";

const SaturnPageLayout = lazy(() => import("../components/SaturnPageLayout"));

const SaturnPage = () => {


    return (

        <div style={{
            backgroundColor: '#000000',
            height: '100vh',
            width: '100%',
            position: 'relative',

        }}>

            <Suspense fallback={<Preloader/>}>

                <SaturnPageLayout/>

            </Suspense>


        </div>
    );
};

export default SaturnPage;
