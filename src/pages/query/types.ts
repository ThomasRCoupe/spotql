import {
  GetAllSelector,
  GetAllSelectorDraft,
} from "./clauses/selectors/get-all/types";
import {
  GetTopSelector,
  GetTopSelectorDraft,
} from "./clauses/selectors/get-top/types";
import {
  MyPlaylistSource,
  MyPlaylistSourceDraft,
} from "./clauses/sources/my-playlist/types";

export type ClauseType = "selector" | "source";

export interface QueryDraft {
  selector?: SelectorDraft;
  sources: SourceDraft[];
}

export type ClauseDraft = SelectorDraft | SourceDraft;

export type SelectorDraft = GetAllSelectorDraft | GetTopSelectorDraft;

export type SourceDraft = MyPlaylistSourceDraft;

export interface Query {
  selector: Selector;
  sources: Source[];
}

export type Clause = Selector | Source;

export type Selector = GetAllSelector | GetTopSelector;

export type Source = MyPlaylistSource;
