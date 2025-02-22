import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "src/dto";


@Controller()
export class AuthController {
    constructor(private authService: AuthService){}

        @Post('signup')
        signup(@Body() dto: AuthDto){
            console.log({
                dto,
            });
            return this.authService.signup(dto)
        }

        @Post('signin')
        signin(@Body() dto: AuthDto){
            return this.authService.signin(dto)
        }
}