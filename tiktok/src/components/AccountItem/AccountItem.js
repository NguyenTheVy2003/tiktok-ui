import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import style from './AccountItem.module.scss';

const cx = classNames.bind(style)
function AccountItem({ data }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('Wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name} />
            <div className={cx('Info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>

                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </ Link >
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}
export default AccountItem;