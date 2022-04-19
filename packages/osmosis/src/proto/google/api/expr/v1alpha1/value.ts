/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { NullValue, nullValueFromJSON, nullValueToJSON } from "../../../../google/protobuf/struct";
import { Any } from "../../../../google/protobuf/any";

/**
 * Represents a CEL value.
 *
 * This is similar to `google.protobuf.Value`, but can represent CEL's full
 * range of values.
 */
export interface Value {
  /** Null value. */
  nullValue: NullValue | undefined;
  /** Boolean value. */

  boolValue: boolean | undefined;
  /** Signed integer value. */

  int64Value: Long | undefined;
  /** Unsigned integer value. */

  uint64Value: Long | undefined;
  /** Floating point value. */

  doubleValue: number | undefined;
  /** UTF-8 string value. */

  stringValue: string | undefined;
  /** Byte string value. */

  bytesValue: Uint8Array | undefined;
  /** An enum value. */

  enumValue: EnumValue | undefined;
  /** The proto message backing an object value. */

  objectValue: Any | undefined;
  /** Map value. */

  mapValue: MapValue | undefined;
  /** List value. */

  listValue: ListValue | undefined;
  /** Type value. */

  typeValue: string | undefined;
}
/** An enum value. */

export interface EnumValue {
  /** The fully qualified name of the enum type. */
  type: string;
  /** The value of the enum. */

  value: number;
}
/**
 * A list.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */

export interface ListValue {
  /** The ordered values in the list. */
  values: Value[];
}
/**
 * A map.
 *
 * Wrapped in a message so 'not set' and empty can be differentiated, which is
 * required for use in a 'oneof'.
 */

export interface MapValue {
  /**
   * The set of map entries.
   *
   * CEL has fewer restrictions on keys, so a protobuf map represenation
   * cannot be used.
   */
  entries: MapValue_Entry[];
}
/** An entry in the map. */

export interface MapValue_Entry {
  /**
   * The key.
   *
   * Must be unique with in the map.
   * Currently only boolean, int, uint, and string values can be keys.
   */
  key: Value;
  /** The value. */

  value: Value;
}

