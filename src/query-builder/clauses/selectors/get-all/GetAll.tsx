import { Selector } from "../../../types";
import Clause from "../../Clause";
import { GetAllSelector } from "./types";

export interface GetAllClause {
  selector: GetAllSelector;
  onChange: (selector: Selector) => void;
}

export const GetAll = ({ selector, onChange: handleChange }: GetAllClause) => (
  <Clause<GetAllSelector> clause={selector} onChange={handleChange} />
);
