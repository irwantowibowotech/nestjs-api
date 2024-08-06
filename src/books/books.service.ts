import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prismaService: PrismaService) {}

  async getAllBooks() {
    return this.prismaService.books.findMany();
  }

  async getDetailBooks(id: number) {
    return `Book with ID ${id}`;
  }

  async createBook(body: any) {
    return 'Created';
  }

  async updateBook(id: number, body: any) {
    return 'Update data';
  }

  async deleteBook(id: number) {
    return `Delete book with ID ${id}`;
  }
}
