import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("rounded border bg-brand font-thin", {
  variants: {
    intent: {
      primary: [
        "bg-brand",
        "text-white",
        "border-transparent",
        "hover:bg-brand/50",
      ],
      secondary: [
        "text-brand",
        "bg-transparent",
        "border-brand",
        "hover:bg-gray-50/20",
      ],
      danger: "border-dashed bg-red-600 hover:bg-red-500",
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    // {
    //   intent: "primary",
    //   size: "medium",
    //   className: "uppercase",
    // },
    // {
    //   intent: "danger",
    //   size: "medium",
    //   className: "uppercase",
    // },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  label?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  label,
  ...props
}) => {
  return (
    <button className={button({ intent, size, className })} {...props}>
      {label}
      {props.children}
    </button>
  );
};

// export Button;
