import * as _m0 from "protobufjs/minimal";
import { ConfigChange } from "../../../../google/api/config_change";
/**
 * The full representation of a Service that is managed by
 * Google Service Management.
 */
export interface ManagedService {
    /**
     * The name of the service. See the [overview](/service-management/overview)
     * for naming requirements.
     */
    serviceName: string;
    /** ID of the project that produces and owns this service. */
    producerProjectId: string;
}
/** The metadata associated with a long running operation resource. */
export interface OperationMetadata {
    /**
     * The full name of the resources that this operation is directly
     * associated with.
     */
    resourceNames: string[];
    /** Detailed status information for each step. The order is undetermined. */
    steps: OperationMetadata_Step[];
    /** Percentage of completion of this operation, ranging from 0 to 100. */
    progressPercentage: number;
    /** The start time of the operation. */
    startTime: Date;
}
/** Code describes the status of the operation (or one of its steps). */
export declare enum OperationMetadata_Status {
    /** STATUS_UNSPECIFIED - Unspecifed code. */
    STATUS_UNSPECIFIED = 0,
    /** DONE - The operation or step has completed without errors. */
    DONE = 1,
    /** NOT_STARTED - The operation or step has not started yet. */
    NOT_STARTED = 2,
    /** IN_PROGRESS - The operation or step is in progress. */
    IN_PROGRESS = 3,
    /**
     * FAILED - The operation or step has completed with errors. If the operation is
     * rollbackable, the rollback completed with errors too.
     */
    FAILED = 4,
    /** CANCELLED - The operation or step has completed with cancellation. */
    CANCELLED = 5,
    UNRECOGNIZED = -1
}
export declare function operationMetadata_StatusFromJSON(object: any): OperationMetadata_Status;
export declare function operationMetadata_StatusToJSON(object: OperationMetadata_Status): string;
/** Represents the status of one operation step. */
export interface OperationMetadata_Step {
    /** The short description of the step. */
    description: string;
    /** The status code. */
    status: OperationMetadata_Status;
}
/** Represents a diagnostic message (error or warning) */
export interface Diagnostic {
    /** File name and line number of the error or warning. */
    location: string;
    /** The kind of diagnostic information provided. */
    kind: Diagnostic_Kind;
    /** Message describing the error or warning. */
    message: string;
}
/** The kind of diagnostic information possible. */
export declare enum Diagnostic_Kind {
    /** WARNING - Warnings and errors */
    WARNING = 0,
    /** ERROR - Only errors */
    ERROR = 1,
    UNRECOGNIZED = -1
}
export declare function diagnostic_KindFromJSON(object: any): Diagnostic_Kind;
export declare function diagnostic_KindToJSON(object: Diagnostic_Kind): string;
/**
 * Represents a source file which is used to generate the service configuration
 * defined by `google.api.Service`.
 */
export interface ConfigSource {
    /**
     * A unique ID for a specific instance of this message, typically assigned
     * by the client for tracking purpose. If empty, the server may choose to
     * generate one instead.
     */
    id: string;
    /**
     * Set of source configuration files that are used to generate a service
     * configuration (`google.api.Service`).
     */
    files: ConfigFile[];
}
/** Generic specification of a source configuration file */
export interface ConfigFile {
    /** The file name of the configuration file (full or relative path). */
    filePath: string;
    /** The bytes that constitute the file. */
    fileContents: Uint8Array;
    /** The type of configuration file this represents. */
    fileType: ConfigFile_FileType;
}
export declare enum ConfigFile_FileType {
    /** FILE_TYPE_UNSPECIFIED - Unknown file type. */
    FILE_TYPE_UNSPECIFIED = 0,
    /** SERVICE_CONFIG_YAML - YAML-specification of service. */
    SERVICE_CONFIG_YAML = 1,
    /** OPEN_API_JSON - OpenAPI specification, serialized in JSON. */
    OPEN_API_JSON = 2,
    /** OPEN_API_YAML - OpenAPI specification, serialized in YAML. */
    OPEN_API_YAML = 3,
    /**
     * FILE_DESCRIPTOR_SET_PROTO - FileDescriptorSet, generated by protoc.
     *
     * To generate, use protoc with imports and source info included.
     * For an example test.proto file, the following command would put the value
     * in a new file named out.pb.
     *
     * $protoc --include_imports --include_source_info test.proto -o out.pb
     */
    FILE_DESCRIPTOR_SET_PROTO = 4,
    /**
     * PROTO_FILE - Uncompiled Proto file. Used for storage and display purposes only,
     * currently server-side compilation is not supported. Should match the
     * inputs to 'protoc' command used to generated FILE_DESCRIPTOR_SET_PROTO. A
     * file of this type can only be included if at least one file of type
     * FILE_DESCRIPTOR_SET_PROTO is included.
     */
    PROTO_FILE = 6,
    UNRECOGNIZED = -1
}
export declare function configFile_FileTypeFromJSON(object: any): ConfigFile_FileType;
export declare function configFile_FileTypeToJSON(object: ConfigFile_FileType): string;
/** Represents a service configuration with its name and id. */
export interface ConfigRef {
    /**
     * Resource name of a service config. It must have the following
     * format: "services/{service name}/configs/{config id}".
     */
    name: string;
}
/**
 * Change report associated with a particular service configuration.
 *
 * It contains a list of ConfigChanges based on the comparison between
 * two service configurations.
 */
