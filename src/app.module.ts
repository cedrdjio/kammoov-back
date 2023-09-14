import { BusModule } from './components/bus/bus.module';
import { PrismaService } from './services/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgenceModule } from './components/agence/agence.module';
import { HistoriqueTicketModule } from './components/historique-ticket/historique-ticket.module';

@Module({
  imports: [BusModule, AgenceModule, HistoriqueTicketModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
