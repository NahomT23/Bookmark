import { ForbiddenException, Injectable } from "@nestjs/common";
import { AuthDto } from "src/dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon2 from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService {
constructor(private prisma: PrismaService) {}

   async signup(dto: AuthDto){

    const hash = await argon2.hash(dto.password)

    try{
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash,
            },
        })
    
        delete user.hash
    
        return user
    }catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code === 'P2002'){
                throw new ForbiddenException('Credentials Taken')
            } 
        }
        throw error
    }}

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
        where:{
            email: dto.email,
        }
    })

    
    if(!user) throw new ForbiddenException('Credential Incorrect')

    const passwordMatch = await argon2.verify(user.hash, dto.password)


    if(!passwordMatch) throw new ForbiddenException('Credential Incorrect')
    
    delete user.hash
    return user
    }



}