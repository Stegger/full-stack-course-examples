import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  CacheInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from '../domain/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../core/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import * as Console from 'console';

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class UsersController {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(
      createUserDto.name,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Post('/login')
  login(@Body() loginUser: LoginUserDto): Promise<User> {
    return this.usersService.login(loginUser.email, loginUser.password);
  }

  @Get()
  allUser(): Promise<User[]> {
    Console.log('Get all users');
    return this.usersService.getAll();
  }
}
