import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { ConfigModule } from '@nestjs/config';
import { SubModule } from './sub/sub.module';
import { AuthModule } from './auth/auth.module';
import { RacunModule } from './racun/racun.module';  // Dodajte to vrstico

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_URL || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'projektna',
      entities: [],  // 'autoLoadEntities: true' bo naložilo vse entitete, ki so vključene
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    ArticleModule,
    SubModule,
    AuthModule,
    RacunModule,  // Dodajte to vrstico
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
