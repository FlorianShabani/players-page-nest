import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthDto } from './dto/authDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body() dto: AuthDto) {
        return this.authService.signup(dto)
    }


    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        console.log('signin');
        return this.authService.signin(dto)
    }
}
