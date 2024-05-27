import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';
import Sidebar from "../components/Sidebar/Sidebar";

import Header from "../components/Header/Header";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
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
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultLayout;