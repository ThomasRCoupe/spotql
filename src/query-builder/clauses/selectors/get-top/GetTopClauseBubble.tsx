import { Bubble } from "../../../../design-system/Bubble";
import { PLACEHOLDER } from "./constants";

interface GetTopClauseBubbleProps {
  amount: number | undefined;
  onClick: () => void;
}

const GetTopClauseBubble = ({
  amount,
  onClick: handleClick,
}: GetTopClauseBubbleProps) => {
  return (
    <Bubble variant="primary" onClick={handleClick}>
      Get Top {amount ?? <span className="text-light-grey">{PLACEHOLDER}</span>}
    </Bubble>
  );
};

export default GetTopClauseBubble;
