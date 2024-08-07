import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Register new user
   * @param data
   * @returns
   */
  async register(data: RegisterDto) {
    const checkUserExists = await this.prismaService.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (checkUserExists) {
      throw new HttpException('User already registered', HttpStatus.FOUND);
    }

    data.password = await hash(data.password, 12);
    const createUser = await this.prismaService.users.create({
      data: data,
    });

    if (createUser) {
      return {
        statusCode: 201,
        message: 'Register successfull',
      };
    }
  }

  /**
   * Login user
   * @param data
   */
  async login(data: LoginDto) {
    const checkUserExists = await this.prismaService.users.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!checkUserExists) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(
      data.password,
      checkUserExists.password,
    );

    if (checkPassword) {
      return {
        statusCode: 200,
        message: 'Login successfull',
      };
    } else {
      throw new HttpException(
        'User or password not match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
