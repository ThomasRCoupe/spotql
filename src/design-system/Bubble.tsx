import clsx from "clsx";

export type BubbleVariant = "primary" | "secondary" | "inverted";

export interface BubbleProps {
  variant: BubbleVariant;
  onClick?: () => void;
  children: React.ReactNode;
}

const getVariantClasses = (variant: BubbleVariant) => {
  switch (variant) {
    case "primary":
      return "bg-white hover:bg-white/85 focus:hover:bg-white/85 text-black";
    case "secondary":
      return "bg-white hover:bg-white/85 focus:hover:bg-white/85 text-light-grey";
    case "inverted":
      return "bg-white/10 hover:bg-white/25 focus:hover:bg-white/25 text-light-grey";
  }
};

export const Bubble = ({
  variant,
  onClick: handleClick,
  children,
}: BubbleProps) =>
  handleClick ? (
    <div>
      <button
        className={clsx("h-8 px-4 rounded-full", getVariantClasses(variant))}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  ) : (
    <div
      className={clsx(
        "h-8 px-4 rounded-full flex items-center gap-2",
        getVariantClasses(variant)
      )}
    >
      {children}
    </div>
  );
