import { Clause } from "../types";

export interface RenderArgumentInputParams<TClause> {
  clause: TClause;
  selected: boolean;
  onChange: (clause: TClause) => void;
  onSelectedChange: (selected: boolean) => void;
  onConfirm: () => void;
}

export interface ClauseArgument<TClause extends Clause> {
  name: string;
  renderText: (clause: TClause) => string | undefined;
  renderInput: (params: RenderArgumentInputParams<TClause>) => JSX.Element;
}
