import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return <button {...props}>{children}</button>;
};
