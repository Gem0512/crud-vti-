import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    createProduct(name: string, description: string, price: number, image: Express.Multer.File): Promise<import("./entities/product.entity").Product>;
    getAllProducts(): Promise<import("./entities/product.entity").Product[]>;
    getProductById(productId: string): Promise<import("./entities/product.entity").Product>;
    updateProduct(productId: string, name: string, description: string, price: number, image: Express.Multer.File): Promise<import("./entities/product.entity").Product>;
    deleteProduct(productId: string): Promise<void>;
}
