
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Agence
 * 
 */
export type Agence = $Result.DefaultSelection<Prisma.$AgencePayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model HistoriqueTicket
 * 
 */
export type HistoriqueTicket = $Result.DefaultSelection<Prisma.$HistoriqueTicketPayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agences
 * const agences = await prisma.agence.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agences
   * const agences = await prisma.agence.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.agence`: Exposes CRUD operations for the **Agence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agences
    * const agences = await prisma.agence.findMany()
    * ```
    */
  get agence(): Prisma.AgenceDelegate<ExtArgs>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;

  /**
   * `prisma.historiqueTicket`: Exposes CRUD operations for the **HistoriqueTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoriqueTickets
    * const historiqueTickets = await prisma.historiqueTicket.findMany()
    * ```
    */
  get historiqueTicket(): Prisma.HistoriqueTicketDelegate<ExtArgs>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.0
   * Query Engine version: e90b936d84779543cbe0e494bc8b9d7337fad8e4
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'agence' | 'bus' | 'ticket' | 'utilisateur' | 'image' | 'reservation' | 'transaction' | 'notification' | 'historiqueTicket' | 'paiement'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Agence: {
        payload: Prisma.$AgencePayload<ExtArgs>
        fields: Prisma.AgenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgenceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgenceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload>
          }
          findFirst: {
            args: Prisma.AgenceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgenceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload>
          }
          findMany: {
            args: Prisma.AgenceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload>[]
          }
          create: {
            args: Prisma.AgenceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload>
          }
          createMany: {
            args: Prisma.AgenceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AgenceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload>
          }
          update: {
            args: Prisma.AgenceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload>
          }
          deleteMany: {
            args: Prisma.AgenceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AgenceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AgenceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgencePayload>
          }
          aggregate: {
            args: Prisma.AgenceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAgence>
          }
          groupBy: {
            args: Prisma.AgenceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AgenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgenceCountArgs<ExtArgs>,
            result: $Utils.Optional<AgenceCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>,
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>,
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>,
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>,
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>,
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>,
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      HistoriqueTicket: {
        payload: Prisma.$HistoriqueTicketPayload<ExtArgs>
        fields: Prisma.HistoriqueTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriqueTicketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriqueTicketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload>
          }
          findFirst: {
            args: Prisma.HistoriqueTicketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriqueTicketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload>
          }
          findMany: {
            args: Prisma.HistoriqueTicketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload>[]
          }
          create: {
            args: Prisma.HistoriqueTicketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload>
          }
          createMany: {
            args: Prisma.HistoriqueTicketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HistoriqueTicketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload>
          }
          update: {
            args: Prisma.HistoriqueTicketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload>
          }
          deleteMany: {
            args: Prisma.HistoriqueTicketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriqueTicketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HistoriqueTicketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HistoriqueTicketPayload>
          }
          aggregate: {
            args: Prisma.HistoriqueTicketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHistoriqueTicket>
          }
          groupBy: {
            args: Prisma.HistoriqueTicketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HistoriqueTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriqueTicketCountArgs<ExtArgs>,
            result: $Utils.Optional<HistoriqueTicketCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>,
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AgenceCountOutputType
   */

  export type AgenceCountOutputType = {
    buss: number
    tickets: number
  }

  export type AgenceCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    buss?: boolean | AgenceCountOutputTypeCountBussArgs
    tickets?: boolean | AgenceCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes

  /**
   * AgenceCountOutputType without action
   */
  export type AgenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgenceCountOutputType
     */
    select?: AgenceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AgenceCountOutputType without action
   */
  export type AgenceCountOutputTypeCountBussArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }


  /**
   * AgenceCountOutputType without action
   */
  export type AgenceCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }



  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    tickets: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tickets?: boolean | BusCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }



  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    reservations: number
    transactions: number
    historiqueTicket: number
    paiement: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    reservations?: boolean | TicketCountOutputTypeCountReservationsArgs
    transactions?: boolean | TicketCountOutputTypeCountTransactionsArgs
    historiqueTicket?: boolean | TicketCountOutputTypeCountHistoriqueTicketArgs
    paiement?: boolean | TicketCountOutputTypeCountPaiementArgs
  }

  // Custom InputTypes

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountHistoriqueTicketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HistoriqueTicketWhereInput
  }


  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountPaiementArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }



  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    reservations: number
    transactions: number
    notificationS: number
    historiqueTicket: number
    paiement: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    reservations?: boolean | UtilisateurCountOutputTypeCountReservationsArgs
    transactions?: boolean | UtilisateurCountOutputTypeCountTransactionsArgs
    notificationS?: boolean | UtilisateurCountOutputTypeCountNotificationSArgs
    historiqueTicket?: boolean | UtilisateurCountOutputTypeCountHistoriqueTicketArgs
    paiement?: boolean | UtilisateurCountOutputTypeCountPaiementArgs
  }

  // Custom InputTypes

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountNotificationSArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountHistoriqueTicketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HistoriqueTicketWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountPaiementArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Agence
   */

  export type AggregateAgence = {
    _count: AgenceCountAggregateOutputType | null
    _avg: AgenceAvgAggregateOutputType | null
    _sum: AgenceSumAggregateOutputType | null
    _min: AgenceMinAggregateOutputType | null
    _max: AgenceMaxAggregateOutputType | null
  }

  export type AgenceAvgAggregateOutputType = {
    id: number | null
  }

  export type AgenceSumAggregateOutputType = {
    id: number | null
  }

  export type AgenceMinAggregateOutputType = {
    id: number | null
    nom: string | null
    ville: string | null
    pays: string | null
  }

  export type AgenceMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    ville: string | null
    pays: string | null
  }

  export type AgenceCountAggregateOutputType = {
    id: number
    nom: number
    ville: number
    pays: number
    _all: number
  }


  export type AgenceAvgAggregateInputType = {
    id?: true
  }

  export type AgenceSumAggregateInputType = {
    id?: true
  }

  export type AgenceMinAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
    pays?: true
  }

  export type AgenceMaxAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
    pays?: true
  }

  export type AgenceCountAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
    pays?: true
    _all?: true
  }

  export type AgenceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agence to aggregate.
     */
    where?: AgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agences to fetch.
     */
    orderBy?: AgenceOrderByWithRelationInput | AgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agences
    **/
    _count?: true | AgenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgenceMaxAggregateInputType
  }

  export type GetAgenceAggregateType<T extends AgenceAggregateArgs> = {
        [P in keyof T & keyof AggregateAgence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgence[P]>
      : GetScalarType<T[P], AggregateAgence[P]>
  }




  export type AgenceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AgenceWhereInput
    orderBy?: AgenceOrderByWithAggregationInput | AgenceOrderByWithAggregationInput[]
    by: AgenceScalarFieldEnum[] | AgenceScalarFieldEnum
    having?: AgenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgenceCountAggregateInputType | true
    _avg?: AgenceAvgAggregateInputType
    _sum?: AgenceSumAggregateInputType
    _min?: AgenceMinAggregateInputType
    _max?: AgenceMaxAggregateInputType
  }

  export type AgenceGroupByOutputType = {
    id: number
    nom: string
    ville: string
    pays: string
    _count: AgenceCountAggregateOutputType | null
    _avg: AgenceAvgAggregateOutputType | null
    _sum: AgenceSumAggregateOutputType | null
    _min: AgenceMinAggregateOutputType | null
    _max: AgenceMaxAggregateOutputType | null
  }

  type GetAgenceGroupByPayload<T extends AgenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgenceGroupByOutputType[P]>
            : GetScalarType<T[P], AgenceGroupByOutputType[P]>
        }
      >
    >


  export type AgenceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    ville?: boolean
    pays?: boolean
    buss?: boolean | Agence$bussArgs<ExtArgs>
    tickets?: boolean | Agence$ticketsArgs<ExtArgs>
    _count?: boolean | AgenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agence"]>

  export type AgenceSelectScalar = {
    id?: boolean
    nom?: boolean
    ville?: boolean
    pays?: boolean
  }

  export type AgenceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    buss?: boolean | Agence$bussArgs<ExtArgs>
    tickets?: boolean | Agence$ticketsArgs<ExtArgs>
    _count?: boolean | AgenceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AgencePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Agence"
    objects: {
      buss: Prisma.$BusPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      nom: string
      ville: string
      pays: string
    }, ExtArgs["result"]["agence"]>
    composites: {}
  }


  type AgenceGetPayload<S extends boolean | null | undefined | AgenceDefaultArgs> = $Result.GetResult<Prisma.$AgencePayload, S>

  type AgenceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AgenceFindManyArgs, 'select' | 'include'> & {
      select?: AgenceCountAggregateInputType | true
    }

  export interface AgenceDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agence'], meta: { name: 'Agence' } }
    /**
     * Find zero or one Agence that matches the filter.
     * @param {AgenceFindUniqueArgs} args - Arguments to find a Agence
     * @example
     * // Get one Agence
     * const agence = await prisma.agence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AgenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AgenceFindUniqueArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Agence that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AgenceFindUniqueOrThrowArgs} args - Arguments to find a Agence
     * @example
     * // Get one Agence
     * const agence = await prisma.agence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AgenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgenceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Agence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenceFindFirstArgs} args - Arguments to find a Agence
     * @example
     * // Get one Agence
     * const agence = await prisma.agence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AgenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AgenceFindFirstArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Agence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenceFindFirstOrThrowArgs} args - Arguments to find a Agence
     * @example
     * // Get one Agence
     * const agence = await prisma.agence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AgenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgenceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Agences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agences
     * const agences = await prisma.agence.findMany()
     * 
     * // Get first 10 Agences
     * const agences = await prisma.agence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agenceWithIdOnly = await prisma.agence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AgenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgenceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Agence.
     * @param {AgenceCreateArgs} args - Arguments to create a Agence.
     * @example
     * // Create one Agence
     * const Agence = await prisma.agence.create({
     *   data: {
     *     // ... data to create a Agence
     *   }
     * })
     * 
    **/
    create<T extends AgenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AgenceCreateArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Agences.
     *     @param {AgenceCreateManyArgs} args - Arguments to create many Agences.
     *     @example
     *     // Create many Agences
     *     const agence = await prisma.agence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AgenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgenceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Agence.
     * @param {AgenceDeleteArgs} args - Arguments to delete one Agence.
     * @example
     * // Delete one Agence
     * const Agence = await prisma.agence.delete({
     *   where: {
     *     // ... filter to delete one Agence
     *   }
     * })
     * 
    **/
    delete<T extends AgenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AgenceDeleteArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Agence.
     * @param {AgenceUpdateArgs} args - Arguments to update one Agence.
     * @example
     * // Update one Agence
     * const agence = await prisma.agence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AgenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AgenceUpdateArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Agences.
     * @param {AgenceDeleteManyArgs} args - Arguments to filter Agences to delete.
     * @example
     * // Delete a few Agences
     * const { count } = await prisma.agence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AgenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgenceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agences
     * const agence = await prisma.agence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AgenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AgenceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agence.
     * @param {AgenceUpsertArgs} args - Arguments to update or create a Agence.
     * @example
     * // Update or create a Agence
     * const agence = await prisma.agence.upsert({
     *   create: {
     *     // ... data to create a Agence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agence we want to update
     *   }
     * })
    **/
    upsert<T extends AgenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AgenceUpsertArgs<ExtArgs>>
    ): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Agences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenceCountArgs} args - Arguments to filter Agences to count.
     * @example
     * // Count the number of Agences
     * const count = await prisma.agence.count({
     *   where: {
     *     // ... the filter for the Agences we want to count
     *   }
     * })
    **/
    count<T extends AgenceCountArgs>(
      args?: Subset<T, AgenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgenceAggregateArgs>(args: Subset<T, AgenceAggregateArgs>): Prisma.PrismaPromise<GetAgenceAggregateType<T>>

    /**
     * Group by Agence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgenceGroupByArgs['orderBy'] }
        : { orderBy?: AgenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agence model
   */
  readonly fields: AgenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgenceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    buss<T extends Agence$bussArgs<ExtArgs> = {}>(args?: Subset<T, Agence$bussArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'findMany'> | Null>;

    tickets<T extends Agence$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Agence$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Agence model
   */ 
  interface AgenceFieldRefs {
    readonly id: FieldRef<"Agence", 'Int'>
    readonly nom: FieldRef<"Agence", 'String'>
    readonly ville: FieldRef<"Agence", 'String'>
    readonly pays: FieldRef<"Agence", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Agence findUnique
   */
  export type AgenceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * Filter, which Agence to fetch.
     */
    where: AgenceWhereUniqueInput
  }


  /**
   * Agence findUniqueOrThrow
   */
  export type AgenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * Filter, which Agence to fetch.
     */
    where: AgenceWhereUniqueInput
  }


  /**
   * Agence findFirst
   */
  export type AgenceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * Filter, which Agence to fetch.
     */
    where?: AgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agences to fetch.
     */
    orderBy?: AgenceOrderByWithRelationInput | AgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agences.
     */
    cursor?: AgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agences.
     */
    distinct?: AgenceScalarFieldEnum | AgenceScalarFieldEnum[]
  }


  /**
   * Agence findFirstOrThrow
   */
  export type AgenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * Filter, which Agence to fetch.
     */
    where?: AgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agences to fetch.
     */
    orderBy?: AgenceOrderByWithRelationInput | AgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agences.
     */
    cursor?: AgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agences.
     */
    distinct?: AgenceScalarFieldEnum | AgenceScalarFieldEnum[]
  }


  /**
   * Agence findMany
   */
  export type AgenceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * Filter, which Agences to fetch.
     */
    where?: AgenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agences to fetch.
     */
    orderBy?: AgenceOrderByWithRelationInput | AgenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agences.
     */
    cursor?: AgenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agences.
     */
    skip?: number
    distinct?: AgenceScalarFieldEnum | AgenceScalarFieldEnum[]
  }


  /**
   * Agence create
   */
  export type AgenceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Agence.
     */
    data: XOR<AgenceCreateInput, AgenceUncheckedCreateInput>
  }


  /**
   * Agence createMany
   */
  export type AgenceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agences.
     */
    data: AgenceCreateManyInput | AgenceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Agence update
   */
  export type AgenceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Agence.
     */
    data: XOR<AgenceUpdateInput, AgenceUncheckedUpdateInput>
    /**
     * Choose, which Agence to update.
     */
    where: AgenceWhereUniqueInput
  }


  /**
   * Agence updateMany
   */
  export type AgenceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agences.
     */
    data: XOR<AgenceUpdateManyMutationInput, AgenceUncheckedUpdateManyInput>
    /**
     * Filter which Agences to update
     */
    where?: AgenceWhereInput
  }


  /**
   * Agence upsert
   */
  export type AgenceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Agence to update in case it exists.
     */
    where: AgenceWhereUniqueInput
    /**
     * In case the Agence found by the `where` argument doesn't exist, create a new Agence with this data.
     */
    create: XOR<AgenceCreateInput, AgenceUncheckedCreateInput>
    /**
     * In case the Agence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgenceUpdateInput, AgenceUncheckedUpdateInput>
  }


  /**
   * Agence delete
   */
  export type AgenceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
    /**
     * Filter which Agence to delete.
     */
    where: AgenceWhereUniqueInput
  }


  /**
   * Agence deleteMany
   */
  export type AgenceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agences to delete
     */
    where?: AgenceWhereInput
  }


  /**
   * Agence.buss
   */
  export type Agence$bussArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }


  /**
   * Agence.tickets
   */
  export type Agence$ticketsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Agence without action
   */
  export type AgenceDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agence
     */
    select?: AgenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AgenceInclude<ExtArgs> | null
  }



  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    capacite: number | null
    agence_id: number | null
  }

  export type BusSumAggregateOutputType = {
    id: number | null
    numero: number | null
    capacite: number | null
    agence_id: number | null
  }

  export type BusMinAggregateOutputType = {
    id: number | null
    numero: number | null
    modele: string | null
    capacite: number | null
    agence_id: number | null
    heure_depart: Date | null
    heure_arrivee: Date | null
  }

  export type BusMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    modele: string | null
    capacite: number | null
    agence_id: number | null
    heure_depart: Date | null
    heure_arrivee: Date | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    numero: number
    modele: number
    capacite: number
    agence_id: number
    heure_depart: number
    heure_arrivee: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    id?: true
    numero?: true
    capacite?: true
    agence_id?: true
  }

  export type BusSumAggregateInputType = {
    id?: true
    numero?: true
    capacite?: true
    agence_id?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    numero?: true
    modele?: true
    capacite?: true
    agence_id?: true
    heure_depart?: true
    heure_arrivee?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    numero?: true
    modele?: true
    capacite?: true
    agence_id?: true
    heure_depart?: true
    heure_arrivee?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    numero?: true
    modele?: true
    capacite?: true
    agence_id?: true
    heure_depart?: true
    heure_arrivee?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: number
    numero: number
    modele: string
    capacite: number
    agence_id: number
    heure_depart: Date
    heure_arrivee: Date
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    modele?: boolean
    capacite?: boolean
    agence_id?: boolean
    heure_depart?: boolean
    heure_arrivee?: boolean
    tickets?: boolean | Bus$ticketsArgs<ExtArgs>
    agence?: boolean | AgenceDefaultArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectScalar = {
    id?: boolean
    numero?: boolean
    modele?: boolean
    capacite?: boolean
    agence_id?: boolean
    heure_depart?: boolean
    heure_arrivee?: boolean
  }

  export type BusInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tickets?: boolean | Bus$ticketsArgs<ExtArgs>
    agence?: boolean | AgenceDefaultArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BusPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      agence: Prisma.$AgencePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      numero: number
      modele: string
      capacite: number
      agence_id: number
      heure_depart: Date
      heure_arrivee: Date
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }


  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BusFindManyArgs, 'select' | 'include'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bus that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
    **/
    create<T extends BusCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BusCreateArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Buses.
     *     @param {BusCreateManyArgs} args - Arguments to create many Buses.
     *     @example
     *     // Create many Buses
     *     const bus = await prisma.bus.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
    **/
    delete<T extends BusDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BusDeleteArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BusUpdateArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
    **/
    upsert<T extends BusUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BusUpsertArgs<ExtArgs>>
    ): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tickets<T extends Bus$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    agence<T extends AgenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgenceDefaultArgs<ExtArgs>>): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bus model
   */ 
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'Int'>
    readonly numero: FieldRef<"Bus", 'Int'>
    readonly modele: FieldRef<"Bus", 'String'>
    readonly capacite: FieldRef<"Bus", 'Int'>
    readonly agence_id: FieldRef<"Bus", 'Int'>
    readonly heure_depart: FieldRef<"Bus", 'DateTime'>
    readonly heure_arrivee: FieldRef<"Bus", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }


  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }


  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }


  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }


  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }


  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }


  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }


  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
  }


  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }


  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }


  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
  }


  /**
   * Bus.tickets
   */
  export type Bus$ticketsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BusInclude<ExtArgs> | null
  }



  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    prix: Decimal | null
    agence_id: number | null
    bus_id: number | null
    place_disponible: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    prix: Decimal | null
    agence_id: number | null
    bus_id: number | null
    place_disponible: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    matricule: string | null
    prix: Decimal | null
    agence_id: number | null
    bus_id: number | null
    place_disponible: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    matricule: string | null
    prix: Decimal | null
    agence_id: number | null
    bus_id: number | null
    place_disponible: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    matricule: number
    prix: number
    agence_id: number
    bus_id: number
    place_disponible: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    prix?: true
    agence_id?: true
    bus_id?: true
    place_disponible?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    prix?: true
    agence_id?: true
    bus_id?: true
    place_disponible?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    matricule?: true
    prix?: true
    agence_id?: true
    bus_id?: true
    place_disponible?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    matricule?: true
    prix?: true
    agence_id?: true
    bus_id?: true
    place_disponible?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    matricule?: true
    prix?: true
    agence_id?: true
    bus_id?: true
    place_disponible?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    matricule: string
    prix: Decimal
    agence_id: number
    bus_id: number
    place_disponible: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricule?: boolean
    prix?: boolean
    agence_id?: boolean
    bus_id?: boolean
    place_disponible?: boolean
    agence?: boolean | AgenceDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    reservations?: boolean | Ticket$reservationsArgs<ExtArgs>
    transactions?: boolean | Ticket$transactionsArgs<ExtArgs>
    historiqueTicket?: boolean | Ticket$historiqueTicketArgs<ExtArgs>
    paiement?: boolean | Ticket$paiementArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    matricule?: boolean
    prix?: boolean
    agence_id?: boolean
    bus_id?: boolean
    place_disponible?: boolean
  }

  export type TicketInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    agence?: boolean | AgenceDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
    reservations?: boolean | Ticket$reservationsArgs<ExtArgs>
    transactions?: boolean | Ticket$transactionsArgs<ExtArgs>
    historiqueTicket?: boolean | Ticket$historiqueTicketArgs<ExtArgs>
    paiement?: boolean | Ticket$paiementArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TicketPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      agence: Prisma.$AgencePayload<ExtArgs>
      bus: Prisma.$BusPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      historiqueTicket: Prisma.$HistoriqueTicketPayload<ExtArgs>[]
      paiement: Prisma.$PaiementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      matricule: string
      prix: Prisma.Decimal
      agence_id: number
      bus_id: number
      place_disponible: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }


  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TicketFindManyArgs, 'select' | 'include'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TicketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TicketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TicketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
    **/
    create<T extends TicketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketCreateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tickets.
     *     @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TicketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
    **/
    delete<T extends TicketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TicketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TicketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TicketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
    **/
    upsert<T extends TicketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>
    ): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    agence<T extends AgenceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgenceDefaultArgs<ExtArgs>>): Prisma__AgenceClient<$Result.GetResult<Prisma.$AgencePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reservations<T extends Ticket$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    transactions<T extends Ticket$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    historiqueTicket<T extends Ticket$historiqueTicketArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$historiqueTicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    paiement<T extends Ticket$paiementArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$paiementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Ticket model
   */ 
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly matricule: FieldRef<"Ticket", 'String'>
    readonly prix: FieldRef<"Ticket", 'Decimal'>
    readonly agence_id: FieldRef<"Ticket", 'Int'>
    readonly bus_id: FieldRef<"Ticket", 'Int'>
    readonly place_disponible: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }


  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }


  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }


  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }


  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }


  /**
   * Ticket.reservations
   */
  export type Ticket$reservationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Ticket.transactions
   */
  export type Ticket$transactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Ticket.historiqueTicket
   */
  export type Ticket$historiqueTicketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    where?: HistoriqueTicketWhereInput
    orderBy?: HistoriqueTicketOrderByWithRelationInput | HistoriqueTicketOrderByWithRelationInput[]
    cursor?: HistoriqueTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriqueTicketScalarFieldEnum | HistoriqueTicketScalarFieldEnum[]
  }


  /**
   * Ticket.paiement
   */
  export type Ticket$paiementArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }


  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TicketInclude<ExtArgs> | null
  }



  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    mot_de_passe: string | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    prenom: string | null
    nom: string | null
    email: string | null
    mot_de_passe: string | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    prenom: number
    nom: number
    email: number
    mot_de_passe: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    mot_de_passe?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    mot_de_passe?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    prenom?: true
    nom?: true
    email?: true
    mot_de_passe?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    mot_de_passe?: boolean
    reservations?: boolean | Utilisateur$reservationsArgs<ExtArgs>
    transactions?: boolean | Utilisateur$transactionsArgs<ExtArgs>
    notificationS?: boolean | Utilisateur$notificationSArgs<ExtArgs>
    historiqueTicket?: boolean | Utilisateur$historiqueTicketArgs<ExtArgs>
    paiement?: boolean | Utilisateur$paiementArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    prenom?: boolean
    nom?: boolean
    email?: boolean
    mot_de_passe?: boolean
  }

  export type UtilisateurInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    reservations?: boolean | Utilisateur$reservationsArgs<ExtArgs>
    transactions?: boolean | Utilisateur$transactionsArgs<ExtArgs>
    notificationS?: boolean | Utilisateur$notificationSArgs<ExtArgs>
    historiqueTicket?: boolean | Utilisateur$historiqueTicketArgs<ExtArgs>
    paiement?: boolean | Utilisateur$paiementArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UtilisateurPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      notificationS: Prisma.$NotificationPayload<ExtArgs>[]
      historiqueTicket: Prisma.$HistoriqueTicketPayload<ExtArgs>[]
      paiement: Prisma.$PaiementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      prenom: string
      nom: string
      email: string
      mot_de_passe: string
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }


  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UtilisateurFindManyArgs, 'select' | 'include'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UtilisateurFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Utilisateur that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UtilisateurFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UtilisateurFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
    **/
    create<T extends UtilisateurCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Utilisateurs.
     *     @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     *     @example
     *     // Create many Utilisateurs
     *     const utilisateur = await prisma.utilisateur.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UtilisateurCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
    **/
    delete<T extends UtilisateurDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UtilisateurUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UtilisateurDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UtilisateurUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
    **/
    upsert<T extends UtilisateurUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reservations<T extends Utilisateur$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'> | Null>;

    transactions<T extends Utilisateur$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    notificationS<T extends Utilisateur$notificationSArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$notificationSArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'> | Null>;

    historiqueTicket<T extends Utilisateur$historiqueTicketArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$historiqueTicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'findMany'> | Null>;

    paiement<T extends Utilisateur$paiementArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$paiementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Utilisateur model
   */ 
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly mot_de_passe: FieldRef<"Utilisateur", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }


  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
  }


  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }


  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
  }


  /**
   * Utilisateur.reservations
   */
  export type Utilisateur$reservationsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Utilisateur.transactions
   */
  export type Utilisateur$transactionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Utilisateur.notificationS
   */
  export type Utilisateur$notificationSArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Utilisateur.historiqueTicket
   */
  export type Utilisateur$historiqueTicketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    where?: HistoriqueTicketWhereInput
    orderBy?: HistoriqueTicketOrderByWithRelationInput | HistoriqueTicketOrderByWithRelationInput[]
    cursor?: HistoriqueTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriqueTicketScalarFieldEnum | HistoriqueTicketScalarFieldEnum[]
  }


  /**
   * Utilisateur.paiement
   */
  export type Utilisateur$paiementArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    cursor?: PaiementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }


  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }



  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    taille: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    taille: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    nom_fichier: string | null
    chemin: string | null
    type: string | null
    taille: number | null
    description: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    nom_fichier: string | null
    chemin: string | null
    type: string | null
    taille: number | null
    description: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    nom_fichier: number
    chemin: number
    type: number
    taille: number
    description: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    taille?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    taille?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    nom_fichier?: true
    chemin?: true
    type?: true
    taille?: true
    description?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    nom_fichier?: true
    chemin?: true
    type?: true
    taille?: true
    description?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    nom_fichier?: true
    chemin?: true
    type?: true
    taille?: true
    description?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    nom_fichier: string
    chemin: string
    type: string
    taille: number
    description: string | null
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom_fichier?: boolean
    chemin?: boolean
    type?: boolean
    taille?: boolean
    description?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    nom_fichier?: boolean
    chemin?: boolean
    type?: boolean
    taille?: boolean
    description?: boolean
  }


  export type $ImagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      nom_fichier: string
      chemin: string
      type: string
      taille: number
      description: string | null
    }, ExtArgs["result"]["image"]>
    composites: {}
  }


  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Image that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageCreateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>
    ): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Image model
   */ 
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly nom_fichier: FieldRef<"Image", 'String'>
    readonly chemin: FieldRef<"Image", 'String'>
    readonly type: FieldRef<"Image", 'String'>
    readonly taille: FieldRef<"Image", 'Int'>
    readonly description: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }


  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
  }


  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
  }



  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    ticket_id: number | null
    utilisateur_id: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    ticket_id: number | null
    utilisateur_id: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    ticket_id: number | null
    utilisateur_id: number | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    ticket_id: number | null
    utilisateur_id: number | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    ticket_id: number
    utilisateur_id: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    ticket_id?: true
    utilisateur_id?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    ticket_id?: true
    utilisateur_id?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    ticket_id?: true
    utilisateur_id?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    ticket_id?: true
    utilisateur_id?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    ticket_id?: true
    utilisateur_id?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    ticket_id: number
    utilisateur_id: number
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticket_id?: boolean
    utilisateur_id?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    ticket_id?: boolean
    utilisateur_id?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }


  export type $ReservationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      ticket_id: number
      utilisateur_id: number
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }


  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReservationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReservationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReservationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
    **/
    create<T extends ReservationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reservations.
     *     @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     *     @example
     *     // Create many Reservations
     *     const reservation = await prisma.reservation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReservationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
    **/
    delete<T extends ReservationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReservationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReservationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReservationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
    **/
    upsert<T extends ReservationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>
    ): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly ticket_id: FieldRef<"Reservation", 'Int'>
    readonly utilisateur_id: FieldRef<"Reservation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }


  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }


  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }


  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }


  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }


  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }


  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReservationInclude<ExtArgs> | null
  }



  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    montant: number
    utilisateur_id: number
    ticket_id: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    montant?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    montant?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    montant?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    montant?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    montant?: true
    utilisateur_id?: true
    ticket_id?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    montant: Decimal
    utilisateur_id: number
    ticket_id: number
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    utilisateur_id?: boolean
    ticket_id?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    montant?: boolean
    utilisateur_id?: boolean
    ticket_id?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }


  export type $TransactionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      montant: Prisma.Decimal
      utilisateur_id: number
      ticket_id: number
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     *     @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly montant: FieldRef<"Transaction", 'Decimal'>
    readonly utilisateur_id: FieldRef<"Transaction", 'Int'>
    readonly ticket_id: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }


  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }


  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }


  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }


  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }


  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TransactionInclude<ExtArgs> | null
  }



  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
    message: string | null
    date_envoi: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
    message: string | null
    date_envoi: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    utilisateur_id: number
    message: number
    date_envoi: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    utilisateur_id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    utilisateur_id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    utilisateur_id?: true
    message?: true
    date_envoi?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    utilisateur_id?: true
    message?: true
    date_envoi?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    utilisateur_id?: true
    message?: true
    date_envoi?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    utilisateur_id: number
    message: string
    date_envoi: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateur_id?: boolean
    message?: boolean
    date_envoi?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    utilisateur_id?: boolean
    message?: boolean
    date_envoi?: boolean
  }

  export type NotificationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      utilisateur_id: number
      message: string
      date_envoi: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }


  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NotificationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NotificationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NotificationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
    **/
    create<T extends NotificationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Notifications.
     *     @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     *     @example
     *     // Create many Notifications
     *     const notification = await prisma.notification.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NotificationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
    **/
    delete<T extends NotificationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NotificationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NotificationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NotificationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
    **/
    upsert<T extends NotificationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>
    ): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly utilisateur_id: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly date_envoi: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }


  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }


  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }


  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }


  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }


  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NotificationInclude<ExtArgs> | null
  }



  /**
   * Model HistoriqueTicket
   */

  export type AggregateHistoriqueTicket = {
    _count: HistoriqueTicketCountAggregateOutputType | null
    _avg: HistoriqueTicketAvgAggregateOutputType | null
    _sum: HistoriqueTicketSumAggregateOutputType | null
    _min: HistoriqueTicketMinAggregateOutputType | null
    _max: HistoriqueTicketMaxAggregateOutputType | null
  }

  export type HistoriqueTicketAvgAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type HistoriqueTicketSumAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type HistoriqueTicketMinAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
    ticket_id: number | null
    date_achat: Date | null
  }

  export type HistoriqueTicketMaxAggregateOutputType = {
    id: number | null
    utilisateur_id: number | null
    ticket_id: number | null
    date_achat: Date | null
  }

  export type HistoriqueTicketCountAggregateOutputType = {
    id: number
    utilisateur_id: number
    ticket_id: number
    date_achat: number
    _all: number
  }


  export type HistoriqueTicketAvgAggregateInputType = {
    id?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type HistoriqueTicketSumAggregateInputType = {
    id?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type HistoriqueTicketMinAggregateInputType = {
    id?: true
    utilisateur_id?: true
    ticket_id?: true
    date_achat?: true
  }

  export type HistoriqueTicketMaxAggregateInputType = {
    id?: true
    utilisateur_id?: true
    ticket_id?: true
    date_achat?: true
  }

  export type HistoriqueTicketCountAggregateInputType = {
    id?: true
    utilisateur_id?: true
    ticket_id?: true
    date_achat?: true
    _all?: true
  }

  export type HistoriqueTicketAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriqueTicket to aggregate.
     */
    where?: HistoriqueTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueTickets to fetch.
     */
    orderBy?: HistoriqueTicketOrderByWithRelationInput | HistoriqueTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriqueTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoriqueTickets
    **/
    _count?: true | HistoriqueTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoriqueTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoriqueTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriqueTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriqueTicketMaxAggregateInputType
  }

  export type GetHistoriqueTicketAggregateType<T extends HistoriqueTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoriqueTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoriqueTicket[P]>
      : GetScalarType<T[P], AggregateHistoriqueTicket[P]>
  }




  export type HistoriqueTicketGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HistoriqueTicketWhereInput
    orderBy?: HistoriqueTicketOrderByWithAggregationInput | HistoriqueTicketOrderByWithAggregationInput[]
    by: HistoriqueTicketScalarFieldEnum[] | HistoriqueTicketScalarFieldEnum
    having?: HistoriqueTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriqueTicketCountAggregateInputType | true
    _avg?: HistoriqueTicketAvgAggregateInputType
    _sum?: HistoriqueTicketSumAggregateInputType
    _min?: HistoriqueTicketMinAggregateInputType
    _max?: HistoriqueTicketMaxAggregateInputType
  }

  export type HistoriqueTicketGroupByOutputType = {
    id: number
    utilisateur_id: number
    ticket_id: number
    date_achat: Date
    _count: HistoriqueTicketCountAggregateOutputType | null
    _avg: HistoriqueTicketAvgAggregateOutputType | null
    _sum: HistoriqueTicketSumAggregateOutputType | null
    _min: HistoriqueTicketMinAggregateOutputType | null
    _max: HistoriqueTicketMaxAggregateOutputType | null
  }

  type GetHistoriqueTicketGroupByPayload<T extends HistoriqueTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriqueTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriqueTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriqueTicketGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriqueTicketGroupByOutputType[P]>
        }
      >
    >


  export type HistoriqueTicketSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    utilisateur_id?: boolean
    ticket_id?: boolean
    date_achat?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiqueTicket"]>

  export type HistoriqueTicketSelectScalar = {
    id?: boolean
    utilisateur_id?: boolean
    ticket_id?: boolean
    date_achat?: boolean
  }

  export type HistoriqueTicketInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }


  export type $HistoriqueTicketPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "HistoriqueTicket"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      utilisateur_id: number
      ticket_id: number
      date_achat: Date
    }, ExtArgs["result"]["historiqueTicket"]>
    composites: {}
  }


  type HistoriqueTicketGetPayload<S extends boolean | null | undefined | HistoriqueTicketDefaultArgs> = $Result.GetResult<Prisma.$HistoriqueTicketPayload, S>

  type HistoriqueTicketCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HistoriqueTicketFindManyArgs, 'select' | 'include'> & {
      select?: HistoriqueTicketCountAggregateInputType | true
    }

  export interface HistoriqueTicketDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoriqueTicket'], meta: { name: 'HistoriqueTicket' } }
    /**
     * Find zero or one HistoriqueTicket that matches the filter.
     * @param {HistoriqueTicketFindUniqueArgs} args - Arguments to find a HistoriqueTicket
     * @example
     * // Get one HistoriqueTicket
     * const historiqueTicket = await prisma.historiqueTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HistoriqueTicketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HistoriqueTicketFindUniqueArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HistoriqueTicket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HistoriqueTicketFindUniqueOrThrowArgs} args - Arguments to find a HistoriqueTicket
     * @example
     * // Get one HistoriqueTicket
     * const historiqueTicket = await prisma.historiqueTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HistoriqueTicketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoriqueTicketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HistoriqueTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueTicketFindFirstArgs} args - Arguments to find a HistoriqueTicket
     * @example
     * // Get one HistoriqueTicket
     * const historiqueTicket = await prisma.historiqueTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HistoriqueTicketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoriqueTicketFindFirstArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HistoriqueTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueTicketFindFirstOrThrowArgs} args - Arguments to find a HistoriqueTicket
     * @example
     * // Get one HistoriqueTicket
     * const historiqueTicket = await prisma.historiqueTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HistoriqueTicketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoriqueTicketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HistoriqueTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueTicketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoriqueTickets
     * const historiqueTickets = await prisma.historiqueTicket.findMany()
     * 
     * // Get first 10 HistoriqueTickets
     * const historiqueTickets = await prisma.historiqueTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historiqueTicketWithIdOnly = await prisma.historiqueTicket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HistoriqueTicketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoriqueTicketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HistoriqueTicket.
     * @param {HistoriqueTicketCreateArgs} args - Arguments to create a HistoriqueTicket.
     * @example
     * // Create one HistoriqueTicket
     * const HistoriqueTicket = await prisma.historiqueTicket.create({
     *   data: {
     *     // ... data to create a HistoriqueTicket
     *   }
     * })
     * 
    **/
    create<T extends HistoriqueTicketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HistoriqueTicketCreateArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HistoriqueTickets.
     *     @param {HistoriqueTicketCreateManyArgs} args - Arguments to create many HistoriqueTickets.
     *     @example
     *     // Create many HistoriqueTickets
     *     const historiqueTicket = await prisma.historiqueTicket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HistoriqueTicketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoriqueTicketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoriqueTicket.
     * @param {HistoriqueTicketDeleteArgs} args - Arguments to delete one HistoriqueTicket.
     * @example
     * // Delete one HistoriqueTicket
     * const HistoriqueTicket = await prisma.historiqueTicket.delete({
     *   where: {
     *     // ... filter to delete one HistoriqueTicket
     *   }
     * })
     * 
    **/
    delete<T extends HistoriqueTicketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HistoriqueTicketDeleteArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HistoriqueTicket.
     * @param {HistoriqueTicketUpdateArgs} args - Arguments to update one HistoriqueTicket.
     * @example
     * // Update one HistoriqueTicket
     * const historiqueTicket = await prisma.historiqueTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HistoriqueTicketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HistoriqueTicketUpdateArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HistoriqueTickets.
     * @param {HistoriqueTicketDeleteManyArgs} args - Arguments to filter HistoriqueTickets to delete.
     * @example
     * // Delete a few HistoriqueTickets
     * const { count } = await prisma.historiqueTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HistoriqueTicketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HistoriqueTicketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriqueTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoriqueTickets
     * const historiqueTicket = await prisma.historiqueTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HistoriqueTicketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HistoriqueTicketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoriqueTicket.
     * @param {HistoriqueTicketUpsertArgs} args - Arguments to update or create a HistoriqueTicket.
     * @example
     * // Update or create a HistoriqueTicket
     * const historiqueTicket = await prisma.historiqueTicket.upsert({
     *   create: {
     *     // ... data to create a HistoriqueTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoriqueTicket we want to update
     *   }
     * })
    **/
    upsert<T extends HistoriqueTicketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HistoriqueTicketUpsertArgs<ExtArgs>>
    ): Prisma__HistoriqueTicketClient<$Result.GetResult<Prisma.$HistoriqueTicketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HistoriqueTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueTicketCountArgs} args - Arguments to filter HistoriqueTickets to count.
     * @example
     * // Count the number of HistoriqueTickets
     * const count = await prisma.historiqueTicket.count({
     *   where: {
     *     // ... the filter for the HistoriqueTickets we want to count
     *   }
     * })
    **/
    count<T extends HistoriqueTicketCountArgs>(
      args?: Subset<T, HistoriqueTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriqueTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoriqueTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoriqueTicketAggregateArgs>(args: Subset<T, HistoriqueTicketAggregateArgs>): Prisma.PrismaPromise<GetHistoriqueTicketAggregateType<T>>

    /**
     * Group by HistoriqueTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoriqueTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriqueTicketGroupByArgs['orderBy'] }
        : { orderBy?: HistoriqueTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoriqueTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriqueTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoriqueTicket model
   */
  readonly fields: HistoriqueTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoriqueTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriqueTicketClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HistoriqueTicket model
   */ 
  interface HistoriqueTicketFieldRefs {
    readonly id: FieldRef<"HistoriqueTicket", 'Int'>
    readonly utilisateur_id: FieldRef<"HistoriqueTicket", 'Int'>
    readonly ticket_id: FieldRef<"HistoriqueTicket", 'Int'>
    readonly date_achat: FieldRef<"HistoriqueTicket", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * HistoriqueTicket findUnique
   */
  export type HistoriqueTicketFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueTicket to fetch.
     */
    where: HistoriqueTicketWhereUniqueInput
  }


  /**
   * HistoriqueTicket findUniqueOrThrow
   */
  export type HistoriqueTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueTicket to fetch.
     */
    where: HistoriqueTicketWhereUniqueInput
  }


  /**
   * HistoriqueTicket findFirst
   */
  export type HistoriqueTicketFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueTicket to fetch.
     */
    where?: HistoriqueTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueTickets to fetch.
     */
    orderBy?: HistoriqueTicketOrderByWithRelationInput | HistoriqueTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriqueTickets.
     */
    cursor?: HistoriqueTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriqueTickets.
     */
    distinct?: HistoriqueTicketScalarFieldEnum | HistoriqueTicketScalarFieldEnum[]
  }


  /**
   * HistoriqueTicket findFirstOrThrow
   */
  export type HistoriqueTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueTicket to fetch.
     */
    where?: HistoriqueTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueTickets to fetch.
     */
    orderBy?: HistoriqueTicketOrderByWithRelationInput | HistoriqueTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriqueTickets.
     */
    cursor?: HistoriqueTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriqueTickets.
     */
    distinct?: HistoriqueTicketScalarFieldEnum | HistoriqueTicketScalarFieldEnum[]
  }


  /**
   * HistoriqueTicket findMany
   */
  export type HistoriqueTicketFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueTickets to fetch.
     */
    where?: HistoriqueTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueTickets to fetch.
     */
    orderBy?: HistoriqueTicketOrderByWithRelationInput | HistoriqueTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoriqueTickets.
     */
    cursor?: HistoriqueTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueTickets.
     */
    skip?: number
    distinct?: HistoriqueTicketScalarFieldEnum | HistoriqueTicketScalarFieldEnum[]
  }


  /**
   * HistoriqueTicket create
   */
  export type HistoriqueTicketCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoriqueTicket.
     */
    data: XOR<HistoriqueTicketCreateInput, HistoriqueTicketUncheckedCreateInput>
  }


  /**
   * HistoriqueTicket createMany
   */
  export type HistoriqueTicketCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoriqueTickets.
     */
    data: HistoriqueTicketCreateManyInput | HistoriqueTicketCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HistoriqueTicket update
   */
  export type HistoriqueTicketUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoriqueTicket.
     */
    data: XOR<HistoriqueTicketUpdateInput, HistoriqueTicketUncheckedUpdateInput>
    /**
     * Choose, which HistoriqueTicket to update.
     */
    where: HistoriqueTicketWhereUniqueInput
  }


  /**
   * HistoriqueTicket updateMany
   */
  export type HistoriqueTicketUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoriqueTickets.
     */
    data: XOR<HistoriqueTicketUpdateManyMutationInput, HistoriqueTicketUncheckedUpdateManyInput>
    /**
     * Filter which HistoriqueTickets to update
     */
    where?: HistoriqueTicketWhereInput
  }


  /**
   * HistoriqueTicket upsert
   */
  export type HistoriqueTicketUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoriqueTicket to update in case it exists.
     */
    where: HistoriqueTicketWhereUniqueInput
    /**
     * In case the HistoriqueTicket found by the `where` argument doesn't exist, create a new HistoriqueTicket with this data.
     */
    create: XOR<HistoriqueTicketCreateInput, HistoriqueTicketUncheckedCreateInput>
    /**
     * In case the HistoriqueTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriqueTicketUpdateInput, HistoriqueTicketUncheckedUpdateInput>
  }


  /**
   * HistoriqueTicket delete
   */
  export type HistoriqueTicketDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
    /**
     * Filter which HistoriqueTicket to delete.
     */
    where: HistoriqueTicketWhereUniqueInput
  }


  /**
   * HistoriqueTicket deleteMany
   */
  export type HistoriqueTicketDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriqueTickets to delete
     */
    where?: HistoriqueTicketWhereInput
  }


  /**
   * HistoriqueTicket without action
   */
  export type HistoriqueTicketDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueTicket
     */
    select?: HistoriqueTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HistoriqueTicketInclude<ExtArgs> | null
  }



  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type PaiementSumAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type PaiementMinAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    type_paiement: string | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type PaiementMaxAggregateOutputType = {
    id: number | null
    montant: Decimal | null
    type_paiement: string | null
    utilisateur_id: number | null
    ticket_id: number | null
  }

  export type PaiementCountAggregateOutputType = {
    id: number
    montant: number
    type_paiement: number
    utilisateur_id: number
    ticket_id: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    id?: true
    montant?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type PaiementSumAggregateInputType = {
    id?: true
    montant?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type PaiementMinAggregateInputType = {
    id?: true
    montant?: true
    type_paiement?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type PaiementMaxAggregateInputType = {
    id?: true
    montant?: true
    type_paiement?: true
    utilisateur_id?: true
    ticket_id?: true
  }

  export type PaiementCountAggregateInputType = {
    id?: true
    montant?: true
    type_paiement?: true
    utilisateur_id?: true
    ticket_id?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id: number
    montant: Decimal
    type_paiement: string
    utilisateur_id: number
    ticket_id: number
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    type_paiement?: boolean
    utilisateur_id?: boolean
    ticket_id?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectScalar = {
    id?: boolean
    montant?: boolean
    type_paiement?: boolean
    utilisateur_id?: boolean
    ticket_id?: boolean
  }

  export type PaiementInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }


  export type $PaiementPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      montant: Prisma.Decimal
      type_paiement: string
      utilisateur_id: number
      ticket_id: number
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }


  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PaiementFindManyArgs, 'select' | 'include'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaiementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Paiement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaiementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paiementWithIdOnly = await prisma.paiement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaiementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
    **/
    create<T extends PaiementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Paiements.
     *     @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     *     @example
     *     // Create many Paiements
     *     const paiement = await prisma.paiement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaiementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
    **/
    delete<T extends PaiementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaiementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaiementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaiementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
    **/
    upsert<T extends PaiementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>
    ): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Paiement model
   */ 
  interface PaiementFieldRefs {
    readonly id: FieldRef<"Paiement", 'Int'>
    readonly montant: FieldRef<"Paiement", 'Decimal'>
    readonly type_paiement: FieldRef<"Paiement", 'String'>
    readonly utilisateur_id: FieldRef<"Paiement", 'Int'>
    readonly ticket_id: FieldRef<"Paiement", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }


  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }


  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }


  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }


  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }


  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }


  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }


  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
  }


  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }


  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }


  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
  }


  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaiementInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AgenceScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    ville: 'ville',
    pays: 'pays'
  };

  export type AgenceScalarFieldEnum = (typeof AgenceScalarFieldEnum)[keyof typeof AgenceScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    modele: 'modele',
    capacite: 'capacite',
    agence_id: 'agence_id',
    heure_depart: 'heure_depart',
    heure_arrivee: 'heure_arrivee'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    matricule: 'matricule',
    prix: 'prix',
    agence_id: 'agence_id',
    bus_id: 'bus_id',
    place_disponible: 'place_disponible'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    prenom: 'prenom',
    nom: 'nom',
    email: 'email',
    mot_de_passe: 'mot_de_passe'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    nom_fichier: 'nom_fichier',
    chemin: 'chemin',
    type: 'type',
    taille: 'taille',
    description: 'description'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    ticket_id: 'ticket_id',
    utilisateur_id: 'utilisateur_id'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    montant: 'montant',
    utilisateur_id: 'utilisateur_id',
    ticket_id: 'ticket_id'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    utilisateur_id: 'utilisateur_id',
    message: 'message',
    date_envoi: 'date_envoi'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const HistoriqueTicketScalarFieldEnum: {
    id: 'id',
    utilisateur_id: 'utilisateur_id',
    ticket_id: 'ticket_id',
    date_achat: 'date_achat'
  };

  export type HistoriqueTicketScalarFieldEnum = (typeof HistoriqueTicketScalarFieldEnum)[keyof typeof HistoriqueTicketScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id: 'id',
    montant: 'montant',
    type_paiement: 'type_paiement',
    utilisateur_id: 'utilisateur_id',
    ticket_id: 'ticket_id'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AgenceWhereInput = {
    AND?: AgenceWhereInput | AgenceWhereInput[]
    OR?: AgenceWhereInput[]
    NOT?: AgenceWhereInput | AgenceWhereInput[]
    id?: IntFilter<"Agence"> | number
    nom?: StringFilter<"Agence"> | string
    ville?: StringFilter<"Agence"> | string
    pays?: StringFilter<"Agence"> | string
    buss?: BusListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type AgenceOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
    buss?: BusOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type AgenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgenceWhereInput | AgenceWhereInput[]
    OR?: AgenceWhereInput[]
    NOT?: AgenceWhereInput | AgenceWhereInput[]
    nom?: StringFilter<"Agence"> | string
    ville?: StringFilter<"Agence"> | string
    pays?: StringFilter<"Agence"> | string
    buss?: BusListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id">

  export type AgenceOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
    _count?: AgenceCountOrderByAggregateInput
    _avg?: AgenceAvgOrderByAggregateInput
    _max?: AgenceMaxOrderByAggregateInput
    _min?: AgenceMinOrderByAggregateInput
    _sum?: AgenceSumOrderByAggregateInput
  }

  export type AgenceScalarWhereWithAggregatesInput = {
    AND?: AgenceScalarWhereWithAggregatesInput | AgenceScalarWhereWithAggregatesInput[]
    OR?: AgenceScalarWhereWithAggregatesInput[]
    NOT?: AgenceScalarWhereWithAggregatesInput | AgenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agence"> | number
    nom?: StringWithAggregatesFilter<"Agence"> | string
    ville?: StringWithAggregatesFilter<"Agence"> | string
    pays?: StringWithAggregatesFilter<"Agence"> | string
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: IntFilter<"Bus"> | number
    numero?: IntFilter<"Bus"> | number
    modele?: StringFilter<"Bus"> | string
    capacite?: IntFilter<"Bus"> | number
    agence_id?: IntFilter<"Bus"> | number
    heure_depart?: DateTimeFilter<"Bus"> | Date | string
    heure_arrivee?: DateTimeFilter<"Bus"> | Date | string
    tickets?: TicketListRelationFilter
    agence?: XOR<AgenceRelationFilter, AgenceWhereInput>
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    modele?: SortOrder
    capacite?: SortOrder
    agence_id?: SortOrder
    heure_depart?: SortOrder
    heure_arrivee?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    agence?: AgenceOrderByWithRelationInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    numero?: IntFilter<"Bus"> | number
    modele?: StringFilter<"Bus"> | string
    capacite?: IntFilter<"Bus"> | number
    agence_id?: IntFilter<"Bus"> | number
    heure_depart?: DateTimeFilter<"Bus"> | Date | string
    heure_arrivee?: DateTimeFilter<"Bus"> | Date | string
    tickets?: TicketListRelationFilter
    agence?: XOR<AgenceRelationFilter, AgenceWhereInput>
  }, "id">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    modele?: SortOrder
    capacite?: SortOrder
    agence_id?: SortOrder
    heure_depart?: SortOrder
    heure_arrivee?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bus"> | number
    numero?: IntWithAggregatesFilter<"Bus"> | number
    modele?: StringWithAggregatesFilter<"Bus"> | string
    capacite?: IntWithAggregatesFilter<"Bus"> | number
    agence_id?: IntWithAggregatesFilter<"Bus"> | number
    heure_depart?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
    heure_arrivee?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    matricule?: StringFilter<"Ticket"> | string
    prix?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    agence_id?: IntFilter<"Ticket"> | number
    bus_id?: IntFilter<"Ticket"> | number
    place_disponible?: IntFilter<"Ticket"> | number
    agence?: XOR<AgenceRelationFilter, AgenceWhereInput>
    bus?: XOR<BusRelationFilter, BusWhereInput>
    reservations?: ReservationListRelationFilter
    transactions?: TransactionListRelationFilter
    historiqueTicket?: HistoriqueTicketListRelationFilter
    paiement?: PaiementListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    matricule?: SortOrder
    prix?: SortOrder
    agence_id?: SortOrder
    bus_id?: SortOrder
    place_disponible?: SortOrder
    agence?: AgenceOrderByWithRelationInput
    bus?: BusOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    historiqueTicket?: HistoriqueTicketOrderByRelationAggregateInput
    paiement?: PaiementOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matricule?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    prix?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    agence_id?: IntFilter<"Ticket"> | number
    bus_id?: IntFilter<"Ticket"> | number
    place_disponible?: IntFilter<"Ticket"> | number
    agence?: XOR<AgenceRelationFilter, AgenceWhereInput>
    bus?: XOR<BusRelationFilter, BusWhereInput>
    reservations?: ReservationListRelationFilter
    transactions?: TransactionListRelationFilter
    historiqueTicket?: HistoriqueTicketListRelationFilter
    paiement?: PaiementListRelationFilter
  }, "id" | "matricule">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    matricule?: SortOrder
    prix?: SortOrder
    agence_id?: SortOrder
    bus_id?: SortOrder
    place_disponible?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    matricule?: StringWithAggregatesFilter<"Ticket"> | string
    prix?: DecimalWithAggregatesFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    agence_id?: IntWithAggregatesFilter<"Ticket"> | number
    bus_id?: IntWithAggregatesFilter<"Ticket"> | number
    place_disponible?: IntWithAggregatesFilter<"Ticket"> | number
  }

  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    prenom?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    mot_de_passe?: StringFilter<"Utilisateur"> | string
    reservations?: ReservationListRelationFilter
    transactions?: TransactionListRelationFilter
    notificationS?: NotificationListRelationFilter
    historiqueTicket?: HistoriqueTicketListRelationFilter
    paiement?: PaiementListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    notificationS?: NotificationOrderByRelationAggregateInput
    historiqueTicket?: HistoriqueTicketOrderByRelationAggregateInput
    paiement?: PaiementOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    prenom?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    mot_de_passe?: StringFilter<"Utilisateur"> | string
    reservations?: ReservationListRelationFilter
    transactions?: TransactionListRelationFilter
    notificationS?: NotificationListRelationFilter
    historiqueTicket?: HistoriqueTicketListRelationFilter
    paiement?: PaiementListRelationFilter
  }, "id">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    mot_de_passe?: StringWithAggregatesFilter<"Utilisateur"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    nom_fichier?: StringFilter<"Image"> | string
    chemin?: StringFilter<"Image"> | string
    type?: StringFilter<"Image"> | string
    taille?: IntFilter<"Image"> | number
    description?: StringNullableFilter<"Image"> | string | null
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    nom_fichier?: SortOrder
    chemin?: SortOrder
    type?: SortOrder
    taille?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    nom_fichier?: StringFilter<"Image"> | string
    chemin?: StringFilter<"Image"> | string
    type?: StringFilter<"Image"> | string
    taille?: IntFilter<"Image"> | number
    description?: StringNullableFilter<"Image"> | string | null
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    nom_fichier?: SortOrder
    chemin?: SortOrder
    type?: SortOrder
    taille?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    nom_fichier?: StringWithAggregatesFilter<"Image"> | string
    chemin?: StringWithAggregatesFilter<"Image"> | string
    type?: StringWithAggregatesFilter<"Image"> | string
    taille?: IntWithAggregatesFilter<"Image"> | number
    description?: StringNullableWithAggregatesFilter<"Image"> | string | null
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    ticket_id?: IntFilter<"Reservation"> | number
    utilisateur_id?: IntFilter<"Reservation"> | number
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    utilisateur_id?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    ticket_id?: IntFilter<"Reservation"> | number
    utilisateur_id?: IntFilter<"Reservation"> | number
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    utilisateur_id?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    ticket_id?: IntWithAggregatesFilter<"Reservation"> | number
    utilisateur_id?: IntWithAggregatesFilter<"Reservation"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    montant?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntFilter<"Transaction"> | number
    ticket_id?: IntFilter<"Transaction"> | number
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    montant?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntFilter<"Transaction"> | number
    ticket_id?: IntFilter<"Transaction"> | number
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    montant?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntWithAggregatesFilter<"Transaction"> | number
    ticket_id?: IntWithAggregatesFilter<"Transaction"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    utilisateur_id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    date_envoi?: DateTimeFilter<"Notification"> | Date | string
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    message?: SortOrder
    date_envoi?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    utilisateur_id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    date_envoi?: DateTimeFilter<"Notification"> | Date | string
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    message?: SortOrder
    date_envoi?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    utilisateur_id?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    date_envoi?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type HistoriqueTicketWhereInput = {
    AND?: HistoriqueTicketWhereInput | HistoriqueTicketWhereInput[]
    OR?: HistoriqueTicketWhereInput[]
    NOT?: HistoriqueTicketWhereInput | HistoriqueTicketWhereInput[]
    id?: IntFilter<"HistoriqueTicket"> | number
    utilisateur_id?: IntFilter<"HistoriqueTicket"> | number
    ticket_id?: IntFilter<"HistoriqueTicket"> | number
    date_achat?: DateTimeFilter<"HistoriqueTicket"> | Date | string
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type HistoriqueTicketOrderByWithRelationInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    date_achat?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type HistoriqueTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoriqueTicketWhereInput | HistoriqueTicketWhereInput[]
    OR?: HistoriqueTicketWhereInput[]
    NOT?: HistoriqueTicketWhereInput | HistoriqueTicketWhereInput[]
    utilisateur_id?: IntFilter<"HistoriqueTicket"> | number
    ticket_id?: IntFilter<"HistoriqueTicket"> | number
    date_achat?: DateTimeFilter<"HistoriqueTicket"> | Date | string
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id">

  export type HistoriqueTicketOrderByWithAggregationInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    date_achat?: SortOrder
    _count?: HistoriqueTicketCountOrderByAggregateInput
    _avg?: HistoriqueTicketAvgOrderByAggregateInput
    _max?: HistoriqueTicketMaxOrderByAggregateInput
    _min?: HistoriqueTicketMinOrderByAggregateInput
    _sum?: HistoriqueTicketSumOrderByAggregateInput
  }

  export type HistoriqueTicketScalarWhereWithAggregatesInput = {
    AND?: HistoriqueTicketScalarWhereWithAggregatesInput | HistoriqueTicketScalarWhereWithAggregatesInput[]
    OR?: HistoriqueTicketScalarWhereWithAggregatesInput[]
    NOT?: HistoriqueTicketScalarWhereWithAggregatesInput | HistoriqueTicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistoriqueTicket"> | number
    utilisateur_id?: IntWithAggregatesFilter<"HistoriqueTicket"> | number
    ticket_id?: IntWithAggregatesFilter<"HistoriqueTicket"> | number
    date_achat?: DateTimeWithAggregatesFilter<"HistoriqueTicket"> | Date | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id?: IntFilter<"Paiement"> | number
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFilter<"Paiement"> | string
    utilisateur_id?: IntFilter<"Paiement"> | number
    ticket_id?: IntFilter<"Paiement"> | number
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type PaiementOrderByWithRelationInput = {
    id?: SortOrder
    montant?: SortOrder
    type_paiement?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFilter<"Paiement"> | string
    utilisateur_id?: IntFilter<"Paiement"> | number
    ticket_id?: IntFilter<"Paiement"> | number
    utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id">

  export type PaiementOrderByWithAggregationInput = {
    id?: SortOrder
    montant?: SortOrder
    type_paiement?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paiement"> | number
    montant?: DecimalWithAggregatesFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    type_paiement?: StringWithAggregatesFilter<"Paiement"> | string
    utilisateur_id?: IntWithAggregatesFilter<"Paiement"> | number
    ticket_id?: IntWithAggregatesFilter<"Paiement"> | number
  }

  export type AgenceCreateInput = {
    nom: string
    ville: string
    pays: string
    buss?: BusCreateNestedManyWithoutAgenceInput
    tickets?: TicketCreateNestedManyWithoutAgenceInput
  }

  export type AgenceUncheckedCreateInput = {
    id?: number
    nom: string
    ville: string
    pays: string
    buss?: BusUncheckedCreateNestedManyWithoutAgenceInput
    tickets?: TicketUncheckedCreateNestedManyWithoutAgenceInput
  }

  export type AgenceUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    buss?: BusUpdateManyWithoutAgenceNestedInput
    tickets?: TicketUpdateManyWithoutAgenceNestedInput
  }

  export type AgenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    buss?: BusUncheckedUpdateManyWithoutAgenceNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutAgenceNestedInput
  }

  export type AgenceCreateManyInput = {
    id?: number
    nom: string
    ville: string
    pays: string
  }

  export type AgenceUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
  }

  export type AgenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
  }

  export type BusCreateInput = {
    numero: number
    modele: string
    capacite: number
    heure_depart: Date | string
    heure_arrivee: Date | string
    tickets?: TicketCreateNestedManyWithoutBusInput
    agence: AgenceCreateNestedOneWithoutBussInput
  }

  export type BusUncheckedCreateInput = {
    id?: number
    numero: number
    modele: string
    capacite: number
    agence_id: number
    heure_depart: Date | string
    heure_arrivee: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutBusNestedInput
    agence?: AgenceUpdateOneRequiredWithoutBussNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    agence_id?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: number
    numero: number
    modele: string
    capacite: number
    agence_id: number
    heure_depart: Date | string
    heure_arrivee: Date | string
  }

  export type BusUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    agence_id?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    place_disponible: number
    agence: AgenceCreateNestedOneWithoutTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    reservations?: ReservationCreateNestedManyWithoutTicketInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutTicketInput
    paiement?: PaiementCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    bus_id: number
    place_disponible: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTicketInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutTicketInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
    agence?: AgenceUpdateOneRequiredWithoutTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    reservations?: ReservationUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    bus_id: number
    place_disponible: number
  }

  export type TicketUpdateManyMutationInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
  }

  export type UtilisateurCreateInput = {
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
  }

  export type UtilisateurUpdateManyMutationInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    nom_fichier: string
    chemin: string
    type: string
    taille: number
    description?: string | null
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    nom_fichier: string
    chemin: string
    type: string
    taille: number
    description?: string | null
  }

  export type ImageUpdateInput = {
    nom_fichier?: StringFieldUpdateOperationsInput | string
    chemin?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taille?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_fichier?: StringFieldUpdateOperationsInput | string
    chemin?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taille?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageCreateManyInput = {
    id?: number
    nom_fichier: string
    chemin: string
    type: string
    taille: number
    description?: string | null
  }

  export type ImageUpdateManyMutationInput = {
    nom_fichier?: StringFieldUpdateOperationsInput | string
    chemin?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taille?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom_fichier?: StringFieldUpdateOperationsInput | string
    chemin?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    taille?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationCreateInput = {
    ticket: TicketCreateNestedOneWithoutReservationsInput
    utilisateur: UtilisateurCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    ticket_id: number
    utilisateur_id: number
  }

  export type ReservationUpdateInput = {
    ticket?: TicketUpdateOneRequiredWithoutReservationsNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyInput = {
    id?: number
    ticket_id: number
    utilisateur_id: number
  }

  export type ReservationUpdateManyMutationInput = {

  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    montant: Decimal | DecimalJsLike | number | string
    utilisateur: UtilisateurCreateNestedOneWithoutTransactionsInput
    ticket: TicketCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    utilisateur_id: number
    ticket_id: number
  }

  export type TransactionUpdateInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateManyInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    utilisateur_id: number
    ticket_id: number
  }

  export type TransactionUpdateManyMutationInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    message: string
    date_envoi: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutNotificationSInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    utilisateur_id: number
    message: string
    date_envoi: Date | string
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    date_envoi?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutNotificationSNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    date_envoi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    utilisateur_id: number
    message: string
    date_envoi: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    date_envoi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    date_envoi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueTicketCreateInput = {
    date_achat: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutHistoriqueTicketInput
    ticket: TicketCreateNestedOneWithoutHistoriqueTicketInput
  }

  export type HistoriqueTicketUncheckedCreateInput = {
    id?: number
    utilisateur_id: number
    ticket_id: number
    date_achat: Date | string
  }

  export type HistoriqueTicketUpdateInput = {
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutHistoriqueTicketNestedInput
    ticket?: TicketUpdateOneRequiredWithoutHistoriqueTicketNestedInput
  }

  export type HistoriqueTicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueTicketCreateManyInput = {
    id?: number
    utilisateur_id: number
    ticket_id: number
    date_achat: Date | string
  }

  export type HistoriqueTicketUpdateManyMutationInput = {
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueTicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateInput = {
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    utilisateur: UtilisateurCreateNestedOneWithoutPaiementInput
    ticket: TicketCreateNestedOneWithoutPaiementInput
  }

  export type PaiementUncheckedCreateInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    utilisateur_id: number
    ticket_id: number
  }

  export type PaiementUpdateInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutPaiementNestedInput
    ticket?: TicketUpdateOneRequiredWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaiementCreateManyInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    utilisateur_id: number
    ticket_id: number
  }

  export type PaiementUpdateManyMutationInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgenceCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
  }

  export type AgenceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgenceMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
  }

  export type AgenceMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    pays?: SortOrder
  }

  export type AgenceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AgenceRelationFilter = {
    is?: AgenceWhereInput
    isNot?: AgenceWhereInput
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    modele?: SortOrder
    capacite?: SortOrder
    agence_id?: SortOrder
    heure_depart?: SortOrder
    heure_arrivee?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
    agence_id?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    modele?: SortOrder
    capacite?: SortOrder
    agence_id?: SortOrder
    heure_depart?: SortOrder
    heure_arrivee?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    modele?: SortOrder
    capacite?: SortOrder
    agence_id?: SortOrder
    heure_depart?: SortOrder
    heure_arrivee?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacite?: SortOrder
    agence_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BusRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type HistoriqueTicketListRelationFilter = {
    every?: HistoriqueTicketWhereInput
    some?: HistoriqueTicketWhereInput
    none?: HistoriqueTicketWhereInput
  }

  export type PaiementListRelationFilter = {
    every?: PaiementWhereInput
    some?: PaiementWhereInput
    none?: PaiementWhereInput
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoriqueTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaiementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    matricule?: SortOrder
    prix?: SortOrder
    agence_id?: SortOrder
    bus_id?: SortOrder
    place_disponible?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    agence_id?: SortOrder
    bus_id?: SortOrder
    place_disponible?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    matricule?: SortOrder
    prix?: SortOrder
    agence_id?: SortOrder
    bus_id?: SortOrder
    place_disponible?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    matricule?: SortOrder
    prix?: SortOrder
    agence_id?: SortOrder
    bus_id?: SortOrder
    place_disponible?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    agence_id?: SortOrder
    bus_id?: SortOrder
    place_disponible?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    prenom?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    mot_de_passe?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    nom_fichier?: SortOrder
    chemin?: SortOrder
    type?: SortOrder
    taille?: SortOrder
    description?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    taille?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    nom_fichier?: SortOrder
    chemin?: SortOrder
    type?: SortOrder
    taille?: SortOrder
    description?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    nom_fichier?: SortOrder
    chemin?: SortOrder
    type?: SortOrder
    taille?: SortOrder
    description?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    taille?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type UtilisateurRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    utilisateur_id?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    utilisateur_id?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    utilisateur_id?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    utilisateur_id?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
    utilisateur_id?: SortOrder
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    message?: SortOrder
    date_envoi?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    message?: SortOrder
    date_envoi?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    message?: SortOrder
    date_envoi?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
  }

  export type HistoriqueTicketCountOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    date_achat?: SortOrder
  }

  export type HistoriqueTicketAvgOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type HistoriqueTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    date_achat?: SortOrder
  }

  export type HistoriqueTicketMinOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
    date_achat?: SortOrder
  }

  export type HistoriqueTicketSumOrderByAggregateInput = {
    id?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type PaiementCountOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    type_paiement?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    type_paiement?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    type_paiement?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    utilisateur_id?: SortOrder
    ticket_id?: SortOrder
  }

  export type BusCreateNestedManyWithoutAgenceInput = {
    create?: XOR<BusCreateWithoutAgenceInput, BusUncheckedCreateWithoutAgenceInput> | BusCreateWithoutAgenceInput[] | BusUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenceInput | BusCreateOrConnectWithoutAgenceInput[]
    createMany?: BusCreateManyAgenceInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutAgenceInput = {
    create?: XOR<TicketCreateWithoutAgenceInput, TicketUncheckedCreateWithoutAgenceInput> | TicketCreateWithoutAgenceInput[] | TicketUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgenceInput | TicketCreateOrConnectWithoutAgenceInput[]
    createMany?: TicketCreateManyAgenceInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutAgenceInput = {
    create?: XOR<BusCreateWithoutAgenceInput, BusUncheckedCreateWithoutAgenceInput> | BusCreateWithoutAgenceInput[] | BusUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenceInput | BusCreateOrConnectWithoutAgenceInput[]
    createMany?: BusCreateManyAgenceInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutAgenceInput = {
    create?: XOR<TicketCreateWithoutAgenceInput, TicketUncheckedCreateWithoutAgenceInput> | TicketCreateWithoutAgenceInput[] | TicketUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgenceInput | TicketCreateOrConnectWithoutAgenceInput[]
    createMany?: TicketCreateManyAgenceInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BusUpdateManyWithoutAgenceNestedInput = {
    create?: XOR<BusCreateWithoutAgenceInput, BusUncheckedCreateWithoutAgenceInput> | BusCreateWithoutAgenceInput[] | BusUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenceInput | BusCreateOrConnectWithoutAgenceInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutAgenceInput | BusUpsertWithWhereUniqueWithoutAgenceInput[]
    createMany?: BusCreateManyAgenceInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutAgenceInput | BusUpdateWithWhereUniqueWithoutAgenceInput[]
    updateMany?: BusUpdateManyWithWhereWithoutAgenceInput | BusUpdateManyWithWhereWithoutAgenceInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutAgenceNestedInput = {
    create?: XOR<TicketCreateWithoutAgenceInput, TicketUncheckedCreateWithoutAgenceInput> | TicketCreateWithoutAgenceInput[] | TicketUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgenceInput | TicketCreateOrConnectWithoutAgenceInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAgenceInput | TicketUpsertWithWhereUniqueWithoutAgenceInput[]
    createMany?: TicketCreateManyAgenceInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAgenceInput | TicketUpdateWithWhereUniqueWithoutAgenceInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAgenceInput | TicketUpdateManyWithWhereWithoutAgenceInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusUncheckedUpdateManyWithoutAgenceNestedInput = {
    create?: XOR<BusCreateWithoutAgenceInput, BusUncheckedCreateWithoutAgenceInput> | BusCreateWithoutAgenceInput[] | BusUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: BusCreateOrConnectWithoutAgenceInput | BusCreateOrConnectWithoutAgenceInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutAgenceInput | BusUpsertWithWhereUniqueWithoutAgenceInput[]
    createMany?: BusCreateManyAgenceInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutAgenceInput | BusUpdateWithWhereUniqueWithoutAgenceInput[]
    updateMany?: BusUpdateManyWithWhereWithoutAgenceInput | BusUpdateManyWithWhereWithoutAgenceInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutAgenceNestedInput = {
    create?: XOR<TicketCreateWithoutAgenceInput, TicketUncheckedCreateWithoutAgenceInput> | TicketCreateWithoutAgenceInput[] | TicketUncheckedCreateWithoutAgenceInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAgenceInput | TicketCreateOrConnectWithoutAgenceInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAgenceInput | TicketUpsertWithWhereUniqueWithoutAgenceInput[]
    createMany?: TicketCreateManyAgenceInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAgenceInput | TicketUpdateWithWhereUniqueWithoutAgenceInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAgenceInput | TicketUpdateManyWithWhereWithoutAgenceInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutBusInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type AgenceCreateNestedOneWithoutBussInput = {
    create?: XOR<AgenceCreateWithoutBussInput, AgenceUncheckedCreateWithoutBussInput>
    connectOrCreate?: AgenceCreateOrConnectWithoutBussInput
    connect?: AgenceWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TicketUpdateManyWithoutBusNestedInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusInput | TicketUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusInput | TicketUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusInput | TicketUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AgenceUpdateOneRequiredWithoutBussNestedInput = {
    create?: XOR<AgenceCreateWithoutBussInput, AgenceUncheckedCreateWithoutBussInput>
    connectOrCreate?: AgenceCreateOrConnectWithoutBussInput
    upsert?: AgenceUpsertWithoutBussInput
    connect?: AgenceWhereUniqueInput
    update?: XOR<XOR<AgenceUpdateToOneWithWhereWithoutBussInput, AgenceUpdateWithoutBussInput>, AgenceUncheckedUpdateWithoutBussInput>
  }

  export type TicketUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput> | TicketCreateWithoutBusInput[] | TicketUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutBusInput | TicketCreateOrConnectWithoutBusInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutBusInput | TicketUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TicketCreateManyBusInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutBusInput | TicketUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutBusInput | TicketUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type AgenceCreateNestedOneWithoutTicketsInput = {
    create?: XOR<AgenceCreateWithoutTicketsInput, AgenceUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: AgenceCreateOrConnectWithoutTicketsInput
    connect?: AgenceWhereUniqueInput
  }

  export type BusCreateNestedOneWithoutTicketsInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    connect?: BusWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutTicketInput = {
    create?: XOR<ReservationCreateWithoutTicketInput, ReservationUncheckedCreateWithoutTicketInput> | ReservationCreateWithoutTicketInput[] | ReservationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTicketInput | ReservationCreateOrConnectWithoutTicketInput[]
    createMany?: ReservationCreateManyTicketInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type HistoriqueTicketCreateNestedManyWithoutTicketInput = {
    create?: XOR<HistoriqueTicketCreateWithoutTicketInput, HistoriqueTicketUncheckedCreateWithoutTicketInput> | HistoriqueTicketCreateWithoutTicketInput[] | HistoriqueTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutTicketInput | HistoriqueTicketCreateOrConnectWithoutTicketInput[]
    createMany?: HistoriqueTicketCreateManyTicketInputEnvelope
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
  }

  export type PaiementCreateNestedManyWithoutTicketInput = {
    create?: XOR<PaiementCreateWithoutTicketInput, PaiementUncheckedCreateWithoutTicketInput> | PaiementCreateWithoutTicketInput[] | PaiementUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutTicketInput | PaiementCreateOrConnectWithoutTicketInput[]
    createMany?: PaiementCreateManyTicketInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<ReservationCreateWithoutTicketInput, ReservationUncheckedCreateWithoutTicketInput> | ReservationCreateWithoutTicketInput[] | ReservationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTicketInput | ReservationCreateOrConnectWithoutTicketInput[]
    createMany?: ReservationCreateManyTicketInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type HistoriqueTicketUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<HistoriqueTicketCreateWithoutTicketInput, HistoriqueTicketUncheckedCreateWithoutTicketInput> | HistoriqueTicketCreateWithoutTicketInput[] | HistoriqueTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutTicketInput | HistoriqueTicketCreateOrConnectWithoutTicketInput[]
    createMany?: HistoriqueTicketCreateManyTicketInputEnvelope
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<PaiementCreateWithoutTicketInput, PaiementUncheckedCreateWithoutTicketInput> | PaiementCreateWithoutTicketInput[] | PaiementUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutTicketInput | PaiementCreateOrConnectWithoutTicketInput[]
    createMany?: PaiementCreateManyTicketInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AgenceUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<AgenceCreateWithoutTicketsInput, AgenceUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: AgenceCreateOrConnectWithoutTicketsInput
    upsert?: AgenceUpsertWithoutTicketsInput
    connect?: AgenceWhereUniqueInput
    update?: XOR<XOR<AgenceUpdateToOneWithWhereWithoutTicketsInput, AgenceUpdateWithoutTicketsInput>, AgenceUncheckedUpdateWithoutTicketsInput>
  }

  export type BusUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTicketsInput
    upsert?: BusUpsertWithoutTicketsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutTicketsInput, BusUpdateWithoutTicketsInput>, BusUncheckedUpdateWithoutTicketsInput>
  }

  export type ReservationUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ReservationCreateWithoutTicketInput, ReservationUncheckedCreateWithoutTicketInput> | ReservationCreateWithoutTicketInput[] | ReservationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTicketInput | ReservationCreateOrConnectWithoutTicketInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTicketInput | ReservationUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ReservationCreateManyTicketInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTicketInput | ReservationUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTicketInput | ReservationUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type HistoriqueTicketUpdateManyWithoutTicketNestedInput = {
    create?: XOR<HistoriqueTicketCreateWithoutTicketInput, HistoriqueTicketUncheckedCreateWithoutTicketInput> | HistoriqueTicketCreateWithoutTicketInput[] | HistoriqueTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutTicketInput | HistoriqueTicketCreateOrConnectWithoutTicketInput[]
    upsert?: HistoriqueTicketUpsertWithWhereUniqueWithoutTicketInput | HistoriqueTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: HistoriqueTicketCreateManyTicketInputEnvelope
    set?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    disconnect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    delete?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    update?: HistoriqueTicketUpdateWithWhereUniqueWithoutTicketInput | HistoriqueTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: HistoriqueTicketUpdateManyWithWhereWithoutTicketInput | HistoriqueTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: HistoriqueTicketScalarWhereInput | HistoriqueTicketScalarWhereInput[]
  }

  export type PaiementUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PaiementCreateWithoutTicketInput, PaiementUncheckedCreateWithoutTicketInput> | PaiementCreateWithoutTicketInput[] | PaiementUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutTicketInput | PaiementCreateOrConnectWithoutTicketInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutTicketInput | PaiementUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PaiementCreateManyTicketInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutTicketInput | PaiementUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutTicketInput | PaiementUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ReservationCreateWithoutTicketInput, ReservationUncheckedCreateWithoutTicketInput> | ReservationCreateWithoutTicketInput[] | ReservationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutTicketInput | ReservationCreateOrConnectWithoutTicketInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutTicketInput | ReservationUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ReservationCreateManyTicketInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutTicketInput | ReservationUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutTicketInput | ReservationUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type HistoriqueTicketUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<HistoriqueTicketCreateWithoutTicketInput, HistoriqueTicketUncheckedCreateWithoutTicketInput> | HistoriqueTicketCreateWithoutTicketInput[] | HistoriqueTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutTicketInput | HistoriqueTicketCreateOrConnectWithoutTicketInput[]
    upsert?: HistoriqueTicketUpsertWithWhereUniqueWithoutTicketInput | HistoriqueTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: HistoriqueTicketCreateManyTicketInputEnvelope
    set?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    disconnect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    delete?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    update?: HistoriqueTicketUpdateWithWhereUniqueWithoutTicketInput | HistoriqueTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: HistoriqueTicketUpdateManyWithWhereWithoutTicketInput | HistoriqueTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: HistoriqueTicketScalarWhereInput | HistoriqueTicketScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PaiementCreateWithoutTicketInput, PaiementUncheckedCreateWithoutTicketInput> | PaiementCreateWithoutTicketInput[] | PaiementUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutTicketInput | PaiementCreateOrConnectWithoutTicketInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutTicketInput | PaiementUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PaiementCreateManyTicketInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutTicketInput | PaiementUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutTicketInput | PaiementUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ReservationCreateWithoutUtilisateurInput, ReservationUncheckedCreateWithoutUtilisateurInput> | ReservationCreateWithoutUtilisateurInput[] | ReservationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUtilisateurInput | ReservationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ReservationCreateManyUtilisateurInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<TransactionCreateWithoutUtilisateurInput, TransactionUncheckedCreateWithoutUtilisateurInput> | TransactionCreateWithoutUtilisateurInput[] | TransactionUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUtilisateurInput | TransactionCreateOrConnectWithoutUtilisateurInput[]
    createMany?: TransactionCreateManyUtilisateurInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HistoriqueTicketCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<HistoriqueTicketCreateWithoutUtilisateurInput, HistoriqueTicketUncheckedCreateWithoutUtilisateurInput> | HistoriqueTicketCreateWithoutUtilisateurInput[] | HistoriqueTicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutUtilisateurInput | HistoriqueTicketCreateOrConnectWithoutUtilisateurInput[]
    createMany?: HistoriqueTicketCreateManyUtilisateurInputEnvelope
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
  }

  export type PaiementCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ReservationCreateWithoutUtilisateurInput, ReservationUncheckedCreateWithoutUtilisateurInput> | ReservationCreateWithoutUtilisateurInput[] | ReservationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUtilisateurInput | ReservationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ReservationCreateManyUtilisateurInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<TransactionCreateWithoutUtilisateurInput, TransactionUncheckedCreateWithoutUtilisateurInput> | TransactionCreateWithoutUtilisateurInput[] | TransactionUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUtilisateurInput | TransactionCreateOrConnectWithoutUtilisateurInput[]
    createMany?: TransactionCreateManyUtilisateurInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type HistoriqueTicketUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<HistoriqueTicketCreateWithoutUtilisateurInput, HistoriqueTicketUncheckedCreateWithoutUtilisateurInput> | HistoriqueTicketCreateWithoutUtilisateurInput[] | HistoriqueTicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutUtilisateurInput | HistoriqueTicketCreateOrConnectWithoutUtilisateurInput[]
    createMany?: HistoriqueTicketCreateManyUtilisateurInputEnvelope
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ReservationCreateWithoutUtilisateurInput, ReservationUncheckedCreateWithoutUtilisateurInput> | ReservationCreateWithoutUtilisateurInput[] | ReservationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUtilisateurInput | ReservationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUtilisateurInput | ReservationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ReservationCreateManyUtilisateurInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUtilisateurInput | ReservationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUtilisateurInput | ReservationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<TransactionCreateWithoutUtilisateurInput, TransactionUncheckedCreateWithoutUtilisateurInput> | TransactionCreateWithoutUtilisateurInput[] | TransactionUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUtilisateurInput | TransactionCreateOrConnectWithoutUtilisateurInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUtilisateurInput | TransactionUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: TransactionCreateManyUtilisateurInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUtilisateurInput | TransactionUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUtilisateurInput | TransactionUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HistoriqueTicketUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<HistoriqueTicketCreateWithoutUtilisateurInput, HistoriqueTicketUncheckedCreateWithoutUtilisateurInput> | HistoriqueTicketCreateWithoutUtilisateurInput[] | HistoriqueTicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutUtilisateurInput | HistoriqueTicketCreateOrConnectWithoutUtilisateurInput[]
    upsert?: HistoriqueTicketUpsertWithWhereUniqueWithoutUtilisateurInput | HistoriqueTicketUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: HistoriqueTicketCreateManyUtilisateurInputEnvelope
    set?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    disconnect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    delete?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    update?: HistoriqueTicketUpdateWithWhereUniqueWithoutUtilisateurInput | HistoriqueTicketUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: HistoriqueTicketUpdateManyWithWhereWithoutUtilisateurInput | HistoriqueTicketUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: HistoriqueTicketScalarWhereInput | HistoriqueTicketScalarWhereInput[]
  }

  export type PaiementUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutUtilisateurInput | PaiementUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutUtilisateurInput | PaiementUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutUtilisateurInput | PaiementUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ReservationCreateWithoutUtilisateurInput, ReservationUncheckedCreateWithoutUtilisateurInput> | ReservationCreateWithoutUtilisateurInput[] | ReservationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUtilisateurInput | ReservationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUtilisateurInput | ReservationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ReservationCreateManyUtilisateurInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUtilisateurInput | ReservationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUtilisateurInput | ReservationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<TransactionCreateWithoutUtilisateurInput, TransactionUncheckedCreateWithoutUtilisateurInput> | TransactionCreateWithoutUtilisateurInput[] | TransactionUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUtilisateurInput | TransactionCreateOrConnectWithoutUtilisateurInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUtilisateurInput | TransactionUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: TransactionCreateManyUtilisateurInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUtilisateurInput | TransactionUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUtilisateurInput | TransactionUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput> | NotificationCreateWithoutUtilisateurInput[] | NotificationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUtilisateurInput | NotificationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUtilisateurInput | NotificationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: NotificationCreateManyUtilisateurInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUtilisateurInput | NotificationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUtilisateurInput | NotificationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<HistoriqueTicketCreateWithoutUtilisateurInput, HistoriqueTicketUncheckedCreateWithoutUtilisateurInput> | HistoriqueTicketCreateWithoutUtilisateurInput[] | HistoriqueTicketUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: HistoriqueTicketCreateOrConnectWithoutUtilisateurInput | HistoriqueTicketCreateOrConnectWithoutUtilisateurInput[]
    upsert?: HistoriqueTicketUpsertWithWhereUniqueWithoutUtilisateurInput | HistoriqueTicketUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: HistoriqueTicketCreateManyUtilisateurInputEnvelope
    set?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    disconnect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    delete?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    connect?: HistoriqueTicketWhereUniqueInput | HistoriqueTicketWhereUniqueInput[]
    update?: HistoriqueTicketUpdateWithWhereUniqueWithoutUtilisateurInput | HistoriqueTicketUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: HistoriqueTicketUpdateManyWithWhereWithoutUtilisateurInput | HistoriqueTicketUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: HistoriqueTicketScalarWhereInput | HistoriqueTicketScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput> | PaiementCreateWithoutUtilisateurInput[] | PaiementUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: PaiementCreateOrConnectWithoutUtilisateurInput | PaiementCreateOrConnectWithoutUtilisateurInput[]
    upsert?: PaiementUpsertWithWhereUniqueWithoutUtilisateurInput | PaiementUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: PaiementCreateManyUtilisateurInputEnvelope
    set?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    disconnect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    delete?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    connect?: PaiementWhereUniqueInput | PaiementWhereUniqueInput[]
    update?: PaiementUpdateWithWhereUniqueWithoutUtilisateurInput | PaiementUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: PaiementUpdateManyWithWhereWithoutUtilisateurInput | PaiementUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TicketCreateNestedOneWithoutReservationsInput = {
    create?: XOR<TicketCreateWithoutReservationsInput, TicketUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutReservationsInput
    connect?: TicketWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UtilisateurCreateWithoutReservationsInput, UtilisateurUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutReservationsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<TicketCreateWithoutReservationsInput, TicketUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutReservationsInput
    upsert?: TicketUpsertWithoutReservationsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutReservationsInput, TicketUpdateWithoutReservationsInput>, TicketUncheckedUpdateWithoutReservationsInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutReservationsInput, UtilisateurUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutReservationsInput
    upsert?: UtilisateurUpsertWithoutReservationsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutReservationsInput, UtilisateurUpdateWithoutReservationsInput>, UtilisateurUncheckedUpdateWithoutReservationsInput>
  }

  export type UtilisateurCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UtilisateurCreateWithoutTransactionsInput, UtilisateurUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutTransactionsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionsInput
    connect?: TicketWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutTransactionsInput, UtilisateurUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutTransactionsInput
    upsert?: UtilisateurUpsertWithoutTransactionsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutTransactionsInput, UtilisateurUpdateWithoutTransactionsInput>, UtilisateurUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionsInput
    upsert?: TicketUpsertWithoutTransactionsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTransactionsInput, TicketUpdateWithoutTransactionsInput>, TicketUncheckedUpdateWithoutTransactionsInput>
  }

  export type UtilisateurCreateNestedOneWithoutNotificationSInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationSInput, UtilisateurUncheckedCreateWithoutNotificationSInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationSInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutNotificationSNestedInput = {
    create?: XOR<UtilisateurCreateWithoutNotificationSInput, UtilisateurUncheckedCreateWithoutNotificationSInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutNotificationSInput
    upsert?: UtilisateurUpsertWithoutNotificationSInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutNotificationSInput, UtilisateurUpdateWithoutNotificationSInput>, UtilisateurUncheckedUpdateWithoutNotificationSInput>
  }

  export type UtilisateurCreateNestedOneWithoutHistoriqueTicketInput = {
    create?: XOR<UtilisateurCreateWithoutHistoriqueTicketInput, UtilisateurUncheckedCreateWithoutHistoriqueTicketInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutHistoriqueTicketInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutHistoriqueTicketInput = {
    create?: XOR<TicketCreateWithoutHistoriqueTicketInput, TicketUncheckedCreateWithoutHistoriqueTicketInput>
    connectOrCreate?: TicketCreateOrConnectWithoutHistoriqueTicketInput
    connect?: TicketWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutHistoriqueTicketNestedInput = {
    create?: XOR<UtilisateurCreateWithoutHistoriqueTicketInput, UtilisateurUncheckedCreateWithoutHistoriqueTicketInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutHistoriqueTicketInput
    upsert?: UtilisateurUpsertWithoutHistoriqueTicketInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutHistoriqueTicketInput, UtilisateurUpdateWithoutHistoriqueTicketInput>, UtilisateurUncheckedUpdateWithoutHistoriqueTicketInput>
  }

  export type TicketUpdateOneRequiredWithoutHistoriqueTicketNestedInput = {
    create?: XOR<TicketCreateWithoutHistoriqueTicketInput, TicketUncheckedCreateWithoutHistoriqueTicketInput>
    connectOrCreate?: TicketCreateOrConnectWithoutHistoriqueTicketInput
    upsert?: TicketUpsertWithoutHistoriqueTicketInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutHistoriqueTicketInput, TicketUpdateWithoutHistoriqueTicketInput>, TicketUncheckedUpdateWithoutHistoriqueTicketInput>
  }

  export type UtilisateurCreateNestedOneWithoutPaiementInput = {
    create?: XOR<UtilisateurCreateWithoutPaiementInput, UtilisateurUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPaiementInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutPaiementInput = {
    create?: XOR<TicketCreateWithoutPaiementInput, TicketUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPaiementInput
    connect?: TicketWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutPaiementNestedInput = {
    create?: XOR<UtilisateurCreateWithoutPaiementInput, UtilisateurUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutPaiementInput
    upsert?: UtilisateurUpsertWithoutPaiementInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutPaiementInput, UtilisateurUpdateWithoutPaiementInput>, UtilisateurUncheckedUpdateWithoutPaiementInput>
  }

  export type TicketUpdateOneRequiredWithoutPaiementNestedInput = {
    create?: XOR<TicketCreateWithoutPaiementInput, TicketUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPaiementInput
    upsert?: TicketUpsertWithoutPaiementInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutPaiementInput, TicketUpdateWithoutPaiementInput>, TicketUncheckedUpdateWithoutPaiementInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BusCreateWithoutAgenceInput = {
    numero: number
    modele: string
    capacite: number
    heure_depart: Date | string
    heure_arrivee: Date | string
    tickets?: TicketCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutAgenceInput = {
    id?: number
    numero: number
    modele: string
    capacite: number
    heure_depart: Date | string
    heure_arrivee: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutAgenceInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutAgenceInput, BusUncheckedCreateWithoutAgenceInput>
  }

  export type BusCreateManyAgenceInputEnvelope = {
    data: BusCreateManyAgenceInput | BusCreateManyAgenceInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutAgenceInput = {
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    place_disponible: number
    bus: BusCreateNestedOneWithoutTicketsInput
    reservations?: ReservationCreateNestedManyWithoutTicketInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutTicketInput
    paiement?: PaiementCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAgenceInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    bus_id: number
    place_disponible: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTicketInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutTicketInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAgenceInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAgenceInput, TicketUncheckedCreateWithoutAgenceInput>
  }

  export type TicketCreateManyAgenceInputEnvelope = {
    data: TicketCreateManyAgenceInput | TicketCreateManyAgenceInput[]
    skipDuplicates?: boolean
  }

  export type BusUpsertWithWhereUniqueWithoutAgenceInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutAgenceInput, BusUncheckedUpdateWithoutAgenceInput>
    create: XOR<BusCreateWithoutAgenceInput, BusUncheckedCreateWithoutAgenceInput>
  }

  export type BusUpdateWithWhereUniqueWithoutAgenceInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutAgenceInput, BusUncheckedUpdateWithoutAgenceInput>
  }

  export type BusUpdateManyWithWhereWithoutAgenceInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutAgenceInput>
  }

  export type BusScalarWhereInput = {
    AND?: BusScalarWhereInput | BusScalarWhereInput[]
    OR?: BusScalarWhereInput[]
    NOT?: BusScalarWhereInput | BusScalarWhereInput[]
    id?: IntFilter<"Bus"> | number
    numero?: IntFilter<"Bus"> | number
    modele?: StringFilter<"Bus"> | string
    capacite?: IntFilter<"Bus"> | number
    agence_id?: IntFilter<"Bus"> | number
    heure_depart?: DateTimeFilter<"Bus"> | Date | string
    heure_arrivee?: DateTimeFilter<"Bus"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutAgenceInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutAgenceInput, TicketUncheckedUpdateWithoutAgenceInput>
    create: XOR<TicketCreateWithoutAgenceInput, TicketUncheckedCreateWithoutAgenceInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutAgenceInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutAgenceInput, TicketUncheckedUpdateWithoutAgenceInput>
  }

  export type TicketUpdateManyWithWhereWithoutAgenceInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutAgenceInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    matricule?: StringFilter<"Ticket"> | string
    prix?: DecimalFilter<"Ticket"> | Decimal | DecimalJsLike | number | string
    agence_id?: IntFilter<"Ticket"> | number
    bus_id?: IntFilter<"Ticket"> | number
    place_disponible?: IntFilter<"Ticket"> | number
  }

  export type TicketCreateWithoutBusInput = {
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    place_disponible: number
    agence: AgenceCreateNestedOneWithoutTicketsInput
    reservations?: ReservationCreateNestedManyWithoutTicketInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutTicketInput
    paiement?: PaiementCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutBusInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    place_disponible: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTicketInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutTicketInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutBusInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput>
  }

  export type TicketCreateManyBusInputEnvelope = {
    data: TicketCreateManyBusInput | TicketCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type AgenceCreateWithoutBussInput = {
    nom: string
    ville: string
    pays: string
    tickets?: TicketCreateNestedManyWithoutAgenceInput
  }

  export type AgenceUncheckedCreateWithoutBussInput = {
    id?: number
    nom: string
    ville: string
    pays: string
    tickets?: TicketUncheckedCreateNestedManyWithoutAgenceInput
  }

  export type AgenceCreateOrConnectWithoutBussInput = {
    where: AgenceWhereUniqueInput
    create: XOR<AgenceCreateWithoutBussInput, AgenceUncheckedCreateWithoutBussInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutBusInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutBusInput, TicketUncheckedUpdateWithoutBusInput>
    create: XOR<TicketCreateWithoutBusInput, TicketUncheckedCreateWithoutBusInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutBusInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutBusInput, TicketUncheckedUpdateWithoutBusInput>
  }

  export type TicketUpdateManyWithWhereWithoutBusInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutBusInput>
  }

  export type AgenceUpsertWithoutBussInput = {
    update: XOR<AgenceUpdateWithoutBussInput, AgenceUncheckedUpdateWithoutBussInput>
    create: XOR<AgenceCreateWithoutBussInput, AgenceUncheckedCreateWithoutBussInput>
    where?: AgenceWhereInput
  }

  export type AgenceUpdateToOneWithWhereWithoutBussInput = {
    where?: AgenceWhereInput
    data: XOR<AgenceUpdateWithoutBussInput, AgenceUncheckedUpdateWithoutBussInput>
  }

  export type AgenceUpdateWithoutBussInput = {
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutAgenceNestedInput
  }

  export type AgenceUncheckedUpdateWithoutBussInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutAgenceNestedInput
  }

  export type AgenceCreateWithoutTicketsInput = {
    nom: string
    ville: string
    pays: string
    buss?: BusCreateNestedManyWithoutAgenceInput
  }

  export type AgenceUncheckedCreateWithoutTicketsInput = {
    id?: number
    nom: string
    ville: string
    pays: string
    buss?: BusUncheckedCreateNestedManyWithoutAgenceInput
  }

  export type AgenceCreateOrConnectWithoutTicketsInput = {
    where: AgenceWhereUniqueInput
    create: XOR<AgenceCreateWithoutTicketsInput, AgenceUncheckedCreateWithoutTicketsInput>
  }

  export type BusCreateWithoutTicketsInput = {
    numero: number
    modele: string
    capacite: number
    heure_depart: Date | string
    heure_arrivee: Date | string
    agence: AgenceCreateNestedOneWithoutBussInput
  }

  export type BusUncheckedCreateWithoutTicketsInput = {
    id?: number
    numero: number
    modele: string
    capacite: number
    agence_id: number
    heure_depart: Date | string
    heure_arrivee: Date | string
  }

  export type BusCreateOrConnectWithoutTicketsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
  }

  export type ReservationCreateWithoutTicketInput = {
    utilisateur: UtilisateurCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutTicketInput = {
    id?: number
    utilisateur_id: number
  }

  export type ReservationCreateOrConnectWithoutTicketInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutTicketInput, ReservationUncheckedCreateWithoutTicketInput>
  }

  export type ReservationCreateManyTicketInputEnvelope = {
    data: ReservationCreateManyTicketInput | ReservationCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutTicketInput = {
    montant: Decimal | DecimalJsLike | number | string
    utilisateur: UtilisateurCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutTicketInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    utilisateur_id: number
  }

  export type TransactionCreateOrConnectWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionCreateManyTicketInputEnvelope = {
    data: TransactionCreateManyTicketInput | TransactionCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type HistoriqueTicketCreateWithoutTicketInput = {
    date_achat: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutHistoriqueTicketInput
  }

  export type HistoriqueTicketUncheckedCreateWithoutTicketInput = {
    id?: number
    utilisateur_id: number
    date_achat: Date | string
  }

  export type HistoriqueTicketCreateOrConnectWithoutTicketInput = {
    where: HistoriqueTicketWhereUniqueInput
    create: XOR<HistoriqueTicketCreateWithoutTicketInput, HistoriqueTicketUncheckedCreateWithoutTicketInput>
  }

  export type HistoriqueTicketCreateManyTicketInputEnvelope = {
    data: HistoriqueTicketCreateManyTicketInput | HistoriqueTicketCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type PaiementCreateWithoutTicketInput = {
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    utilisateur: UtilisateurCreateNestedOneWithoutPaiementInput
  }

  export type PaiementUncheckedCreateWithoutTicketInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    utilisateur_id: number
  }

  export type PaiementCreateOrConnectWithoutTicketInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutTicketInput, PaiementUncheckedCreateWithoutTicketInput>
  }

  export type PaiementCreateManyTicketInputEnvelope = {
    data: PaiementCreateManyTicketInput | PaiementCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type AgenceUpsertWithoutTicketsInput = {
    update: XOR<AgenceUpdateWithoutTicketsInput, AgenceUncheckedUpdateWithoutTicketsInput>
    create: XOR<AgenceCreateWithoutTicketsInput, AgenceUncheckedCreateWithoutTicketsInput>
    where?: AgenceWhereInput
  }

  export type AgenceUpdateToOneWithWhereWithoutTicketsInput = {
    where?: AgenceWhereInput
    data: XOR<AgenceUpdateWithoutTicketsInput, AgenceUncheckedUpdateWithoutTicketsInput>
  }

  export type AgenceUpdateWithoutTicketsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    buss?: BusUpdateManyWithoutAgenceNestedInput
  }

  export type AgenceUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    buss?: BusUncheckedUpdateManyWithoutAgenceNestedInput
  }

  export type BusUpsertWithoutTicketsInput = {
    update: XOR<BusUpdateWithoutTicketsInput, BusUncheckedUpdateWithoutTicketsInput>
    create: XOR<BusCreateWithoutTicketsInput, BusUncheckedCreateWithoutTicketsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutTicketsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutTicketsInput, BusUncheckedUpdateWithoutTicketsInput>
  }

  export type BusUpdateWithoutTicketsInput = {
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    agence?: AgenceUpdateOneRequiredWithoutBussNestedInput
  }

  export type BusUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    agence_id?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUpsertWithWhereUniqueWithoutTicketInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutTicketInput, ReservationUncheckedUpdateWithoutTicketInput>
    create: XOR<ReservationCreateWithoutTicketInput, ReservationUncheckedCreateWithoutTicketInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutTicketInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutTicketInput, ReservationUncheckedUpdateWithoutTicketInput>
  }

  export type ReservationUpdateManyWithWhereWithoutTicketInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutTicketInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    ticket_id?: IntFilter<"Reservation"> | number
    utilisateur_id?: IntFilter<"Reservation"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTicketInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTicketInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    montant?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntFilter<"Transaction"> | number
    ticket_id?: IntFilter<"Transaction"> | number
  }

  export type HistoriqueTicketUpsertWithWhereUniqueWithoutTicketInput = {
    where: HistoriqueTicketWhereUniqueInput
    update: XOR<HistoriqueTicketUpdateWithoutTicketInput, HistoriqueTicketUncheckedUpdateWithoutTicketInput>
    create: XOR<HistoriqueTicketCreateWithoutTicketInput, HistoriqueTicketUncheckedCreateWithoutTicketInput>
  }

  export type HistoriqueTicketUpdateWithWhereUniqueWithoutTicketInput = {
    where: HistoriqueTicketWhereUniqueInput
    data: XOR<HistoriqueTicketUpdateWithoutTicketInput, HistoriqueTicketUncheckedUpdateWithoutTicketInput>
  }

  export type HistoriqueTicketUpdateManyWithWhereWithoutTicketInput = {
    where: HistoriqueTicketScalarWhereInput
    data: XOR<HistoriqueTicketUpdateManyMutationInput, HistoriqueTicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type HistoriqueTicketScalarWhereInput = {
    AND?: HistoriqueTicketScalarWhereInput | HistoriqueTicketScalarWhereInput[]
    OR?: HistoriqueTicketScalarWhereInput[]
    NOT?: HistoriqueTicketScalarWhereInput | HistoriqueTicketScalarWhereInput[]
    id?: IntFilter<"HistoriqueTicket"> | number
    utilisateur_id?: IntFilter<"HistoriqueTicket"> | number
    ticket_id?: IntFilter<"HistoriqueTicket"> | number
    date_achat?: DateTimeFilter<"HistoriqueTicket"> | Date | string
  }

  export type PaiementUpsertWithWhereUniqueWithoutTicketInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutTicketInput, PaiementUncheckedUpdateWithoutTicketInput>
    create: XOR<PaiementCreateWithoutTicketInput, PaiementUncheckedCreateWithoutTicketInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutTicketInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutTicketInput, PaiementUncheckedUpdateWithoutTicketInput>
  }

  export type PaiementUpdateManyWithWhereWithoutTicketInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutTicketInput>
  }

  export type PaiementScalarWhereInput = {
    AND?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    OR?: PaiementScalarWhereInput[]
    NOT?: PaiementScalarWhereInput | PaiementScalarWhereInput[]
    id?: IntFilter<"Paiement"> | number
    montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFilter<"Paiement"> | string
    utilisateur_id?: IntFilter<"Paiement"> | number
    ticket_id?: IntFilter<"Paiement"> | number
  }

  export type ReservationCreateWithoutUtilisateurInput = {
    ticket: TicketCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    ticket_id: number
  }

  export type ReservationCreateOrConnectWithoutUtilisateurInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUtilisateurInput, ReservationUncheckedCreateWithoutUtilisateurInput>
  }

  export type ReservationCreateManyUtilisateurInputEnvelope = {
    data: ReservationCreateManyUtilisateurInput | ReservationCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUtilisateurInput = {
    montant: Decimal | DecimalJsLike | number | string
    ticket: TicketCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    ticket_id: number
  }

  export type TransactionCreateOrConnectWithoutUtilisateurInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUtilisateurInput, TransactionUncheckedCreateWithoutUtilisateurInput>
  }

  export type TransactionCreateManyUtilisateurInputEnvelope = {
    data: TransactionCreateManyUtilisateurInput | TransactionCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUtilisateurInput = {
    message: string
    date_envoi: Date | string
  }

  export type NotificationUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    message: string
    date_envoi: Date | string
  }

  export type NotificationCreateOrConnectWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationCreateManyUtilisateurInputEnvelope = {
    data: NotificationCreateManyUtilisateurInput | NotificationCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type HistoriqueTicketCreateWithoutUtilisateurInput = {
    date_achat: Date | string
    ticket: TicketCreateNestedOneWithoutHistoriqueTicketInput
  }

  export type HistoriqueTicketUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    ticket_id: number
    date_achat: Date | string
  }

  export type HistoriqueTicketCreateOrConnectWithoutUtilisateurInput = {
    where: HistoriqueTicketWhereUniqueInput
    create: XOR<HistoriqueTicketCreateWithoutUtilisateurInput, HistoriqueTicketUncheckedCreateWithoutUtilisateurInput>
  }

  export type HistoriqueTicketCreateManyUtilisateurInputEnvelope = {
    data: HistoriqueTicketCreateManyUtilisateurInput | HistoriqueTicketCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type PaiementCreateWithoutUtilisateurInput = {
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    ticket: TicketCreateNestedOneWithoutPaiementInput
  }

  export type PaiementUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    ticket_id: number
  }

  export type PaiementCreateOrConnectWithoutUtilisateurInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput>
  }

  export type PaiementCreateManyUtilisateurInputEnvelope = {
    data: PaiementCreateManyUtilisateurInput | PaiementCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUtilisateurInput, ReservationUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<ReservationCreateWithoutUtilisateurInput, ReservationUncheckedCreateWithoutUtilisateurInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUtilisateurInput, ReservationUncheckedUpdateWithoutUtilisateurInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUtilisateurInput, TransactionUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<TransactionCreateWithoutUtilisateurInput, TransactionUncheckedCreateWithoutUtilisateurInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUtilisateurInput, TransactionUncheckedUpdateWithoutUtilisateurInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUtilisateurInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<NotificationCreateWithoutUtilisateurInput, NotificationUncheckedCreateWithoutUtilisateurInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUtilisateurInput, NotificationUncheckedUpdateWithoutUtilisateurInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    utilisateur_id?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    date_envoi?: DateTimeFilter<"Notification"> | Date | string
  }

  export type HistoriqueTicketUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: HistoriqueTicketWhereUniqueInput
    update: XOR<HistoriqueTicketUpdateWithoutUtilisateurInput, HistoriqueTicketUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<HistoriqueTicketCreateWithoutUtilisateurInput, HistoriqueTicketUncheckedCreateWithoutUtilisateurInput>
  }

  export type HistoriqueTicketUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: HistoriqueTicketWhereUniqueInput
    data: XOR<HistoriqueTicketUpdateWithoutUtilisateurInput, HistoriqueTicketUncheckedUpdateWithoutUtilisateurInput>
  }

  export type HistoriqueTicketUpdateManyWithWhereWithoutUtilisateurInput = {
    where: HistoriqueTicketScalarWhereInput
    data: XOR<HistoriqueTicketUpdateManyMutationInput, HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type PaiementUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: PaiementWhereUniqueInput
    update: XOR<PaiementUpdateWithoutUtilisateurInput, PaiementUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<PaiementCreateWithoutUtilisateurInput, PaiementUncheckedCreateWithoutUtilisateurInput>
  }

  export type PaiementUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: PaiementWhereUniqueInput
    data: XOR<PaiementUpdateWithoutUtilisateurInput, PaiementUncheckedUpdateWithoutUtilisateurInput>
  }

  export type PaiementUpdateManyWithWhereWithoutUtilisateurInput = {
    where: PaiementScalarWhereInput
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type TicketCreateWithoutReservationsInput = {
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    place_disponible: number
    agence: AgenceCreateNestedOneWithoutTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutTicketInput
    paiement?: PaiementCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutReservationsInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    bus_id: number
    place_disponible: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutTicketInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutReservationsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutReservationsInput, TicketUncheckedCreateWithoutReservationsInput>
  }

  export type UtilisateurCreateWithoutReservationsInput = {
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    transactions?: TransactionCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutReservationsInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutReservationsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutReservationsInput, UtilisateurUncheckedCreateWithoutReservationsInput>
  }

  export type TicketUpsertWithoutReservationsInput = {
    update: XOR<TicketUpdateWithoutReservationsInput, TicketUncheckedUpdateWithoutReservationsInput>
    create: XOR<TicketCreateWithoutReservationsInput, TicketUncheckedCreateWithoutReservationsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutReservationsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutReservationsInput, TicketUncheckedUpdateWithoutReservationsInput>
  }

  export type TicketUpdateWithoutReservationsInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
    agence?: AgenceUpdateOneRequiredWithoutTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UtilisateurUpsertWithoutReservationsInput = {
    update: XOR<UtilisateurUpdateWithoutReservationsInput, UtilisateurUncheckedUpdateWithoutReservationsInput>
    create: XOR<UtilisateurCreateWithoutReservationsInput, UtilisateurUncheckedCreateWithoutReservationsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutReservationsInput, UtilisateurUncheckedUpdateWithoutReservationsInput>
  }

  export type UtilisateurUpdateWithoutReservationsInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateWithoutTransactionsInput = {
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutTransactionsInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutTransactionsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutTransactionsInput, UtilisateurUncheckedCreateWithoutTransactionsInput>
  }

  export type TicketCreateWithoutTransactionsInput = {
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    place_disponible: number
    agence: AgenceCreateNestedOneWithoutTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    reservations?: ReservationCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutTicketInput
    paiement?: PaiementCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTransactionsInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    bus_id: number
    place_disponible: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutTicketInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTransactionsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
  }

  export type UtilisateurUpsertWithoutTransactionsInput = {
    update: XOR<UtilisateurUpdateWithoutTransactionsInput, UtilisateurUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UtilisateurCreateWithoutTransactionsInput, UtilisateurUncheckedCreateWithoutTransactionsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutTransactionsInput, UtilisateurUncheckedUpdateWithoutTransactionsInput>
  }

  export type UtilisateurUpdateWithoutTransactionsInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type TicketUpsertWithoutTransactionsInput = {
    update: XOR<TicketUpdateWithoutTransactionsInput, TicketUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTransactionsInput, TicketUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketUpdateWithoutTransactionsInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
    agence?: AgenceUpdateOneRequiredWithoutTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    reservations?: ReservationUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UtilisateurCreateWithoutNotificationSInput = {
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutNotificationSInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutNotificationSInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutNotificationSInput, UtilisateurUncheckedCreateWithoutNotificationSInput>
  }

  export type UtilisateurUpsertWithoutNotificationSInput = {
    update: XOR<UtilisateurUpdateWithoutNotificationSInput, UtilisateurUncheckedUpdateWithoutNotificationSInput>
    create: XOR<UtilisateurCreateWithoutNotificationSInput, UtilisateurUncheckedCreateWithoutNotificationSInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutNotificationSInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutNotificationSInput, UtilisateurUncheckedUpdateWithoutNotificationSInput>
  }

  export type UtilisateurUpdateWithoutNotificationSInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutNotificationSInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateWithoutHistoriqueTicketInput = {
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutHistoriqueTicketInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutHistoriqueTicketInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutHistoriqueTicketInput, UtilisateurUncheckedCreateWithoutHistoriqueTicketInput>
  }

  export type TicketCreateWithoutHistoriqueTicketInput = {
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    place_disponible: number
    agence: AgenceCreateNestedOneWithoutTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    reservations?: ReservationCreateNestedManyWithoutTicketInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    paiement?: PaiementCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutHistoriqueTicketInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    bus_id: number
    place_disponible: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTicketInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    paiement?: PaiementUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutHistoriqueTicketInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutHistoriqueTicketInput, TicketUncheckedCreateWithoutHistoriqueTicketInput>
  }

  export type UtilisateurUpsertWithoutHistoriqueTicketInput = {
    update: XOR<UtilisateurUpdateWithoutHistoriqueTicketInput, UtilisateurUncheckedUpdateWithoutHistoriqueTicketInput>
    create: XOR<UtilisateurCreateWithoutHistoriqueTicketInput, UtilisateurUncheckedCreateWithoutHistoriqueTicketInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutHistoriqueTicketInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutHistoriqueTicketInput, UtilisateurUncheckedUpdateWithoutHistoriqueTicketInput>
  }

  export type UtilisateurUpdateWithoutHistoriqueTicketInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutHistoriqueTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type TicketUpsertWithoutHistoriqueTicketInput = {
    update: XOR<TicketUpdateWithoutHistoriqueTicketInput, TicketUncheckedUpdateWithoutHistoriqueTicketInput>
    create: XOR<TicketCreateWithoutHistoriqueTicketInput, TicketUncheckedCreateWithoutHistoriqueTicketInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutHistoriqueTicketInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutHistoriqueTicketInput, TicketUncheckedUpdateWithoutHistoriqueTicketInput>
  }

  export type TicketUpdateWithoutHistoriqueTicketInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
    agence?: AgenceUpdateOneRequiredWithoutTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    reservations?: ReservationUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutHistoriqueTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UtilisateurCreateWithoutPaiementInput = {
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutPaiementInput = {
    id?: number
    prenom: string
    nom: string
    email: string
    mot_de_passe: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUtilisateurInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUtilisateurInput
    notificationS?: NotificationUncheckedCreateNestedManyWithoutUtilisateurInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutPaiementInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutPaiementInput, UtilisateurUncheckedCreateWithoutPaiementInput>
  }

  export type TicketCreateWithoutPaiementInput = {
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    place_disponible: number
    agence: AgenceCreateNestedOneWithoutTicketsInput
    bus: BusCreateNestedOneWithoutTicketsInput
    reservations?: ReservationCreateNestedManyWithoutTicketInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutPaiementInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    bus_id: number
    place_disponible: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutTicketInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    historiqueTicket?: HistoriqueTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutPaiementInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPaiementInput, TicketUncheckedCreateWithoutPaiementInput>
  }

  export type UtilisateurUpsertWithoutPaiementInput = {
    update: XOR<UtilisateurUpdateWithoutPaiementInput, UtilisateurUncheckedUpdateWithoutPaiementInput>
    create: XOR<UtilisateurCreateWithoutPaiementInput, UtilisateurUncheckedCreateWithoutPaiementInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutPaiementInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutPaiementInput, UtilisateurUncheckedUpdateWithoutPaiementInput>
  }

  export type UtilisateurUpdateWithoutPaiementInput = {
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutPaiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    prenom?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutUtilisateurNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUtilisateurNestedInput
    notificationS?: NotificationUncheckedUpdateManyWithoutUtilisateurNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type TicketUpsertWithoutPaiementInput = {
    update: XOR<TicketUpdateWithoutPaiementInput, TicketUncheckedUpdateWithoutPaiementInput>
    create: XOR<TicketCreateWithoutPaiementInput, TicketUncheckedCreateWithoutPaiementInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutPaiementInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutPaiementInput, TicketUncheckedUpdateWithoutPaiementInput>
  }

  export type TicketUpdateWithoutPaiementInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
    agence?: AgenceUpdateOneRequiredWithoutTicketsNestedInput
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    reservations?: ReservationUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutPaiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type BusCreateManyAgenceInput = {
    id?: number
    numero: number
    modele: string
    capacite: number
    heure_depart: Date | string
    heure_arrivee: Date | string
  }

  export type TicketCreateManyAgenceInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    bus_id: number
    place_disponible: number
  }

  export type BusUpdateWithoutAgenceInput = {
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutAgenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutAgenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    modele?: StringFieldUpdateOperationsInput | string
    capacite?: IntFieldUpdateOperationsInput | number
    heure_depart?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_arrivee?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutAgenceInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
    bus?: BusUpdateOneRequiredWithoutTicketsNestedInput
    reservations?: ReservationUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAgenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutAgenceInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bus_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyBusInput = {
    id?: number
    matricule: string
    prix: Decimal | DecimalJsLike | number | string
    agence_id: number
    place_disponible: number
  }

  export type TicketUpdateWithoutBusInput = {
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    place_disponible?: IntFieldUpdateOperationsInput | number
    agence?: AgenceUpdateOneRequiredWithoutTicketsNestedInput
    reservations?: ReservationUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutTicketNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    historiqueTicket?: HistoriqueTicketUncheckedUpdateManyWithoutTicketNestedInput
    paiement?: PaiementUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricule?: StringFieldUpdateOperationsInput | string
    prix?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    agence_id?: IntFieldUpdateOperationsInput | number
    place_disponible?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyTicketInput = {
    id?: number
    utilisateur_id: number
  }

  export type TransactionCreateManyTicketInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    utilisateur_id: number
  }

  export type HistoriqueTicketCreateManyTicketInput = {
    id?: number
    utilisateur_id: number
    date_achat: Date | string
  }

  export type PaiementCreateManyTicketInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    utilisateur_id: number
  }

  export type ReservationUpdateWithoutTicketInput = {
    utilisateur?: UtilisateurUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutTicketInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriqueTicketUpdateWithoutTicketInput = {
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutHistoriqueTicketNestedInput
  }

  export type HistoriqueTicketUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueTicketUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    utilisateur_id?: IntFieldUpdateOperationsInput | number
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUpdateWithoutTicketInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaiementUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    utilisateur_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyUtilisateurInput = {
    id?: number
    ticket_id: number
  }

  export type TransactionCreateManyUtilisateurInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    ticket_id: number
  }

  export type NotificationCreateManyUtilisateurInput = {
    id?: number
    message: string
    date_envoi: Date | string
  }

  export type HistoriqueTicketCreateManyUtilisateurInput = {
    id?: number
    ticket_id: number
    date_achat: Date | string
  }

  export type PaiementCreateManyUtilisateurInput = {
    id?: number
    montant: Decimal | DecimalJsLike | number | string
    type_paiement: string
    ticket_id: number
  }

  export type ReservationUpdateWithoutUtilisateurInput = {
    ticket?: TicketUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutUtilisateurInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationUpdateWithoutUtilisateurInput = {
    message?: StringFieldUpdateOperationsInput | string
    date_envoi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    date_envoi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    date_envoi?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueTicketUpdateWithoutUtilisateurInput = {
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutHistoriqueTicketNestedInput
  }

  export type HistoriqueTicketUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueTicketUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticket_id?: IntFieldUpdateOperationsInput | number
    date_achat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUpdateWithoutUtilisateurInput = {
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUpdateOneRequiredWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaiementUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type_paiement?: StringFieldUpdateOperationsInput | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AgenceCountOutputTypeDefaultArgs instead
     */
    export type AgenceCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AgenceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusCountOutputTypeDefaultArgs instead
     */
    export type BusCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketCountOutputTypeDefaultArgs instead
     */
    export type TicketCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TicketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UtilisateurCountOutputTypeDefaultArgs instead
     */
    export type UtilisateurCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgenceDefaultArgs instead
     */
    export type AgenceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AgenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusDefaultArgs instead
     */
    export type BusArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BusDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TicketDefaultArgs instead
     */
    export type TicketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UtilisateurDefaultArgs instead
     */
    export type UtilisateurArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UtilisateurDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImageDefaultArgs instead
     */
    export type ImageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDefaultArgs instead
     */
    export type ReservationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificationDefaultArgs instead
     */
    export type NotificationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = NotificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoriqueTicketDefaultArgs instead
     */
    export type HistoriqueTicketArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = HistoriqueTicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaiementDefaultArgs instead
     */
    export type PaiementArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PaiementDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}