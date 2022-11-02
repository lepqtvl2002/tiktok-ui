import clsx from "clsx";
import { Header, Sidebar } from "../components";
import style from "./LiveLayout.module.scss";
function LiveLayout({ children }) {
  return (
    <div className={clsx(style.wrapper)}>
      <Header live />
      <div className={clsx(style.container)}>
        <div className={clsx(style.sidebar)}>
          <Sidebar />
        </div>
        <div className={clsx(style.content)}>{children}</div>
      </div>
    </div>
  );
}

export default LiveLayout;
