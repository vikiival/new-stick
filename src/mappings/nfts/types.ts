import { BaseTokenEvent } from '../uniques/types'

export type WithAmount = {
  amount: bigint;
};

export type PayRoyaltyEvent = BaseTokenEvent & WithAmount & {
  recipient: string;
}

export type CreateSwapEvent = BaseTokenEvent & WithAmount & {
  expiresAt: bigint;
  surcharge?: 'Send' | 'Receive';
  swapCollectionId: string;
  swapSn?: string;
}

export type CancelSwapEvent = CreateSwapEvent

export type ClaimSwapEvent = CreateSwapEvent & {
  swapSn: string;
  owner: string;
  swapOwner: string;
}
