import { IdentifiedChannel, PacketState } from "./channel";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
    channels: IdentifiedChannel[];
    acknowledgements: PacketState[];
    commitments: PacketState[];
    receipts: PacketState[];
    send_sequences: PacketSequence[];
    recv_sequences: PacketSequence[];
    ack_sequences: PacketSequence[];
    /** the sequence for the next generated channel identifier */
    next_channel_sequence: Long;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
    port_id: string;
    channel_id: string;
    sequence: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const PacketSequence: {
    encode(message: PacketSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence;
    fromJSON(object: any): PacketSequence;
    toJSON(message: PacketSequence): unknown;
    fromPartial(object: DeepPartial<PacketSequence>): PacketSequence;
};