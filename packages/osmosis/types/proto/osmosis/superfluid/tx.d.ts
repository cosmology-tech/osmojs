import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
export interface MsgSuperfluidDelegate {
    sender: string;
    lockId: string;
    valAddr: string;
}
export interface MsgSuperfluidDelegateResponse {
}
export interface MsgSuperfluidUndelegate {
    sender: string;
    lockId: string;
}
export interface MsgSuperfluidUndelegateResponse {
}
export interface MsgSuperfluidUnbondLock {
    sender: string;
    lockId: string;
}
export interface MsgSuperfluidUnbondLockResponse {
}
/**
 * MsgLockAndSuperfluidDelegate locks coins with the unbonding period duration,
 * and then does a superfluid lock from the newly created lockup, to the
 * specified validator addr.
 */
export interface MsgLockAndSuperfluidDelegate {
    sender: string;
    coins: Coin[];
    valAddr: string;
}
export interface MsgLockAndSuperfluidDelegateResponse {
    ID: string;
}
export declare const MsgSuperfluidDelegate: {
    encode(message: MsgSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegate;
    fromJSON(object: any): MsgSuperfluidDelegate;
    toJSON(message: MsgSuperfluidDelegate): unknown;
    fromPartial<I extends {
        sender?: string;
        lockId?: string;
        valAddr?: string;
    } & {
        sender?: string;
        lockId?: string;
        valAddr?: string;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidDelegate>, never>>(object: I): MsgSuperfluidDelegate;
};
export declare const MsgSuperfluidDelegateResponse: {
    encode(_: MsgSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidDelegateResponse;
    fromJSON(_: any): MsgSuperfluidDelegateResponse;
    toJSON(_: MsgSuperfluidDelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidDelegateResponse;
};
export declare const MsgSuperfluidUndelegate: {
    encode(message: MsgSuperfluidUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegate;
    fromJSON(object: any): MsgSuperfluidUndelegate;
    toJSON(message: MsgSuperfluidUndelegate): unknown;
    fromPartial<I extends {
        sender?: string;
        lockId?: string;
    } & {
        sender?: string;
        lockId?: string;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidUndelegate>, never>>(object: I): MsgSuperfluidUndelegate;
};
export declare const MsgSuperfluidUndelegateResponse: {
    encode(_: MsgSuperfluidUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUndelegateResponse;
    fromJSON(_: any): MsgSuperfluidUndelegateResponse;
    toJSON(_: MsgSuperfluidUndelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidUndelegateResponse;
};
export declare const MsgSuperfluidUnbondLock: {
    encode(message: MsgSuperfluidUnbondLock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLock;
    fromJSON(object: any): MsgSuperfluidUnbondLock;
    toJSON(message: MsgSuperfluidUnbondLock): unknown;
    fromPartial<I extends {
        sender?: string;
        lockId?: string;
    } & {
        sender?: string;
        lockId?: string;
    } & Record<Exclude<keyof I, keyof MsgSuperfluidUnbondLock>, never>>(object: I): MsgSuperfluidUnbondLock;
};
export declare const MsgSuperfluidUnbondLockResponse: {
    encode(_: MsgSuperfluidUnbondLockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSuperfluidUnbondLockResponse;
    fromJSON(_: any): MsgSuperfluidUnbondLockResponse;
    toJSON(_: MsgSuperfluidUnbondLockResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSuperfluidUnbondLockResponse;
};
export declare const MsgLockAndSuperfluidDelegate: {
    encode(message: MsgLockAndSuperfluidDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegate;
    fromJSON(object: any): MsgLockAndSuperfluidDelegate;
    toJSON(message: MsgLockAndSuperfluidDelegate): unknown;
    fromPartial<I extends {
        sender?: string;
        coins?: {
            denom?: string;
            amount?: string;
        }[];
        valAddr?: string;
    } & {
        sender?: string;
        coins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
        valAddr?: string;
    } & Record<Exclude<keyof I, keyof MsgLockAndSuperfluidDelegate>, never>>(object: I): MsgLockAndSuperfluidDelegate;
};
export declare const MsgLockAndSuperfluidDelegateResponse: {
    encode(message: MsgLockAndSuperfluidDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgLockAndSuperfluidDelegateResponse;
    fromJSON(object: any): MsgLockAndSuperfluidDelegateResponse;
    toJSON(message: MsgLockAndSuperfluidDelegateResponse): unknown;
    fromPartial<I extends {
        ID?: string;
    } & {
        ID?: string;
    } & Record<Exclude<keyof I, "ID">, never>>(object: I): MsgLockAndSuperfluidDelegateResponse;
};
/** Msg defines the Msg service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
