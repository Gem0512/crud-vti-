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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
const cloudinary_config_1 = require("../cloudinary.config");
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(name, description, price, image) {
        const uploadResult = await cloudinary_config_1.default.uploader.upload(image.path);
        const newProduct = this.productRepository.create({
            name,
            description,
            price,
            imageUrl: uploadResult.secure_url,
        });
        return this.productRepository.save(newProduct);
    }
    async getAllProducts() {
        return this.productRepository.find();
    }
    async getProductById(productId) {
        const id = parseInt(productId, 10);
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${productId} not found`);
        }
        return product;
    }
    async updateProduct(productId, name, description, price, image) {
        const product = await this.getProductById(productId);
        if (image) {
            const uploadResult = await cloudinary_config_1.default.uploader.upload(image.path);
            product.imageUrl = uploadResult.secure_url;
        }
        product.name = name;
        product.description = description;
        product.price = price;
        return this.productRepository.save(product);
    }
    async deleteProduct(productId) {
        const result = await this.productRepository.delete(productId);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Product with ID ${productId} not found`);
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map