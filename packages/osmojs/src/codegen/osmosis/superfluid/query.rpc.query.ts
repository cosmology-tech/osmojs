import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params returns the total set of superfluid parameters.*/

  assetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
  /*Returns superfluid asset type, whether if it's a native asset or an lp
  share.*/

  allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse>;
  /*Returns all registered superfluid assets.*/

  assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse>;
  /*Returns the osmo equivalent multiplier used in the most recent epoch.*/

  allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse>;
  /*Returns all superfluid intermediary accounts.*/

  connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse>;
  /*Returns intermediary account connected to a superfluid staked lock by id*/

  totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse>;
  /*Returns the total amount of osmo superfluidly staked.
  Response is denominated in uosmo.*/

  superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse>;
  /*Returns the coins superfluid delegated for the delegator, validator, denom
  triplet*/

  superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse>;
  /*Returns all the delegated superfluid poistions for a specific delegator.*/

  superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse>;
  /*Returns all the undelegating superfluid poistions for a specific delegator.*/

  superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
  /*Returns all the superfluid positions of a specific denom delegated to one
  validator*/

  estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
  /*Returns the amount of a specific denom delegated to a specific validator
  This is labeled an estimate, because the way it calculates the amount can
  lead rounding errors from the true delegated amount*/

  totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse>;
  /*Returns the specified delegations for a specific delegator*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.assetType = this.assetType.bind(this);
    this.allAssets = this.allAssets.bind(this);
    this.assetMultiplier = this.assetMultiplier.bind(this);
    this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
    this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
    this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
    this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
    this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
    this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
    this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
    this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
    this.totalDelegationByDelegator = this.totalDelegationByDelegator.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  assetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
    const data = AssetTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
    return promise.then(data => AssetTypeResponse.decode(new _m0.Reader(data)));
  }

  allAssets(request: AllAssetsRequest = {}): Promise<AllAssetsResponse> {
    const data = AllAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
    return promise.then(data => AllAssetsResponse.decode(new _m0.Reader(data)));
  }

  assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
    const data = AssetMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
    return promise.then(data => AssetMultiplierResponse.decode(new _m0.Reader(data)));
  }

  allIntermediaryAccounts(request: AllIntermediaryAccountsRequest = {
    pagination: undefined
  }): Promise<AllIntermediaryAccountsResponse> {
    const data = AllIntermediaryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
    return promise.then(data => AllIntermediaryAccountsResponse.decode(new _m0.Reader(data)));
  }

  connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
    const data = ConnectedIntermediaryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
    return promise.then(data => ConnectedIntermediaryAccountResponse.decode(new _m0.Reader(data)));
  }

  totalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponse> {
    const data = TotalSuperfluidDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
    return promise.then(data => TotalSuperfluidDelegationsResponse.decode(new _m0.Reader(data)));
  }

  superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
    const data = SuperfluidDelegationAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
    return promise.then(data => SuperfluidDelegationAmountResponse.decode(new _m0.Reader(data)));
  }

  superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const data = SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
    return promise.then(data => SuperfluidDelegationsByDelegatorResponse.decode(new _m0.Reader(data)));
  }

  superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    const data = SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
    return promise.then(data => SuperfluidUndelegationsByDelegatorResponse.decode(new _m0.Reader(data)));
  }

  superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    const data = SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
    return promise.then(data => SuperfluidDelegationsByValidatorDenomResponse.decode(new _m0.Reader(data)));
  }

  estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    const data = EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
    return promise.then(data => EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new _m0.Reader(data)));
  }

  totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse> {
    const data = QueryTotalDelegationByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
    return promise.then(data => QueryTotalDelegationByDelegatorResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    assetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
      return queryService.assetType(request);
    },

    allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse> {
      return queryService.allAssets(request);
    },

    assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
      return queryService.assetMultiplier(request);
    },

    allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse> {
      return queryService.allIntermediaryAccounts(request);
    },

    connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
      return queryService.connectedIntermediaryAccount(request);
    },

    totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse> {
      return queryService.totalSuperfluidDelegations(request);
    },

    superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
      return queryService.superfluidDelegationAmount(request);
    },

    superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
      return queryService.superfluidDelegationsByDelegator(request);
    },

    superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
      return queryService.superfluidUndelegationsByDelegator(request);
    },

    superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
      return queryService.superfluidDelegationsByValidatorDenom(request);
    },

    estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
      return queryService.estimateSuperfluidDelegatedAmountByValidatorDenom(request);
    },

    totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse> {
      return queryService.totalDelegationByDelegator(request);
    }

  };
};