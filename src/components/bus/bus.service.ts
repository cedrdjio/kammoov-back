/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { IBus } from 'src/model/ibus';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BusService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllBuses(): Promise<IBus[]> {
      return this.prisma.bus.findMany();
    }
  
    async getBusById(id: number): Promise<IBus | null> {
      return this.prisma.bus.findUnique({ where: { id } });
    }
  
    async createBus(data: IBus): Promise<IBus> {
      return this.prisma.bus.create({ data });
    }
  
    async updateBus(id: number, data: IBus): Promise<IBus> {
      return this.prisma.bus.update({ where: { id }, data });
    }
  
    async deleteBus(id: number): Promise<IBus> {
      return this.prisma.bus.delete({ where: { id } });
    }
}
