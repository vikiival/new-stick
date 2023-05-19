import { NftsSwapCancelledEvent, NftsSwapClaimedEvent, NftsSwapCreatedEvent, NftsTipSentEvent } from '../../types/events'
import { addressOf, str } from '../utils/helper'
import { Context } from '../utils/types'
import { CancelSwapEvent, ClaimSwapEvent, CreateSwapEvent, PayRoyaltyEvent } from './types'

export function getPayRoyaltyEvent(ctx: Context): PayRoyaltyEvent {
  const event = new NftsTipSentEvent(ctx);
  if (event.isV9370) {
    const {
      collection: classId, item: instanceId, receiver: recipient, amount,
    } = event.asV9370
    return {
      collectionId: classId.toString(), sn: instanceId.toString(), recipient: addressOf(recipient), amount,
    };
  }

    ctx.log.warn('USING UNSAFE GETTER! PLS UPDATE TYPES!')
    const {
      collection: classId, item: instanceId, receiver: recipient, amount,
    } = ctx._chain.decodeEvent(ctx.event)

    return {
      collectionId: classId.toString(), sn: instanceId.toString(), recipient: addressOf(recipient), amount,
    };
}

export function getCreateSwapEvent(ctx: Context): CreateSwapEvent {
  const event = new NftsSwapCreatedEvent(ctx);

  if (event.isV9370) {
    const {
      offeredCollection: classId, offeredItem: instanceId, desiredCollection, desiredItem, price, deadline
    } = event.asV9370;
    return {
      collectionId: classId.toString(), sn: instanceId.toString(), amount: price?.amount || 0n, surcharge: price?.direction?.__kind, expiresAt: BigInt(deadline), swapCollectionId: str(desiredCollection), swapSn: desiredItem?.toString(),
    };
  }

  const {
    offeredCollection: classId, offeredItem: instanceId, desiredCollection, desiredItem, price, deadline
  } = ctx._chain.decodeEvent(ctx.event);
  return {
    collectionId: classId.toString(), sn: instanceId.toString(), amount: price?.amount || 0n, surcharge: price?.direction?.__kind, expiresAt: BigInt(deadline), swapCollectionId: str(desiredCollection), swapSn: desiredItem?.toString(),
  };
}

export function getCancelSwapEvent(ctx: Context): CancelSwapEvent {
  const event = new NftsSwapCancelledEvent(ctx);

  if (event.isV9370) {
    const {
      offeredCollection: classId, offeredItem: instanceId, desiredCollection, desiredItem, price, deadline
    } = event.asV9370;
    return {
      collectionId: classId.toString(), sn: instanceId.toString(), amount: price?.amount || 0n, surcharge: price?.direction?.__kind, expiresAt: BigInt(deadline), swapCollectionId: str(desiredCollection), swapSn: desiredItem?.toString(),
    };
  }

  const {
    offeredCollection: classId, offeredItem: instanceId, desiredCollection, desiredItem, price, deadline
  } = ctx._chain.decodeEvent(ctx.event);
  return {
    collectionId: classId.toString(), sn: instanceId.toString(), amount: price?.amount || 0n, surcharge: price?.direction?.__kind, expiresAt: BigInt(deadline), swapCollectionId: str(desiredCollection), swapSn: desiredItem?.toString(),
  };
}

export function getClaimSwapEvent(ctx: Context): ClaimSwapEvent {
  const event = new NftsSwapClaimedEvent(ctx);

  if (event.isV9370) {
    const {
      sentCollection: classId, sentItem: instanceId, sentItemOwner, receivedCollection, receivedItem, receivedItemOwner, price, deadline
    } = event.asV9370;
    return {
      collectionId: classId.toString(), sn: instanceId.toString(), owner: addressOf(sentItemOwner), amount: price?.amount || 0n, surcharge: price?.direction?.__kind, expiresAt: BigInt(deadline), swapCollectionId: str(receivedCollection), swapSn: str(receivedItem), swapOwner: addressOf(receivedItemOwner),
    };
  }

  const {
    sentCollection: classId, sentItem: instanceId, sentItemOwner, receivedCollection, receivedItem, receivedItemOwner, price, deadline
  } = ctx._chain.decodeEvent(ctx.event);
  return {
    collectionId: classId.toString(), sn: instanceId.toString(), owner: addressOf(sentItemOwner), amount: price?.amount || 0n, surcharge: price?.direction?.__kind, expiresAt: BigInt(deadline), swapCollectionId: str(receivedCollection), swapSn: str(receivedItem), swapOwner: addressOf(receivedItemOwner),
  };
}