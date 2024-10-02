import React, { ReactNode } from "react";
import Text from "../Text/Text";
import { twMerge } from "tailwind-merge";

interface CardProps {
  title?: string;
  desc?: string;
  hasImage?: boolean;
  imageUrl?: string;
  hasHeader?: boolean;
  headerContent?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Card = ({
  title,
  desc,
  imageUrl,
  hasImage = false,
  hasHeader = false,
  headerContent,
  children,
  className,
}: CardProps) => {
  return (
    <div className={twMerge("card bg-white min-w-80", className)}>
      <div className="card-title">{headerContent}</div>
      <div className="card-body">
        {children}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
