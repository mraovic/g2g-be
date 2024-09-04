import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Racun } from './racunEntity';
import { RacunService } from './racun.service';
import { RacunController } from './racun.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Racun])],
    providers: [RacunService],
    controllers: [RacunController],
})
export class RacunModule {}
