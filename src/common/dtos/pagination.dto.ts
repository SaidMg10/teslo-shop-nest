import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiPropertyOptional({ default: 10, description: 'Limit of items per page' })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number;
  @ApiPropertyOptional({ default: 0, description: 'Offset of items' })
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  offset?: number;
}
