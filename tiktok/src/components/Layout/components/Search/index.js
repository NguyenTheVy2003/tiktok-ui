import { useEffect, useState, useRef } from 'react';
import {
    faCircleXmark,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';


import * as SearchSevices from '~/apiServices/SearchSevices';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/components/hook';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles)




function Search() {

    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);


    const debounce = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)

        const fetchApi = async () => {
            setLoading(true);

            const results = await SearchSevices.search(debounce);
            setSearchResult(results)

            setLoading(false)

        }
        fetchApi()

    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus();
    }


    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(result => (
                            <AccountItem key={result.id} data={result} />

                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {
                    loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                }
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>

            </div>
        </HeadlessTippy>

    );
}

export default Search;