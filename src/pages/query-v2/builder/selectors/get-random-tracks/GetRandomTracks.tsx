import InputWord from "../../InputWord";
import Word from "../../Word";

interface GetRandomTracksProps {
  quantity: number | undefined;
  onQuantityChange: (quantity: number | undefined) => void;
}

const GetRandomTracks = ({
  quantity,
  onQuantityChange: handleQuantityChange,
}: GetRandomTracksProps) => {
  const handleChange = (newQuantity: string) => {
    if (!newQuantity) {
      handleQuantityChange(undefined);
      return;
    }

    const numberValue = parseInt(newQuantity.replace(/[^0-9]/g, ""));
    handleQuantityChange(!Number.isNaN(numberValue) ? numberValue : undefined);
  };

  return (
    <>
      <InputWord
        value={quantity ? quantity.toString() : ""}
        onChange={handleChange}
        placeholder="Quantity: number"
      />
      <Word>Random</Word>
    </>
  );
};

export default GetRandomTracks;
