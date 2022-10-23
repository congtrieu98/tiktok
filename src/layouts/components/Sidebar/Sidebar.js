import classNames from "classnames/bind";
import config from "../../../config";
import style from './Sidebar.module.scss';
import Menu, {MenuItem} from './Menu';
import {HomeIcon, UserGroupIcon, LiveIcon} from '../../../components/Icons'

const cx = classNames.bind(style)

function Sidebar() {
    // Lưu ý: icon nhận 1 prop có thể render được trong comp MenuItem nên k thể cầm nguyên những cái (HomeIcon, UserGroupIcon, LiveIcon)
    // cho thẳng vào icon được vì (HomeIcon, UserGroupIcon, LiveIcon) là 1 function k thể render đc.
    // Vì thế ta cần phải chuyển component HomeIcon thành react element <HomeIcon /> thì mới work đc
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} /> 
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
            <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
        </Menu>
    </aside>
}

export default Sidebar;