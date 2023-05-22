import { getOrFail as get } from '@kodadot1/metasquid/entity'
import {
  NFTEntity as NE
} from '../../model'
import { createEvent } from '../shared/event'
import { unwrap } from '../utils/extract'
import { debug, pending, warn } from '../utils/logger'
import { Context, createTokenId } from '../utils/types'
import { getCreateSwapEvent } from './getters'

const OPERATION: any = 'CREATE_SWAP' // Action.PAY_ROYALTY

export async function handleSwapCreate(context: Context): Promise<void> {
  pending(OPERATION, `${context.block.height}`);
  const event = unwrap(context, getCreateSwapEvent);
  debug(OPERATION, event, true);

  const id = createTokenId(event.collectionId, event.sn);
  const entity = await get(context.store, NE, id);

  

}