export interface ChangeReport {
    /**
     * List of changes between two service configurations.
     * The changes will be alphabetically sorted based on the identifier
     * of each change.
     * A ConfigChange identifier is a dot separated path to the configuration.
     * Example: visibility.rules[selector='LibraryService.CreateBook'].restriction
     */
    configChanges: ConfigChange[];
}
/**
 * A rollout resource that defines how service configuration versions are pushed
 * to control plane systems. Typically, you create a new version of the
 * service config, and then create a Rollout to push the service config.
 */
export interface Rollout {
    /**
     * Optional. Unique identifier of this Rollout. Must be no longer than 63 characters
     * and only lower case letters, digits, '.', '_' and '-' are allowed.
     *
     * If not specified by client, the server will generate one. The generated id
     * will have the form of <date><revision number>, where "date" is the create
     * date in ISO 8601 format.  "revision number" is a monotonically increasing
     * positive number that is reset every day for each service.
     * An example of the generated rollout_id is '2016-02-16r1'
     */
    rolloutId: string;
    /** Creation time of the rollout. Readonly. */
    createTime: Date;
    /** The user who created the Rollout. Readonly. */
    createdBy: string;
    /**
     * The status of this rollout. Readonly. In case of a failed rollout,
     * the system will automatically rollback to the current Rollout
     * version. Readonly.
     */
    status: Rollout_RolloutStatus;
    /**
     * Google Service Control selects service configurations based on
     * traffic percentage.
     */
    trafficPercentStrategy: Rollout_TrafficPercentStrategy | undefined;
    /**
     * The strategy associated with a rollout to delete a `ManagedService`.
     * Readonly.
     */
    deleteServiceStrategy: Rollout_DeleteServiceStrategy | undefined;
    /** The name of the service associated with this Rollout. */
    serviceName: string;
}
/** Status of a Rollout. */
export declare enum Rollout_RolloutStatus {
    /** ROLLOUT_STATUS_UNSPECIFIED - No status specified. */
    ROLLOUT_STATUS_UNSPECIFIED = 0,
    /** IN_PROGRESS - The Rollout is in progress. */
    IN_PROGRESS = 1,
    /** SUCCESS - The Rollout has completed successfully. */
    SUCCESS = 2,
    /**
     * CANCELLED - The Rollout has been cancelled. This can happen if you have overlapping
     * Rollout pushes, and the previous ones will be cancelled.
     */
    CANCELLED = 3,
    /** FAILED - The Rollout has failed and the rollback attempt has failed too. */
    FAILED = 4,
    /** PENDING - The Rollout has not started yet and is pending for execution. */
    PENDING = 5,
    /**
     * FAILED_ROLLED_BACK - The Rollout has failed and rolled back to the previous successful
     * Rollout.
     */
    FAILED_ROLLED_BACK = 6,
    UNRECOGNIZED = -1
}
export declare function rollout_RolloutStatusFromJSON(object: any): Rollout_RolloutStatus;
export declare function rollout_RolloutStatusToJSON(object: Rollout_RolloutStatus): string;
/**
 * Strategy that specifies how clients of Google Service Controller want to
 * send traffic to use different config versions. This is generally
 * used by API proxy to split traffic based on your configured percentage for
 * each config version.
 *
 * One example of how to gradually rollout a new service configuration using
 * this
 * strategy:
 * Day 1
 *
 *     Rollout {
 *       id: "example.googleapis.com/rollout_20160206"
 *       traffic_percent_strategy {
 *         percentages: {
 *           "example.googleapis.com/20160201": 70.00
 *           "example.googleapis.com/20160206": 30.00
 *         }
 *       }
 *     }
 *
 * Day 2
 *
 *     Rollout {
 *       id: "example.googleapis.com/rollout_20160207"
 *       traffic_percent_strategy: {
 *         percentages: {
 *           "example.googleapis.com/20160206": 100.00
 *         }
 *       }
 *     }
 */
