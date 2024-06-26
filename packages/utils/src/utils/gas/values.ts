// @ts-nocheck

import { coins } from '@cosmjs/amino';

export const GAS_VALUES = {
    osmosis: {
        createPool: '250000',
        joinPool: '250000',
        joinSwapExternAmountIn: '250000',
        exitPool: '250000',
        swapExactAmountIn: '250000',
        swapExactAmountOut: '250000',
        lockTokens: '265000',
        beginUnlocking: '250000',
        unlockPeriodLock: '250000',
    }
};

export const FEE_VALUES = {
    osmosis: {
        low: '650', // 625 is minimum
        medium: '6250',
        high: '10000',
    }
};

// export const FEES = Object.keys(GAS_VALUES).reduce((m, chain) => {
//     m[chain] = Object.keys(GAS_VALUES[chain]).reduce((m2, method) => {
//         m2[method] = (fee = 'low') => ({
//             amount: coins(FEE_VALUES[chain][fee], 'uosmo'),
//             gas: GAS_VALUES[chain][method]
//         });
//         return m2;
//     }, {});
//     return m;
// }, {});

export const FEES = {
    osmosis: {
        createPool: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.createPool
        }),
        joinPool: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.joinPool
        }),
        joinSwapExternAmountIn: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.joinSwapExternAmountIn
        }),
        exitPool: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.exitPool
        }),
        swapExactAmountIn: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.swapExactAmountIn
        }),
        swapExactAmountOut: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.swapExactAmountOut
        }),
        lockTokens: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.lockTokens
        }),
        beginUnlocking: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.beginUnlocking
        }),
        unlockPeriodLock: (fee = 'low') => ({
            amount: coins(FEE_VALUES.osmosis[fee], 'uosmo'),
            gas: GAS_VALUES.osmosis.unlockPeriodLock
        })
    }
}