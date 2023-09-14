import { Module } from '@nestjs/common';
import { AgenceController } from './agence.controller';
import { AgenceService } from './agence.service';
import { PrismaModule } from '../prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [AgenceController],
  providers: [AgenceService],
})
export class AgenceModule {}
