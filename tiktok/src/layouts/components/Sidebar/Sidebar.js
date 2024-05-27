
import classNames from 'classnames/bind';
import { DiscoverActiveIcon, DiscoverIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon, UserIcon } from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title='Dành cho bạn' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title='Đang Follow' to={config.routes.following} icon={<UserIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title='Bạn bè' to={config.routes.friend} icon={<UserGroupIcon />} activeIcon={< UserGroupActiveIcon />} />
                <MenuItem title='Khám phá' to={config.routes.discover} icon={<DiscoverIcon />} activeIcon={<DiscoverActiveIcon />} />
                <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />

            </Menu>
        </aside>

    );
}



export default Sidebar;