import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':id')
  async getDetailBooks(@Param('id') id: string) {
    return this.bookService.getDetailBooks(Number(id));
  }

  @Post()
  async addNewBook(@Body() body: any) {
    return this.bookService.createBook(body);
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() body: any) {
    return this.bookService.updateBook(Number(id), body);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(Number(id));
  }
}
