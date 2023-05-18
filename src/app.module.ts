import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlayersController } from './players/players.controller';
import { PlayersModule } from './players/players.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule, PlayersModule],
})
export class AppModule {}
