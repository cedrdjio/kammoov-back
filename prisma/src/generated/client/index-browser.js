
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.0
 * Query Engine version: e90b936d84779543cbe0e494bc8b9d7337fad8e4
 */
Prisma.prismaVersion = {
  client: "5.3.0",
  engine: "e90b936d84779543cbe0e494bc8b9d7337fad8e4"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AgenceScalarFieldEnum = {
  id: 'id',
  nom: 'nom',
  ville: 'ville',
  pays: 'pays'
};

exports.Prisma.BusScalarFieldEnum = {
  id: 'id',
  numero: 'numero',
  modele: 'modele',
  capacite: 'capacite',
  agence_id: 'agence_id',
  heure_depart: 'heure_depart',
  heure_arrivee: 'heure_arrivee'
};

exports.Prisma.TicketScalarFieldEnum = {
  id: 'id',
  matricule: 'matricule',
  prix: 'prix',
  agence_id: 'agence_id',
  bus_id: 'bus_id',
  place_disponible: 'place_disponible'
};

exports.Prisma.UtilisateurScalarFieldEnum = {
  id: 'id',
  prenom: 'prenom',
  nom: 'nom',
  email: 'email',
  mot_de_passe: 'mot_de_passe'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  nom_fichier: 'nom_fichier',
  chemin: 'chemin',
  type: 'type',
  taille: 'taille',
  description: 'description'
};

exports.Prisma.ReservationScalarFieldEnum = {
  id: 'id',
  ticket_id: 'ticket_id',
  utilisateur_id: 'utilisateur_id'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  montant: 'montant',
  utilisateur_id: 'utilisateur_id',
  ticket_id: 'ticket_id'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  utilisateur_id: 'utilisateur_id',
  message: 'message',
  date_envoi: 'date_envoi'
};

exports.Prisma.HistoriqueTicketScalarFieldEnum = {
  id: 'id',
  utilisateur_id: 'utilisateur_id',
  ticket_id: 'ticket_id',
  date_achat: 'date_achat'
};

exports.Prisma.PaiementScalarFieldEnum = {
  id: 'id',
  montant: 'montant',
  type_paiement: 'type_paiement',
  utilisateur_id: 'utilisateur_id',
  ticket_id: 'ticket_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Agence: 'Agence',
  Bus: 'Bus',
  Ticket: 'Ticket',
  Utilisateur: 'Utilisateur',
  Image: 'Image',
  Reservation: 'Reservation',
  Transaction: 'Transaction',
  Notification: 'Notification',
  HistoriqueTicket: 'HistoriqueTicket',
  Paiement: 'Paiement'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
