import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical, faVideo, faGear, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faSquareCaretLeft, faCircleQuestion, faKeyboard, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

import { ReactComponent as MyLogo } from "~/assets/images/logo.svg";
import style from "./Header.module.scss";
import Search from "~/components/Search";
import { Button } from "~/components";
import { PopperMenu } from "~/components/Menu";
import Image from "~/components/Image";
import { IconPaperPlane, IconInbox } from "~/components/Icons";
import config from "~/config";

const MENU_ITEMS = [
    {
        title: "English",
        leftIcon: <FontAwesomeIcon icon={faSquareCaretLeft} />,
        children: {
            title: "Languages",
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Vietnamese",
                },
            ],
        },
    },
    {
        title: "Feedback and help",
        leftIcon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: config.routes.feedback,
    },
    {
        title: "Keyboard and shortcuts",
        leftIcon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

function Header() {
    let currentUser = { name: "Tran Duc Thang", image: "https://avatars.githubusercontent.com/u/88418718?v=4" };
    currentUser = null;

    const UserMenu = [
        {
            title: "View profile",
            leftIcon: <FontAwesomeIcon icon={faUserCircle} />,
            to: "./profile",
        },
        {
            title: "Get coins",
            leftIcon: <FontAwesomeIcon icon={faBitcoin} />,
            to: "./coin",
        },
        {
            title: "LIVE Studio",
            leftIcon: <FontAwesomeIcon icon={faVideo} />,
            to: "./live",
        },
        {
            title: "Settings",
            leftIcon: <FontAwesomeIcon icon={faGear} />,
            to: "./setting",
        },
        ...MENU_ITEMS,
        {
            title: "Log out",
            leftIcon: <FontAwesomeIcon icon={faSignOut} />,
            to: "./logout",
            separate: true,
        },
    ];

    function handelOnChange(menuItem) {
        console.log(menuItem);
    }

    return (
        <header className={clsx(style.wrapper)}>
            <div className={clsx(style.inner)}>
                <Link to={config.routes.home} className={clsx(style.logo)}>
                    <MyLogo />
                </Link>
                {/* Search */}
                {/* </div>Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.  */}
                <div>
                    <Search />
                </div>

                <div className={clsx(style["right-container"])}>
                    <Button to={config.routes.upload} leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>

                    {!currentUser ? (
                        <Button primary>Log in</Button>
                    ) : (
                        <>
                            <Tippy content="Messages">
                                <span className={clsx(style["header-icon"])}>
                                    <IconPaperPlane />
                                </span>
                            </Tippy>
                            <Tippy content="Inbox">
                                <span className={clsx(style["header-icon"])}>
                                    <IconInbox />
                                </span>
                            </Tippy>
                        </>
                    )}

                    <PopperMenu
                        items={currentUser ? UserMenu : MENU_ITEMS}
                        onChange={handelOnChange}
                        hideOnClick={false}
                    >
                        {currentUser ? (
                            <div className={clsx(style["avatar-container"])}>
                                <Image className={clsx(style.avatar)} src={currentUser.image} alt={currentUser.name} />
                            </div>
                        ) : (
                            <i className={clsx(style["more-btn"])}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className={clsx(style["more-icon"])} />
                            </i>
                        )}
                    </PopperMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
