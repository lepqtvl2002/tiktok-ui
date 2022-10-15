import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./Button.module.scss";

function Button({ to, href, primary, outline, shape, onClick, passProps, size, children, leftIcon, rightIcon }) {
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
        shape && style[shape]
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <i className={clsx(style.icon)}>{leftIcon}</i>}
            <span className={clsx(style.title)}>{children}</span>
            {rightIcon && <i className={clsx(style.icon)}>{rightIcon}</i>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    shape: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

export default Button;
