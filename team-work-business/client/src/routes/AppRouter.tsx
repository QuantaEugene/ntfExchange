import {BrowserRouter, Route, Routes} from "react-router-dom";
import NFTMarketPage from "../pages/NFTMarketPage";
import SaturnPage from "../pages/SaturnPage";

const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path={'/'} element={<SaturnPage/>}/>

                <Route path={'/market'} element={<NFTMarketPage/>}/>

            </Routes>

        </BrowserRouter>
    );
};

export default AppRouter;
