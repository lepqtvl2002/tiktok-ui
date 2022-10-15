import PropTypes from "prop-types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import style from "./Profile.module.scss";
import { Button } from "~/components";
import Image from "~/components/Image";

function Profile({ avatar, fullName, nickname, tick, size }) {
    return (
        <div className={clsx(style.wrapper, style[size])}>
            <div className={clsx(style.top)}>
                <Image className={clsx(style.avatar)} src={avatar} alt="Avatar" />
                <Button primary>Follow</Button>
            </div>
            <div className={clsx(style.content)}>
                <div className={clsx(style.heading)}>
                    <h4 className={clsx(style.name)}>{fullName}</h4>
                    {tick && <FontAwesomeIcon icon={faCircleCheck} className={clsx(style["icon-checked"])} />}
                </div>
                <span className={clsx(style.nickname)}>{nickname}</span>
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

Profile.propTypes = {
    avatar: PropTypes.string,
    fullName: PropTypes.string,
    nickname: PropTypes.string,
    tick: PropTypes.bool,
    size: PropTypes.string,
};

export default Profile;
