import { Body, Controller, Post } from '@nestjs/common';
import { RacunService } from './racun.service';

@Controller('racuni')
export class RacunController {
    constructor(private readonly racunService: RacunService) {}

    @Post()
    async create(@Body() createRacunDto: any) {
        return this.racunService.create(createRacunDto);
    }
}
