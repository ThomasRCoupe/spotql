import { ClauseButton } from "../../../design-system/Clause";

export interface GetAllClauseProps {
  onClick: () => void;
}

export const GetAllClause = ({ onClick: handleClick }: GetAllClauseProps) => (
  <ClauseButton variant="standard" onClick={handleClick}>
    Get All
  </ClauseButton>
);
