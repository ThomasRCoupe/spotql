export interface CommandPlaceholderProps {
  command: string;
}

export const CommandPlaceholder = ({ command }: CommandPlaceholderProps) => (
  <button className="py-1 px-4 rounded-full bg-white/10 hover:bg-white/20 text-light-grey">
    {command}...
  </button>
);
