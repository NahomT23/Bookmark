import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorater';

import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
    // user/me
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(
        @GetUser() user: User,){
        return user;
    }

    @Patch()
    editUser(){

    }
}
