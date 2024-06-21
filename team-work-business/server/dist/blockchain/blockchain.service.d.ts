declare class Block {
    timestamp: string;
    data: any[];
    hash: string;
    prevHash: string;
    constructor(timestamp?: string, data?: any[]);
    getHash(): string;
}
export declare class BlockchainService {
    private chain;
    constructor();
    getLastBlock(): Block;
    addBlock(data: void[]): void;
    isValidBlock(blockchain?: Block[]): boolean;
    getChain(): Block[];
}
export {};
