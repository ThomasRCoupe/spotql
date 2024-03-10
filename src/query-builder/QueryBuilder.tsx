import { useState } from "react";
import { Clause, Query, Selector, Source } from "./types";
import { SelectorClause } from "./clauses/selectors/SelectorClause";
import { SourceClause } from "./clauses/sources/SourceClause";
import PlaceholderBubble from "./PlaceholderBubble";

export const QueryBuilder = () => {
  const [query, setQuery] = useState<Query>({
    sources: [],
  });

  const handleSelectorChange = (changedSelector: Selector) => {
    setQuery({
      ...(changedSelector.selected ? deselectQuery(query) : query),
      ...{ selector: changedSelector as Selector },
    });
  };

  const handleSourceChange = (changedSource: Source, index: number) => {
    setQuery({
      ...(changedSource.selected ? deselectQuery(query) : query),
      sources: [
        ...query.sources.slice(0, index),
        changedSource,
        ...query.sources.slice(index + 1),
      ],
    });
  };

  const handleAddSource = (newSource: Source) => {
    setQuery({
      ...(newSource.selected ? deselectQuery(query) : query),
      sources: [...query.sources, newSource as Source],
    });
  };

  return (
    <div className="flex gap-2">
      {query.selector ? (
        <SelectorClause
          selector={query.selector}
          onChange={handleSelectorChange}
        />
      ) : (
        <PlaceholderBubble
          type="selector"
          onChange={(clause) => handleSelectorChange(clause as Selector)}
        />
      )}
      {query.sources.length ? (
        query.sources.map((source, index) => (
          <SourceClause
            key={index}
            source={source}
            onChange={(changedSource) =>
              handleSourceChange(changedSource, index)
            }
          />
        ))
      ) : (
        <PlaceholderBubble
          type="source"
          onChange={(clause) => handleAddSource(clause as Source)}
        />
      )}
    </div>
  );
};

const deselectClause = (clause: Clause): Clause => ({
  ...clause,
  selected: false,
});

const deselectQuery = (query: Query): Query => ({
  selector: query.selector && (deselectClause(query.selector) as Selector),
  sources: [...query.sources.map((source) => deselectClause(source) as Source)],
});
