import React, {
    useState,
    useEffect
} from 'react';

import {
    NftBlock,
    NftCard,
    NftImage,
    NftName,
    TextName,
    NftOwner,
    AddressContainer,
    Owner,
    Text,
    CopyButton,
    NftCollectionAddress,
    Address,
    NftCollection,
    NftDescription,
    NftMarketplace,
    NftTotalCopies,
    NftPrice,
    BuyBlock,
    CardBuyBtn,
    Img
} from '../assets/style/cardNFT.style';

import { IoCopyOutline } from "react-icons/io5";
import { CardType } from '../types/CardTypes';
import axios from 'axios';
import toast from 'react-hot-toast';
import { TransakConnect } from './Transak';
import { SendTransaction } from './SendTransaction';

export const CardNft: React.FC<CardType> = ({
    image,
    name,
    owner,
    collection,
    collectionAddress,
    description,
    marketplace,
    totalCopies,
    initialPrice,
    handleImageClick
}) => {

    const [price, setPrice] = useState(initialPrice);
    const [showSendTransaction, setShowSendTransaction] = useState(false);

    useEffect(() => {

        const interval = setInterval(() => setPrice(prevPrice => (parseFloat(prevPrice) + 0.01).toFixed(2)), 3000);

        return () => clearInterval(interval);

    }, []);

    const addBlock = async () => {

        try {

            const formData = { from: owner, to: 'EQAX0YZvXUc7iOYFollf24tzkcXiHzaMsWZq9IRVMPzOMOu8h', price };
            const response = await axios.post('http://localhost:3001/blockchain/add-block', { data: formData });

            console.log('Purchase recorded:', response.data);

            if (response) {

                toast.success('Success add block', {position: 'top-center',});

                setShowSendTransaction(true);

            }

        } catch (e) {

            toast.error('Error', {position: 'top-center',});
            console.log(e);

        }

    }

    const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

    const truncateAddress = (address: string) => {

        const start = address.slice(0, 6);
        const end = address.slice(-6);
        return `${start}...${end}`;
        
    }

    return (

        <NftBlock>

            <NftCard>

                <NftImage
                    onClick={handleImageClick}>

                    <Img
                        src={image}
                        alt={'/'}
                        height={340}
                        width={400}
                    />

                </NftImage>

                <NftName>

                    <TextName>

                        {name}

                    </TextName>

                </NftName>

                <NftOwner
                    onClick={() => copyToClipboard(owner)}>

                    <Text>

                        Owner: {' '}

                        <AddressContainer>

                            <Owner>

                                {truncateAddress(owner)}

                            </Owner>

                            <CopyButton>

                                <IoCopyOutline
                                    color='#8994a3'
                                />

                            </CopyButton>

                        </AddressContainer>

                    </Text>

                </NftOwner>

                <NftCollectionAddress
                    onClick={() => copyToClipboard(collectionAddress)}>

                    <Text>

                        Collection Address: {' '}

                        <AddressContainer>

                            <Address>

                                {truncateAddress(collectionAddress)}

                            </Address>

                            <CopyButton>

                                <IoCopyOutline
                                    color='#8994a3'
                                />

                            </CopyButton>

                        </AddressContainer>

                    </Text>

                </NftCollectionAddress>

                <NftCollection>

                    <Text>

                        Collection: {' '}
                        {collection}

                    </Text>

                </NftCollection>

                <NftDescription>

                    <Text>

                        Description: {' '}
                        {description}

                    </Text>

                </NftDescription>

                <NftMarketplace>

                    <Text>

                        Marketplace: {' '}
                        {marketplace}

                    </Text>

                </NftMarketplace>

                <NftTotalCopies>

                    <Text>

                        Copies: {' '}
                        {totalCopies}

                    </Text>

                </NftTotalCopies>

                <NftPrice>

                    <Text>

                        Price: {' '}
                        {price}

                        <Img
                            src={require('../assets/img/ton.png')}
                            alt='Toncoin'
                            height={25}
                            width={25}
                            style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '5px' }}
                        />

                    </Text>

                </NftPrice>

                <BuyBlock>

                    <CardBuyBtn onClick={addBlock}>

                        Buy

                    </CardBuyBtn>

                    <TransakConnect />

                    {showSendTransaction && <SendTransaction amount={price} />}

                </BuyBlock>

            </NftCard>

        </NftBlock>

    );
}
