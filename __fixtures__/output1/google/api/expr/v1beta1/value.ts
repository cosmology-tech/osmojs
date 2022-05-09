import { NullValue, ListValue, Value, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Any } from "../../../protobuf/any";
import * as _m0 from "protobuf/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";
export interface Value {
  nullValue?: NullValue;
  boolValue?: boolean;
  int64Value?: Long;
  uint64Value?: Long;
  doubleValue?: number;
  stringValue?: string;
  bytesValue?: Uint8Array;
  enumValue?: EnumValue;
  objectValue?: Any;
  mapValue?: MapValue;
  listValue?: ListValue;
  typeValue?: string;
}

function createBaseValue(): Value {
  return {
    nullValue: undefined,
    boolValue: false,
    int64Value: Long.UZERO,
    uint64Value: Long.UZERO,
    doubleValue: 0,
    stringValue: "",
    bytesValue: new Uint8Array(),
    enumValue: undefined,
    objectValue: undefined,
    mapValue: undefined,
    listValue: undefined,
    typeValue: ""
  };
}

export const Value = {
  encode(message: Value, writer = _m0.Writer.create()): _m0.Writer {
    if (message.nullValue !== 0) {
      writer.uint32(8).int32(message.nullValue);
    }

    if (message.boolValue === true) {
      writer.uint32(16).bool(message.boolValue);
    }

    if (!message.int64Value.isZero()) {
      writer.uint32(24).int64(message.int64Value);
    }

    if (!message.uint64Value.isZero()) {
      writer.uint32(32).uint64(message.uint64Value);
    }

    if (message.doubleValue !== 0) {
      writer.uint32(41).double(message.doubleValue);
    }

    if (message.stringValue !== "") {
      writer.uint32(50).string(message.stringValue);
    }

    if (message.bytesValue.length !== 0) {
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

    if (message.typeValue !== "") {
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
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : 0,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : false,
      int64Value: isSet(object.int64Value) ? Long.fromString(object.int64Value) : Long.ZERO,
      uint64Value: isSet(object.uint64Value) ? Long.fromString(object.uint64Value) : Long.UZERO,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : 0,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : "",
      bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : new Uint8Array(),
      enumValue: isSet(object.enumValue) ? EnumValue.fromJSON(object.enumValue) : undefined,
      objectValue: isSet(object.objectValue) ? Any.fromJSON(object.objectValue) : undefined,
      mapValue: isSet(object.mapValue) ? MapValue.fromJSON(object.mapValue) : undefined,
      listValue: isSet(object.listValue) ? ListValue.fromJSON(object.listValue) : undefined,
      typeValue: isSet(object.typeValue) ? String(object.typeValue) : ""
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.int64Value !== undefined && (obj.int64Value = (message.int64Value || Long.ZERO).toString());
    message.uint64Value !== undefined && (obj.uint64Value = (message.uint64Value || Long.UZERO).toString());
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.bytesValue !== undefined && (obj.bytesValue = base64FromBytes(message.bytesValue !== undefined ? message.bytesValue : new Uint8Array()));
    message.enumValue !== undefined && (obj.enumValue = message.enumValue ? EnumValue.toJSON(message.enumValue) : undefined);
    message.objectValue !== undefined && (obj.objectValue = message.objectValue ? Any.toJSON(message.objectValue) : undefined);
    message.mapValue !== undefined && (obj.mapValue = message.mapValue ? MapValue.toJSON(message.mapValue) : undefined);
    message.listValue !== undefined && (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    message.typeValue !== undefined && (obj.typeValue = message.typeValue);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? 0;
    message.boolValue = object.boolValue ?? false;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? Long.fromValue(object.int64Value) : Long.ZERO;
    message.uint64Value = object.uint64Value !== undefined && object.uint64Value !== null ? Long.fromValue(object.uint64Value) : Long.UZERO;
    message.doubleValue = object.doubleValue ?? 0;
    message.stringValue = object.stringValue ?? "";
    message.bytesValue = object.bytesValue ?? new Uint8Array();
    message.enumValue = object.enumValue !== undefined && object.enumValue !== null ? EnumValue.fromPartial(object.enumValue) : undefined;
    message.objectValue = object.objectValue !== undefined && object.objectValue !== null ? Any.fromPartial(object.objectValue) : undefined;
    message.mapValue = object.mapValue !== undefined && object.mapValue !== null ? MapValue.fromPartial(object.mapValue) : undefined;
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : undefined;
    message.typeValue = object.typeValue ?? "";
    return message;
  }

};
export interface EnumValue {
  type: string;
  value: number;
}

function createBaseEnumValue(): EnumValue {
  return {
    type: "",
    value: 0
  };
}

export const EnumValue = {
  encode(message: EnumValue, writer = _m0.Writer.create()): _m0.Writer {
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
export interface ListValue {
  values: Value[];
}

function createBaseListValue(): ListValue {
  return {
    values: []
  };
}

export const ListValue = {
  encode(message: ListValue, writer = _m0.Writer.create()): _m0.Writer {
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
export interface MapValue {
  entries: MapValue_Entry[];
}

function createBaseMapValue(): MapValue {
  return {
    entries: []
  };
}

export const MapValue = {
  encode(message: MapValue, writer = _m0.Writer.create()): _m0.Writer {
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
export interface MapValue_Entry {
  key: Value;
  value: Value;
}

function createBaseMapValue_Entry(): MapValue_Entry {
  return {
    key: undefined,
    value: undefined
  };
}

export const MapValue_Entry = {
  encode(message: MapValue_Entry, writer = _m0.Writer.create()): _m0.Writer {
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