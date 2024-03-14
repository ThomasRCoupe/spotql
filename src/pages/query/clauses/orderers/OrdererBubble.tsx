import { OrdererDraft } from "../../types";
import ShuffledBubble from "./shuffled/ShuffledBubble";

interface OrdererBubbleProps {
  orderer: OrdererDraft;
  onChange: (orderer: OrdererDraft) => void;
}

const OrdererBubble = ({
  orderer,
  onChange: handleChange,
}: OrdererBubbleProps) => {
  switch (orderer.variant) {
    case "shuffled":
      return <ShuffledBubble clause={orderer} onChange={handleChange} />;
  }
};

export default OrdererBubble;
