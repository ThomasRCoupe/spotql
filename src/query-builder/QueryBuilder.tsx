import { useState } from "react";
import QueryClause from "./QueryClause";
import { Query } from "./types";

export const QueryBuilder = () => {
  const [query, setQuery] = useState<Query>({});

  return (
    <div className="flex gap-2">
      <QueryClause
        type={"selector"}
        clause={query.selector}
        onChange={(selector) => setQuery({ ...query, selector })}
      />
    </div>
  );
};
