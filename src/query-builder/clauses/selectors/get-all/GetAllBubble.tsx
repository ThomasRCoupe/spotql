import { Selector } from "../../../types";
import ClauseBubble from "../../ClauseBubble";
import { GetAllSelector } from "./types";

interface GetAllBubbleProps {
  selector: GetAllSelector;
  onChange: (selector: Selector) => void;
}

const GetAllBubble = ({
  selector,
  onChange: handleChange,
}: GetAllBubbleProps) => (
  <ClauseBubble<GetAllSelector> clause={selector} onChange={handleChange} />
);

export default GetAllBubble;
