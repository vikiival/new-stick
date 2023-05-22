
import { BaseTokenEvent } from '../uniques/types'
import { str } from '../utils/helper'

export type WithAmount = {
  amount: bigint;
};

export type WithOwner = {
  owner: string;
};

export type PayRoyaltyEvent = BaseTokenEvent & WithAmount & {
  recipient: string;
}

export type Target = BaseTokenEvent & {
  sn?: string;
}

export type CreateSwapEvent = BaseTokenEvent & WithAmount & {
  expiresAt: bigint;
  surcharge?: 'Send' | 'Receive';
  target: Target;
}

export type CancelSwapEvent = CreateSwapEvent

export type ClaimSwapEvent = CreateSwapEvent & WithOwner & {
  target: Target & WithOwner;
}


export const createTarget = (collection: number, tokenId: number | undefined): Target => ({
  collectionId: str(collection),
  sn: tokenId ? str(tokenId) : '',
})