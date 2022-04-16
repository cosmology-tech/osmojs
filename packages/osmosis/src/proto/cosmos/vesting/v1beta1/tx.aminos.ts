import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccountResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Period } from "../../../cosmos/vesting/v1beta1/vesting";
export interface AminoMsgCreateVestingAccount extends AminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccount";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
    end_time: string;
    delayed: boolean;
  };
}
export interface AminoMsgCreatePermanentLockedAccount extends AminoMsg {
  type: "cosmos-sdk/MsgCreatePermanentLockedAccount";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgCreatePeriodicVestingAccount extends AminoMsg {
  type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
  value: {
    from_address: string;
    to_address: string;
    start_time: string;
    vesting_periods: {
      length: string;
      amount: {
        denom: string;
        amount: string;
      }[];
    }[];
  };
}
export const AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      amount,
      endTime,
      delayed
    }: MsgCreateVestingAccount): AminoMsgCreateVestingAccount["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        end_time: endTime,
        delayed
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount,
      end_time,
      delayed
    }: AminoMsgCreateVestingAccount["value"]): MsgCreateVestingAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        endTime: end_time,
        delayed
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
    aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      amount
    }: MsgCreatePermanentLockedAccount): AminoMsgCreatePermanentLockedAccount["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount
    }: AminoMsgCreatePermanentLockedAccount["value"]): MsgCreatePermanentLockedAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      startTime,
      vestingPeriods
    }: MsgCreatePeriodicVestingAccount): AminoMsgCreatePeriodicVestingAccount["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        start_time: startTime,
        vesting_periods: vestingPeriods.map(el0 => ({
          length: el0.length,
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      start_time,
      vesting_periods
    }: AminoMsgCreatePeriodicVestingAccount["value"]): MsgCreatePeriodicVestingAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        startTime: start_time,
        vestingPeriods: vesting_periods.map(el0 => ({
          length: el0.length,
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        }))
      };
    }
  }
};