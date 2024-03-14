import {
  ShuffledOrderer,
  ShuffledOrdererDraft,
} from "./clauses/orderers/shuffled/types";
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

export type ClauseType = "selector" | "orderer" | "source";

export interface QueryDraft {
  selector?: SelectorDraft;
  orderer?: OrdererDraft;
  sources: SourceDraft[];
}

export type ClauseDraft = SelectorDraft | OrdererDraft | SourceDraft;

export type SelectorDraft = GetAllSelectorDraft | GetTopSelectorDraft;

export type OrdererDraft = ShuffledOrdererDraft;

export type SourceDraft = MyPlaylistSourceDraft;

export interface Query {
  selector: Selector;
  orderer?: Orderer;
  sources: Source[];
}

export type Clause = Selector | Orderer | Source;

export type Selector = GetAllSelector | GetTopSelector;

export type Source = MyPlaylistSource;

export type Orderer = ShuffledOrderer;
