declare module "*.css" {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}

declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png";

declare module "*.jpg";

declare module "*.jpeg";

declare module "*.svg" {
  import type React from "react"
  const src: React.FC<React.SVGProps<SVGSVGElement>>
  export default src
}

declare const __IS_DEV__: boolean
