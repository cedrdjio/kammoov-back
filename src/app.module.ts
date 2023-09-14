import { PrismaModule } from './components/prisma/prisma.module';
import { BusModule } from './components/bus/bus.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgenceModule } from './components/agence/agence.module';
import { HistoriqueTicketModule } from './components/historique-ticket/historique-ticket.module';

@Module({
  imports: [PrismaModule, BusModule, AgenceModule, HistoriqueTicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
