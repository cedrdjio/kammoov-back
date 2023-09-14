import { Module } from '@nestjs/common';
import { HistoriqueTicketService } from './historique-ticket.service';
import { HistoriqueTicketController } from './historique-ticket.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HistoriqueTicketController],
  providers: [HistoriqueTicketService],
})
export class HistoriqueTicketModule {}
