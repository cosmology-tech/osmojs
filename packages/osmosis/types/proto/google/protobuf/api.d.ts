import * as _m0 from "protobufjs/minimal";
import { SourceContext } from "../../google/protobuf/source_context";
import { Syntax, Option } from "../../google/protobuf/type";
/**
 * Api is a light-weight descriptor for an API Interface.
 *
 * Interfaces are also described as "protocol buffer services" in some contexts,
 * such as by the "service" keyword in a .proto file, but they are different
 * from API Services, which represent a concrete implementation of an interface
 * as opposed to simply a description of methods and bindings. They are also
 * sometimes simply referred to as "APIs" in other contexts, such as the name of
 * this message itself. See https://cloud.google.com/apis/design/glossary for
 * detailed terminology.
 */
export interface Api {
    /**
     * The fully qualified name of this interface, including package name
     * followed by the interface's simple name.
     */
    name: string;
    /** The methods of this interface, in unspecified order. */
    methods: Method[];
    /** Any metadata attached to the interface. */
    options: Option[];
    /**
     * A version string for this interface. If specified, must have the form
     * `major-version.minor-version`, as in `1.10`. If the minor version is
     * omitted, it defaults to zero. If the entire version field is empty, the
     * major version is derived from the package name, as outlined below. If the
     * field is not empty, the version in the package name will be verified to be
     * consistent with what is provided here.
     *
     * The versioning schema uses [semantic
     * versioning](http://semver.org) where the major version number
     * indicates a breaking change and the minor version an additive,
     * non-breaking change. Both version numbers are signals to users
     * what to expect from different versions, and should be carefully
     * chosen based on the product plan.
     *
     * The major version is also reflected in the package name of the
     * interface, which must end in `v<major-version>`, as in
     * `google.feature.v1`. For major versions 0 and 1, the suffix can
     * be omitted. Zero major versions must only be used for
     * experimental, non-GA interfaces.
     */
    version: string;
    /**
     * Source context for the protocol buffer service represented by this
     * message.
     */
    sourceContext: SourceContext;
    /** Included interfaces. See [Mixin][]. */
    mixins: Mixin[];
    /** The source syntax of the service. */
    syntax: Syntax;
}
/** Method represents a method of an API interface. */
export interface Method {
    /** The simple name of this method. */
    name: string;
    /** A URL of the input message type. */
    requestTypeUrl: string;
    /** If true, the request is streamed. */
    requestStreaming: boolean;
    /** The URL of the output message type. */
    responseTypeUrl: string;
    /** If true, the response is streamed. */
    responseStreaming: boolean;
    /** Any metadata attached to the method. */
    options: Option[];
    /** The source syntax of this method. */
    syntax: Syntax;
}
/**
 * Declares an API Interface to be included in this interface. The including
 * interface must redeclare all the methods from the included interface, but
 * documentation and options are inherited as follows:
 *
 * - If after comment and whitespace stripping, the documentation
 *   string of the redeclared method is empty, it will be inherited
 *   from the original method.
 *
 * - Each annotation belonging to the service config (http,
 *   visibility) which is not set in the redeclared method will be
 *   inherited.
 *
 * - If an http annotation is inherited, the path pattern will be
 *   modified as follows. Any version prefix will be replaced by the
 *   version of the including interface plus the [root][] path if
 *   specified.
 *
 * Example of a simple mixin:
 *
 *     package google.acl.v1;
 *     service AccessControl {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v1/{resource=**}:getAcl";
 *       }
 *     }
 *
 *     package google.storage.v2;
 *     service Storage {
 *       rpc GetAcl(GetAclRequest) returns (Acl);
 *
 *       // Get a data record.
 *       rpc GetData(GetDataRequest) returns (Data) {
 *         option (google.api.http).get = "/v2/{resource=**}";
 *       }
 *     }
 *
 * Example of a mixin configuration:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *
 * The mixin construct implies that all methods in `AccessControl` are
 * also declared with same name and request/response types in
 * `Storage`. A documentation generator or annotation processor will
 * see the effective `Storage.GetAcl` method after inheriting
 * documentation and annotations as follows:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 *
 * Note how the version in the path pattern changed from `v1` to `v2`.
 *
 * If the `root` field in the mixin is specified, it should be a
 * relative path under which inherited HTTP paths are placed. Example:
 *
 *     apis:
 *     - name: google.storage.v2.Storage
 *       mixins:
 *       - name: google.acl.v1.AccessControl
 *         root: acls
 *
 * This implies the following inherited HTTP annotation:
 *
 *     service Storage {
 *       // Get the underlying ACL object.
 *       rpc GetAcl(GetAclRequest) returns (Acl) {
 *         option (google.api.http).get = "/v2/acls/{resource=**}:getAcl";
 *       }
 *       ...
 *     }
 */
