import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorater';
import { CreateBookMarkDto, EditBookMarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) {}

    @Get()
    getBookmarks(@GetUser('id') userId: number){
        return this.bookmarkService.getBookmarks(
            userId,
        )
    }

    @Get(':id')
    getBookmarkById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkService.getBookmarkById(
            userId,
            bookmarkId,
        )
    }

    @Post()
    createBookMark(@GetUser('id') userId: number, @Body() dto: CreateBookMarkDto){
        return this.bookmarkService.createBookMark(
            userId,
            dto
        )
    }

    @Patch(":id")
    editBookMarkById(@GetUser('id') userId: number, @Body() dto: EditBookMarkDto, @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkService.editBookMarkById(
            userId,
            dto,
            bookmarkId
        )
    }

    @Delete(':id') // Corrected to include the :id parameter
  deleteBookMarkById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) bookmarkId: number,
  ) {
    return this.bookmarkService.deleteBookMarkById(userId, bookmarkId);
  }
}
