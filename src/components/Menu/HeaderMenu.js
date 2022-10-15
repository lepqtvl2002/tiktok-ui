import PropTypes from "prop-types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import style from "./Menu.module.scss";

function HeaderMenu({ children, onBack }) {
    return (
        <div className={clsx(style["header-container"])}>
            <FontAwesomeIcon icon={faChevronLeft} className={clsx(style["header-back-icon"])} onClick={onBack} />
            <h4 className={clsx(style["header-title"])}>{children}</h4>
        </div>
    );
}

HeaderMenu.propTypes = {
    children: PropTypes.node.isRequired,
    onBack: PropTypes.func,
};

export default HeaderMenu;
