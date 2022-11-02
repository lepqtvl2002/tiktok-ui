import clsx from "clsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import style from "./FollowingCardItem.module.scss";
import Image from "~/components/Image";
import Button from "~/components/Button";
function FollowingCardItem({ name, nickname, avatar, background, tick }) {
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.container)}>
        <Link className={clsx(style.content)} to="/">
          <Image className={clsx(style.background)} src={background} />
          <div className={clsx(style.information)}>
            <Image className={clsx(style.avatar)} src={avatar} alt="avatar" />
            <h5 className={clsx(style.name)}>{name}</h5>
            <h6 className={clsx(style.nickname)}>
              <span>{nickname}</span>
              {tick && (
                <FontAwesomeIcon
                  className={clsx(style.tick)}
                  icon={faCircleCheck}
                />
              )}
            </h6>
            <Button size="long" primary>
              Follow
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FollowingCardItem;
