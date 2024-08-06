import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}

  async getAllBooks() {
    return this.prismaService.books.findMany();
  }

  async getDetailBooks(id: number) {
    return this.prismaService.books.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createBook(body: any) {
    return this.prismaService.books.create({
      data: body,
    });
  }

  async updateBook(id: number, body: any) {
    return this.prismaService.books.update({
      data: body,
      where: {
        id: id,
      },
    });
  }

  async deleteBook(id: number) {
    return this.prismaService.books.delete({
      where: {
        id: id,
      },
    });
  }
}
