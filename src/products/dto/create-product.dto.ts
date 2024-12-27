import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'The title of the product',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiPropertyOptional({ description: 'The price of the product' })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({ description: 'The description of the product' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ description: 'The slug of the product' })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiPropertyOptional({ description: 'The stock of the product' })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({ description: 'The sizes of the product' })
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({ description: 'The category of the product' })
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;

  @ApiProperty({ description: 'The tags of the product' })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @ApiPropertyOptional({ description: 'The images of the product' })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
