import type {Result, Option} from './support'

export type PalletAttributes = PalletAttributes_UsedToClaim

export interface PalletAttributes_UsedToClaim {
    __kind: 'UsedToClaim'
    value: number
}

export type AttributeNamespace = AttributeNamespace_Pallet | AttributeNamespace_CollectionOwner | AttributeNamespace_ItemOwner | AttributeNamespace_Account

export interface AttributeNamespace_Pallet {
    __kind: 'Pallet'
}

export interface AttributeNamespace_CollectionOwner {
    __kind: 'CollectionOwner'
}

export interface AttributeNamespace_ItemOwner {
    __kind: 'ItemOwner'
}

export interface AttributeNamespace_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface Type_342 {
    owner: Uint8Array
    ownerDeposit: bigint
    items: number
    itemMetadatas: number
    itemConfigs: number
    attributes: number
}
