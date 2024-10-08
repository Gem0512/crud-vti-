export declare class User {
    id: number;
    name: string;
    password: string;
    role: string;
    comparePassword(enteredPassword: string): Promise<boolean>;
    hashPassword(): Promise<void>;
}
