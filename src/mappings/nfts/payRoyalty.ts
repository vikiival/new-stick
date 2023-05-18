import { getOptional as get } from '@kodadot1/metasquid/entity'
import {
  NFTEntity as NE
} from '../../model'
import { createEvent } from '../shared/event'
import { unwrap } from '../utils/extract'
import { debug, pending, warn } from '../utils/logger'
import { Context, createTokenId } from '../utils/types'
import { getPayRoyaltyEvent } from './getters'

const OPERATION: any = 'PAY_ROYALTY' // Action.PAY_ROYALTY

export async function handleRoyaltyPay(context: Context): Promise<void> {
  pending(OPERATION, `${context.block.height}`);
  const event = unwrap(context, getPayRoyaltyEvent);
  debug(OPERATION, event, true);

  const id = createTokenId(event.collectionId, event.sn);
  const entity = await get(context.store, NE, id);

  if (!entity) {
    warn(OPERATION, `Token ${id} not found`);
    return;
  }

  if (entity.currentOwner === event.recipient) {
    const meta = String(event.amount || '');
    await createEvent(entity, OPERATION, event, meta, context.store, event.recipient);
  }
}