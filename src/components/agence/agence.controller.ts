/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgenceService } from './agence.service';
import { IAgence } from 'src/model/iagence';

@Controller('agence')
export class AgenceController {
    constructor(private readonly agencesService: AgenceService) {}
    @Get()
    findAll() {
      return this.agencesService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id: string) {
      return this.agencesService.findById(+id);
    }
  
    @Post()
    create(@Body() data:IAgence) {
      return this.agencesService.create(data);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() data: IAgence) {
      return this.agencesService.update(+id, data);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.agencesService.delete(+id);
    }
}
