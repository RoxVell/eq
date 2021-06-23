import { Module } from '@nestjs/common';
import { WindowsService } from './windows.service';
import { WindowsController } from './windows.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Window } from "./windows.model";
import { WindowType } from "./windows-types.model";
import { AuthModule } from "../auth/auth.module";

@Module({
  providers: [WindowsService],
  controllers: [WindowsController],
  imports: [SequelizeModule.forFeature([Window, WindowType]), AuthModule],
})
export class WindowsModule {}
