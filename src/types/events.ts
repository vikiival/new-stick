import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v9370 from './v9370'
import * as v9400 from './v9400'

export class NftsAllApprovalsCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.AllApprovalsCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * All approvals of an item got cancelled.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.AllApprovalsCancelled') === '281c96f4233cbe042ed549cfca1fafa833d625f8d832ed29682ac34cdceb017d'
    }

    /**
     * All approvals of an item got cancelled.
     */
    get asV9370(): {collection: number, item: number, owner: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsApprovalCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ApprovalCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ApprovalCancelled') === '28e2099402db057489fed1d463d382a488f95bb3d119379aef54f500296b1d83'
    }

    /**
     * An approval for a `delegate` account to transfer the `item` of an item
     * `collection` was cancelled by its `owner`.
     */
    get asV9370(): {collection: number, item: number, owner: Uint8Array, delegate: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsAttributeClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.AttributeCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.AttributeCleared') === '4d246c14b51f1093b2b931b12ca433d89593c617b09ce2082dfc43ef8671765e'
    }

    /**
     * Attribute metadata has been cleared for a `collection` or `item`.
     */
    get asV9370(): {collection: number, maybeItem: (number | undefined), key: Uint8Array, namespace: v9370.AttributeNamespace} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsAttributeSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.AttributeSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New attribute metadata has been set for a `collection` or `item`.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.AttributeSet') === 'df375b4dee7b64ffeab47159334313f546d6fbe1d31d90f2253a667f6ac2799f'
    }

    /**
     * New attribute metadata has been set for a `collection` or `item`.
     */
    get asV9370(): {collection: number, maybeItem: (number | undefined), key: Uint8Array, value: Uint8Array, namespace: v9370.AttributeNamespace} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsBurnedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.Burned')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `item` was destroyed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.Burned') === '281c96f4233cbe042ed549cfca1fafa833d625f8d832ed29682ac34cdceb017d'
    }

    /**
     * An `item` was destroyed.
     */
    get asV9370(): {collection: number, item: number, owner: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsCollectionConfigChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.CollectionConfigChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A `collection` has had its config changed by the `Force` origin.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.CollectionConfigChanged') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * A `collection` has had its config changed by the `Force` origin.
     */
    get asV9370(): {collection: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsCollectionLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.CollectionLocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some `collection` was locked.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.CollectionLocked') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * Some `collection` was locked.
     */
    get asV9370(): {collection: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsCollectionMaxSupplySetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.CollectionMaxSupplySet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Max supply has been set for a collection.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.CollectionMaxSupplySet') === '165991456bc3c6a81994ce513fdf36c2303f5220829f5e8caafbf821233135b4'
    }

    /**
     * Max supply has been set for a collection.
     */
    get asV9370(): {collection: number, maxSupply: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsCollectionMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.CollectionMetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for a `collection`.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.CollectionMetadataCleared') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * Metadata has been cleared for a `collection`.
     */
    get asV9370(): {collection: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsCollectionMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.CollectionMetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New metadata has been set for a `collection`.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.CollectionMetadataSet') === 'fbd84faf888505e9d8faf18bd544737c4436c745e6318c812a3065bb1a666c44'
    }

    /**
     * New metadata has been set for a `collection`.
     */
    get asV9370(): {collection: number, data: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsCollectionMintSettingsUpdatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.CollectionMintSettingsUpdated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Mint settings for a collection had changed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.CollectionMintSettingsUpdated') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * Mint settings for a collection had changed.
     */
    get asV9370(): {collection: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.Created')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A `collection` was created.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.Created') === 'a5c293082b1f3ffb16eaecc5b8d430ca1bb8c7bd090079ebcefcbf303cbfec61'
    }

    /**
     * A `collection` was created.
     */
    get asV9370(): {collection: number, creator: Uint8Array, owner: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsDestroyedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.Destroyed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A `collection` was destroyed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.Destroyed') === 'a84ae2f0e555d689a7b5b0ee2914bd693902b07afc4f268377240f6ac92495cb'
    }

    /**
     * A `collection` was destroyed.
     */
    get asV9370(): {collection: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsForceCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ForceCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A `collection` was force-created.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ForceCreated') === '6059bcf1dd7c48dc760f017d00a2c7c6719e745b3de9bde2046cbe26347c562f'
    }

    /**
     * A `collection` was force-created.
     */
    get asV9370(): {collection: number, owner: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsIssuedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.Issued')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `item` was issued.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.Issued') === '281c96f4233cbe042ed549cfca1fafa833d625f8d832ed29682ac34cdceb017d'
    }

    /**
     * An `item` was issued.
     */
    get asV9370(): {collection: number, item: number, owner: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemAttributesApprovalAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemAttributesApprovalAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new approval to modify item attributes was added.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemAttributesApprovalAdded') === '16137639784e12ee57d143b35251349ede19f9139a7b372c2c033564309a1aaa'
    }

    /**
     * A new approval to modify item attributes was added.
     */
    get asV9370(): {collection: number, item: number, delegate: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemAttributesApprovalRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemAttributesApprovalRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new approval to modify item attributes was removed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemAttributesApprovalRemoved') === '16137639784e12ee57d143b35251349ede19f9139a7b372c2c033564309a1aaa'
    }

    /**
     * A new approval to modify item attributes was removed.
     */
    get asV9370(): {collection: number, item: number, delegate: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemBoughtEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemBought')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An item was bought.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemBought') === 'db915144f3a96c73a3031d37c874507dcac06fd77bca9962f672bc9bfb557489'
    }

    /**
     * An item was bought.
     */
    get asV9370(): {collection: number, item: number, price: bigint, seller: Uint8Array, buyer: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemMetadataClearedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemMetadataCleared')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Metadata has been cleared for an item.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemMetadataCleared') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
    }

    /**
     * Metadata has been cleared for an item.
     */
    get asV9370(): {collection: number, item: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemMetadataSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemMetadataSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New metadata has been set for an item.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemMetadataSet') === '83275a0de68e1c50aff60fe3090e27ba46bb68a77375edc5172d160af095826d'
    }

    /**
     * New metadata has been set for an item.
     */
    get asV9370(): {collection: number, item: number, data: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemPriceRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemPriceRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The price for the item was removed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemPriceRemoved') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
    }

    /**
     * The price for the item was removed.
     */
    get asV9370(): {collection: number, item: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemPriceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemPriceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The price was set for the item.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemPriceSet') === '10d4911c332080c5a5c1e6c248347d1174817ab96906747e2c40df18c5381944'
    }

    /**
     * The price was set for the item.
     */
    get asV9370(): {collection: number, item: number, price: bigint, whitelistedBuyer: (Uint8Array | undefined)} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemPropertiesLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemPropertiesLocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * `item` metadata or attributes were locked.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemPropertiesLocked') === 'b6965c94a3e24b173446abb1e12a56b541de3d666894c46f3753c4d9029db290'
    }

    /**
     * `item` metadata or attributes were locked.
     */
    get asV9370(): {collection: number, item: number, lockMetadata: boolean, lockAttributes: boolean} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemTransferLockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemTransferLocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `item` became non-transferable.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemTransferLocked') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
    }

    /**
     * An `item` became non-transferable.
     */
    get asV9370(): {collection: number, item: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsItemTransferUnlockedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.ItemTransferUnlocked')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `item` became transferable.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.ItemTransferUnlocked') === 'ac39ace3905de6db862660444374575fb7ed5f403845b475c7f2addc21c71f91'
    }

    /**
     * An `item` became transferable.
     */
    get asV9370(): {collection: number, item: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsNextCollectionIdIncrementedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.NextCollectionIdIncremented')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Event gets emitted when the `NextCollectionId` gets incremented.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.NextCollectionIdIncremented') === '637ef8f6ab36ea6441937975da16ec6128d3ac503fd8ae7bc04131ff93640dc2'
    }

    /**
     * Event gets emitted when the `NextCollectionId` gets incremented.
     */
    get asV9370(): {nextId: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsOwnerChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.OwnerChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The owner changed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.OwnerChanged') === '0331b0b161c2f2db690f574540ade7765af19f5306dc65443561fbaa5825f323'
    }

    /**
     * The owner changed.
     */
    get asV9370(): {collection: number, newOwner: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsOwnershipAcceptanceChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.OwnershipAcceptanceChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Ownership acceptance has changed for an account.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.OwnershipAcceptanceChanged') === '62f0a146ea419b03ef3bb5c912782af0253639ca8fc47ff318396bedef2230cc'
    }

    /**
     * Ownership acceptance has changed for an account.
     */
    get asV9370(): {who: Uint8Array, maybeCollection: (number | undefined)} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsPalletAttributeSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.PalletAttributeSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
     * within that `collection`.
     */
    get isV9400(): boolean {
        return this._chain.getEventHash('Nfts.PalletAttributeSet') === '8acc59fe38aad8002f221ac66d2766d6670fb8d76b711134d7089cf69d642d78'
    }

    /**
     * A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
     * within that `collection`.
     */
    get asV9400(): {collection: number, item: (number | undefined), attribute: v9400.PalletAttributes, value: Uint8Array} {
        assert(this.isV9400)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsPreSignedAttributesSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.PreSignedAttributesSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * New attributes have been set for an `item` of the `collection`.
     */
    get isV9400(): boolean {
        return this._chain.getEventHash('Nfts.PreSignedAttributesSet') === '3187a106d1f5607c0c25a6deef04d48112079b32dd61370affb8b10ee21bdca5'
    }

    /**
     * New attributes have been set for an `item` of the `collection`.
     */
    get asV9400(): {collection: number, item: number, namespace: v9400.AttributeNamespace} {
        assert(this.isV9400)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsRedepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.Redeposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The deposit for a set of `item`s within a `collection` has been updated.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.Redeposited') === '70f14fe636bd1b76d1a88293efdde92045851e8b866eeae6e7f8fb48665cdb41'
    }

    /**
     * The deposit for a set of `item`s within a `collection` has been updated.
     */
    get asV9370(): {collection: number, successfulItems: number[]} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsSwapCancelledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.SwapCancelled')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The swap was cancelled.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.SwapCancelled') === '203695181f6ad5b8cfab290f9b1f5673a0bfbdc9ad4b967b47d2f74b981865da'
    }

    /**
     * The swap was cancelled.
     */
    get asV9370(): {offeredCollection: number, offeredItem: number, desiredCollection: number, desiredItem: (number | undefined), price: (v9370.PriceWithDirection | undefined), deadline: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsSwapClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.SwapClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The swap has been claimed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.SwapClaimed') === 'a32b04673263c9758fac7dc7b2ee372deba818fe72f157dd9a3baa5b02f6d66e'
    }

    /**
     * The swap has been claimed.
     */
    get asV9370(): {sentCollection: number, sentItem: number, sentItemOwner: Uint8Array, receivedCollection: number, receivedItem: number, receivedItemOwner: Uint8Array, price: (v9370.PriceWithDirection | undefined), deadline: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsSwapCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.SwapCreated')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `item` swap intent was created.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.SwapCreated') === '203695181f6ad5b8cfab290f9b1f5673a0bfbdc9ad4b967b47d2f74b981865da'
    }

    /**
     * An `item` swap intent was created.
     */
    get asV9370(): {offeredCollection: number, offeredItem: number, desiredCollection: number, desiredItem: (number | undefined), price: (v9370.PriceWithDirection | undefined), deadline: number} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsTeamChangedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.TeamChanged')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * The management team changed.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.TeamChanged') === '152cd89e42995f09fd841e2eeec18a6a0ca02740e481dc98e45b182742b5172e'
    }

    /**
     * The management team changed.
     */
    get asV9370(): {collection: number, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * The management team changed.
     */
    get isV9400(): boolean {
        return this._chain.getEventHash('Nfts.TeamChanged') === '7d04eb24156118efda8b963ba4549a6d4ad4a1af762296e453e42e231805cd54'
    }

    /**
     * The management team changed.
     */
    get asV9400(): {collection: number, issuer: (Uint8Array | undefined), admin: (Uint8Array | undefined), freezer: (Uint8Array | undefined)} {
        assert(this.isV9400)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsTipSentEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.TipSent')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A tip was sent.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.TipSent') === '6508b276e46d4188520e47ddb8bf0513b8c2e8b4e9dea63e25496bc5ca934424'
    }

    /**
     * A tip was sent.
     */
    get asV9370(): {collection: number, item: number, sender: Uint8Array, receiver: Uint8Array, amount: bigint} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsTransferApprovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.TransferApproved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.TransferApproved') === '71620a6e85bb8bb5d9e315805e790e3baae8f271dee82324db43d472e2a8d860'
    }

    /**
     * An `item` of a `collection` has been approved by the `owner` for transfer by
     * a `delegate`.
     */
    get asV9370(): {collection: number, item: number, owner: Uint8Array, delegate: Uint8Array, deadline: (number | undefined)} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}

export class NftsTransferredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Nfts.Transferred')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * An `item` was transferred.
     */
    get isV9370(): boolean {
        return this._chain.getEventHash('Nfts.Transferred') === 'ac8c1c5a1df2a464e3447d13d6c43a813112a33c144f93775b934b08c086bf7a'
    }

    /**
     * An `item` was transferred.
     */
    get asV9370(): {collection: number, item: number, from: Uint8Array, to: Uint8Array} {
        assert(this.isV9370)
        return this._chain.decodeEvent(this.event)
    }
}
