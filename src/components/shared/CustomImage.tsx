"use client";
import NextImage from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

const CustomImage = ({
  src,
  alt,
  className,
  fill = false,
  ...props
}: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      fill={fill}
      width={props.width}
      height={props.height}
      className={`${className}`}
      placeholder="blur"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/ayDWYQAAAAASUVORK5CYII="
      {...props}
    />
  );
};

export default CustomImage;
