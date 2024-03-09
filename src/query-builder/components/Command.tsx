export interface CommandProps {
  command: string;
}

export const Command = ({ command }: CommandProps) => (
  <button className="py-1 px-4 rounded-full bg-white hover:bg-white/90 text-black">
    {command}
  </button>
);