export interface Mixin {
    /** The fully qualified name of the interface which is included. */
    name: string;
    /**
     * If non-empty specifies a path under which inherited HTTP paths
     * are rooted.
     */
    root: string;
}
export declare const Api: {
    encode(message: Api, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Api;
    fromJSON(object: any): Api;
    toJSON(message: Api): unknown;
    fromPartial<I extends {
        name?: string;
        methods?: {
            name?: string;
            requestTypeUrl?: string;
            requestStreaming?: boolean;
            responseTypeUrl?: string;
            responseStreaming?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            syntax?: Syntax;
        }[];
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        version?: string;
        sourceContext?: {
            fileName?: string;
        };
        mixins?: {
            name?: string;
            root?: string;
        }[];
        syntax?: Syntax;
    } & {
        name?: string;
        methods?: {
            name?: string;
            requestTypeUrl?: string;
            requestStreaming?: boolean;
            responseTypeUrl?: string;
            responseStreaming?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            syntax?: Syntax;
        }[] & ({
            name?: string;
            requestTypeUrl?: string;
            requestStreaming?: boolean;
            responseTypeUrl?: string;
            responseStreaming?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            syntax?: Syntax;
        } & {
            name?: string;
            requestTypeUrl?: string;
            requestStreaming?: boolean;
            responseTypeUrl?: string;
            responseStreaming?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[] & ({
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & Record<Exclude<keyof I["methods"][number]["options"][number]["value"], keyof import("./any").Any>, never>;
            } & Record<Exclude<keyof I["methods"][number]["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["methods"][number]["options"], keyof {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[]>, never>;
            syntax?: Syntax;
        } & Record<Exclude<keyof I["methods"][number], keyof Method>, never>)[] & Record<Exclude<keyof I["methods"], keyof {
            name?: string;
            requestTypeUrl?: string;
            requestStreaming?: boolean;
            responseTypeUrl?: string;
            responseStreaming?: boolean;
            options?: {
                name?: string;
                value?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            }[];
            syntax?: Syntax;
        }[]>, never>;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["options"][number]["value"], keyof import("./any").Any>, never>;
        } & Record<Exclude<keyof I["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        version?: string;
        sourceContext?: {
            fileName?: string;
        } & {
            fileName?: string;
        } & Record<Exclude<keyof I["sourceContext"], "fileName">, never>;
        mixins?: {
            name?: string;
            root?: string;
        }[] & ({
            name?: string;
            root?: string;
        } & {
            name?: string;
            root?: string;
        } & Record<Exclude<keyof I["mixins"][number], keyof Mixin>, never>)[] & Record<Exclude<keyof I["mixins"], keyof {
            name?: string;
            root?: string;
        }[]>, never>;
        syntax?: Syntax;
    } & Record<Exclude<keyof I, keyof Api>, never>>(object: I): Api;
};
export declare const Method: {
    encode(message: Method, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Method;
    fromJSON(object: any): Method;
    toJSON(message: Method): unknown;
    fromPartial<I extends {
        name?: string;
        requestTypeUrl?: string;
        requestStreaming?: boolean;
        responseTypeUrl?: string;
        responseStreaming?: boolean;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
        syntax?: Syntax;
    } & {
        name?: string;
        requestTypeUrl?: string;
        requestStreaming?: boolean;
        responseTypeUrl?: string;
        responseStreaming?: boolean;
        options?: {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["options"][number]["value"], keyof import("./any").Any>, never>;
        } & Record<Exclude<keyof I["options"][number], keyof Option>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            name?: string;
            value?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>, never>;
        syntax?: Syntax;
    } & Record<Exclude<keyof I, keyof Method>, never>>(object: I): Method;
};
export declare const Mixin: {
    encode(message: Mixin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Mixin;
    fromJSON(object: any): Mixin;
    toJSON(message: Mixin): unknown;
    fromPartial<I extends {
        name?: string;
        root?: string;
    } & {
        name?: string;
        root?: string;
    } & Record<Exclude<keyof I, keyof Mixin>, never>>(object: I): Mixin;
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
