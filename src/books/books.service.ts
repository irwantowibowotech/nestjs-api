import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}

  async getAllBooks() {
    return this.prismaService.books.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      }
    });
  }

  async getDetailBooks(id: number) {
    const book = await this.prismaService.books.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        createdAt: true,
      }
    });

    if (!book) throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return book;
  }

  async createBook(body: CreateBookDto) {
    return this.prismaService.books.create({
      data: body,
    });
  }

  async updateBook(id: number, body: UpdateBookDto) {
    const book = await this.prismaService.books.findUnique({
      where: {
        id: id,
      },
    });

    if (!book) throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return this.prismaService.books.update({
      data: body,
      where: {
        id: id,
      },
    });
  }

  async deleteBook(id: number) {
    const book = await this.prismaService.books.findUnique({
      where: {
        id: id,
      },
    });

    if (!book) throw new HttpException('Data not found', HttpStatus.NOT_FOUND);

    return this.prismaService.books.delete({
      where: {
        id: id,
      },
    });
  }
}
