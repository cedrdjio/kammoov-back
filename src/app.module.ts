import { AgenceController } from './controllers/agence.controller';
import { PrismaService } from './services/prisma.service';
import { AgenceService } from './services/agence.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AgenceController, AppController],
  providers: [PrismaService, AgenceService, AppService],
})
export class AppModule {}
