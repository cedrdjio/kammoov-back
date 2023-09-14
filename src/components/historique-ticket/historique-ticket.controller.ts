/* eslint-disable prettier/prettier */
// historique-ticket.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { HistoriqueTicketService } from './historique-ticket.service';
import { IHistoriqueTicket } from 'src/model/ihistoriqueTicket';

@Controller('historique-ticket')
export class HistoriqueTicketController {
  constructor(private readonly historiqueTicketService: HistoriqueTicketService) {}

  @Get()
  async getAllHistoriqueTickets(): Promise<IHistoriqueTicket[]> {
    try {
      const result = await this.historiqueTicketService.getAllHistoriqueTickets();
      if (result.length === 0) {
        throw new NotFoundException(`Historique de ticket introuvable.`);
      }
      return result;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get(':id')
  async getHistoriqueTicketById(@Param('id') id: number): Promise<IHistoriqueTicket> {
    try {
      const historiqueTicket = await this.historiqueTicketService.getHistoriqueTicketById(id);
      if (!historiqueTicket) {
        throw new NotFoundException(`Historique de ticket avec l'ID ${id} introuvable.`);
      }
      return historiqueTicket;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post()
  async createHistoriqueTicket(@Body() data: IHistoriqueTicket): Promise<IHistoriqueTicket> {
    try {
      return await this.historiqueTicketService.createHistoriqueTicket(data);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Put(':id')
  async updateHistoriqueTicket(@Param('id') id: number, @Body() data: IHistoriqueTicket): Promise<IHistoriqueTicket> {
    try {
      const updatedHistoriqueTicket = await this.historiqueTicketService.updateHistoriqueTicket(id, data);
      if (!updatedHistoriqueTicket) {
        throw new NotFoundException(`Historique de ticket avec l'ID ${id} introuvable.`);
      }
      return updatedHistoriqueTicket;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Delete(':id')
  async deleteHistoriqueTicket(@Param('id') id: number): Promise<{ message: string }> {
    try {
      const deleteResult = await this.historiqueTicketService.deleteHistoriqueTicket(id);
      if (!deleteResult) {
        throw new NotFoundException(`Historique de ticket avec l'ID ${id} introuvable.`);
      }
      return { message: 'Historique de ticket supprimé avec succès' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
