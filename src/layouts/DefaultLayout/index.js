import clsx from "clsx";
import { Header, Sidebar } from "../components";
import style from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.header)}>
        <Header />
      </div>
      <div className={clsx(style.container)}>
        <div className={clsx(style.sidebar)}>
          <Sidebar />
        </div>
        <div className={clsx(style.content)}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
