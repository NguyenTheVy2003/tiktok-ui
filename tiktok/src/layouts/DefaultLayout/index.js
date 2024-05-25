
import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';
import Sidebar from "./Sidebar";

import Header from "../components/Header";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('warpper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default DefaultLayout;