// src/auth/dto/register.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class RegisterDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    role?: string; // Privzeto 'user', če ni določen
}
