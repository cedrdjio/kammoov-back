// historique-ticket.service.ts
import { Injectable } from '@nestjs/common';
import { IHistoriqueTicket } from 'src/model/ihistoriqueTicket';
import { PrismaService } from 'src/components/prisma/prisma.service';

@Injectable()
export class HistoriqueTicketService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllHistoriqueTickets() {
    return this.prismaService.historiqueTicket.findMany();
  }

  async getHistoriqueTicketById(id: number) {
    return this.prismaService.historiqueTicket.findUnique({
      where: { id },
    });
  }

  async createHistoriqueTicket(data: IHistoriqueTicket) {
    return this.prismaService.historiqueTicket.create({
      data,
    });
  }

  async updateHistoriqueTicket(id: number, data: IHistoriqueTicket) {
    return this.prismaService.historiqueTicket.update({
      where: { id },
      data,
    });
  }

  async deleteHistoriqueTicket(id: number) {
    return this.prismaService.historiqueTicket.delete({
      where: { id },
    });
  }
}
