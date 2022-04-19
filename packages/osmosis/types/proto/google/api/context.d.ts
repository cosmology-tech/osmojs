import Long from "long";
import * as _m0 from "protobufjs/minimal";
/**
 * `Context` defines which contexts an API requests.
 *
 * Example:
 *
 *     context:
 *       rules:
 *       - selector: "*"
 *         requested:
 *         - google.rpc.context.ProjectContext
 *         - google.rpc.context.OriginContext
 *
 * The above specifies that all methods in the API request
 * `google.rpc.context.ProjectContext` and
 * `google.rpc.context.OriginContext`.
 *
 * Available context types are defined in package
 * `google.rpc.context`.
 *
 * This also provides mechanism to allowlist any protobuf message extension that
 * can be sent in grpc metadata using “x-goog-ext-<extension_id>-bin” and
 * “x-goog-ext-<extension_id>-jspb” format. For example, list any service
 * specific protobuf types that can appear in grpc metadata as follows in your
 * yaml file:
 *
 * Example:
 *
 *     context:
 *       rules:
 *        - selector: "google.example.library.v1.LibraryService.CreateBook"
 *          allowed_request_extensions:
 *          - google.foo.v1.NewExtension
 *          allowed_response_extensions:
 *          - google.foo.v1.NewExtension
 *
 * You can also specify extension ID instead of fully qualified extension name
 * here.
 */
export interface Context {
    /**
     * A list of RPC context rules that apply to individual API methods.
     *
     * **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules: ContextRule[];
}
/**
 * A context rule provides information about the context for an individual API
 * element.
 */
export interface ContextRule {
    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
     */
    selector: string;
    /** A list of full type names of requested contexts. */
    requested: string[];
    /** A list of full type names of provided contexts. */
    provided: string[];
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc
     * side channel from client to backend.
     */
    allowedRequestExtensions: string[];
    /**
     * A list of full type names or extension IDs of extensions allowed in grpc
     * side channel from backend to client.
     */
    allowedResponseExtensions: string[];
}
export declare const Context: {
    encode(message: Context, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Context;
    fromJSON(object: any): Context;
    toJSON(message: Context): unknown;
    fromPartial<I extends unknown>(object: I): Context;
};
export declare const ContextRule: {
    encode(message: ContextRule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContextRule;
    fromJSON(object: any): ContextRule;
    toJSON(message: ContextRule): unknown;
    fromPartial<I extends unknown>(object: I): ContextRule;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
