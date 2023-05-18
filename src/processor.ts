import { lookupArchive } from "@subsquid/archive-registry"
import { SubstrateProcessor } from "@subsquid/substrate-processor"
import { FullTypeormDatabase as Database } from '@subsquid/typeorm-store'
import { Event } from './processable'
import logger from './mappings/utils/logger';

import * as u from './mappings/uniques';

const database = new Database();
const processor = new SubstrateProcessor(database);

const STARTING_BLOCK = 323750; //618838;

processor.setTypesBundle('statemine')
processor.setBlockRange({ from: STARTING_BLOCK });

const ARCHIVE_URL = 'http://localhost:8888/graphql';
const NODE_URL = 'wss://westmint-rpc.polkadot.io';

// const ARCHIVE = 'https://statemine.archive.subsquid.io/graphql';
const archive = ARCHIVE_URL
const chain = NODE_URL

processor.setDataSource({
    archive,
    chain,
});

const dummy = async () => {}

processor.addEventHandler(Event.createCollection, u.handleCollectionCreate);
processor.addEventHandler(Event.clearAttribute, u.handleAttributeSet);
processor.addEventHandler(Event.setAttribute, u.handleAttributeSet);
processor.addEventHandler(Event.burn, u.handleTokenBurn);

// Changed
processor.addEventHandler(Event.forceCreateCollection, u.handleForceCollectionCreate);
// processor.addEventHandler(Event.freezeClass, dummy);
processor.addEventHandler(Event.clearCollectionMetadata, u.handleMetadataSet);
processor.addEventHandler(Event.setCollectionMetadata, u.handleMetadataSet);
// end changed
// processor.addEventHandler(Event.thawClass, dummy);
// processor.addEventHandler(Event.freezeCollection, dummy);
processor.addEventHandler(Event.setCollectionMaxSupply, u.handleCollectionLock);
processor.addEventHandler(Event.clearCollectionMetadata, u.handleMetadataSet);
processor.addEventHandler(Event.setCollectionMetadata, u.handleMetadataSet);
processor.addEventHandler(Event.thawCollection, dummy);
processor.addEventHandler(Event.destroyCollection, u.handleCollectionDestroy);
// processor.addEventHandler(Event.freeze, dummy);
processor.addEventHandler(Event.createItem, u.handleTokenCreate);
processor.addEventHandler(Event.sold, u.handleTokenBuy);
processor.addEventHandler(Event.clearPrice, u.handleTokenList);
processor.addEventHandler(Event.setPrice, u.handleTokenList);
processor.addEventHandler(Event.clearMetadata, u.handleMetadataSet);
processor.addEventHandler(Event.setMetadata, u.handleMetadataSet);
processor.addEventHandler(Event.changeIssuer, u.handleCollectionOwnerChange);
// processor.addEventHandler(Event.changeOwnershipAcceptance, dummy);
processor.addEventHandler(Event.changeTeam, u.handleCollectionTeamChange);
// processor.addEventHandler(Event.thaw, dummy);
processor.addEventHandler(Event.transfer, u.handleTokenTransfer);


logger.info('Welcome to the Processor! Statemine');

processor.run();