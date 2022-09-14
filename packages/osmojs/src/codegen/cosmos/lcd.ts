export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => ({
  cosmos: {
    auth: {
      v1beta1: new (await import("./auth/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    authz: {
      v1beta1: new (await import("./authz/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    bank: {
      v1beta1: new (await import("./bank/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    base: {
      tendermint: {
        v1beta1: new (await import("./base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
          restEndpoint
        })
      }
    },
    distribution: {
      v1beta1: new (await import("./distribution/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    evidence: {
      v1beta1: new (await import("./evidence/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    feegrant: {
      v1beta1: new (await import("./feegrant/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    gov: {
      v1beta1: new (await import("./gov/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    mint: {
      v1beta1: new (await import("./mint/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    nft: {
      v1beta1: new (await import("./nft/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    params: {
      v1beta1: new (await import("./params/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    slashing: {
      v1beta1: new (await import("./slashing/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    staking: {
      v1beta1: new (await import("./staking/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    tx: {
      v1beta1: new (await import("./tx/v1beta1/service.lcd")).LCDQueryClient({
        restEndpoint
      })
    },
    upgrade: {
      v1beta1: new (await import("./upgrade/v1beta1/query.lcd")).LCDQueryClient({
        restEndpoint
      })
    }
  }
});