export interface Rollout_TrafficPercentStrategy {
    /**
     * Maps service configuration IDs to their corresponding traffic percentage.
     * Key is the service configuration ID, Value is the traffic percentage
     * which must be greater than 0.0 and the sum must equal to 100.0.
     */
    percentages: {
        [key: string]: number;
    };
}
export interface Rollout_TrafficPercentStrategy_PercentagesEntry {
    key: string;
    value: number;
}
/**
 * Strategy used to delete a service. This strategy is a placeholder only
 * used by the system generated rollout to delete a service.
 */
export interface Rollout_DeleteServiceStrategy {
}
export declare const ManagedService: {
    encode(message: ManagedService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ManagedService;
    fromJSON(object: any): ManagedService;
    toJSON(message: ManagedService): unknown;
    fromPartial<I extends {
        serviceName?: string;
        producerProjectId?: string;
    } & {
        serviceName?: string;
        producerProjectId?: string;
    } & Record<Exclude<keyof I, keyof ManagedService>, never>>(object: I): ManagedService;
};
export declare const OperationMetadata: {
    encode(message: OperationMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata;
    fromJSON(object: any): OperationMetadata;
    toJSON(message: OperationMetadata): unknown;
    fromPartial<I extends {
        resourceNames?: string[];
        steps?: {
            description?: string;
            status?: OperationMetadata_Status;
        }[];
        progressPercentage?: number;
        startTime?: Date;
    } & {
        resourceNames?: string[] & string[] & Record<Exclude<keyof I["resourceNames"], keyof string[]>, never>;
        steps?: {
            description?: string;
            status?: OperationMetadata_Status;
        }[] & ({
            description?: string;
            status?: OperationMetadata_Status;
        } & {
            description?: string;
            status?: OperationMetadata_Status;
        } & Record<Exclude<keyof I["steps"][number], keyof OperationMetadata_Step>, never>)[] & Record<Exclude<keyof I["steps"], keyof {
            description?: string;
            status?: OperationMetadata_Status;
        }[]>, never>;
        progressPercentage?: number;
        startTime?: Date;
    } & Record<Exclude<keyof I, keyof OperationMetadata>, never>>(object: I): OperationMetadata;
};
export declare const OperationMetadata_Step: {
    encode(message: OperationMetadata_Step, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata_Step;
    fromJSON(object: any): OperationMetadata_Step;
    toJSON(message: OperationMetadata_Step): unknown;
    fromPartial<I extends {
        description?: string;
        status?: OperationMetadata_Status;
    } & {
        description?: string;
        status?: OperationMetadata_Status;
    } & Record<Exclude<keyof I, keyof OperationMetadata_Step>, never>>(object: I): OperationMetadata_Step;
};
export declare const Diagnostic: {
    encode(message: Diagnostic, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Diagnostic;
    fromJSON(object: any): Diagnostic;
    toJSON(message: Diagnostic): unknown;
    fromPartial<I extends {
        location?: string;
        kind?: Diagnostic_Kind;
        message?: string;
    } & {
        location?: string;
        kind?: Diagnostic_Kind;
        message?: string;
    } & Record<Exclude<keyof I, keyof Diagnostic>, never>>(object: I): Diagnostic;
};
export declare const ConfigSource: {
    encode(message: ConfigSource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigSource;
    fromJSON(object: any): ConfigSource;
    toJSON(message: ConfigSource): unknown;
    fromPartial<I extends {
        id?: string;
        files?: {
            filePath?: string;
            fileContents?: Uint8Array;
            fileType?: ConfigFile_FileType;
        }[];
    } & {
        id?: string;
        files?: {
            filePath?: string;
            fileContents?: Uint8Array;
            fileType?: ConfigFile_FileType;
        }[] & ({
            filePath?: string;
            fileContents?: Uint8Array;
            fileType?: ConfigFile_FileType;
        } & {
            filePath?: string;
            fileContents?: Uint8Array;
            fileType?: ConfigFile_FileType;
        } & Record<Exclude<keyof I["files"][number], keyof ConfigFile>, never>)[] & Record<Exclude<keyof I["files"], keyof {
            filePath?: string;
            fileContents?: Uint8Array;
            fileType?: ConfigFile_FileType;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof ConfigSource>, never>>(object: I): ConfigSource;
};
export declare const ConfigFile: {
    encode(message: ConfigFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigFile;
    fromJSON(object: any): ConfigFile;
    toJSON(message: ConfigFile): unknown;
    fromPartial<I extends {
        filePath?: string;
        fileContents?: Uint8Array;
        fileType?: ConfigFile_FileType;
    } & {
        filePath?: string;
        fileContents?: Uint8Array;
        fileType?: ConfigFile_FileType;
    } & Record<Exclude<keyof I, keyof ConfigFile>, never>>(object: I): ConfigFile;
};
export declare const ConfigRef: {
    encode(message: ConfigRef, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigRef;
    fromJSON(object: any): ConfigRef;
    toJSON(message: ConfigRef): unknown;
    fromPartial<I extends {
        name?: string;
    } & {
        name?: string;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): ConfigRef;
};
export declare const ChangeReport: {
    encode(message: ChangeReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChangeReport;
    fromJSON(object: any): ChangeReport;
    toJSON(message: ChangeReport): unknown;
    fromPartial<I extends {
        configChanges?: {
            element?: string;
            oldValue?: string;
            newValue?: string;
            changeType?: import("../../../../google/api/config_change").ChangeType;
            advices?: {
                description?: string;
            }[];
        }[];
    } & {
        configChanges?: {
            element?: string;
            oldValue?: string;
            newValue?: string;
            changeType?: import("../../../../google/api/config_change").ChangeType;
            advices?: {
                description?: string;
            }[];
        }[] & ({
            element?: string;
            oldValue?: string;
            newValue?: string;
            changeType?: import("../../../../google/api/config_change").ChangeType;
            advices?: {
                description?: string;
            }[];
        } & {
            element?: string;
            oldValue?: string;
            newValue?: string;
            changeType?: import("../../../../google/api/config_change").ChangeType;
            advices?: {
                description?: string;
            }[] & ({
                description?: string;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["configChanges"][number]["advices"][number], "description">, never>)[] & Record<Exclude<keyof I["configChanges"][number]["advices"], keyof {
                description?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["configChanges"][number], keyof ConfigChange>, never>)[] & Record<Exclude<keyof I["configChanges"], keyof {
            element?: string;
            oldValue?: string;
            newValue?: string;
            changeType?: import("../../../../google/api/config_change").ChangeType;
            advices?: {
                description?: string;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, "configChanges">, never>>(object: I): ChangeReport;
};
export declare const Rollout: {
    encode(message: Rollout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rollout;
    fromJSON(object: any): Rollout;
    toJSON(message: Rollout): unknown;
    fromPartial<I extends {
        rolloutId?: string;
        createTime?: Date;
        createdBy?: string;
        status?: Rollout_RolloutStatus;
        trafficPercentStrategy?: {
            percentages?: {
                [x: string]: number;
            };
        };
        deleteServiceStrategy?: {};
        serviceName?: string;
    } & {
        rolloutId?: string;
        createTime?: Date;
        createdBy?: string;
        status?: Rollout_RolloutStatus;
        trafficPercentStrategy?: {
            percentages?: {
                [x: string]: number;
            };
        } & {
            percentages?: {
                [x: string]: number;
            } & {
                [x: string]: number;
            } & Record<Exclude<keyof I["trafficPercentStrategy"]["percentages"], string | number>, never>;
        } & Record<Exclude<keyof I["trafficPercentStrategy"], "percentages">, never>;
        deleteServiceStrategy?: {} & {} & Record<Exclude<keyof I["deleteServiceStrategy"], never>, never>;
        serviceName?: string;
    } & Record<Exclude<keyof I, keyof Rollout>, never>>(object: I): Rollout;
};
export declare const Rollout_TrafficPercentStrategy: {
    encode(message: Rollout_TrafficPercentStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rollout_TrafficPercentStrategy;
    fromJSON(object: any): Rollout_TrafficPercentStrategy;
    toJSON(message: Rollout_TrafficPercentStrategy): unknown;
    fromPartial<I extends {
        percentages?: {
            [x: string]: number;
        };
    } & {
        percentages?: {
            [x: string]: number;
        } & {
            [x: string]: number;
        } & Record<Exclude<keyof I["percentages"], string | number>, never>;
    } & Record<Exclude<keyof I, "percentages">, never>>(object: I): Rollout_TrafficPercentStrategy;
};
export declare const Rollout_TrafficPercentStrategy_PercentagesEntry: {
    encode(message: Rollout_TrafficPercentStrategy_PercentagesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rollout_TrafficPercentStrategy_PercentagesEntry;
    fromJSON(object: any): Rollout_TrafficPercentStrategy_PercentagesEntry;
    toJSON(message: Rollout_TrafficPercentStrategy_PercentagesEntry): unknown;
    fromPartial<I extends {
        key?: string;
        value?: number;
    } & {
        key?: string;
        value?: number;
    } & Record<Exclude<keyof I, keyof Rollout_TrafficPercentStrategy_PercentagesEntry>, never>>(object: I): Rollout_TrafficPercentStrategy_PercentagesEntry;
};
export declare const Rollout_DeleteServiceStrategy: {
    encode(_: Rollout_DeleteServiceStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Rollout_DeleteServiceStrategy;
    fromJSON(_: any): Rollout_DeleteServiceStrategy;
    toJSON(_: Rollout_DeleteServiceStrategy): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): Rollout_DeleteServiceStrategy;
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
