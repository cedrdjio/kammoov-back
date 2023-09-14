/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/src/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
      await this.$connect();
    }
  }