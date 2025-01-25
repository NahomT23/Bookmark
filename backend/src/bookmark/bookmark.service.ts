import { ForbiddenException, Injectable } from '@nestjs/common';
import { GetUser } from 'src/auth/decorater';
import { CreateBookMarkDto, EditBookMarkDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookmarkService {
    constructor(private prisma: PrismaService){}

    getBookmarks(userId: number){
        return this.prisma.bookmark.findMany({
            where: {
                userId
            }
        })
    }
    
    getBookmarkById(userId: number, bookmarkId: number){
        return this.prisma.bookmark.findFirst({
            where: {
                id: bookmarkId,
                userId,    
            }
        })
    }
    
    async createBookMark(userId: number, dto: CreateBookMarkDto) {
        const bookmark = await this.prisma.bookmark.create({
            data: {
                title: dto.title,
                description: dto.description,
                link: dto.link,
                user: {
                    connect: { id: userId },
                },
            },
        });
    
        return bookmark;
    }
    
    
    async editBookMarkById(userId: number, dto: EditBookMarkDto, bookmarkId: number){
        const bookmark = await this.prisma.bookmark.findUnique({
            where: {
                id: bookmarkId
            }
        })
        if(!bookmark || bookmark.userId !== userId){
            throw new ForbiddenException('Access to resource denied')
        }

        return this.prisma.bookmark.update({
            where: {
                id: bookmarkId
            },
            data: {
                ...dto,
            }
        })
    }
    
    async deleteBookMarkById(userId: number, bookmarkId: number){
        const bookmark = await this.prisma.bookmark.findUnique({
            where: {
                id: bookmarkId
            }
        })
        if(!bookmark || bookmark.userId !== userId){
            throw new ForbiddenException('Access to resource denied')
        }
        await this.prisma.bookmark.delete({
            where: {
                id: bookmarkId
            }
        })
    }
}
