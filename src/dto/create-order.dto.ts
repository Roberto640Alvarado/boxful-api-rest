import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  ValidateNested,
} from 'class-validator';

class CreatePackageDto {
  @IsNotEmpty()
  @IsNumber()
  largo: number;

  @IsNotEmpty()
  @IsNumber()
  alto: number;

  @IsNotEmpty()
  @IsNumber()
  ancho: number;

  @IsNotEmpty()
  @IsNumber()
  peso: number;

  @IsNotEmpty()
  @IsString()
  contenido: string;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  pickupAddress: string;

  @IsOptional()
  @IsString()
  scheduledDate: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  recipientAddress: string;

  @IsNotEmpty()
  @IsString()
  department: string;

  @IsNotEmpty()
  @IsString()
  municipality: string;

  @IsOptional()
  @IsString()
  referencePoint: string;

  @IsOptional()
  @IsString()
  instructions: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePackageDto)
  packages: CreatePackageDto[];
}
