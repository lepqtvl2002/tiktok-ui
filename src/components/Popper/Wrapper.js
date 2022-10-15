import PropTypes from "prop-types";
import clsx from "clsx";
import style from "./Popper.module.scss";

function Wrapper({ children }) {
    return <div className={clsx(style.wrapper)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
