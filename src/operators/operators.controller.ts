import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post, UseGuards,
} from '@nestjs/common';
import { OperatorsService } from './operators.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('operators')
export class OperatorsController {
  constructor(private operatorsService: OperatorsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getOperators() {
    try {
      return await this.operatorsService.getOperators();
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createOperator(@Body() operatorDto: Omit<CreateUserDto, 'role'>) {
    try {
      return await this.operatorsService.create(operatorDto);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
