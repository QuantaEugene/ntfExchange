import styled from "styled-components";

export const ModalContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 100px;
    

`;

export const ModalBlock = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const ModalCard = styled.div`

    background-color: transparent;
    border-radius: 8px;
    padding: 20px;

`;

export const ModalImage = styled.div`

    display: flex;
    justify-content: center;
    margin-bottom: 20px;

`;

export const ModalName = styled.div`

    text-align: center;
    font-size: 32px;
    color: white;
    font-weight: bold;
    margin-bottom: 10px;

`;

export const ModalOwner = styled.div`

    margin-bottom: 10px;
    color: #319ce3;
    cursor: pointer;
   
`;

export const ModalCollection = styled.div`margin-bottom: 10px;`;

export const ModalCollectionAddress = styled.div`

    margin-bottom: 10px;
    cursor: pointer;
   
`;

export const ModalDescription = styled.div`margin-bottom: 10px;`;

export const ModalMarketplace = styled.div`margin-bottom: 10px;`;

export const ModalTotalCopies = styled.div`margin-bottom: 10px;`;

export const ModalPrice = styled.div`

    display: inline-block;
    margin-bottom: 10px;

`;

export const ModalAddressContainer = styled.span`position: relative;`;

export const NameOwner = styled.span`color: #319ce3;`;

export const NameAddress = styled.span`color: #319ce3;`;

export const ModalTextName = styled.p`

  color: white;
  font-size: 32px;

`;

export const ModalText = styled.p`

  color: white;
  font-size: 24px;

`;

export const ModalLink = styled.a`

  text-decoration: none;
  color: #319ce3;

`;

export const ChartNFT = styled.canvas`

  width: 1000px;
  height: 600px;

`;
