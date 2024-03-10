import * as _86 from "./applications/fee/v1/ack";
import * as _87 from "./applications/fee/v1/fee";
import * as _88 from "./applications/fee/v1/genesis";
import * as _89 from "./applications/fee/v1/metadata";
import * as _90 from "./applications/fee/v1/query";
import * as _91 from "./applications/fee/v1/tx";
import * as _92 from "./applications/interchain_accounts/controller/v1/controller";
import * as _93 from "./applications/interchain_accounts/controller/v1/query";
import * as _94 from "./applications/interchain_accounts/controller/v1/tx";
import * as _95 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _96 from "./applications/interchain_accounts/host/v1/host";
import * as _97 from "./applications/interchain_accounts/host/v1/query";
import * as _98 from "./applications/interchain_accounts/host/v1/tx";
import * as _99 from "./applications/interchain_accounts/v1/account";
import * as _100 from "./applications/interchain_accounts/v1/metadata";
import * as _101 from "./applications/interchain_accounts/v1/packet";
import * as _102 from "./applications/transfer/v1/authz";
import * as _103 from "./applications/transfer/v1/genesis";
import * as _104 from "./applications/transfer/v1/query";
import * as _105 from "./applications/transfer/v1/transfer";
import * as _106 from "./applications/transfer/v1/tx";
import * as _107 from "./applications/transfer/v2/packet";
import * as _108 from "./core/channel/v1/channel";
import * as _109 from "./core/channel/v1/genesis";
import * as _110 from "./core/channel/v1/query";
import * as _111 from "./core/channel/v1/tx";
import * as _112 from "./core/channel/v1/upgrade";
import * as _113 from "./core/client/v1/client";
import * as _114 from "./core/client/v1/genesis";
import * as _115 from "./core/client/v1/query";
import * as _116 from "./core/client/v1/tx";
import * as _117 from "./core/commitment/v1/commitment";
import * as _118 from "./core/connection/v1/connection";
import * as _119 from "./core/connection/v1/genesis";
import * as _120 from "./core/connection/v1/query";
import * as _121 from "./core/connection/v1/tx";
import * as _122 from "./lightclients/localhost/v2/localhost";
import * as _123 from "./lightclients/solomachine/v2/solomachine";
import * as _124 from "./lightclients/solomachine/v3/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _126 from "./lightclients/wasm/v1/genesis";
import * as _127 from "./lightclients/wasm/v1/query";
import * as _128 from "./lightclients/wasm/v1/tx";
import * as _129 from "./lightclients/wasm/v1/wasm";
import * as _285 from "./applications/fee/v1/tx.amino";
import * as _286 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _287 from "./applications/interchain_accounts/host/v1/tx.amino";
import * as _288 from "./applications/transfer/v1/tx.amino";
import * as _289 from "./core/channel/v1/tx.amino";
import * as _290 from "./core/client/v1/tx.amino";
import * as _291 from "./core/connection/v1/tx.amino";
import * as _292 from "./lightclients/wasm/v1/tx.amino";
import * as _293 from "./applications/fee/v1/tx.registry";
import * as _294 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _295 from "./applications/interchain_accounts/host/v1/tx.registry";
import * as _296 from "./applications/transfer/v1/tx.registry";
import * as _297 from "./core/channel/v1/tx.registry";
import * as _298 from "./core/client/v1/tx.registry";
import * as _299 from "./core/connection/v1/tx.registry";
import * as _300 from "./lightclients/wasm/v1/tx.registry";
import * as _301 from "./applications/fee/v1/query.lcd";
import * as _302 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _303 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _304 from "./applications/transfer/v1/query.lcd";
import * as _305 from "./core/channel/v1/query.lcd";
import * as _306 from "./core/client/v1/query.lcd";
import * as _307 from "./core/connection/v1/query.lcd";
import * as _308 from "./lightclients/wasm/v1/query.lcd";
import * as _309 from "./applications/fee/v1/query.rpc.Query";
import * as _310 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _311 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _312 from "./applications/transfer/v1/query.rpc.Query";
import * as _313 from "./core/channel/v1/query.rpc.Query";
import * as _314 from "./core/client/v1/query.rpc.Query";
import * as _315 from "./core/connection/v1/query.rpc.Query";
import * as _316 from "./lightclients/wasm/v1/query.rpc.Query";
import * as _317 from "./applications/fee/v1/tx.rpc.msg";
import * as _318 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _319 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _320 from "./applications/transfer/v1/tx.rpc.msg";
import * as _321 from "./core/channel/v1/tx.rpc.msg";
import * as _322 from "./core/client/v1/tx.rpc.msg";
import * as _323 from "./core/connection/v1/tx.rpc.msg";
import * as _324 from "./lightclients/wasm/v1/tx.rpc.msg";
import * as _415 from "./lcd";
import * as _416 from "./rpc.query";
import * as _417 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._86,
        ..._87,
        ..._88,
        ..._89,
        ..._90,
        ..._91,
        ..._285,
        ..._293,
        ..._301,
        ..._309,
        ..._317
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._92,
          ..._93,
          ..._94,
          ..._286,
          ..._294,
          ..._302,
          ..._310,
          ..._318
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._95
        };
      }
      export namespace host {
        export const v1 = {
          ..._96,
          ..._97,
          ..._98,
          ..._287,
          ..._295,
          ..._303,
          ..._311,
          ..._319
        };
      }
      export const v1 = {
        ..._99,
        ..._100,
        ..._101
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._106,
        ..._288,
        ..._296,
        ..._304,
        ..._312,
        ..._320
      };
      export const v2 = {
        ..._107
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._108,
        ..._109,
        ..._110,
        ..._111,
        ..._112,
        ..._289,
        ..._297,
        ..._305,
        ..._313,
        ..._321
      };
    }
    export namespace client {
      export const v1 = {
        ..._113,
        ..._114,
        ..._115,
        ..._116,
        ..._290,
        ..._298,
        ..._306,
        ..._314,
        ..._322
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._117
      };
    }
    export namespace connection {
      export const v1 = {
        ..._118,
        ..._119,
        ..._120,
        ..._121,
        ..._291,
        ..._299,
        ..._307,
        ..._315,
        ..._323
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._122
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._123
      };
      export const v3 = {
        ..._124
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._125
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._292,
        ..._300,
        ..._308,
        ..._316,
        ..._324
      };
    }
  }
  export const ClientFactory = {
    ..._415,
    ..._416,
    ..._417
  };
}