import * as _m0 from "protobufjs/minimal";
import { AccessConfig } from "../../../cosmwasm/wasm/v1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission: AccessConfig;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: string;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: string;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial<I extends {
        sender?: string;
        wasmByteCode?: Uint8Array;
        instantiatePermission?: {
            permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
            address?: string;
        };
    } & {
        sender?: string;
        wasmByteCode?: Uint8Array;
        instantiatePermission?: {
            permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
            address?: string;
        } & {
            permission?: import("../../../cosmwasm/wasm/v1/types").AccessType;
            address?: string;
        } & Record<Exclude<keyof I["instantiatePermission"], keyof AccessConfig>, never>;
    } & Record<Exclude<keyof I, keyof MsgStoreCode>, never>>(object: I): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    fromPartial<I extends {
        codeId?: string;
    } & {
        codeId?: string;
    } & Record<Exclude<keyof I, "codeId">, never>>(object: I): MsgStoreCodeResponse;
};
export declare const MsgInstantiateContract: {
    encode(message: MsgInstantiateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial<I extends {
        sender?: string;
        admin?: string;
        codeId?: string;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        admin?: string;
        codeId?: string;
        label?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["funds"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["funds"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgInstantiateContract>, never>>(object: I): MsgInstantiateContract;
};
export declare const MsgInstantiateContractResponse: {
    encode(message: MsgInstantiateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse;
    fromJSON(object: any): MsgInstantiateContractResponse;
    toJSON(message: MsgInstantiateContractResponse): unknown;
    fromPartial<I extends {
        address?: string;
        data?: Uint8Array;
    } & {
        address?: string;
        data?: Uint8Array;
    } & Record<Exclude<keyof I, keyof MsgInstantiateContractResponse>, never>>(object: I): MsgInstantiateContractResponse;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial<I extends {
        sender?: string;
        contract?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        contract?: string;
        msg?: Uint8Array;
        funds?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["funds"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["funds"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgExecuteContract>, never>>(object: I): MsgExecuteContract;
};
export declare const MsgExecuteContractResponse: {
    encode(message: MsgExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse;
    fromJSON(object: any): MsgExecuteContractResponse;
    toJSON(message: MsgExecuteContractResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array;
    } & {
        data?: Uint8Array;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): MsgExecuteContractResponse;
};
export declare const MsgMigrateContract: {
    encode(message: MsgMigrateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    fromPartial<I extends {
        sender?: string;
        contract?: string;
        codeId?: string;
        msg?: Uint8Array;
    } & {
        sender?: string;
        contract?: string;
        codeId?: string;
        msg?: Uint8Array;
    } & Record<Exclude<keyof I, keyof MsgMigrateContract>, never>>(object: I): MsgMigrateContract;
};
export declare const MsgMigrateContractResponse: {
    encode(message: MsgMigrateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromJSON(object: any): MsgMigrateContractResponse;
    toJSON(message: MsgMigrateContractResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array;
    } & {
        data?: Uint8Array;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): MsgMigrateContractResponse;
};
export declare const MsgUpdateAdmin: {
    encode(message: MsgUpdateAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdmin;
    fromJSON(object: any): MsgUpdateAdmin;
    toJSON(message: MsgUpdateAdmin): unknown;
    fromPartial<I extends {
        sender?: string;
        newAdmin?: string;
        contract?: string;
    } & {
        sender?: string;
        newAdmin?: string;
        contract?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateAdmin>, never>>(object: I): MsgUpdateAdmin;
};
export declare const MsgUpdateAdminResponse: {
    encode(_: MsgUpdateAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAdminResponse;
    fromJSON(_: any): MsgUpdateAdminResponse;
    toJSON(_: MsgUpdateAdminResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateAdminResponse;
};
export declare const MsgClearAdmin: {
    encode(message: MsgClearAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    fromPartial<I extends {
        sender?: string;
        contract?: string;
    } & {
        sender?: string;
        contract?: string;
    } & Record<Exclude<keyof I, keyof MsgClearAdmin>, never>>(object: I): MsgClearAdmin;
};
export declare const MsgClearAdminResponse: {
    encode(_: MsgClearAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearAdminResponse;
    fromJSON(_: any): MsgClearAdminResponse;
    toJSON(_: MsgClearAdminResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgClearAdminResponse;
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
