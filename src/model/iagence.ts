/* eslint-disable prettier/prettier */
import { Agence } from "@prisma/client";

export class IAgence implements Agence {
    id: number;
    nom: string;
    ville: string;
    pays: string;

}