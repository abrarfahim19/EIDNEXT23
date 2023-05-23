import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
 
const button = cva(["font-thin", "border", "rounded"], {
  variants: {
    intent: {
      primary: [
        "bg-brand",
        "text-white",
        "border-transparent",
        "hover:bg-brand/50",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "bg-transparent",
        "text-brand",
        "border-brand",
        "hover:bg-gray-50/20",
      ],
      danger: "bg-red-600 border-dashed hover:bg-red-500"
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      class: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
    {
      intent:"danger",
      size:"medium",
      class:"uppercase"
    }
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});
 

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}


const Button :React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => {
    return (
     <button className={button({ intent, size, className })} {...props} />
    );
}

export default Button;