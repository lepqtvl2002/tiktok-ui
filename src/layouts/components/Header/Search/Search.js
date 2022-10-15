import clsx from "clsx";
import React, { useEffect, useState, useRef } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import style from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { AccountItem } from "~/components/Account";
import { IconSearch } from "~/components/Icons";
import { useDebounce } from "~/hook";
import * as services from "~/services/searchService";

function Search() {
    const [searchContent, setSearchContent] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounce = useDebounce(searchContent, 500);

    const inputRef = useRef();

    function handelClear() {
        setSearchContent("");
        inputRef.current.focus();
    }

    function handelChange(e) {
        if (e.target.value.startsWith(" ")) return;
        return setSearchContent(e.target.value);
    }

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        try {
            async function fetchApi() {
                setLoading(true);

                const data = await services.search(debounce);

                setSearchResult(data);

                setLoading(false);
            }

            fetchApi();
        } catch (e) {
            console.log("Error: " + e);
            setLoading(false);
        }
    }, [debounce]);

    return (
        <TippyHeadless
            visible={searchResult.length && showResult}
            interactive
            onClickOutside={() => setShowResult(false)}
            render={(attrs) => (
                <div className={clsx("box", style["search-result-container"])} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className={clsx(style["search-result"])}>
                            <h4 className={clsx(style["search-title"])}>Accounts</h4>
                            {searchResult.map((account) => (
                                <AccountItem
                                    key={account.id}
                                    avatar={account.avatar}
                                    fullName={account.full_name}
                                    nickname={account.nickname}
                                    tick={account.tick}
                                />
                            ))}
                        </div>
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={clsx(style.search)}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchContent}
                    onChange={handelChange}
                    onFocus={() => setShowResult(true)}
                />

                {/* Loading */}
                {loading && <FontAwesomeIcon className={clsx(style.loading)} icon={faSpinner} />}

                {!loading && searchContent && (
                    <button className={clsx(style.clear)} onClick={handelClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                <button className={clsx(style["search-button"])} onMouseDown={(e) => e.preventDefault()}>
                    <IconSearch />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
