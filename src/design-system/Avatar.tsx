export type AvatarSize = "small" | "medium" | "large";

interface AvatarProps {
  src: string;
  alt: string;
  size: AvatarSize;
}

export const Avatar = ({ src, alt, size }: AvatarProps) => {
  const sizeInPixels = getSizeInPixels(size);

  return (
    <img
      className="rounded-full"
      src={src}
      alt={alt}
      height={sizeInPixels}
      width={sizeInPixels}
    />
  );
};

const getSizeInPixels = (size: AvatarSize) => {
  switch (size) {
    case "small":
      return 32;
    case "medium":
      return 48;
    case "large":
      return 64;
  }
};
