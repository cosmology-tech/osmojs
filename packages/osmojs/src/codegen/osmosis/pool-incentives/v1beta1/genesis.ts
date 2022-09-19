import { Params, ParamsSDKType, DistrInfo, DistrInfoSDKType } from "./incentives";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the pool incentives module's genesis state. */

export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  lockableDurations: Duration[];
  distrInfo?: DistrInfo;
}
/** GenesisState defines the pool incentives module's genesis state. */

export interface GenesisStateSDKType {
  /** params defines all the paramaters of the module. */
  params: ParamsSDKType;
  lockable_durations: DurationSDKType[];
  distr_info?: DistrInfoSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lockableDurations: [],
    distrInfo: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;

        case 3:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    return message;
  }

};