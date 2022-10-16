import Tippy from "@tippyjs/react/headless";
import clsx from "clsx";
import style from "../Sidebar.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { AccountItem, AccountPreview } from "~/components/Account";

function SuggestedAccount({ avatar, fullName, nickname, tick }) {
    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                offset={[-20, 0]}
                delay={[1000, 0]}
                render={(attrs) => (
                    <div className={clsx("box", style["user-card"])} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <AccountPreview avatar={avatar} fullName={fullName} nickname={nickname} tick={tick} />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={clsx(style.account)}>
                    <AccountItem size="small" avatar={avatar} fullName={fullName} nickname={nickname} tick={tick} />
                </div>
            </Tippy>
        </div>
    );
}

export default SuggestedAccount;
