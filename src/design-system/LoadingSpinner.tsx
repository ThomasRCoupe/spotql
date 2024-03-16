import clsx from "clsx";
import "./LoadingSpinner.css";

type LoadingSpinnerSize = "small" | "large";

interface LoadingSpinnerProps {
  size: LoadingSpinnerSize;
}

const LoadingSpinner = ({ size }: LoadingSpinnerProps) => (
  <span
    className={clsx(
      "loading-spinner",
      size === "small" ? "w-6 h-6" : "w-12 h-12"
    )}
  ></span>
);

export default LoadingSpinner;
