import {IsNotEmpty} from "class-validator";

export class CreateArticleDto {
    @IsNotEmpty()
    content:string;

    @IsNotEmpty()
    sub_id:number;
}