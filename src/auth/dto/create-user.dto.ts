import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'lolo@gmail.com',
  })
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({ description: 'The password of the user', example: 'p4sSworD' })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;
  @ApiProperty({
    description: 'The full name of the user',
    example: 'Eduardo Garcia',
  })
  @IsString()
  @MinLength(1)
  fullName: string;
}
