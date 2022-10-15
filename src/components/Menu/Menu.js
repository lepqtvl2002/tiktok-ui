import PropTypes from "prop-types";
import clsx from "clsx";
import style from "./Menu.module.scss";

function Menu({ children }) {
    return <div className={clsx(style.wrapper)}>{children}</div>;
}

Menu.propType = {
    children: PropTypes.node.isRequired,
};

export default Menu;
