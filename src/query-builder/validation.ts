import { isGetTopSelectorValid } from "./clauses/selectors/get-top/validation";
import { isMyPlaylistSourceValid } from "./clauses/sources/my-playlist/validation";
import { Query, Selector, Source } from "./types";

const isSelectorValid = (selector: Selector) => {
  switch (selector.variant) {
    case "get-all":
      return true;
    case "get-top":
      return isGetTopSelectorValid(selector);
  }
};

const isSourceValid = (source: Source) => {
  switch (source.variant) {
    case "my-playlist":
      return isMyPlaylistSourceValid(source);
  }
};

export const isQueryValid = (query: Query) =>
  query.selector &&
  isSelectorValid(query.selector) &&
  query.sources.length > 0 &&
  query.sources.map((source) => isSourceValid(source));
