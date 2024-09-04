import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Racun } from './racunEntity';

@Injectable()
export class RacunService {
    constructor(
        @InjectRepository(Racun)
        private readonly racunRepository: Repository<Racun>,
    ) {}

    async create(createRacunDto: Racun): Promise<Racun> {
        const racun = this.racunRepository.create(createRacunDto);
        console.log('test');
        return this.racunRepository.save(racun);
    }

}
