import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query, UseGuards,
} from '@nestjs/common';
import { ServiceTreeService } from './service-tree.service';
import { CreateServiceTreeDto } from './dto/create-service-tree.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('service-tree')
export class ServiceTreeController {
  constructor(private serviceTreeService: ServiceTreeService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getTree() {
    try {
      return await this.serviceTreeService.getTree();
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async add(@Body() body: CreateServiceTreeDto) {
    try {
      return await this.serviceTreeService.add(body);
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/')
  async deletePath(@Query() query) {
    try {
      return await this.serviceTreeService.deletePath(query.path);
    } catch (error) {
      throw error;
    }
  }
}
