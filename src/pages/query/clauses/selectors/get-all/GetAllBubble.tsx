import { SelectorDraft } from "../../../types";
import ClauseBubble from "../../ClauseBubble";
import { GetAllSelectorDraft } from "./types";

interface GetAllBubbleProps {
  selector: GetAllSelectorDraft;
  onChange: (selector: SelectorDraft) => void;
}

const GetAllBubble = ({
  selector,
  onChange: handleChange,
}: GetAllBubbleProps) => (
  <ClauseBubble<GetAllSelectorDraft>
    clause={selector}
    onChange={handleChange}
  />
);

export default GetAllBubble;
