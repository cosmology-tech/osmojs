import * as _m0 from "protobufjs/minimal";
import { DepositParams, VotingParams, TallyParams, Deposit, Vote, Proposal } from "../../../cosmos/gov/v1beta1/gov";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: string;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the paramaters of related to deposit. */
    depositParams: DepositParams;
    /** params defines all the paramaters of related to voting. */
    votingParams: VotingParams;
    /** params defines all the paramaters of related to tally. */
    tallyParams: TallyParams;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        startingProposalId?: string;
        deposits?: {
            proposalId?: string;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[];
        votes?: {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            }[];
        }[];
        proposals?: {
            proposalId?: string;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
        }[];
        depositParams?: {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            maxDepositPeriod?: string;
        };
        votingParams?: {
            votingPeriod?: string;
        };
        tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        };
    } & {
        startingProposalId?: string;
        deposits?: {
            proposalId?: string;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[] & ({
            proposalId?: string;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        } & {
            proposalId?: string;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["deposits"][number]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposits"][number]["amount"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["deposits"][number], keyof Deposit>, never>)[] & Record<Exclude<keyof I["deposits"], keyof {
            proposalId?: string;
            depositor?: string;
            amount?: {
                denom?: string;
                amount?: string;
            }[];
        }[]>, never>;
        votes?: {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            }[];
        }[] & ({
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            }[];
        } & {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            }[] & ({
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            } & {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            } & Record<Exclude<keyof I["votes"][number]["options"][number], keyof import("../../../cosmos/gov/v1beta1/gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["votes"][number]["options"], keyof {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            }[]>, never>;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposalId?: string;
            voter?: string;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption;
                weight?: string;
            }[];
        }[]>, never>;
        proposals?: {
            proposalId?: string;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
        }[] & ({
            proposalId?: string;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
        } & {
            proposalId?: string;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & Record<Exclude<keyof I["proposals"][number]["content"], keyof import("../../../google/protobuf/any").Any>, never>;
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            } & {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof import("../../../cosmos/gov/v1beta1/gov").TallyResult>, never>;
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["proposals"][number]["totalDeposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposals"][number]["totalDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            votingStartTime?: Date;
            votingEndTime?: Date;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            proposalId?: string;
            content?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus;
            finalTallyResult?: {
                yes?: string;
                abstain?: string;
                no?: string;
                noWithVeto?: string;
            };
            submitTime?: Date;
            depositEndTime?: Date;
            totalDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            votingStartTime?: Date;
            votingEndTime?: Date;
        }[]>, never>;
        depositParams?: {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[];
            maxDepositPeriod?: string;
        } & {
            minDeposit?: {
                denom?: string;
                amount?: string;
            }[] & ({
                denom?: string;
                amount?: string;
            } & {
                denom?: string;
                amount?: string;
            } & Record<Exclude<keyof I["depositParams"]["minDeposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["depositParams"]["minDeposit"], keyof {
                denom?: string;
                amount?: string;
            }[]>, never>;
            maxDepositPeriod?: string;
        } & Record<Exclude<keyof I["depositParams"], keyof DepositParams>, never>;
        votingParams?: {
            votingPeriod?: string;
        } & {
            votingPeriod?: string;
        } & Record<Exclude<keyof I["votingParams"], "votingPeriod">, never>;
        tallyParams?: {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        } & {
            quorum?: Uint8Array;
            threshold?: Uint8Array;
            vetoThreshold?: Uint8Array;
        } & Record<Exclude<keyof I["tallyParams"], keyof TallyParams>, never>;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
