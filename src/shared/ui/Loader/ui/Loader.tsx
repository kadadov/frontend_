import { type ReactElement } from "react"
import cls from "./Loader.module.scss"

export const Loader = (): ReactElement => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.loader}></div>
        </div>
    )
}
