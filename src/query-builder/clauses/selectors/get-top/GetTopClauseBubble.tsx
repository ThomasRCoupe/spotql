import { Bubble } from "../../../../design-system/Bubble";
import { PLACEHOLDER } from "./constants";

interface GetTopClauseBubbleProps {
  selected: boolean;
  amount: number | undefined;
  onClick: () => void;
}

const GetTopClauseBubble = ({
  selected,
  amount,
  onClick: handleClick,
}: GetTopClauseBubbleProps) => {
  return (
    <Bubble variant={selected ? "primary" : "inverted"} onClick={handleClick}>
      Get Top{amount ? ` ${amount}` : "..."}
    </Bubble>
  );
};

export default GetTopClauseBubble;
