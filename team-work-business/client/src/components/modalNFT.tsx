import React, {
    useState,
    useEffect,
    useRef
} from 'react';

import {
    Chart,
    registerables
} from 'chart.js';

import {
    ModalBlock,
    ModalCard,
    ModalImage,
    ModalName,
    ModalOwner,
    ModalText,
    ModalAddressContainer,
    NameOwner,
    ModalCollectionAddress,
    NameAddress,
    ModalCollection,
    ModalDescription,
    ModalMarketplace,
    ModalTotalCopies,
    ModalPrice,
    ChartNFT,
    ModalLink
} from '../assets/style/modalNFT.style';

import { CardType } from '../types/CardTypes';

Chart.register(...registerables);

export const ModalNft: React.FC<CardType> = ({
    image,
    name,
    owner,
    collection,
    collectionAddress,
    description,
    marketplace,
    totalCopies,
    initialPrice
}) => {

    const [price, setPrice] = useState(initialPrice);
    const [priceHistory, setPriceHistory] = useState([{ price: initialPrice, time: new Date() }]);

    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const interval = setInterval(() => {

            const newPrice = (parseFloat(priceHistory[priceHistory.length - 1].price) + 0.01).toFixed(2);
            const newPriceHistory = [...priceHistory, { price: newPrice, time: new Date() }];

            setPrice(newPrice);
            setPriceHistory(newPriceHistory);

        }, 3000);

        return () => clearInterval(interval);

    }, [priceHistory]);

    useEffect(() => {

        if (chartRef.current) {

            const ctx = chartRef.current.getContext('2d');

            if (ctx) {

                const existingChart = Chart.getChart(chartRef.current);

                if (existingChart) {
                    existingChart.destroy();
                }

                new Chart(ctx, {

                    type: 'line',
                    data: {
                        labels: priceHistory.map((_, index) => index + 1),
                        datasets: [
                            {
                                label: 'Price',
                                data: priceHistory.map(data => data.price),
                                fill: false,
                            }
                        ]
                    },

                    options: {
                        scales: {
                            x: {
                                type: 'linear',
                                ticks: {
                                    color: 'white'
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.2)'
                                }
                            },

                            y: {
                                ticks: {
                                    color: 'white'
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.2)'
                                }
                            }
                        }
                    }

                });
            }
        }

    }, [priceHistory]);

    return (

        <ModalBlock>

            <ModalCard>

                <ModalImage>

                    <img
                        src={image}
                        alt='/'
                        height={640}
                        width={600}
                    />

                </ModalImage>

                <ModalName>

                    {name}

                </ModalName>

                <ModalOwner>

                    <ModalText>

                        Owner: {' '}

                        <ModalAddressContainer>

                            <NameOwner>

                                <ModalLink
                                    href={`https://tonviewer.com/${owner}`}
                                >

                                    {owner}

                                </ModalLink>

                            </NameOwner>

                        </ModalAddressContainer>

                    </ModalText>

                </ModalOwner>

                <ModalCollectionAddress>

                    <ModalText>

                        Collection Address: {' '}

                        <ModalAddressContainer>

                            <NameAddress>

                                <ModalLink
                                    href={`https://tonviewer.com/${collectionAddress}`}
                                >

                                    {collectionAddress}

                                </ModalLink>

                            </NameAddress>

                        </ModalAddressContainer>

                    </ModalText>

                </ModalCollectionAddress>

                <ModalCollection>

                    <ModalText>

                        Collection:{collection}

                    </ModalText>

                </ModalCollection>

                <ModalDescription>

                    <ModalText>

                        Description: {description}

                    </ModalText>

                </ModalDescription>

                <ModalMarketplace>

                    <ModalText>

                        Marketplace: {marketplace}

                    </ModalText>

                </ModalMarketplace>

                <ModalTotalCopies>

                    <ModalText>

                        Copies: {totalCopies}

                    </ModalText>

                </ModalTotalCopies>

                <ModalPrice>

                    <ModalText>

                        Price: {price}

                        <img
                            src={require('../assets/img/ton.png')}
                            alt='Toncoin'
                            height={25}
                            width={25}
                            style={{ verticalAlign: 'middle', marginLeft: '5px', marginBottom: '5px' }}
                        />

                    </ModalText>

                    <ChartNFT
                        ref={chartRef}
                        id='priceChart'
                    />

                </ModalPrice>

            </ModalCard>

        </ModalBlock>

    );

}