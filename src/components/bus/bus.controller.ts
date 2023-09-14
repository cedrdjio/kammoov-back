/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/controllers#controllers
*/

// bus.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BusService } from './bus.service';
import { IBus } from 'src/model/ibus';

@Controller('bus')
export class BusController {
  constructor(private readonly busService: BusService) {}

  @Get()
  async getAllBuses(): Promise<IBus[]> {
    return this.busService.getAllBuses();
  }

  @Get(':id')
  async getBusById(@Param('id') id: number): Promise<IBus | null> {
    return this.busService.getBusById(id);
  }

  @Post()
  async createBus(@Body() data: IBus): Promise<IBus> {
    return this.busService.createBus(data);
  }

  @Put(':id')
  async updateBus(@Param('id') id: number, @Body() data: IBus): Promise<IBus> {
    return this.busService.updateBus(id, data);
  }

  @Delete(':id')
  async deleteBus(@Param('id') id: number): Promise<IBus> {
    return this.busService.deleteBus(id);
  }
}
