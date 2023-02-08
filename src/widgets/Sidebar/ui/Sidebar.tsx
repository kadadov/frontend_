import { FC, ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return <div>{children}</div>;
};
