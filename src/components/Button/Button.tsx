import { memo } from "react";

import { twMerge } from "tailwind-merge";

interface CombineButtonProps {
  isRoundedFull?: boolean;
  color?: string;
  variant?: "primary" | "secondary" | "outline" | "info";
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  isFullWidth?: boolean;
}

const Button = memo((props: CombineButtonProps) => {
  // *Props
  const {
    // size = "md",
    color = "primary",
    variant = "primary",
    isRoundedFull = false,
    className,
    children,
    loading,
    disabled,
    isFullWidth = false,
    // startIcon,
    // endIcon,
    ...rest
  } = props;

  // * vars

  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "outline":
        return "btn-outline";
      case "secondary":
        return "btn-secondary";
      case "info":
        return "btn-info";
      default:
        break;
    }
  };
  return (
    <button
      type="button"
      color={color}
      disabled={loading || disabled}
      className={twMerge(
        isRoundedFull ? "rounded-full" : "rounded-md",
        isFullWidth ? "w-full" : "w-fit",
        className,
        "btn",
        getVariant()
      )}
      {...rest}
    >
      {" "}
      {loading && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default memo(Button);
