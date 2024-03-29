import { getWith } from '@kodadot1/metasquid/entity'
import {
  NFTEntity as NE
} from '../../model'
import { unwrap } from '../utils/extract'
import { debug, pending, success } from '../utils/logger'
import { Action, Context, createTokenId } from '../utils/types'
import { getBurnTokenEvent } from './getters'
import { createEvent } from '../shared/event'

const OPERATION = Action.BURN

export async function handleTokenBurn(context: Context): Promise<void> {
  pending(OPERATION, `${context.block.height}`);
  const event = unwrap(context, getBurnTokenEvent);
  debug(OPERATION, event);

  const id = createTokenId(event.collectionId, event.sn);
  const entity = await getWith(context.store, NE, id, { collection: true });

  entity.burned = true;
  entity.updatedAt = event.timestamp;

  entity.collection.updatedAt = event.timestamp;
  entity.collection.supply -= 1;

  // TODO: UPDATE COLLECTION DISTRIBUTION

  success(OPERATION, `${id} by ${event.caller}}`);
  await context.store.save(entity);
  const meta = entity.metadata ?? '';
  await createEvent(entity, OPERATION, event, meta, context.store);
}