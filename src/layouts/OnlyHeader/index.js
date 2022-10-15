import clsx from "clsx";
import { Header } from "../components";
import style from "./OnlyHeader.module.scss";

function OnlyHeader({ children }) {
    return (
        <div className={clsx(style.wrapper)}>
            <Header />
            <div className={clsx(style.container)}>
                <div className={clsx(style.content)}>{children}</div>
            </div>
        </div>
    );
}

export default OnlyHeader;
