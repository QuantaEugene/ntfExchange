import {
    SumsubImg,
    SumsubLink
} from "../assets/style/cardNFT.style";


export const Sumsub: React.FC = () => {

    return (
        <>

            <SumsubLink
                href="https://in.sumsub.com/websdk/p/sbx_a3SGcr92L7J3aVOW"
            >
                
                <SumsubImg
                    src={require("../assets/img/sumsub.png")}
                    alt="sumsub"
                />

            </SumsubLink>

        </>
    );
}
