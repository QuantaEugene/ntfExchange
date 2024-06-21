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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockchainController = void 0;
const common_1 = require("@nestjs/common");
const blockchain_service_1 = require("./blockchain.service");
let BlockchainController = class BlockchainController {
    constructor(blockchainService) {
        this.blockchainService = blockchainService;
    }
    getChain() {
        return this.blockchainService.getChain();
    }
    addBlock(data) {
        this.blockchainService.addBlock(data);
        return { message: 'Block added successfully' };
    }
    validateChain() {
        const isValid = this.blockchainService.isValidBlock();
        return { isValid };
    }
};
exports.BlockchainController = BlockchainController;
__decorate([
    (0, common_1.Get)('chain'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlockchainController.prototype, "getChain", null);
__decorate([
    (0, common_1.Post)('add-block'),
    __param(0, (0, common_1.Body)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], BlockchainController.prototype, "addBlock", null);
__decorate([
    (0, common_1.Get)('validate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlockchainController.prototype, "validateChain", null);
exports.BlockchainController = BlockchainController = __decorate([
    (0, common_1.Controller)('blockchain'),
    __metadata("design:paramtypes", [blockchain_service_1.BlockchainService])
], BlockchainController);
//# sourceMappingURL=blockchain.controller.js.map