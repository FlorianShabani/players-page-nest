import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './guard/jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports : [JwtModule.register({})],
    providers: [JwtStrategy, AuthService],
    controllers: [AuthController]
})


export class AuthModule {}
