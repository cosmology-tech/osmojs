import * as _m0 from "protobufjs/minimal";
import { Minter, Params } from "../../../cosmos/mint/v1beta1/mint";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter: Minter;
    /** params defines all the paramaters of the module. */
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        minter?: {
            inflation?: string;
            annualProvisions?: string;
        };
        params?: {
            mintDenom?: string;
            inflationRateChange?: string;
            inflationMax?: string;
            inflationMin?: string;
            goalBonded?: string;
            blocksPerYear?: string;
        };
    } & {
        minter?: {
            inflation?: string;
            annualProvisions?: string;
        } & {
            inflation?: string;
            annualProvisions?: string;
        } & Record<Exclude<keyof I["minter"], keyof Minter>, never>;
        params?: {
            mintDenom?: string;
            inflationRateChange?: string;
            inflationMax?: string;
            inflationMin?: string;
            goalBonded?: string;
            blocksPerYear?: string;
        } & {
            mintDenom?: string;
            inflationRateChange?: string;
            inflationMax?: string;
            inflationMin?: string;
            goalBonded?: string;
            blocksPerYear?: string;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
