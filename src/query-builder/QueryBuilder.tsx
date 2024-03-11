import { Selector, Source } from "./types";
import { SelectorClause } from "./clauses/selectors/SelectorClause";
import { SourceClause } from "./clauses/sources/SourceClause";
import PlaceholderBubble from "./PlaceholderBubble";
import { useQueryReducer } from "./useQueryReducer";

export const QueryBuilder = () => {
  const [query, dispatch] = useQueryReducer({ sources: [] });

  return (
    <div className="flex gap-2">
      {query.selector ? (
        <SelectorClause
          selector={query.selector}
          onChange={(selector) =>
            dispatch({ type: "selector-change", selector })
          }
        />
      ) : (
        <PlaceholderBubble
          type="selector"
          onChange={(selector) =>
            dispatch({
              type: "selector-change",
              selector: selector as Selector,
            })
          }
        />
      )}
      {query.sources.length ? (
        query.sources.map((source, index) => (
          <SourceClause
            key={index}
            source={source}
            onChange={(newSource) =>
              dispatch({ type: "source-change", source: newSource, index })
            }
          />
        ))
      ) : (
        <PlaceholderBubble
          type="source"
          onChange={(source) =>
            dispatch({ type: "source-add", source: source as Source })
          }
        />
      )}
    </div>
  );
};
