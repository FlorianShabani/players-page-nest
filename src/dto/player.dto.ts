import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PlayerDto {
    @IsString()
    @IsNotEmpty()
    name : string;

    @IsString()
    @IsNotEmpty()
    team : string;

    @IsNumber()
    age : number;
}