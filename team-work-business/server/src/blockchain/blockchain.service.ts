import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

const SHA256 = (message: string) => crypto.createHash('sha256').update(message).digest('hex');

class Block {
  timestamp: string;
  data: any[];
  hash: string;
  prevHash: string;

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

@Injectable()
export class BlockchainService {
  private chain: Block[];

  constructor() {
    this.chain = [new Block(Date.now().toString())];
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data: void[]) {
    const newBlock = new Block(Date.now().toString(), data);
    newBlock.prevHash = this.getLastBlock().hash;
    newBlock.hash = newBlock.getHash();
    this.chain.push(Object.freeze(newBlock));
  }

  isValidBlock(blockchain = this.chain): boolean {
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

}
