import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../../amino.helpers";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgConnectionOpenInitResponse, MsgConnectionOpenTryResponse, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirmResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Counterparty, Version } from "../../../../ibc/core/connection/v1/connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../../../ibc/core/client/v1/client";
export const json = {
  connectionOpenInit(value: MsgConnectionOpenInit) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
      value
    };
  },

  connectionOpenTry(value: MsgConnectionOpenTry) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
      value
    };
  },

  connectionOpenAck(value: MsgConnectionOpenAck) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
      value
    };
  },

  connectionOpenConfirm(value: MsgConnectionOpenConfirm) {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
      value
    };
  }

};