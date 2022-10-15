import clsx from "clsx";
import { Header, Sidebar } from "../components";
import style from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
    return (
        <div className={clsx(style.wrapper)}>
            <Header />
            <div className={clsx(style.container)}>
                <Sidebar />
                <div className={clsx(style.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
