import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlayersController } from './players/players.controller';
import { PlayersModule } from './players/players.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule, PlayersModule, AuthModule, UserModule],
  controllers: [UserController],
})
export class AppModule {}
