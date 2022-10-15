import PropTypes from "prop-types";
import clsx from "clsx";
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";

import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import HeaderMenu from "./HeaderMenu";
import { Wrapper as PopperWrapper } from "~/components/Popper";

function PopperMenu({ children, items = [], onChange = function () {}, ...passProps }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    return (
        <Tippy
            interactive
            delay={(0, 300)}
            placement="bottom-end"
            {...passProps}
            onHide={() => setHistory((pre) => pre.slice(0, 1))}
            render={(attrs) => (
                <div className="box" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={clsx(style.wrapper)}>
                            {current.title && (
                                <HeaderMenu
                                    onBack={() => {
                                        setHistory((pre) => pre.slice(0, pre.length - 1));
                                    }}
                                >
                                    {current.title}
                                </HeaderMenu>
                            )}
                            <div className={clsx(style["menu-body"])}>
                                {current.data.map((menuItem, index) => {
                                    const isParent = !!menuItem.children;
                                    return (
                                        <MenuItem
                                            key={index}
                                            {...menuItem}
                                            onClick={() => {
                                                if (isParent) setHistory((pre) => [...pre, menuItem.children]);
                                                else onChange(menuItem);
                                            }}
                                        >
                                            {menuItem.title}
                                        </MenuItem>
                                    );
                                })}
                            </div>
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

PopperMenu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};

export default PopperMenu;
