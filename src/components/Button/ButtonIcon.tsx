"use client";

import { memo } from "react";

interface ButtonIconProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const ButtonIcon = memo(({ children, onClick }: ButtonIconProps) => {
  return (
    <button
      tabIndex={0}
      role="button"
      className="btn btn-outline border border-secondary-200 btn-circle hover:bg-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
});
ButtonIcon.displayName = "ButtonIcon";
export default memo(ButtonIcon);
