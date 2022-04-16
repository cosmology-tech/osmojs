import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export const fromJSON = {
  verifyInvariant(value: any) {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
      value: MsgVerifyInvariant.fromJSON(value)
    };
  }

};