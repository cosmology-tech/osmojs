import * as _m0 from "protobufjs/minimal";
import { SuperfluidAsset } from "../../osmosis/superfluid/superfluid";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
    title: string;
    description: string;
    assets: SuperfluidAsset[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
    title: string;
    description: string;
    superfluidAssetDenoms: string[];
}
export declare const SetSuperfluidAssetsProposal: {
    encode(message: SetSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetSuperfluidAssetsProposal;
    fromJSON(object: any): SetSuperfluidAssetsProposal;
    toJSON(message: SetSuperfluidAssetsProposal): unknown;
    fromPartial<I extends {
        title?: string;
        description?: string;
        assets?: {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        }[];
    } & {
        title?: string;
        description?: string;
        assets?: {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        }[] & ({
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        } & {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        } & Record<Exclude<keyof I["assets"][number], keyof SuperfluidAsset>, never>)[] & Record<Exclude<keyof I["assets"], keyof {
            denom?: string;
            assetType?: import("../../osmosis/superfluid/superfluid").SuperfluidAssetType;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof SetSuperfluidAssetsProposal>, never>>(object: I): SetSuperfluidAssetsProposal;
};
export declare const RemoveSuperfluidAssetsProposal: {
    encode(message: RemoveSuperfluidAssetsProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemoveSuperfluidAssetsProposal;
    fromJSON(object: any): RemoveSuperfluidAssetsProposal;
    toJSON(message: RemoveSuperfluidAssetsProposal): unknown;
    fromPartial<I extends {
        title?: string;
        description?: string;
        superfluidAssetDenoms?: string[];
    } & {
        title?: string;
        description?: string;
        superfluidAssetDenoms?: string[] & string[] & Record<Exclude<keyof I["superfluidAssetDenoms"], keyof string[]>, never>;
    } & Record<Exclude<keyof I, keyof RemoveSuperfluidAssetsProposal>, never>>(object: I): RemoveSuperfluidAssetsProposal;
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
