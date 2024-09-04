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

    async create(createRacunDto: any): Promise<Racun> {
        // Create a new Racun instance
        const racun = this.racunRepository.create(createRacunDto);
        // Save to the database and return the saved Racun
        return this.racunRepository.save(racun);
    }
}
