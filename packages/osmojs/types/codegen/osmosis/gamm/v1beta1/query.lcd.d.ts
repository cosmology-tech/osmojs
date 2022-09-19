import { LCDClient } from "@osmonauts/lcd";
import { QueryPoolsRequest, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityResponseSDKType, QueryPoolRequest, QueryPoolResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponseSDKType } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    pools(params?: QueryPoolsRequest): Promise<QueryPoolsResponseSDKType>;
    numPools(_params?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponseSDKType>;
    totalLiquidity(_params?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponseSDKType>;
    pool(params: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
    poolParams(params: QueryPoolParamsRequest): Promise<QueryPoolParamsResponseSDKType>;
    totalPoolLiquidity(params: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponseSDKType>;
    totalShares(params: QueryTotalSharesRequest): Promise<QueryTotalSharesResponseSDKType>;
    spotPrice(params: QuerySpotPriceRequest): Promise<QuerySpotPriceResponseSDKType>;
    estimateSwapExactAmountIn(params: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponseSDKType>;
    estimateSwapExactAmountOut(params: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponseSDKType>;
}
