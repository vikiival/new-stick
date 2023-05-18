export enum Event {
  burn = 'Nfts.Burned',
  changeIssuer = 'Nfts.OwnerChanged',
  changeOwnershipAcceptance = 'Nfts.OwnershipAcceptanceChanged',
  changeTeam = 'Nfts.TeamChanged',
  clearAttribute = 'Nfts.AttributeCleared',
  clearCollectionMetadata = 'Nfts.CollectionMetadataCleared',
  clearMetadata = 'Nfts.ItemMetadataCleared',
  clearPrice = 'Nfts.ItemPriceRemoved',
  createCollection = 'Nfts.Created', // should use extrisnic instead of event
  createItem = 'Nfts.Issued',
  destroyCollection = 'Nfts.Destroyed',
  forceCreateCollection = 'Nfts.ForceCreated',
  freeze = 'Nfts.Frozen',
  freezeCollection = 'Nfts.CollectionFrozen',
  setAttribute = 'Nfts.AttributeSet',
  setCollectionMaxSupply = 'Nfts.CollectionMaxSupplySet',
  setCollectionMetadata = 'Nfts.CollectionMetadataSet',
  setMetadata = 'Nfts.ItemMetadataSet',
  setPrice = 'Nfts.ItemPriceSet',
  sold = 'Nfts.ItemBought',
  thaw = 'Nfts.Thawed',
  thawCollection = 'Nfts.CollectionThawed',
  transfer = 'Nfts.Transferred',
}

export enum NewNonFungible {
  // changeCollectionConfig = 'Nfts.CollectionConfigChanged', // should use extrisnic instead of event
  // lockCollection = 'Nfts.CollectionLocked',
  // updateCollectionMintSettings = 'Nfts.CollectionMintSettingsUpdated', // should use extrisnic instead of event
  // lockItemProperties = 'Nfts.ItemPropertiesLocked',
  // lockItemTransfer = 'Nfts.ItemTransferLocked',
  // unlockItemTransfer = 'Nfts.ItemTransferUnlocked',
  setPalletAttribute = 'Nfts.PalletAttributeSet',
  setPreSignedAttributes = 'Nfts.PreSignedAttributesSet',
  cancelSwap = 'Nfts.SwapCancelled',
  claimSwap = 'Nfts.SwapClaimed',
  createSwap = 'Nfts.SwapCreated',
  sendTip = 'Nfts.TipSent', // can be used for marking royaltyPaid
}


