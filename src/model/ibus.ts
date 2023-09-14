/* eslint-disable prettier/prettier */
import { Bus } from "@prisma/client";

export class IBus implements Bus {
    id: number;
    numero: number;
    modele: string;
    capacite: number;
    agence_id: number;
    heure_depart: Date;
    heure_arrivee: Date;
}