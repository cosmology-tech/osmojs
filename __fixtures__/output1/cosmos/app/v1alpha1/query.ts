import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, KeysOfUnion, Builtin, isSet } from "@osmonauts/helpers";
import { Config } from "./config";
export interface QueryConfigRequest {}

function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}

export const QueryConfigRequest = {
  encode(message: QueryConfigRequest, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryConfigRequest {
    return {};
  },

  toJSON(message: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConfigRequest>, I>>(object: I): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  }

};
export interface QueryConfigResponse {
  config: Config;
}

function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined
  };
}

export const QueryConfigResponse = {
  encode(message: QueryConfigResponse, writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined
    };
  },

  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryConfigResponse>, I>>(object: I): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  }

};