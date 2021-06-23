import { Module } from '@nestjs/common';
import { OperatorsController } from './operators.controller';
import { OperatorsService } from './operators.service';
import { UsersModule } from '../users/users.module';
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [OperatorsController],
  providers: [OperatorsService],
})
export class OperatorsModule {}
