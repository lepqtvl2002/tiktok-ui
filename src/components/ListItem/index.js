import PropTypes from "prop-types";
import clsx from "clsx";
import style from "./ListItem.module.scss";
function ListItem({ leftIcon, rightIcon, children }) {
    return (
        <li className={clsx(style.wrapper)}>
            {leftIcon && <i className={clsx(style.icon)}>{leftIcon}</i>}
            <span className={clsx(style.title)}>{children}</span>
            {rightIcon && <i className={clsx(style.icon)}>{rightIcon}</i>}
        </li>
    );
}

ListItem.propTypes = {
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node.isRequired,
    children: PropTypes.node,
};

export default ListItem;
