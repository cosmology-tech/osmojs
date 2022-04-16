import * as _m0 from "protobufjs/minimal";
import { Height } from "../../../../ibc/core/client/v1/client";
import { MerkleRoot } from "../../../../ibc/core/commitment/v1/commitment";
import { SignedHeader } from "../../../../tendermint/types/types";
import { ValidatorSet } from "../../../../tendermint/types/validator";
import { ProofSpec } from "../../../../confio/proofs";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
    chainId: string;
    trustLevel: Fraction;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     */
    trustingPeriod: string;
    /** duration of the staking unbonding period */
    unbondingPeriod: string;
    /** defines how much new (untrusted) header's Time can drift into the future. */
    maxClockDrift: string;
    /** Block height when the client was frozen due to a misbehaviour */
    frozenHeight: Height;
    /** Latest height the client was updated to */
    latestHeight: Height;
    /** Proof specifications used in verifying counterparty state */
    proofSpecs: ProofSpec[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     */
    upgradePath: string[];
    /**
     * This flag, when set to true, will allow governance to recover a client
     * which has expired
     */
    allowUpdateAfterExpiry: boolean;
    /**
     * This flag, when set to true, will allow governance to unfreeze a client
     * whose chain has experienced a misbehaviour event
     */
    allowUpdateAfterMisbehaviour: boolean;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     */
    timestamp: Date;
    /** commitment root (i.e app hash) */
    root: MerkleRoot;
    nextValidatorsHash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
    clientId: string;
    header1: Header;
    header2: Header;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
    signedHeader: SignedHeader;
    validatorSet: ValidatorSet;
    trustedHeight: Height;
    trustedValidators: ValidatorSet;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
    numerator: string;
    denominator: string;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial<I extends {
        chainId?: string;
        trustLevel?: {
            numerator?: string;
            denominator?: string;
        };
        trustingPeriod?: string;
        unbondingPeriod?: string;
        maxClockDrift?: string;
        frozenHeight?: {
            revisionNumber?: string;
            revisionHeight?: string;
        };
        latestHeight?: {
            revisionNumber?: string;
            revisionHeight?: string;
        };
        proofSpecs?: {
            leafSpec?: {
                hash?: import("../../../../confio/proofs").HashOp;
                prehashKey?: import("../../../../confio/proofs").HashOp;
                prehashValue?: import("../../../../confio/proofs").HashOp;
                length?: import("../../../../confio/proofs").LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: import("../../../../confio/proofs").HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }[];
        upgradePath?: string[];
        allowUpdateAfterExpiry?: boolean;
        allowUpdateAfterMisbehaviour?: boolean;
    } & {
        chainId?: string;
        trustLevel?: {
            numerator?: string;
            denominator?: string;
        } & {
            numerator?: string;
            denominator?: string;
        } & Record<Exclude<keyof I["trustLevel"], keyof Fraction>, never>;
        trustingPeriod?: string;
        unbondingPeriod?: string;
        maxClockDrift?: string;
        frozenHeight?: {
            revisionNumber?: string;
            revisionHeight?: string;
        } & {
            revisionNumber?: string;
            revisionHeight?: string;
        } & Record<Exclude<keyof I["frozenHeight"], keyof Height>, never>;
        latestHeight?: {
            revisionNumber?: string;
            revisionHeight?: string;
        } & {
            revisionNumber?: string;
            revisionHeight?: string;
        } & Record<Exclude<keyof I["latestHeight"], keyof Height>, never>;
        proofSpecs?: {
            leafSpec?: {
                hash?: import("../../../../confio/proofs").HashOp;
                prehashKey?: import("../../../../confio/proofs").HashOp;
                prehashValue?: import("../../../../confio/proofs").HashOp;
                length?: import("../../../../confio/proofs").LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: import("../../../../confio/proofs").HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }[] & ({
            leafSpec?: {
                hash?: import("../../../../confio/proofs").HashOp;
                prehashKey?: import("../../../../confio/proofs").HashOp;
                prehashValue?: import("../../../../confio/proofs").HashOp;
                length?: import("../../../../confio/proofs").LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: import("../../../../confio/proofs").HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        } & {
            leafSpec?: {
                hash?: import("../../../../confio/proofs").HashOp;
                prehashKey?: import("../../../../confio/proofs").HashOp;
                prehashValue?: import("../../../../confio/proofs").HashOp;
                length?: import("../../../../confio/proofs").LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: import("../../../../confio/proofs").HashOp;
                prehashKey?: import("../../../../confio/proofs").HashOp;
                prehashValue?: import("../../../../confio/proofs").HashOp;
                length?: import("../../../../confio/proofs").LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I["proofSpecs"][number]["leafSpec"], keyof import("../../../../confio/proofs").LeafOp>, never>;
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: import("../../../../confio/proofs").HashOp;
            } & {
                childOrder?: number[] & number[] & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"]["childOrder"], keyof number[]>, never>;
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: import("../../../../confio/proofs").HashOp;
            } & Record<Exclude<keyof I["proofSpecs"][number]["innerSpec"], keyof import("../../../../confio/proofs").InnerSpec>, never>;
            maxDepth?: number;
            minDepth?: number;
        } & Record<Exclude<keyof I["proofSpecs"][number], keyof ProofSpec>, never>)[] & Record<Exclude<keyof I["proofSpecs"], keyof {
            leafSpec?: {
                hash?: import("../../../../confio/proofs").HashOp;
                prehashKey?: import("../../../../confio/proofs").HashOp;
                prehashValue?: import("../../../../confio/proofs").HashOp;
                length?: import("../../../../confio/proofs").LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: import("../../../../confio/proofs").HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }[]>, never>;
        upgradePath?: string[] & string[] & Record<Exclude<keyof I["upgradePath"], keyof string[]>, never>;
        allowUpdateAfterExpiry?: boolean;
        allowUpdateAfterMisbehaviour?: boolean;
    } & Record<Exclude<keyof I, keyof ClientState>, never>>(object: I): ClientState;
};
export declare const ConsensusState: {
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial<I extends {
        timestamp?: Date;
        root?: {
            hash?: Uint8Array;
        };
        nextValidatorsHash?: Uint8Array;
    } & {
        timestamp?: Date;
        root?: {
            hash?: Uint8Array;
        } & {
            hash?: Uint8Array;
        } & Record<Exclude<keyof I["root"], "hash">, never>;
        nextValidatorsHash?: Uint8Array;
    } & Record<Exclude<keyof I, keyof ConsensusState>, never>>(object: I): ConsensusState;
};
export declare const Misbehaviour: {
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial<I extends {
        clientId?: string;
        header1?: {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            };
            validatorSet?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
            trustedHeight?: {
                revisionNumber?: string;
                revisionHeight?: string;
            };
            trustedValidators?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
        };
        header2?: {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            };
            validatorSet?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
            trustedHeight?: {
                revisionNumber?: string;
                revisionHeight?: string;
            };
            trustedValidators?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
        };
    } & {
        clientId?: string;
        header1?: {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            };
            validatorSet?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
            trustedHeight?: {
                revisionNumber?: string;
                revisionHeight?: string;
            };
            trustedValidators?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
        } & {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: string;
                        app?: string;
                    } & {
                        block?: string;
                        app?: string;
                    } & Record<Exclude<keyof I["header1"]["signedHeader"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>;
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I["header1"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>;
                    } & Record<Exclude<keyof I["header1"]["signedHeader"]["header"]["lastBlockId"], keyof import("../../../../tendermint/types/types").BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I["header1"]["signedHeader"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>;
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I["header1"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>;
                    } & Record<Exclude<keyof I["header1"]["signedHeader"]["commit"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I["header1"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["header1"]["signedHeader"]["commit"]["signatures"], keyof {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I["header1"]["signedHeader"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>;
            } & Record<Exclude<keyof I["header1"]["signedHeader"], keyof SignedHeader>, never>;
            validatorSet?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header1"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header1"]["validatorSet"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header1"]["validatorSet"]["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header1"]["validatorSet"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header1"]["validatorSet"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>;
                totalVotingPower?: string;
            } & Record<Exclude<keyof I["header1"]["validatorSet"], keyof ValidatorSet>, never>;
            trustedHeight?: {
                revisionNumber?: string;
                revisionHeight?: string;
            } & {
                revisionNumber?: string;
                revisionHeight?: string;
            } & Record<Exclude<keyof I["header1"]["trustedHeight"], keyof Height>, never>;
            trustedValidators?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header1"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header1"]["trustedValidators"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header1"]["trustedValidators"]["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header1"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header1"]["trustedValidators"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>;
                totalVotingPower?: string;
            } & Record<Exclude<keyof I["header1"]["trustedValidators"], keyof ValidatorSet>, never>;
        } & Record<Exclude<keyof I["header1"], keyof Header>, never>;
        header2?: {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            };
            validatorSet?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
            trustedHeight?: {
                revisionNumber?: string;
                revisionHeight?: string;
            };
            trustedValidators?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            };
        } & {
            signedHeader?: {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
                header?: {
                    version?: {
                        block?: string;
                        app?: string;
                    };
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & {
                    version?: {
                        block?: string;
                        app?: string;
                    } & {
                        block?: string;
                        app?: string;
                    } & Record<Exclude<keyof I["header2"]["signedHeader"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>;
                    chainId?: string;
                    height?: string;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I["header2"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>;
                    } & Record<Exclude<keyof I["header2"]["signedHeader"]["header"]["lastBlockId"], keyof import("../../../../tendermint/types/types").BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I["header2"]["signedHeader"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>;
                commit?: {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: string;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I["header2"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>;
                    } & Record<Exclude<keyof I["header2"]["signedHeader"]["commit"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I["header2"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["header2"]["signedHeader"]["commit"]["signatures"], keyof {
                        blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I["header2"]["signedHeader"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>;
            } & Record<Exclude<keyof I["header2"]["signedHeader"], keyof SignedHeader>, never>;
            validatorSet?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header2"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header2"]["validatorSet"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header2"]["validatorSet"]["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header2"]["validatorSet"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header2"]["validatorSet"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>;
                totalVotingPower?: string;
            } & Record<Exclude<keyof I["header2"]["validatorSet"], keyof ValidatorSet>, never>;
            trustedHeight?: {
                revisionNumber?: string;
                revisionHeight?: string;
            } & {
                revisionNumber?: string;
                revisionHeight?: string;
            } & Record<Exclude<keyof I["header2"]["trustedHeight"], keyof Height>, never>;
            trustedValidators?: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                };
                totalVotingPower?: string;
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header2"]["trustedValidators"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header2"]["trustedValidators"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header2"]["trustedValidators"]["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string;
                    proposerPriority?: string;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["header2"]["trustedValidators"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                    votingPower?: string;
                    proposerPriority?: string;
                } & Record<Exclude<keyof I["header2"]["trustedValidators"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>;
                totalVotingPower?: string;
            } & Record<Exclude<keyof I["header2"]["trustedValidators"], keyof ValidatorSet>, never>;
        } & Record<Exclude<keyof I["header2"], keyof Header>, never>;
    } & Record<Exclude<keyof I, keyof Misbehaviour>, never>>(object: I): Misbehaviour;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends {
        signedHeader?: {
            header?: {
                version?: {
                    block?: string;
                    app?: string;
                };
                chainId?: string;
                height?: string;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            };
            commit?: {
                height?: string;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            };
        };
        validatorSet?: {
            validators?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[];
            proposer?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            };
            totalVotingPower?: string;
        };
        trustedHeight?: {
            revisionNumber?: string;
            revisionHeight?: string;
        };
        trustedValidators?: {
            validators?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[];
            proposer?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            };
            totalVotingPower?: string;
        };
    } & {
        signedHeader?: {
            header?: {
                version?: {
                    block?: string;
                    app?: string;
                };
                chainId?: string;
                height?: string;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            };
            commit?: {
                height?: string;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            };
        } & {
            header?: {
                version?: {
                    block?: string;
                    app?: string;
                };
                chainId?: string;
                height?: string;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & {
                version?: {
                    block?: string;
                    app?: string;
                } & {
                    block?: string;
                    app?: string;
                } & Record<Exclude<keyof I["signedHeader"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>;
                chainId?: string;
                height?: string;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>;
                } & Record<Exclude<keyof I["signedHeader"]["header"]["lastBlockId"], keyof import("../../../../tendermint/types/types").BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I["signedHeader"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>;
            commit?: {
                height?: string;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            } & {
                height?: string;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>;
                } & Record<Exclude<keyof I["signedHeader"]["commit"]["blockId"], keyof import("../../../../tendermint/types/types").BlockID>, never>;
                signatures?: {
                    blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I["signedHeader"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["signedHeader"]["commit"]["signatures"], keyof {
                    blockIdFlag?: import("../../../../tendermint/types/types").BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I["signedHeader"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>;
        } & Record<Exclude<keyof I["signedHeader"], keyof SignedHeader>, never>;
        validatorSet?: {
            validators?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[];
            proposer?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            };
            totalVotingPower?: string;
        } & {
            validators?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[] & ({
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                votingPower?: string;
                proposerPriority?: string;
            } & Record<Exclude<keyof I["validatorSet"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["validatorSet"]["validators"], keyof {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[]>, never>;
            proposer?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I["validatorSet"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                votingPower?: string;
                proposerPriority?: string;
            } & Record<Exclude<keyof I["validatorSet"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>;
            totalVotingPower?: string;
        } & Record<Exclude<keyof I["validatorSet"], keyof ValidatorSet>, never>;
        trustedHeight?: {
            revisionNumber?: string;
            revisionHeight?: string;
        } & {
            revisionNumber?: string;
            revisionHeight?: string;
        } & Record<Exclude<keyof I["trustedHeight"], keyof Height>, never>;
        trustedValidators?: {
            validators?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[];
            proposer?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            };
            totalVotingPower?: string;
        } & {
            validators?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[] & ({
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I["trustedValidators"]["validators"][number]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                votingPower?: string;
                proposerPriority?: string;
            } & Record<Exclude<keyof I["trustedValidators"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["trustedValidators"]["validators"], keyof {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            }[]>, never>;
            proposer?: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string;
                proposerPriority?: string;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I["trustedValidators"]["proposer"]["pubKey"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>;
                votingPower?: string;
                proposerPriority?: string;
            } & Record<Exclude<keyof I["trustedValidators"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>;
            totalVotingPower?: string;
        } & Record<Exclude<keyof I["trustedValidators"], keyof ValidatorSet>, never>;
    } & Record<Exclude<keyof I, keyof Header>, never>>(object: I): Header;
};
export declare const Fraction: {
    encode(message: Fraction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Fraction;
    fromJSON(object: any): Fraction;
    toJSON(message: Fraction): unknown;
    fromPartial<I extends {
        numerator?: string;
        denominator?: string;
    } & {
        numerator?: string;
        denominator?: string;
    } & Record<Exclude<keyof I, keyof Fraction>, never>>(object: I): Fraction;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
