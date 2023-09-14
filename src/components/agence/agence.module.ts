import { Module } from '@nestjs/common';
import { AgenceController } from './agence.controller';
import { AgenceService } from './agence.service';
@Module({
  imports: [],
  controllers: [AgenceController],
  providers: [AgenceService],
})
export class AgenceModule {}
