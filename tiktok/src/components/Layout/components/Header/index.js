import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,

} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import AccountItem from '~/components/AccountItem';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { faBookmark, faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                }, {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'kr',
                    title: 'Korea'
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback end help',
        to: '/feetback'

    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    }
]
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true


    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 1000);
    }, [])


    // handle logic
    const handleMenuChange = (menuItem) => {

        switch (menuItem.type) {
            case 'language':
                // handleChange language
                break;

            default:
                break;
        }


    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ',
            to: '/feetback'
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu thích',
            to: '/feetback'
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: 'Nhận xu',
            to: '/feetback'
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Live studio',
            to: '/feetback'
        },
        {
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            title: 'Trung tâm Nhà sáng tạo LIVE',
            to: '/feetback'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
            to: '/feetback'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Chế độ tối',
            to: '/feetback'
        },

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ]

    const wrapper = cx('wrapper')
    const inner = cx('inner')
    const search_result = cx('search_result')


    return (
        <header className={wrapper}>

            <div className={inner}>

                <img src={images.logo} alt="Tiktok" />

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={search_result} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>

                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
                                <button className={cx('action-btn')} >
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>

                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/800px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg'
                                alt="Nguyen van a" />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div >

        </header >

    );

}

export default Header;