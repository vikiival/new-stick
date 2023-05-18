import { BaseTokenEvent } from '../uniques/types'

export type WithAmount = {
  amount: bigint;
};

export type PayRoyaltyEvent = BaseTokenEvent & WithAmount & {
  recipient: string;
}