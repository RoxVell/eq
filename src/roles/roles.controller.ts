import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
  UseGuards,
} from '@nestjs/common';
import CreateRoleDto from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post('/')
  async createRole(@Body() roleDto: CreateRoleDto) {
    try {
      return await this.rolesService.createRole(roleDto);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
