import PropTypes from "prop-types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import style from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import Image from "~/components/Image";

function AccountPreview({ avatar, fullName, nickname, tick, size }) {
    return (
        <div className={clsx(style.wrapper, style[size])}>
            <div className={clsx(style.top)}>
                <Image className={clsx(style.avatar)} src={avatar} alt="Avatar" />
                <Button primary>Follow</Button>
            </div>
            <div className={clsx(style.content)}>
                <div className={clsx(style.heading)}>
                    <h4 className={clsx(style.name)}>{nickname}</h4>
                    {tick && <FontAwesomeIcon icon={faCircleCheck} className={clsx(style["icon-checked"])} />}
                </div>
                <span className={clsx(style.description)}>{fullName}</span>
                <p className={clsx(style.information)}>
                    <span className={clsx(style.status)}>10M</span>
                    <span className={clsx(style.followers)}>Followers</span>
                    <span className={clsx(style.status)}>100M</span>
                    <span className={clsx(style.likes)}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    avatar: PropTypes.string,
    fullName: PropTypes.string,
    nickname: PropTypes.string,
    tick: PropTypes.bool,
    size: PropTypes.string,
};

export default AccountPreview;
