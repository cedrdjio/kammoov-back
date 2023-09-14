
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\ceric\\Documents\\PROJET CODE\\kammoov-back\\prisma\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../..",
  "clientVersion": "5.3.0",
  "engineVersion": "e90b936d84779543cbe0e494bc8b9d7337fad8e4",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "MYSQL_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKLy8gc2NoZW1hLnByaXNtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL3NyYy9nZW5lcmF0ZWQvY2xpZW50Igp9CgovLyBDb25maWd1cmF0aW9uIGRlIGxhIHNvdXJjZSBkZSBkb25uw6llcyBNeVNRTApkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJteXNxbCIKICB1cmwgICAgICA9IGVudigiTVlTUUxfVVJMIikgLy8gVXRpbGlzYXRpb24gZGUgTVlTUUxfVVJMIHBvdXIgbGEgY29ubmV4aW9uCn0KCm1vZGVsIEFnZW5jZSB7CiAgaWQgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub20gICBTdHJpbmcKICB2aWxsZSBTdHJpbmcKICBwYXlzICBTdHJpbmcKICBidXNzIEJ1c1tdCiAgdGlja2V0cyBUaWNrZXRbXSAgCn0KCi8vIETDqWZpbml0aW9uIGR1IG1vZMOobGUgQnVzCm1vZGVsIEJ1cyB7CiAgaWQgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbnVtZXJvICAgICAgIEludAogIG1vZGVsZSAgICAgICBTdHJpbmcKICBjYXBhY2l0ZSAgICAgSW50CiAgYWdlbmNlX2lkICAgIEludAogIGhldXJlX2RlcGFydCBEYXRlVGltZQogIGhldXJlX2Fycml2ZWUgRGF0ZVRpbWUKICB0aWNrZXRzIFRpY2tldFtdICAKICBhZ2VuY2UgICAgICAgQWdlbmNlICAgQHJlbGF0aW9uKGZpZWxkczogW2FnZW5jZV9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgp9CgovLyBEw6lmaW5pdGlvbiBkdSBtb2TDqGxlIFRpY2tldAptb2RlbCBUaWNrZXQgewogIGlkICAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1hdHJpY3VsZSAgICAgICBTdHJpbmcgICBAdW5pcXVlCiAgcHJpeCAgICAgICAgICAgIERlY2ltYWwKICBhZ2VuY2VfaWQgICAgICAgSW50CiAgYnVzX2lkICAgICAgICAgIEludAogIHBsYWNlX2Rpc3BvbmlibGUgSW50CiAgYWdlbmNlICAgICAgICAgIEFnZW5jZSAgIEByZWxhdGlvbihmaWVsZHM6IFthZ2VuY2VfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJ1cyAgICAgICAgICAgICBCdXMgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnVzX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICByZXNlcnZhdGlvbnMgICAgUmVzZXJ2YXRpb25bXQogIHRyYW5zYWN0aW9ucyAgICBUcmFuc2FjdGlvbltdCiAgaGlzdG9yaXF1ZVRpY2tldCBIaXN0b3JpcXVlVGlja2V0W10KICBwYWllbWVudCBQYWllbWVudFtdCn0KCi8vIETDqWZpbml0aW9uIGR1IG1vZMOobGUgVXRpbGlzYXRldXIKbW9kZWwgVXRpbGlzYXRldXIgewogIGlkICAgICAgICAgICBJbnQgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcHJlbm9tICAgICAgIFN0cmluZwogIG5vbSAgICAgICAgICBTdHJpbmcKICBlbWFpbCAgICAgICAgU3RyaW5nCiAgbW90X2RlX3Bhc3NlIFN0cmluZwogIHJlc2VydmF0aW9ucyBSZXNlcnZhdGlvbltdCiAgdHJhbnNhY3Rpb25zIFRyYW5zYWN0aW9uW10gCiAgbm90aWZpY2F0aW9uUyBOb3RpZmljYXRpb25bXSAKICBoaXN0b3JpcXVlVGlja2V0IEhpc3RvcmlxdWVUaWNrZXRbXQogIHBhaWVtZW50IFBhaWVtZW50W10KfQptb2RlbCBJbWFnZSB7CiAgaWQgICAgICAgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBub21fZmljaGllciAgU3RyaW5nCiAgY2hlbWluICAgICAgIFN0cmluZwogIHR5cGUgICAgICAgICBTdHJpbmcKICB0YWlsbGUgICAgICAgSW50CiAgZGVzY3JpcHRpb24gIFN0cmluZz8KfQoKLy8gRMOpZmluaXRpb24gZHUgbW9kw6hsZSBSZXNlcnZhdGlvbgptb2RlbCBSZXNlcnZhdGlvbiB7CiAgaWQgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRpY2tldF9pZCAgICAgICBJbnQKICB1dGlsaXNhdGV1cl9pZCAgSW50CiAgdGlja2V0ICAgICAgICAgIFRpY2tldCAgICBAcmVsYXRpb24oZmllbGRzOiBbdGlja2V0X2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICB1dGlsaXNhdGV1ciAgICAgVXRpbGlzYXRldXIgQHJlbGF0aW9uKGZpZWxkczogW3V0aWxpc2F0ZXVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKfQoKLy8gRMOpZmluaXRpb24gZHUgbW9kw6hsZSBUcmFuc2FjdGlvbgptb2RlbCBUcmFuc2FjdGlvbiB7CiAgaWQgICAgICAgICAgICAgIEludCAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1vbnRhbnQgICAgICAgICBEZWNpbWFsCiAgdXRpbGlzYXRldXJfaWQgIEludAogIHRpY2tldF9pZCAgICAgICBJbnQKICB1dGlsaXNhdGV1ciAgICAgVXRpbGlzYXRldXIgQHJlbGF0aW9uKGZpZWxkczogW3V0aWxpc2F0ZXVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICB0aWNrZXQgICAgICAgICAgVGlja2V0ICAgIEByZWxhdGlvbihmaWVsZHM6IFt0aWNrZXRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9CgovLyBEw6lmaW5pdGlvbiBkdSBtb2TDqGxlIE5vdGlmaWNhdGlvbgptb2RlbCBOb3RpZmljYXRpb24gewogIGlkICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1dGlsaXNhdGV1cl9pZCBJbnQKICBtZXNzYWdlICAgICAgIFN0cmluZwogIGRhdGVfZW52b2kgICAgRGF0ZVRpbWUKICB1dGlsaXNhdGV1ciAgIFV0aWxpc2F0ZXVyIEByZWxhdGlvbihmaWVsZHM6IFt1dGlsaXNhdGV1cl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCn0KCi8vIETDqWZpbml0aW9uIGR1IG1vZMOobGUgSGlzdG9yaXF1ZVRpY2tldAptb2RlbCBIaXN0b3JpcXVlVGlja2V0IHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHV0aWxpc2F0ZXVyX2lkIEludAogIHRpY2tldF9pZCAgICAgIEludAogIGRhdGVfYWNoYXQgICAgIERhdGVUaW1lCiAgdXRpbGlzYXRldXIgICAgVXRpbGlzYXRldXIgQHJlbGF0aW9uKGZpZWxkczogW3V0aWxpc2F0ZXVyX2lkXSwgcmVmZXJlbmNlczogW2lkXSkKICB0aWNrZXQgICAgICAgICBUaWNrZXQgIEByZWxhdGlvbihmaWVsZHM6IFt0aWNrZXRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9CgovLyBEw6lmaW5pdGlvbiBkdSBtb2TDqGxlIFBhaWVtZW50Cm1vZGVsIFBhaWVtZW50IHsKICBpZCAgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbW9udGFudCAgICAgICBEZWNpbWFsCiAgdHlwZV9wYWllbWVudCBTdHJpbmcKICB1dGlsaXNhdGV1cl9pZCBJbnQKICB0aWNrZXRfaWQgICAgICBJbnQKICB1dGlsaXNhdGV1ciAgIFV0aWxpc2F0ZXVyIEByZWxhdGlvbihmaWVsZHM6IFt1dGlsaXNhdGV1cl9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdGlja2V0ICAgICAgICBUaWNrZXQgIEByZWxhdGlvbihmaWVsZHM6IFt0aWNrZXRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQp9",
  "inlineSchemaHash": "f2db03b65099c26d5a28d69fa0911e58355abb7f292ab87e42d7f67d523f980e"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/src/generated/client",
    "src/generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Agence\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ville\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pays\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"buss\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bus\",\"relationName\":\"AgenceToBus\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"AgenceToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bus\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modele\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capacite\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agence_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heure_depart\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"heure_arrivee\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"BusToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agence\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agence\",\"relationName\":\"AgenceToBus\",\"relationFromFields\":[\"agence_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ticket\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matricule\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prix\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agence_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bus_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"place_disponible\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agence\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agence\",\"relationName\":\"AgenceToTicket\",\"relationFromFields\":[\"agence_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bus\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bus\",\"relationName\":\"BusToTicket\",\"relationFromFields\":[\"bus_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"TicketToTransaction\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historiqueTicket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoriqueTicket\",\"relationName\":\"HistoriqueTicketToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paiement\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Paiement\",\"relationName\":\"PaiementToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Utilisateur\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prenom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mot_de_passe\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reservations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reservation\",\"relationName\":\"ReservationToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Transaction\",\"relationName\":\"TransactionToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notificationS\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NotificationToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"historiqueTicket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"HistoriqueTicket\",\"relationName\":\"HistoriqueTicketToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paiement\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Paiement\",\"relationName\":\"PaiementToUtilisateur\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Image\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_fichier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"chemin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taille\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reservation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"ReservationToTicket\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"ReservationToUtilisateur\",\"relationFromFields\":[\"utilisateur_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Transaction\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"montant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"TransactionToUtilisateur\",\"relationFromFields\":[\"utilisateur_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"TicketToTransaction\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"message\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_envoi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"NotificationToUtilisateur\",\"relationFromFields\":[\"utilisateur_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"HistoriqueTicket\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_achat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"HistoriqueTicketToUtilisateur\",\"relationFromFields\":[\"utilisateur_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"HistoriqueTicketToTicket\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Paiement\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"montant\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_paiement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utilisateur\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Utilisateur\",\"relationName\":\"PaiementToUtilisateur\",\"relationFromFields\":[\"utilisateur_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"PaiementToTicket\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/src/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/src/generated/client/schema.prisma")
