import GetAllBubble from "./get-all/GetAllBubble";
import { SelectorDraft } from "../../types";
import GetTopBubble from "./get-top/GetTopBubble";

interface SelectorBubbleProps {
  selector: SelectorDraft;
  onChange: (selector: SelectorDraft) => void;
}

const SelectorBubble = ({
  selector,
  onChange: handleChange,
}: SelectorBubbleProps) => {
  switch (selector.variant) {
    case "get-all":
      return <GetAllBubble selector={selector} onChange={handleChange} />;
    case "get-top":
      return <GetTopBubble clause={selector} onChange={handleChange} />;
  }
};

export default SelectorBubble;
