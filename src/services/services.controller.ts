import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import CreateServiceDto from './dto/create-service.dto';
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteServices(@Param() params) {
    return await this.servicesService.deleteService(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getServices(@Query('isGroup') isGroup: boolean) {
    return await this.servicesService.getServices(isGroup);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  async createService(@Body() serviceDto: CreateServiceDto) {
    return await this.servicesService.createService(serviceDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  async editService(@Param() params, @Body() serviceDto: CreateServiceDto) {
    return await this.servicesService.editService(params.id, serviceDto);
  }
}
