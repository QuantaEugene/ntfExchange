
export interface CardType {

    image: string;
    name: string;
    owner: string;
    collection: string;
    collectionAddress: string;
    description: string;
    marketplace: string;
    totalCopies: string;
    initialPrice: string;
    handleImageClick?: () => void;

};
