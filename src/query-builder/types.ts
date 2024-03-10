import { GetAllSelector } from "./clauses/selectors/get-all/types";
import { GetTopSelector } from "./clauses/selectors/get-top/types";
import { MyPlaylistSource } from "./clauses/sources/my-playlist/types";

export interface Query {
  selector?: Selector;
  sources: Source[];
}

export type ClauseType = "selector" | "source";

export type Clause = Selector | Source;

export type Selector = GetAllSelector | GetTopSelector;

export type Source = MyPlaylistSource;
