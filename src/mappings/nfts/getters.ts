import { NftsTipSentEvent } from '../../types/events'
import { addressOf } from '../utils/helper'
import { Context } from '../utils/types'
import { PayRoyaltyEvent } from './types'

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