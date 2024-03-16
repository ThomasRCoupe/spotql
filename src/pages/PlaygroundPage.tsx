import { Bubble } from "../design-system/Bubble";
import WidthAdjustingInput from "../design-system/WidthAdjustingInput";

const PlaygroundPage = () => {
  return (
    <div>
      <Bubble variant="primary">
        <span className="align-middle">Get Top </span>
        <WidthAdjustingInput />
      </Bubble>
    </div>
  );
};

export default PlaygroundPage;
