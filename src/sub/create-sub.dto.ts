import {IsNotEmpty} from "class-validator";

export class CreateSubDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    description: string;
}