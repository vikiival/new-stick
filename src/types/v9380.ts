import type {Result, Option} from './support'

export interface Type_339 {
    deposit: ItemMetadataDeposit
    data: Uint8Array
}

export interface ItemMetadataDeposit {
    account: (Uint8Array | undefined)
    amount: bigint
}
