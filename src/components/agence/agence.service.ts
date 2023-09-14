/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/
// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';
import { IAgence } from 'src/model/iagence';
import { PrismaService } from 'src/components/prisma/prisma.service';

@Injectable()
export class AgenceService {
    constructor(private readonly prisma: PrismaService) {}
    
    async findAll() {
        return this.prisma.agence.findMany();
      }
    
      async findById(id: number) {
        return this.prisma.agence.findUnique({
          where: { id },
        });
      }
    
      async create(data:IAgence) {
        return this.prisma.agence.create({
          data,
        });
      }
    
      async update(id: number, data: IAgence) {
        return this.prisma.agence.update({
          where: { id },
          data,
        });
      }
    
      async delete(id: number) {
        return this.prisma.agence.delete({
          where: { id },
        });
      }
    }
    