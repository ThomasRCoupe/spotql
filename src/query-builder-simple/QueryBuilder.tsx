import { useState } from "react";
import { Query } from "./types";
import { SelectorClause } from "./SelectorClause";

export const QueryBuilder = () => {
  const [query, setQuery] = useState<Query>({});

  return (
    <div className="flex gap-2">
      <SelectorClause
        selector={query.selector}
        onChange={(selector) => setQuery({ ...query, selector })}
      />
    </div>
  );
};
