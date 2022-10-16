import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./MenuItem.module.scss";

function MenuItem({
    to,
    href,
    primary,
    outline,
    shape,
    onClick,
    passProps,
    size,
    children,
    leftIcon,
    rightIcon,
    activeIcon,
    active,
    separate,
}) {
    let Comp = "button";

    const props = { onClick, ...passProps };

    if (to) {
        Comp = Link;
        props.to = to;
    }
    if (href) {
        Comp = "a";
        props.href = href;
    }

    const classes = clsx(
        style.wrapper,
        size && style[size],
        primary && ((outline && style["primary-outline"]) || style.primary),
        shape && style[shape],
        active && style.active,
        separate && style.separate
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon ? (
                active && activeIcon ? (
                    <i className={clsx(style.icon)}>{activeIcon}</i>
                ) : (
                    <i className={clsx(style.icon)}>{leftIcon}</i>
                )
            ) : (
                <></>
            )}
            <span className={clsx(style.title)}>{children}</span>
            {rightIcon ? (
                active && activeIcon ? (
                    <i className={clsx(style.icon)}>{activeIcon}</i>
                ) : (
                    <i className={clsx(style.icon)}>{rightIcon}</i>
                )
            ) : (
                <></>
            )}
        </Comp>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    shape: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    activeIcon: PropTypes.node,
    active: PropTypes.bool,
    separate: PropTypes.bool,
};

export default MenuItem;
