/**
* This file and any referenced files were automatically generated by @osmonauts/telescope@0.90.0
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
import Long from 'long';
export { Long };
export declare function bytesFromBase64(b64: string): Uint8Array;
export declare function base64FromBytes(arr: Uint8Array): string;
export interface AminoHeight {
    readonly revision_number?: string;
    readonly revision_height?: string;
}
export declare function omitDefault<T extends string | number | Long>(input: T): T | undefined;
interface Duration {
    /**
     * Signed seconds of the span of time. Must be from -315,576,000,000
     * to +315,576,000,000 inclusive. Note: these bounds are computed from:
     * 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
     */
    seconds: Long;
    /**
     * Signed fractions of a second at nanosecond resolution of the span
     * of time. Durations less than one second are represented with a 0
     * `seconds` field and a positive or negative `nanos` field. For durations
     * of one second or more, a non-zero value for the `nanos` field must be
     * of the same sign as the `seconds` field. Must be from -999,999,999
     * to +999,999,999 inclusive.
     */
    nanos: number;
}
export declare function toDuration(duration: string): Duration;
export declare function fromDuration(duration: Duration): string;
export declare function isSet(value: any): boolean;
export declare function isObject(value: any): boolean;
export interface PageRequest {
    key: Uint8Array;
    offset: Long;
    limit: Long;
    countTotal: boolean;
    reverse: boolean;
}
export interface PageRequestParams {
    "pagination.key"?: string;
    "pagination.offset"?: string;
    "pagination.limit"?: string;
    "pagination.count_total"?: boolean;
    "pagination.reverse"?: boolean;
}
export interface Params {
    params: PageRequestParams;
}
export declare const setPaginationParams: (options: Params, pagination?: PageRequest) => Params;
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
interface Timestamp {
    /**
     * Represents seconds of UTC time since Unix epoch
     * 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     * 9999-12-31T23:59:59Z inclusive.
     */
    seconds: Long;
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative
     * second values with fractions must still have non-negative nanos values
     * that count forward in time. Must be from 0 to 999,999,999
     * inclusive.
     */
    nanos: number;
}
export declare function toTimestamp(date: Date): Timestamp;
export declare function fromTimestamp(t: Timestamp): Date;
export declare function fromJsonTimestamp(o: any): Timestamp;
