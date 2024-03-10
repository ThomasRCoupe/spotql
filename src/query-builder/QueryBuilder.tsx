import { useState } from "react";
import { Query, Selector, Source } from "./types";
import { SelectorClause } from "./clauses/selectors/SelectorClause";
import VariantBubble from "./VariantBubble";
import { SourceClause } from "./clauses/sources/SourceClause";

export const QueryBuilder = () => {
  const [query, setQuery] = useState<Query>({
    sources: [],
  });

  const handleSelectorChange = (changedSelector: Selector) => {
    setQuery({ ...query, ...{ selector: changedSelector as Selector } });
  };

  const handleSourceChange = (changedSource: Source, index: number) => {
    setQuery({
      ...query,
      sources: [
        ...query.sources.slice(0, index),
        changedSource,
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
      {query.selector ? (
        <SelectorClause
          selector={query.selector}
          onChange={handleSelectorChange}
        />
      ) : (
        <VariantBubble
          type="selector"
          variant="inverted"
          onChange={(clause) => handleSelectorChange(clause as Selector)}
        >
          Selector
        </VariantBubble>
      )}
      {query.sources.length ? (
        query.sources.map((source, index) => (
          <SourceClause
            source={source}
            onChange={(changedSource) =>
              handleSourceChange(changedSource, index)
            }
          />
        ))
      ) : (
        <VariantBubble
          type="source"
          variant="inverted"
          onChange={(clause) => handleAddSource(clause as Source)}
        >
          Source
        </VariantBubble>
      )}
    </div>
  );
};
