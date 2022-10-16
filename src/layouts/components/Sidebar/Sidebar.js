import clsx from "clsx";
import { useEffect, useState } from "react";
import style from "./Sidebar.module.scss";
import { Menu, MenuItem } from "~/components/Menu";
import Button from "~/components/Button";
import { AccountItem } from "~/components/Account";
import {
    IconHome,
    IconHomeActive,
    IconFollower,
    IconFollowerActive,
    IconLIVE,
    IconLIVEActive,
    IconMusic,
} from "~/components/Icons";
import config from "~/config";
import SuggestedAccount from "./SuggestedAccount";

const MENU_ITEMS = [
    {
        title: "For You",
        leftIcon: <IconHome />,
        activeIcon: <IconHomeActive />,
        to: config.routes.home,
        className: "active",
    },
    {
        title: "Following",
        leftIcon: <IconFollower />,
        activeIcon: <IconFollowerActive />,
        to: config.routes.following,
    },
    {
        title: "LIVE",
        leftIcon: <IconLIVE />,
        activeIcon: <IconLIVEActive />,
        to: config.routes.live,
    },
];

function Sidebar() {
    const [pathActive, setPathActive] = useState("");
    let currentUser = null;

    useEffect(() => {
        setPathActive(window.location.pathname);
    }, [window.location.pathname]);

    return (
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.container)}>
                {/* NavMenu */}
                <Menu className={clsx(style.nav)}>
                    {MENU_ITEMS.map((menuItem, index) => (
                        <MenuItem key={index} {...menuItem} size="large" active={menuItem.to == pathActive}>
                            <h2 className={clsx(style["nav-title"])}>{menuItem.title}</h2>
                        </MenuItem>
                    ))}
                </Menu>
                {/* Frame Log in */}
                {!currentUser && (
                    <>
                        <hr className={clsx(style.light)} />
                        <div className={clsx(style["frame-container"])}>
                            <div className={clsx(style["frame-heading"])}>
                                Log in to follow creators, like videos and view comments.
                            </div>
                            <Button primary outline size="large">
                                Log in
                            </Button>
                        </div>
                    </>
                )}
                {/* Suggested accounts */}
                <hr className={clsx(style.light)} />
                <div className={clsx(style["user-container"])}>
                    <p className={clsx(style["user-title"])}>Suggested accounts</p>
                    <SuggestedAccount
                        size="small"
                        avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                        fullName="Tran Duc Thang"
                        nickname="lepqtvl2002"
                        tick
                    />

                    <SuggestedAccount
                        size="small"
                        avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                        fullName="Tran Duc Thang"
                        nickname="lepqtvl2002"
                        tick
                    />
                    <SuggestedAccount
                        size="small"
                        avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                        fullName="Tran Duc Thang"
                        nickname="lepqtvl2002"
                        tick
                    />
                    <SuggestedAccount
                        size="small"
                        avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                        fullName="Tran Duc Thang"
                        nickname="lepqtvl2002"
                        tick
                    />
                    <a href="#" className={clsx(style["show-more"])}>
                        See all
                    </a>
                </div>
                {/*Following accounts */}
                {currentUser && (
                    <>
                        <hr className={clsx(style.light)} />
                        <div className={clsx(style["user-container"])}>
                            <p className={clsx(style["user-title"])}>Following accounts</p>
                            <AccountItem
                                size="small"
                                avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                                fullName="Tran Duc Thang"
                                nickname="lepqtvl2002"
                                tick
                            />
                            <AccountItem
                                size="small"
                                avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                                fullName="Tran Duc Thang"
                                nickname="lepqtvl2002"
                                tick
                            />
                            <AccountItem
                                size="small"
                                avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                                fullName="Tran Duc Thang"
                                nickname="lepqtvl2002"
                                tick
                            />
                            <AccountItem
                                size="small"
                                avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                                fullName="Tran Duc Thang"
                                nickname="lepqtvl2002"
                                tick
                            />
                            <a href="#" className={clsx(style["show-more"])}>
                                See all
                            </a>
                        </div>
                    </>
                )}
                {/* Discover */}
                <hr className={clsx(style.light)} />
                <div className={clsx(style["discover-container"])}>
                    <p className={clsx(style["discover-title"])}>Discover</p>
                    <div className={clsx(style["discover-list-item"])}>
                        <a href="#" className={clsx(style["discover-link"])}>
                            <div className={clsx(style["discover-item"])}>
                                <i className={clsx(style["discover-item-icon"])}>
                                    <IconMusic />
                                </i>
                                <span className={clsx(style["discover-item-title"])}>haha</span>
                            </div>
                        </a>

                        <a href="#" className={clsx(style["discover-link"])}>
                            <div className={clsx(style["discover-item"])}>
                                <i className={clsx(style["discover-item-icon"])}>
                                    <IconMusic />
                                </i>
                                <span className={clsx(style["discover-item-title"])}>haha</span>
                            </div>
                        </a>
                        <a href="#" className={clsx(style["discover-link"])}>
                            <div className={clsx(style["discover-item"])}>
                                <i className={clsx(style["discover-item-icon"])}>
                                    <IconMusic />
                                </i>
                                <span className={clsx(style["discover-item-title"])}>haha</span>
                            </div>
                        </a>
                        <a href="#" className={clsx(style["discover-link"])}>
                            <div className={clsx(style["discover-item"])}>
                                <i className={clsx(style["discover-item-icon"])}>
                                    <IconMusic />
                                </i>
                                <span className={clsx(style["discover-item-title"])}>haha</span>
                            </div>
                        </a>
                        <a href="#" className={clsx(style["discover-link"])}>
                            <div className={clsx(style["discover-item"])}>
                                <i className={clsx(style["discover-item-icon"])}>
                                    <IconMusic />
                                </i>
                                <span className={clsx(style["discover-item-title"])}>haha</span>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Footer */}
                <hr className={clsx(style.light)} />
                <div className={clsx(style["footer-container"])}>
                    <div className={clsx(style["footer-link-container"])}>
                        <a href="#" className={clsx(style["footer-link"])}>
                            About
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            TikTok
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Browse
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Newsroom
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Careers
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            ByteDance
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            ByteDance
                        </a>
                    </div>
                    <div className={clsx(style["footer-link-container"])}>
                        <a href="#" className={clsx(style["footer-link"])}>
                            TikTok for Good
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Advertise
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Developers
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Transparency
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            TikTok Rewards
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            ByteDance
                        </a>
                    </div>
                    <div className={clsx(style["footer-link-container"])}>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Help
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Safety
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Terms
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Privacy
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Creator Portal
                        </a>
                        <a href="#" className={clsx(style["footer-link"])}>
                            Community Guidelines
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
