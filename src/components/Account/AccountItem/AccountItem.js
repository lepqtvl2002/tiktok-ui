import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import style from "./AccountItem.module.scss";
import Image from "~/components/Image";

function AccountItem({ avatar, fullName, nickname, tick, size }) {
    return (
        <Link to={`/@${nickname}`} className={clsx(style.wrapper, style[size])}>
            <Image className={clsx(style.avatar)} src={avatar} alt="Account item" />
            <div className={clsx(style.content)}>
                <div className={clsx(style.heading)}>
                    <h4 className={clsx(style.name)}>{nickname}</h4>
                    {tick && <FontAwesomeIcon icon={faCircleCheck} className={clsx(style.tick)} />}
                </div>
                <span className={clsx(style.description)}>{fullName}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    avatar: PropTypes.string,
    fullName: PropTypes.string,
    nickname: PropTypes.string,
    tick: PropTypes.bool,
    size: PropTypes.string,
};

export default AccountItem;
