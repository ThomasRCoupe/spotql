import { isGetTopSelectorValid } from "./clauses/selectors/get-top/validation";
import { isMyPlaylistSourceValid } from "./clauses/sources/my-playlist/validation";
import { QueryDraft, SelectorDraft, SourceDraft } from "./types";

const isSelectorValid = (selector: SelectorDraft) => {
  switch (selector.variant) {
    case "get-all":
      return true;
    case "get-top":
      return isGetTopSelectorValid(selector);
  }
};

const isSourceValid = (source: SourceDraft) => {
  switch (source.variant) {
    case "my-playlist":
      return isMyPlaylistSourceValid(source);
  }
};

export const isQueryValid = (query: QueryDraft) =>
  query.selector &&
  isSelectorValid(query.selector) &&
  query.sources.length > 0 &&
  query.sources.map((source) => isSourceValid(source));
