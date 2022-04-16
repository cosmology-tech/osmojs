import * as _m0 from "protobufjs/minimal";
export interface Node {
    children: Child[];
}
export interface Child {
    index: Uint8Array;
    accumulation: string;
}
export interface Leaf {
    leaf: Child;
}
export declare const Node: {
    encode(message: Node, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Node;
    fromJSON(object: any): Node;
    toJSON(message: Node): unknown;
    fromPartial<I extends {
        children?: {
            index?: Uint8Array;
            accumulation?: string;
        }[];
    } & {
        children?: {
            index?: Uint8Array;
            accumulation?: string;
        }[] & ({
            index?: Uint8Array;
            accumulation?: string;
        } & {
            index?: Uint8Array;
            accumulation?: string;
        } & Record<Exclude<keyof I["children"][number], keyof Child>, never>)[] & Record<Exclude<keyof I["children"], keyof {
            index?: Uint8Array;
            accumulation?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "children">, never>>(object: I): Node;
};
export declare const Child: {
    encode(message: Child, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Child;
    fromJSON(object: any): Child;
    toJSON(message: Child): unknown;
    fromPartial<I extends {
        index?: Uint8Array;
        accumulation?: string;
    } & {
        index?: Uint8Array;
        accumulation?: string;
    } & Record<Exclude<keyof I, keyof Child>, never>>(object: I): Child;
};
export declare const Leaf: {
    encode(message: Leaf, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Leaf;
    fromJSON(object: any): Leaf;
    toJSON(message: Leaf): unknown;
    fromPartial<I extends {
        leaf?: {
            index?: Uint8Array;
            accumulation?: string;
        };
    } & {
        leaf?: {
            index?: Uint8Array;
            accumulation?: string;
        } & {
            index?: Uint8Array;
            accumulation?: string;
        } & Record<Exclude<keyof I["leaf"], keyof Child>, never>;
    } & Record<Exclude<keyof I, "leaf">, never>>(object: I): Leaf;
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
