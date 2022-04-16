import * as _m0 from "protobufjs/minimal";
import { Config } from "../../../cosmos/app/v1alpha1/config";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
    /** config is the current app config. */
    config: Config;
}
export declare const QueryConfigRequest: {
    encode(_: QueryConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest;
    fromJSON(_: any): QueryConfigRequest;
    toJSON(_: QueryConfigRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryConfigRequest;
};
export declare const QueryConfigResponse: {
    encode(message: QueryConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse;
    fromJSON(object: any): QueryConfigResponse;
    toJSON(message: QueryConfigResponse): unknown;
    fromPartial<I extends {
        config?: {
            modules?: {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        };
    } & {
        config?: {
            modules?: {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
        } & {
            modules?: {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[] & ({
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["config"]["modules"][number]["config"], keyof import("../../../google/protobuf/any").Any>, never>;
            } & Record<Exclude<keyof I["config"]["modules"][number], keyof import("../../../cosmos/app/v1alpha1/config").ModuleConfig>, never>)[] & Record<Exclude<keyof I["config"]["modules"], keyof {
                name?: string;
                config?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[]>, never>;
        } & Record<Exclude<keyof I["config"], "modules">, never>;
    } & Record<Exclude<keyof I, "config">, never>>(object: I): QueryConfigResponse;
};
/** Query is the app module query service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
