import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    createProduct(name: string, description: string, price: number, image: Express.Multer.File): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    getProductById(productId: string): Promise<Product>;
    updateProduct(productId: string, name: string, description: string, price: number, image?: Express.Multer.File): Promise<Product>;
    deleteProduct(productId: string): Promise<void>;
}
