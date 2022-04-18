import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgJoinPool, MsgExitPool, SwapAmountInRoute, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, SwapAmountOutRoute, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgJoinPoolResponse, MsgExitPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export interface AminoMsgJoinPool extends AminoMsg {
  type: "osmosis/gamm/msg-join-pool";
  value: {
    sender: string;
    poolId: string;
    shareOutAmount: string;
    tokenInMaxs: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgExitPool extends AminoMsg {
  type: "osmosis/gamm/msg-exit-pool";
  value: {
    sender: string;
    poolId: string;
    shareInAmount: string;
    tokenOutMins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgSwapExactAmountIn extends AminoMsg {
  type: "osmosis/gamm/msg-swap-exact-amount-in";
  value: {
    sender: string;
    routes: {
      poolId: string;
      tokenOutDenom: string;
    }[];
    tokenIn: {
      denom: string;
      amount: string;
    };
    tokenOutMinAmount: string;
  };
}
export interface AminoMsgSwapExactAmountOut extends AminoMsg {
  type: "osmosis/gamm/msg-swap-exact-amount-out";
  value: {
    sender: string;
    routes: {
      poolId: string;
      tokenInDenom: string;
    }[];
    tokenInMaxAmount: string;
    tokenOut: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgJoinSwapExternAmountIn extends AminoMsg {
  type: "osmosis/gamm/msg-join-swap-extern-amount-in";
  value: {
    sender: string;
    poolId: string;
    tokenIn: {
      denom: string;
      amount: string;
    };
    shareOutMinAmount: string;
  };
}
export interface AminoMsgJoinSwapShareAmountOut extends AminoMsg {
  type: "osmosis/gamm/msg-join-swap-share-amount-out";
  value: {
    sender: string;
    poolId: string;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
  };
}
export interface AminoMsgExitSwapExternAmountOut extends AminoMsg {
  type: "osmosis/gamm/msg-exit-swap-extern-amount-out";
  value: {
    sender: string;
    poolId: string;
    tokenOut: {
      denom: string;
      amount: string;
    };
    shareInMaxAmount: string;
  };
}
export interface AminoMsgExitSwapShareAmountIn extends AminoMsg {
  type: "osmosis/gamm/msg-exit-swap-share-amount-in";
  value: {
    sender: string;
    poolId: string;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
  };
}
export const AminoConverter = {
  "/osmosis.gamm.v1beta1.MsgJoinPool": {
    aminoType: "osmosis/gamm/msg-join-pool",
    toAmino: ({
      sender,
      poolId,
      shareOutAmount,
      tokenInMaxs
    }: MsgJoinPool): AminoMsgJoinPool["value"] => {
      return {
        sender,
        poolId,
        shareOutAmount,
        tokenInMaxs: tokenInMaxs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      poolId,
      shareOutAmount,
      tokenInMaxs
    }: AminoMsgJoinPool["value"]): MsgJoinPool => {
      return {
        sender,
        poolId,
        shareOutAmount,
        tokenInMaxs: tokenInMaxs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitPool": {
    aminoType: "osmosis/gamm/msg-exit-pool",
    toAmino: ({
      sender,
      poolId,
      shareInAmount,
      tokenOutMins
    }: MsgExitPool): AminoMsgExitPool["value"] => {
      return {
        sender,
        poolId,
        shareInAmount,
        tokenOutMins: tokenOutMins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      poolId,
      shareInAmount,
      tokenOutMins
    }: AminoMsgExitPool["value"]): MsgExitPool => {
      return {
        sender,
        poolId,
        shareInAmount,
        tokenOutMins: tokenOutMins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/gamm/msg-swap-exact-amount-in",
    toAmino: ({
      sender,
      routes,
      tokenIn,
      tokenOutMinAmount
    }: MsgSwapExactAmountIn): AminoMsgSwapExactAmountIn["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: el0.poolId,
          tokenOutDenom: el0.tokenOutDenom
        })),
        tokenIn: {
          denom: tokenIn.denom,
          amount: Long.fromNumber(tokenIn.amount).toString()
        },
        tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      routes,
      tokenIn,
      tokenOutMinAmount
    }: AminoMsgSwapExactAmountIn["value"]): MsgSwapExactAmountIn => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: el0.poolId,
          tokenOutDenom: el0.tokenOutDenom
        })),
        tokenIn: {
          denom: tokenIn.denom,
          amount: tokenIn.amount
        },
        tokenOutMinAmount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/gamm/msg-swap-exact-amount-out",
    toAmino: ({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut
    }: MsgSwapExactAmountOut): AminoMsgSwapExactAmountOut["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: el0.poolId,
          tokenInDenom: el0.tokenInDenom
        })),
        tokenInMaxAmount,
        tokenOut: {
          denom: tokenOut.denom,
          amount: Long.fromNumber(tokenOut.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut
    }: AminoMsgSwapExactAmountOut["value"]): MsgSwapExactAmountOut => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: el0.poolId,
          tokenInDenom: el0.tokenInDenom
        })),
        tokenInMaxAmount,
        tokenOut: {
          denom: tokenOut.denom,
          amount: tokenOut.amount
        }
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
    aminoType: "osmosis/gamm/msg-join-swap-extern-amount-in",
    toAmino: ({
      sender,
      poolId,
      tokenIn,
      shareOutMinAmount
    }: MsgJoinSwapExternAmountIn): AminoMsgJoinSwapExternAmountIn["value"] => {
      return {
        sender,
        poolId,
        tokenIn: {
          denom: tokenIn.denom,
          amount: Long.fromNumber(tokenIn.amount).toString()
        },
        shareOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      poolId,
      tokenIn,
      shareOutMinAmount
    }: AminoMsgJoinSwapExternAmountIn["value"]): MsgJoinSwapExternAmountIn => {
      return {
        sender,
        poolId,
        tokenIn: {
          denom: tokenIn.denom,
          amount: tokenIn.amount
        },
        shareOutMinAmount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
    aminoType: "osmosis/gamm/msg-join-swap-share-amount-out",
    toAmino: ({
      sender,
      poolId,
      tokenInDenom,
      shareOutAmount,
      tokenInMaxAmount
    }: MsgJoinSwapShareAmountOut): AminoMsgJoinSwapShareAmountOut["value"] => {
      return {
        sender,
        poolId,
        tokenInDenom,
        shareOutAmount,
        tokenInMaxAmount
      };
    },
    fromAmino: ({
      sender,
      poolId,
      tokenInDenom,
      shareOutAmount,
      tokenInMaxAmount
    }: AminoMsgJoinSwapShareAmountOut["value"]): MsgJoinSwapShareAmountOut => {
      return {
        sender,
        poolId,
        tokenInDenom,
        shareOutAmount,
        tokenInMaxAmount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
    aminoType: "osmosis/gamm/msg-exit-swap-extern-amount-out",
    toAmino: ({
      sender,
      poolId,
      tokenOut,
      shareInMaxAmount
    }: MsgExitSwapExternAmountOut): AminoMsgExitSwapExternAmountOut["value"] => {
      return {
        sender,
        poolId,
        tokenOut: {
          denom: tokenOut.denom,
          amount: Long.fromNumber(tokenOut.amount).toString()
        },
        shareInMaxAmount
      };
    },
    fromAmino: ({
      sender,
      poolId,
      tokenOut,
      shareInMaxAmount
    }: AminoMsgExitSwapExternAmountOut["value"]): MsgExitSwapExternAmountOut => {
      return {
        sender,
        poolId,
        tokenOut: {
          denom: tokenOut.denom,
          amount: tokenOut.amount
        },
        shareInMaxAmount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
    aminoType: "osmosis/gamm/msg-exit-swap-share-amount-in",
    toAmino: ({
      sender,
      poolId,
      tokenOutDenom,
      shareInAmount,
      tokenOutMinAmount
    }: MsgExitSwapShareAmountIn): AminoMsgExitSwapShareAmountIn["value"] => {
      return {
        sender,
        poolId,
        tokenOutDenom,
        shareInAmount,
        tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      poolId,
      tokenOutDenom,
      shareInAmount,
      tokenOutMinAmount
    }: AminoMsgExitSwapShareAmountIn["value"]): MsgExitSwapShareAmountIn => {
      return {
        sender,
        poolId,
        tokenOutDenom,
        shareInAmount,
        tokenOutMinAmount
      };
    }
  }
};