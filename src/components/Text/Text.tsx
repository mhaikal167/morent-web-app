"use client";
import React, { memo, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

const fontWeights = {
  thin: "font-thin",
  extraLight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semiBold: "font-semibold",
  bold: "font-bold",
  extraBold: "font-extrabold",
  black: "font-black",
  100: "font-thin",
  200: "font-extralight",
  300: "font-light",
  400: "font-normal",
  500: "font-medium",
  600: "font-semibold",
  700: "font-bold",
  800: "font-extrabold",
  900: "font-black",
};

const textSizes = {
  "9xl": "max-sm:text-5xl text-9xl",
  "8xl": "max-sm:text-5xl text-8xl",
  "7xl": "max-sm:text-5xl text-7xl",
  "6xl": "max-sm:text-5xl text-6xl",
  "5xl": "text-5xl",
  "4xl": "text-4xl",
  "3xl": "text-3xl",
  "2xl": "text-2xl",
  xl: "text-xl",
  lg: "text-lg",
  base: "text-base",
  text_sm: "text-sm",
  xs: "text-xs",
  128: "max-sm:text-5xl text-9xl",
  96: "max-sm:text-5xl text-8xl",
  72: "max-sm:text-5xl text-7xl",
  60: "max-sm:text-5xl text-6xl",
  48: "text-5xl",
  36: "text-4xl",
  30: "text-3xl",
  24: "text-2xl",
  20: "text-xl",
  18: "text-lg",
  16: "text-base",
  14: "text-sm",
  12: "text-xs",
};

interface TextProps extends React.HTMLProps<HTMLParagraphElement> {
  isPhone?: boolean;
  isEmail?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  weight?: keyof typeof fontWeights;
  textSize?: keyof typeof textSizes;
  hasReadMore?: boolean;
  readMoreCount?: number;
  isDirect?: boolean;
  directAction?: () => void;
  directText?: string;
  tooltipPosition?: "top" | "right" | "bottom" | "left";
  tooltip?: string;
  tooltipClassName?: string;
}

const Text = ({
  isPhone = false,
  isEmail = false,
  icon,
  iconPosition = "left",
  children,
  weight = "normal",
  textSize = "base",
  hasReadMore = false,
  readMoreCount = 70,
  className = "text-black",
  isDirect = false,
  directAction,
  directText,
  tooltipPosition = "right",
  tooltip = "",
  tooltipClassName,
  ...props
}: TextProps) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(true);
  };
  const hasUnderline = isPhone || isEmail;
  const hasTooltip = hasUnderline || isDirect;
  const onClickDirect = useCallback(() => {
    if (typeof children === "string") {
      if (isPhone) {
        const phoneNumber = children.startsWith("0")
          ? `62${children.slice(1)}`
          : children;
        window.open(`http://wa.me/${phoneNumber}`);
      } else if (isEmail) {
        window.open(`mailto:${children}`);
      } else {
        directAction?.();
      }
    }
  }, [children, isEmail, isPhone, directAction]);

  const getTooltipText = useCallback(() => {
    if (typeof children === "string") {
      if (isPhone) {
        return `Wa to ${children}`;
      } else if (isEmail) {
        return `Email to ${children}`;
      } else {
        return directText;
      }
    }
  }, [children, isEmail, isPhone, directText]);

  return (
    <div
      className={twMerge("flex", hasReadMore ? "items-start" : "items-center")}
    >
      <div className="flex">
        {icon &&
          !props.hidden &&
          iconPosition === "left" &&
          React.cloneElement(icon as React.ReactElement)}
        {icon && iconPosition === "left" && (
          <div
            className={twMerge(
              "w-2",
              props.onClick !== undefined ? "cursor-pointer" : ""
            )}
          />
        )}
      </div>
      <p
        data-tip={getTooltipText()}
        className={twMerge(
          fontWeights[weight],
          textSizes[textSize],
          hasUnderline && "underline",
          hasTooltip &&
            `cursor-pointer tooltip tooltip-${tooltipPosition} text-left`,
          className
        )}
        onClick={onClickDirect}
        {...props}
      >
        {(hasReadMore &&
          isReadMore &&
          typeof children === "string" &&
          children?.length > readMoreCount) ||
        (isDirect &&
          !hasReadMore &&
          typeof children === "string" &&
          children?.length > readMoreCount)
          ? children?.slice(0, readMoreCount)
          : children}

        {hasReadMore &&
        isReadMore &&
        typeof children === "string" &&
        children?.length > readMoreCount ? (
          <span
            onClick={toggleReadMore}
            className="read-or-hide text-primary cursor-pointer"
          >
            {isReadMore ? "...more" : " ...less"}
          </span>
        ) : (
          isDirect &&
          !hasReadMore &&
          typeof children === "string" && (
            <span
              onClick={onClickDirect}
              className="text-primary cursor-pointer"
            >
              {isReadMore ? "...more" : " ...less"}
            </span>
          )
        )}
      </p>
      {tooltip !== "" && (
        <div className={`ml-1 tooltip ${className}`}>
          <div
            className={`tooltip-text text-xs ${
              tooltipClassName || "w-[120px]"
            }`}
          >
            {tooltip}
          </div>
        </div>
      )}
      {icon && iconPosition === "right" && icon}
    </div>
  );
};
export default memo(Text);
