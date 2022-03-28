import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatsModule } from './chats/chats.module';
import { MongodbModule } from './infrastructure/mongo/mongodb.module';
import { ProfilesModule } from './profiles/profiles.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/giga.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MongodbModule,
    UsersModule,
    ChatsModule,
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
