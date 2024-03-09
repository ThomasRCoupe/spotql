export interface QueryBuilders {
  selectorBuilder?: SelectorBuilder & { select?: SelectFunction };
}

export type SelectFunction = (songs: Song[]) => Promise<Song[]>;

export interface SelectorBuilder {
  name: string;
  render: (onSelectChange: (select: SelectFunction) => void) => JSX.Element;
}

export interface Song {
  id: string;
  name: string;
}
