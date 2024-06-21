"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const SHA256 = (message) => crypto.createHash('sha256').update(message).digest('hex');
class Block {
    constructor(timestamp = '', data = []) {
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = '';
        this.hash = this.getHash();
    }
    getHash() {
        return SHA256(this.prevHash + this.timestamp + JSON.stringify(this.data));
    }
}
let BlockchainService = class BlockchainService {
    constructor() {
        this.chain = [new Block(Date.now().toString())];
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(data) {
        const newBlock = new Block(Date.now().toString(), data);
        newBlock.prevHash = this.getLastBlock().hash;
        newBlock.hash = newBlock.getHash();
        this.chain.push(Object.freeze(newBlock));
    }
    isValidBlock(blockchain = this.chain) {
        for (let i = 1; i < blockchain.length; i++) {
            const currentBlock = blockchain[i];
            const prevBlock = blockchain[i - 1];
            if (currentBlock.hash !== currentBlock.getHash() || prevBlock.hash !== currentBlock.prevHash) {
                return false;
            }
        }
        return true;
    }
    getChain() {
        console.log(this.chain);
        return this.chain;
    }
};
exports.BlockchainService = BlockchainService;
exports.BlockchainService = BlockchainService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], BlockchainService);
//# sourceMappingURL=blockchain.service.js.map