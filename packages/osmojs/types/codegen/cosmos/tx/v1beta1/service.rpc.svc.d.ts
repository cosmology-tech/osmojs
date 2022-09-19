import { Rpc } from "@osmonauts/helpers";
import { SimulateRequest, SimulateResponseSDKType, GetTxRequest, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsResponseSDKType } from "./service";
/** Service defines the RPC service */
export interface Service {
    simulate(request: SimulateRequest): Promise<SimulateResponseSDKType>;
    getTx(request: GetTxRequest): Promise<GetTxResponseSDKType>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    simulate(request: SimulateRequest): Promise<SimulateResponseSDKType>;
    getTx(request: GetTxRequest): Promise<GetTxResponseSDKType>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType>;
}
