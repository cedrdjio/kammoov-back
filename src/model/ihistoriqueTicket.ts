/* eslint-disable prettier/prettier */
import { HistoriqueTicket } from "@prisma/client";


export class IHistoriqueTicket implements HistoriqueTicket {
    id: number;
    utilisateur_id: number;
    ticket_id: number;
    date_achat: Date;
    
}