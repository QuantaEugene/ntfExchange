import {
    useWeb3Modal
} from "@web3modal/wagmi/react";
import {
    LinksBlock,
    NetworkBtn
} from "../assets/style/cardNFT.style";
import {Sumsub} from "../components/SumSub";
import {LuNetwork} from "react-icons/lu";
import {NFT} from "../components/NFT";
import {Toaster} from "react-hot-toast";

const NFTMarketPage = () => {
    const { open } = useWeb3Modal();

    return (

        <>

            <LinksBlock>

                <Sumsub />

                <w3m-button />

                <NetworkBtn onClick={() => open({ view: "Networks" })}>

                    <LuNetwork color="white" size={30} />

                </ NetworkBtn>

            </LinksBlock>

            <NFT />
            <Toaster />

        </>

    );
};

export default NFTMarketPage;
