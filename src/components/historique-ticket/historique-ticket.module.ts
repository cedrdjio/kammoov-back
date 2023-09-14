import { Module } from '@nestjs/common';
import { HistoriqueTicketService } from './historique-ticket.service';
import { HistoriqueTicketController } from './historique-ticket.controller';

@Module({
  controllers: [HistoriqueTicketController],
  providers: [HistoriqueTicketService],
})
export class HistoriqueTicketModule {}
