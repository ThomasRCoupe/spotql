import { OrdererDraft } from "../../../types";
import ClauseBubble from "../../../components/ClauseBubble";
import { ShuffledOrdererDraft } from "./types";

interface ShuffledBubbleProps {
  clause: ShuffledOrdererDraft;
  onChange: (selector: OrdererDraft) => void;
}

const ShuffledBubble = ({
  clause,
  onChange: handleChange,
}: ShuffledBubbleProps) => (
  <ClauseBubble<ShuffledOrdererDraft> clause={clause} onChange={handleChange} />
);

export default ShuffledBubble;
