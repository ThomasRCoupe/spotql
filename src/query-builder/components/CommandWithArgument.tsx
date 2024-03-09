import { useState } from "react";

export interface CommandWithArgumentProps {
  command: string;
  argumentName: string;
}

export const CommandWithArgument = ({
  command,
  argumentName,
}: CommandWithArgumentProps) => {
  const [argumentValue, setArgument] = useState<string>();

  const charCount = argumentValue ? argumentValue.length : argumentName.length;
  console.log(charCount);

  return (
    <button className="px-4 rounded-full bg-white hover:bg-white/90 text-black">
      <span className="my-1">{command} </span>
      <input
        type="text"
        className="h-full outline-none bg-transparent hover:bg-black/10 focus:bg-black/10"
        placeholder={argumentName}
        value={argumentValue}
        onChange={(event) => setArgument(event.target.value)}
      />
    </button>
  );
};
