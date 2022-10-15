import clsx from "clsx";
import Tippy from "@tippyjs/react/headless";
import style from "./Sidebar.module.scss";
import { Menu, MenuItem } from "~/components/Menu";
import { Button } from "~/components";
import { AccountItem, Profile } from "~/components/Account";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { IconHome, IconFollower, IconLIVE, IconMusic } from "~/components/Icons";
import config from "~/config";

const MENU_ITEMS = [
    {
        title: "For You",
        leftIcon: <IconHome />,
        to: config.routes.foryou,
        className: "active",
    },
    {
        title: "Following",
        leftIcon: <IconFollower />,
        to: config.routes.following,
    },
    {
        title: "LIVE",
        leftIcon: <IconLIVE />,
        to: config.routes.live,
    },
];

function Sidebar() {
    return (
        <div className={clsx(style.wrapper)}>
            <div className={clsx(style.container)}>
                <Menu className={clsx(style.nav)}>
                    {MENU_ITEMS.map((menuItem, index) => (
                        <MenuItem key={index} {...menuItem} size="large" active={index == 0}>
                            <h2 className={clsx(style["nav-title"])}>{menuItem.title}</h2>
                        </MenuItem>
                    ))}
                </Menu>
                <hr className={clsx(style.light)} />
                <div className={clsx(style["frame-container"])}>
                    <div className={clsx(style["frame-heading"])}>
                        Log in to follow creators, like videos and view comments.
                    </div>
                    <Button primary outline size="large">
                        Log in
                    </Button>
                </div>
                <hr className={clsx(style.light)} />
                <div className={clsx(style["suggest-container"])}>
                    <p className={clsx(style["suggest-title"])}>Suggested accounts</p>
                    {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. */}
                    <div>
                        <Tippy
                            interactive
                            offset={[-20, 0]}
                            delay={[2000, 0]}
                            render={(attrs) => (
                                <div className={clsx("box", style["user-card"])} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <Profile
                                            avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                                            fullName="Tran Duc Thang"
                                            nickname="lepqtvl2002"
                                            tick
                                        />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={clsx(style.account)}>
                                <AccountItem
                                    size="small"
                                    avatar="https://avatars.githubusercontent.com/u/88418718?v=4"
                                    fullName="Tran Duc Thang"
                                    nickname="lepqtvl2002"
                                    tick
                                />
                            </div>
                        </Tippy>
                    </div>

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
                    <a href="#" className={clsx(style["suggest-more"])}>
                        See all
                    </a>
                </div>
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
