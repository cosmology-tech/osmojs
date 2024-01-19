# @osmonauts/math

<p align="center">
  <a href="https://github.com/osmosis-labs/osmojs">
    <img width="150" src="https://user-images.githubusercontent.com/545047/195456198-c35bf731-255e-42b6-833b-e76df553eec8.svg">
  </a>
</p>

<p align="center" width="100%">
  <a href="https://github.com/osmosis-labs/osmojs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/osmosis-labs/osmojs/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/osmosis-labs/osmojs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href="https://www.npmjs.com/package/osmojs"><img height="20" src="https://img.shields.io/github/package-json/v/osmosis-labs/osmojs?filename=packages%2Fosmojs%2Fpackage.json"></a>
</p>

[OsmosJS](https://github.com/osmosis-labs/osmojs) makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you.

---

## install

```sh
npm install @osmonauts/math
```

## Table of Contents

- [@osmonauts/math](#osmonautsmath)
  - [install](#install)
  - [Table of Contents](#table-of-contents)
  - [Calculations](#calculations)
    - [Pool Calculations](#pool-calculations)
      - [`calcPoolLiquidity`](#calcpoolliquidity)
      - [`calcCoinsNeededForValue`](#calccoinsneededforvalue)
      - [`calcMaxCoinsForPool`](#calcmaxcoinsforpool)
      - [`calcShareOutAmount`](#calcshareoutamount)
      - [`calcPoolAprs`](#calcpoolaprs)
    - [Swap Calculations](#swap-calculations)
      - [`getRoutesForTrade`](#getroutesfortrade)
      - [`calcAmountWithSlippage`](#calcamountwithslippage)
      - [`calcPriceImpactGivenIn`](#calcpriceimpactgivenin)
      - [`calcPriceImpactGivenOut`](#calcpriceimpactgivenout)
  - [Publishing](#publishing)
  - [Credits](#credits)
  - [Disclaimer](#disclaimer)

## Calculations

### Pool Calculations

#### `calcPoolLiquidity`

Calculate a pool's liquidity.

```js
import { calcPoolLiquidity } from "@osmonauts/math";

const liquidity = calcPoolLiquidity(pool, prices);
```

Pool liquidity is calculated using the formula below:
$$liquidity=\dfrac{tokenA}{10^{exponentA}}\times priceA + \dfrac{tokenB}{10^{exponentB}}\times priceB$$
For pools with multiple tokens, just add more tokens to the end.

#### `calcCoinsNeededForValue`

Calculate the coins needed in a pool for the given dollar value.

```js
import { calcCoinsNeededForValue } from "@osmonauts/math";

const coinsNeeded = calcCoinsNeededForValue(prices, poolInfo, value);
```

The amount of either of the tokens needed in a pool is calculated using the formula below:

$$amountNeeded=\dfrac{tokenWeight}{totalWeight}\times value \div price\times 10^{exponent}$$

#### `calcMaxCoinsForPool`

Calculate the maximum coins affordable in the balance for a given pool.

```js
import { calcMaxCoinsForPool } from "@osmonauts/math";

const maxCoins = calcMaxCoinsForPool(prices, poolInfo, balances);
```

#### `calcShareOutAmount`

Once you have the coins needed from either `calcCoinsNeededForValue` or `calcMaxCoinsForPool`, you can use `calcShareOutAmount` to get the shareOutAmount for the pool:

```js
import { calcShareOutAmount } from "@osmonauts/math";

const shareOutAmount = calcShareOutAmount(poolInfo, coinsNeeded);
```

#### `calcPoolAprs`

Calculate a pool's APR which consists of three parts: superfluid APR, gauge APR and fees APR.

```js
import { calcPoolAprs } from "@osmonauts/math";

const poolApr = calcPoolAprs({
  activeGauges, // all the active gauges of a pool
  pool, // pool info
  prices, // priceHash
  superfluidPools, // all the superfluid pools
  aprSuperfluid, // apr of superfluid staking
  lockupDurations, // all the lockup durations
  volume7d, // 7 day trading volume of the pool
  swapFee, // percentage value, e.g. 0.002
  lockup = "14", // optional, specify the lockup duration
  includeNonPerpetual = true, // optional, whether to include non-perpetual gauges
})
```

For superfluid APR, you can get all the pools' APRs from this [endpoint](https://api-osmosis.imperator.co/apr/v2/all).

The formula for calculating the gauge APR:

$$gaugeAPR=\dfrac{totalCoins-distributedCoins}{10^{exponent}}\times price\div liquidity\times 36500$$

Fees APR works in a similar way:

$$feesAPR=\dfrac{tradingVolume7d}{7}\times swapFee\div liquidity\times 36500$$

### Swap Calculations

#### `getRoutesForTrade`

Find the available routes for trade given sell token and buy token, as well as pool pairs.

```js
import { getRoutesForTrade, makePoolPairs } from "@osmonauts/math";

const pairs = makePoolPairs(pools, prices);

const routes = getRoutesForTrade({
  trade: {
    sell, // token to sell
    buy, // token to buy
  },
  pairs,
});
```

#### `calcAmountWithSlippage`

Calculates the tokenOut amount after slippage, slippage is the number without the "%" part, e.g. if slippage is "1%", then pass in `1` as slippage, rather than `0.01`.

```js
import { calcAmountWithSlippage } from "@osmonauts/math";

const tokenOutMinAmount = calcAmountWithSlippage(tokenOutAmount, slippage);
```

#### `calcPriceImpactGivenIn`

Calculates price impact given the tokenIn info and the tokenOutDenom.

```js
import { calcPriceImpactGivenIn } from "@osmonauts/math";

const priceImpact = calcPriceImpactGivenIn(
  tokenIn, // tokenIn info
  tokenOutDenom,
  pool // the pool that contains both tokenIn and tokenOut as poolAssets
);
```

#### `calcPriceImpactGivenOut`

Calculates price impact given the tokenOut info and the tokenInDenom.

```js
import { calcPriceImpactGivenOut } from "@osmonauts/math";

const priceImpact = calcPriceImpactGivenOut(
  tokenOut, // tokenOut info
  tokenInDenom,
  pool // the pool that contains both tokenIn and tokenOut as poolAssets
);
```

## Publishing

Build the types and then publish:

```
yarn build:ts
yarn publish
```

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)

Code built with the help of these related projects:

- [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
- [@cosmology/telescope](https://github.com/cosmology-tech/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
- [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos ⚛️

## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
