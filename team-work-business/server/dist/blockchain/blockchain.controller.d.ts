import { BlockchainService } from './blockchain.service';
export declare class BlockchainController {
    private readonly blockchainService;
    constructor(blockchainService: BlockchainService);
    getChain(): {
        timestamp: string;
        data: any[];
        hash: string;
        prevHash: string;
        getHash(): string;
    }[];
    addBlock(data: any[]): {
        message: string;
    };
    validateChain(): {
        isValid: boolean;
    };
}
