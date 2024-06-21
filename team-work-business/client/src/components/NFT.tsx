import React, {
    useEffect,
    useState
} from 'react';

import axios from 'axios';

import { CardNft } from './cardNFT';
import { ModalNft } from './modalNFT';

import {
    NftContainer,
    ModalOverlay,
    ModalContent,
    CloseButton,
    NftTitle,
    LoaderContainer,
    Loader,
    Img
} from '../assets/style/cardNFT.style';

import { MdOutlineCancel } from "react-icons/md";

import { CardType } from '../types/CardTypes';


export const NFT: React.FC = () => {

    const [nftData, setNftData] = useState<CardType[]>([]);
    const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {

        const getNft = async () => {

            try {
                const response = await axios.get('http://localhost:3001/data');
                const data = response.data;
                setNftData(data);

            }

            catch (e) { console.log(e); }
            finally { setTimeout(() => setLoading(false), 2000); }

        };

        getNft();

    }, []);

    const handleCardClick = (card: CardType) => {

        setSelectedCard(card);
        document.body.style.overflow = 'hidden';

    };

    const closeCard = () => {

        setSelectedCard(null);
        document.body.style.overflow = '';

    };

    return (

        <>

            {loading && (

                <LoaderContainer>

                    <Loader />

                </LoaderContainer>

            )}

            <NftTitle>

                <Img 
                    src={require('../assets/img/ton.png')}
                    alt='Toncoin'
                    height={25}
                    width={25}
                    style={{ verticalAlign: 'middle', marginRight: '5px', marginBottom: '5px' }}
                />

                NFT Cards

                <Img 
                    src={require('../assets/img/ton.png')}
                    alt='Toncoin'
                    height={25}
                    width={25}
                    style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '5px' }}
                />

            </NftTitle>

            <NftContainer>

                {nftData.length > 0 ? (

                    nftData.map((item, index) => (

                        <CardNft
                            key={index}
                            image={item.image}
                            name={item.name}
                            owner={item.owner}
                            collection={item.collection}
                            collectionAddress={item.collectionAddress}
                            description={item.description}
                            marketplace={item.marketplace}
                            totalCopies={item.totalCopies}
                            initialPrice={item.initialPrice}
                            handleImageClick={() => handleCardClick(item)}
                        />

                    ))

                ) : null}

                {selectedCard && (

                    <ModalOverlay onClick={closeCard}>

                        <ModalContent onClick={(e) => e.stopPropagation()}>

                            <CloseButton onClick={closeCard}>

                                <MdOutlineCancel size={50} />

                            </CloseButton>

                            <ModalNft
                                image={selectedCard.image}
                                name={selectedCard.name}
                                owner={selectedCard.owner}
                                collection={selectedCard.collection}
                                collectionAddress={selectedCard.collectionAddress}
                                description={selectedCard.description}
                                marketplace={selectedCard.marketplace}
                                totalCopies={selectedCard.totalCopies}
                                initialPrice={selectedCard.initialPrice}
                            />

                        </ModalContent>

                    </ModalOverlay>

                )}

            </NftContainer>

        </>

    );

};