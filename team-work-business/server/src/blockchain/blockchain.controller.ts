import { Controller, Get, Post, Body } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}

  @Get('chain')
  getChain() {
    return this.blockchainService.getChain();
  }

  @Post('add-block')
  addBlock(@Body('data') data: any[]) {
    this.blockchainService.addBlock(data);
    return { message: 'Block added successfully' };
  }

  @Get('validate')
  validateChain() {
    const isValid = this.blockchainService.isValidBlock();
    return { isValid };
  }
}
