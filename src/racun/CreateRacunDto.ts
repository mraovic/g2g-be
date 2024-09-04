// src/racuni/create-racun.dto.ts
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateRacunDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsDate()
    purchaseDate: Date;
}
