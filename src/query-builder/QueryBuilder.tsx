import { useState } from "react";
import QueryClause from "./QueryClause";
import { Query, Selector, Source } from "./types";

export const QueryBuilder = () => {
  const [query, setQuery] = useState<Query>({
    sources: [],
  });

  const handleSourceChange = (newSource: Source, index: number) => {
    setQuery({
      ...query,
      sources: [
        ...query.sources.slice(0, index),
        newSource,
        ...query.sources.slice(index + 1),
      ],
    });
  };

  const handleAddSource = (newSource: Source) => {
    setQuery({
      ...query,
      sources: [...query.sources, newSource as Source],
    });
  };

  return (
    <div className="flex gap-2">
      <QueryClause
        type="selector"
        clause={query.selector}
        onChange={(selector) =>
          setQuery({ ...query, ...{ selector: selector as Selector } })
        }
      />
      {query.sources.length ? (
        query.sources.map((source, index) => (
          <QueryClause
            key={index}
            type="source"
            clause={source}
            onChange={(newSource) =>
              handleSourceChange(newSource as Source, index)
            }
          />
        ))
      ) : (
        <QueryClause
          type="source"
          onChange={(newSource) => handleAddSource(newSource as Source)}
        />
      )}
    </div>
  );
};
