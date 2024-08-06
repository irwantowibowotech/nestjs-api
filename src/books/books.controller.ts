import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

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

  @UsePipes(ValidationPipe)
  @Post()
  async addNewBook(@Body() body: CreateBookDto) {
    return this.bookService.createBook(body);
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return this.bookService.updateBook(Number(id), body);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.bookService.deleteBook(Number(id));
  }
}
