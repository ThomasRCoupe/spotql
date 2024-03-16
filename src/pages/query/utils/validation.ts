import { isGetTopSelectorValid } from "../clauses/selectors/get-top/validation";
import { isMyPlaylistSourceValid } from "../clauses/sources/my-playlist/validation";
import {
  OrdererDraft,
  Query,
  QueryDraft,
  SelectorDraft,
  SourceDraft,
} from "../types";

const isSelectorValid = (selector: SelectorDraft) => {
  switch (selector.variant) {
    case "get-all":
      return true;
    case "get-top":
      return isGetTopSelectorValid(selector);
  }
};

const isOrdererValid = (orderer: OrdererDraft) => {
  switch (orderer.variant) {
    case "shuffled":
      return true;
  }
};

const isSourceValid = (source: SourceDraft) => {
  switch (source.variant) {
    case "my-playlist":
      return isMyPlaylistSourceValid(source);
  }
};

export const isQueryDraftValid = (query: QueryDraft) =>
  query.selector &&
  isSelectorValid(query.selector) &&
  (!query.orderer || isOrdererValid(query.orderer)) &&
  query.sources.length > 0 &&
  query.sources.every((source) => isSourceValid(source));

export const convertDraftToQuery = (query: QueryDraft) => {
  if (!isQueryDraftValid(query)) {
    return undefined;
  }

  return { ...query } as Query;
};
