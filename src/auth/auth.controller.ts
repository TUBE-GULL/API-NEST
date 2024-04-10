import { HttpCode, Body, Controller, Param, Delete, Patch, Post, Get } from '@nestjs/common';
import { authDto } from './dto/autho.dto';

@Controller('auth')
export class AuthController {


    @Post('register')
    async register(@Body() dto: authDto) {

    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: authDto) {

    }
}