function createBaseValue(): Value {
  return {
    nullValue: undefined,
    boolValue: undefined,
    int64Value: undefined,
    uint64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    bytesValue: undefined,
    enumValue: undefined,
    objectValue: undefined,
    mapValue: undefined,
    listValue: undefined,
    typeValue: undefined
  };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }

    if (message.boolValue !== undefined) {
      writer.uint32(16).bool(message.boolValue);
    }

    if (message.int64Value !== undefined) {
      writer.uint32(24).int64(message.int64Value);
    }

    if (message.uint64Value !== undefined) {
      writer.uint32(32).uint64(message.uint64Value);
    }

    if (message.doubleValue !== undefined) {
      writer.uint32(41).double(message.doubleValue);
    }

    if (message.stringValue !== undefined) {
      writer.uint32(50).string(message.stringValue);
    }

    if (message.bytesValue !== undefined) {
      writer.uint32(58).bytes(message.bytesValue);
    }

    if (message.enumValue !== undefined) {
      EnumValue.encode(message.enumValue, writer.uint32(74).fork()).ldelim();
    }

    if (message.objectValue !== undefined) {
      Any.encode(message.objectValue, writer.uint32(82).fork()).ldelim();
    }

    if (message.mapValue !== undefined) {
      MapValue.encode(message.mapValue, writer.uint32(90).fork()).ldelim();
    }

    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(98).fork()).ldelim();
    }

    if (message.typeValue !== undefined) {
      writer.uint32(122).string(message.typeValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nullValue = (reader.int32() as any);
          break;

        case 2:
          message.boolValue = reader.bool();
          break;

        case 3:
          message.int64Value = (reader.int64() as Long);
          break;

        case 4:
          message.uint64Value = (reader.uint64() as Long);
          break;

        case 5:
          message.doubleValue = reader.double();
          break;

        case 6:
          message.stringValue = reader.string();
          break;

        case 7:
          message.bytesValue = reader.bytes();
          break;

        case 9:
          message.enumValue = EnumValue.decode(reader, reader.uint32());
          break;

        case 10:
          message.objectValue = Any.decode(reader, reader.uint32());
          break;

        case 11:
          message.mapValue = MapValue.decode(reader, reader.uint32());
          break;

        case 12:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;

        case 15:
          message.typeValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Value {
    return {
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : undefined,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      int64Value: isSet(object.int64Value) ? Long.fromString(object.int64Value) : undefined,
      uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : undefined,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : undefined,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : undefined,
      enumValue: isSet(object.enumValue) ? EnumValue.fromJSON(object.enumValue) : undefined,
      objectValue: isSet(object.objectValue) ? Any.fromJSON(object.objectValue) : undefined,
      mapValue: isSet(object.mapValue) ? MapValue.fromJSON(object.mapValue) : undefined,
      listValue: isSet(object.listValue) ? ListValue.fromJSON(object.listValue) : undefined,
      typeValue: isSet(object.typeValue) ? String(object.typeValue) : undefined
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = message.nullValue !== undefined ? nullValueToJSON(message.nullValue) : undefined);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = (message.int64Value || undefined).toString());
    message.uint64Value !== undefined && (obj.uint64Value = (message.uint64Value || undefined).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.bytesValue !== undefined && (obj.bytesValue = message.bytesValue !== undefined ? base64FromBytes(message.bytesValue) : undefined);
    message.enumValue !== undefined && (obj.enumValue = message.enumValue ? EnumValue.toJSON(message.enumValue) : undefined);
    message.objectValue !== undefined && (obj.objectValue = message.objectValue ? Any.toJSON(message.objectValue) : undefined);
    message.mapValue !== undefined && (obj.mapValue = message.mapValue ? MapValue.toJSON(message.mapValue) : undefined);
    message.listValue !== undefined && (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    message.typeValue !== undefined && (obj.typeValue = message.typeValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : undefined;
    message.uint64Value = object.uint64Value !== undefined && object.uint64Value !== null ? Long.fromValue(object.uint64Value) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.bytesValue = object.bytesValue ?? undefined;
    message.enumValue = object.enumValue !== undefined && object.enumValue !== null ? EnumValue.fromPartial(object.enumValue) : undefined;
    message.objectValue = object.objectValue !== undefined && object.objectValue !== null ? Any.fromPartial(object.objectValue) : undefined;
    message.mapValue = object.mapValue !== undefined && object.mapValue !== null ? MapValue.fromPartial(object.mapValue) : undefined;
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : undefined;
    message.typeValue = object.typeValue ?? undefined;
    return message;
  }

};

function createBaseEnumValue(): EnumValue {
  return {
    type: "",
    value: 0
  };
}

export const EnumValue = {
  encode(message: EnumValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.value = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EnumValue {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: EnumValue): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnumValue>, I>>(object: I): EnumValue {
    const message = createBaseEnumValue();
    message.type = object.type ?? "";
    message.value = object.value ?? 0;
    return message;
  }

};

function createBaseListValue(): ListValue {
  return {
    values: []
  };
}

export const ListValue = {
  encode(message: ListValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromJSON(e)) : []
    };
  },

  toJSON(message: ListValue): unknown {
    const obj: any = {};

    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListValue>, I>>(object: I): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMapValue(): MapValue {
  return {
    entries: []
  };
}

export const MapValue = {
  encode(message: MapValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entries) {
      MapValue_Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.entries.push(MapValue_Entry.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MapValue {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => MapValue_Entry.fromJSON(e)) : []
    };
  },

  toJSON(message: MapValue): unknown {
    const obj: any = {};

    if (message.entries) {
      obj.entries = message.entries.map(e => e ? MapValue_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapValue>, I>>(object: I): MapValue {
    const message = createBaseMapValue();
    message.entries = object.entries?.map(e => MapValue_Entry.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMapValue_Entry(): MapValue_Entry {
  return {
    key: undefined,
    value: undefined
  };
}

export const MapValue_Entry = {
  encode(message: MapValue_Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      Value.encode(message.key, writer.uint32(10).fork()).ldelim();
    }

    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapValue_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapValue_Entry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = Value.decode(reader, reader.uint32());
          break;

        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MapValue_Entry {
    return {
      key: isSet(object.key) ? Value.fromJSON(object.key) : undefined,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined
    };
  },

  toJSON(message: MapValue_Entry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? Value.toJSON(message.key) : undefined);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapValue_Entry>, I>>(object: I): MapValue_Entry {
    const message = createBaseMapValue_Entry();
    message.key = object.key !== undefined && object.key !== null ? Value.fromPartial(object.key) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    return message;
  }

};
declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;

var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string = globalThis.atob || (b64 => globalThis.Buffer.from(b64, "base64").toString("binary"));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);

  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

const btoa: (bin: string) => string = globalThis.btoa || (bin => globalThis.Buffer.from(bin, "binary").toString("base64"));

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];

  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }

  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}