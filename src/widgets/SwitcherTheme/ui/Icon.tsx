import { FC, SVGProps } from "react";
import { Theme } from "app/providers/ThemeProvider/ui/ThemeContext";
import IconLight from "shared/assets/icons/light-mode.svg";
import IconDark from "shared/assets/icons/dark-mode.svg";

interface IconProps extends SVGProps<SVGSVGElement> {
  theme: Theme;
}

export const Icon: FC<IconProps> = ({ theme, ...props }) => {
  return theme === Theme.LIGHT ? (
    <IconLight {...props} />
  ) : (
    <IconDark {...props} />
  );
};
