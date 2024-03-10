import { GetAllSelector } from "./clauses/get-all/types";
import { GetTopSelector } from "./clauses/get-top/types";

export interface Query {
  selector?: Selector;
}

export type Selector = GetAllSelector | GetTopSelector;
