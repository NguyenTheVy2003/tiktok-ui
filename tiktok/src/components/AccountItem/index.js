
import classNames from "classnames/bind";
import style from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";

const cx = classNames.bind(style)
function AccountItem() {
    return (
        <div className={cx('Wrapper')}>
            <Image className={cx('Avarta')} src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c58ce2d54af44e9ddc3a45c084027788.jpeg?lk3s=a5d48078&x-expires=1715317200&x-signature=DHO06Wdje%2Bc0fnc2gQDSMRDEWmY%3D" alt="" />
            <div className={cx('Info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Thế Vỹ</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>

                <span className={cx('username')}>nguyenthevy</span>
            </div>
        </ div >
    );
}

export default AccountItem;