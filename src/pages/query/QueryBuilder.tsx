import { OrdererDraft, QueryDraft, SelectorDraft, SourceDraft } from "./types";
import SelectorBubble from "./clauses/selectors/SelectorBubble";
import SourceBubble from "./clauses/sources/SourceBubble";
import PlaceholderBubble from "./components/PlaceholderBubble";
import { QueryAction } from "./hooks/useQueryReducer";
import OrdererBubble from "./clauses/orderers/OrdererBubble";

interface QueryBuilderProps {
  query: QueryDraft;
  dispatch: (action: QueryAction) => void;
}

const QueryBuilder = ({ query, dispatch }: QueryBuilderProps) => {
  return (
    <div className="flex gap-2">
      {query.selector ? (
        <SelectorBubble
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
              selector: selector as SelectorDraft,
            })
          }
        />
      )}
      {query.orderer ? (
        <OrdererBubble
          orderer={query.orderer}
          onChange={(orderer) => dispatch({ type: "orderer-change", orderer })}
        />
      ) : (
        <PlaceholderBubble
          type="orderer"
          onChange={(orderer) =>
            dispatch({
              type: "orderer-change",
              orderer: orderer as OrdererDraft,
            })
          }
        />
      )}
      {query.sources.map((source, index) => (
        <SourceBubble
          key={index}
          source={source}
          onChange={(newSource) =>
            dispatch({ type: "source-change", source: newSource, index })
          }
        />
      ))}
      <PlaceholderBubble
        type="source"
        onChange={(source) =>
          dispatch({ type: "source-add", source: source as SourceDraft })
        }
      />
    </div>
  );
};

export default QueryBuilder;
