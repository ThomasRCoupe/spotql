import { useState } from "react";
import { CommandPlaceholder } from "./components/CommandPlaceholder";
import { QueryBuilders, SelectFunction, SelectorBuilder } from "./types";
import { getSelectorBuilders } from "./commands";
import { CommandSuggestions } from "./CommandSuggestions";

export const QueryBuilder = () => {
  const [queryBuilders, setQueryBuilders] = useState<QueryBuilders>({});

  const handleSelectChange = (select: SelectFunction) => {
    setQueryBuilders({
      ...queryBuilders,
      ...(queryBuilders.selectorBuilder && {
        selectorBuilder: {
          ...queryBuilders.selectorBuilder,
          select,
        },
      }),
    });
  };

  const handleChangeSelectorBuilder = (builder: SelectorBuilder) => {
    setQueryBuilders({ ...queryBuilders, selectorBuilder: builder });
  };

  const selectorBuilderOptions = getSelectorBuilders();

  return (
    <>
      <div className="flex gap-2">
        {queryBuilders.selectorBuilder ? (
          queryBuilders.selectorBuilder.render(handleSelectChange)
        ) : (
          <CommandPlaceholder command="Selector" />
        )}
      </div>
      <CommandSuggestions
        builders={selectorBuilderOptions}
        onSelectBuilder={handleChangeSelectorBuilder}
      />
    </>
  );
};
