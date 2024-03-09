import { GetAllCommandBuilder } from "./selectors/GetAllCommandBuilder";
import { GetTopCommandBuilder } from "./selectors/GetTopCommandBuilder";
import { SelectorBuilder } from "./types";

export const getSelectorBuilders = (): SelectorBuilder[] => [
  {
    name: "Get All",
    render: () => <GetAllCommandBuilder />,
  },
  {
    name: "Get Top",
    render: (onSelectChange) => (
      <GetTopCommandBuilder onSelectChange={onSelectChange} />
    ),
  },
];
