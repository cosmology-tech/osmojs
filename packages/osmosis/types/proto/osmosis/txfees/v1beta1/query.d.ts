import * as _m0 from "protobufjs/minimal";
import { FeeToken } from "../../../osmosis/txfees/v1beta1/feetoken";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: string;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export declare const QueryFeeTokensRequest: {
    encode(_: QueryFeeTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromJSON(_: any): QueryFeeTokensRequest;
    toJSON(_: QueryFeeTokensRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryFeeTokensRequest;
};
export declare const QueryFeeTokensResponse: {
    encode(message: QueryFeeTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponse;
    fromJSON(object: any): QueryFeeTokensResponse;
    toJSON(message: QueryFeeTokensResponse): unknown;
    fromPartial<I extends {
        feeTokens?: {
            denom?: string;
            poolID?: string;
        }[];
    } & {
        feeTokens?: {
            denom?: string;
            poolID?: string;
        }[] & ({
            denom?: string;
            poolID?: string;
        } & {
            denom?: string;
            poolID?: string;
        } & Record<Exclude<keyof I["feeTokens"][number], keyof FeeToken>, never>)[] & Record<Exclude<keyof I["feeTokens"], keyof {
            denom?: string;
            poolID?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "feeTokens">, never>>(object: I): QueryFeeTokensResponse;
};
export declare const QueryDenomPoolIdRequest: {
    encode(message: QueryDenomPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromJSON(object: any): QueryDenomPoolIdRequest;
    toJSON(message: QueryDenomPoolIdRequest): unknown;
    fromPartial<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryDenomPoolIdRequest;
};
export declare const QueryDenomPoolIdResponse: {
    encode(message: QueryDenomPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponse;
    fromJSON(object: any): QueryDenomPoolIdResponse;
    toJSON(message: QueryDenomPoolIdResponse): unknown;
    fromPartial<I extends {
        poolID?: string;
    } & {
        poolID?: string;
    } & Record<Exclude<keyof I, "poolID">, never>>(object: I): QueryDenomPoolIdResponse;
};
export declare const QueryBaseDenomRequest: {
    encode(_: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromJSON(_: any): QueryBaseDenomRequest;
    toJSON(_: QueryBaseDenomRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryBaseDenomRequest;
};
export declare const QueryBaseDenomResponse: {
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromJSON(object: any): QueryBaseDenomResponse;
    toJSON(message: QueryBaseDenomResponse): unknown;
    fromPartial<I extends {
        baseDenom?: string;
    } & {
        baseDenom?: string;
    } & Record<Exclude<keyof I, "baseDenom">, never>>(object: I): QueryBaseDenomResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
