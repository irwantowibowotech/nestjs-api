import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  async getAllBooks() {
    return 'Get all books';
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
