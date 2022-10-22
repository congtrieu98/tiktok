import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import images from "../../../assets/images";
import Button from "../../../components/Button";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";
import Menu from "../../../components/Popper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../components/Icons";
import Image from "../../../components/Image";
import Search from '../Search/Search';
import config from '../../../config';


const cx = classNames.bind(styles);
const curentUser = true;

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {

  //Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },{
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },{
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log Out",
      to: "/setting",
      separate: true,
    },
  ]

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>

        <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="TikTok" /></Link>

        <Search />

        <div className={cx("actions")}>
          {curentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={curentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {curentUser ? (
              <Image alt="Nguyen van A" 
              className={cx('user-avatar')} 
              src="https://nhipsongshowbiz.com/wp-content/uploads/2021/12/anh-hot-girl.jpg"
              // fallBack= 'https://yt3.ggpht.com/wgneNTiW753q5G6XMnjyNLAzReR4TVFJryTKTpIqJefrKMyhABPwfnyNWIoT5NNGstFlva1tgw=s88-c-k-c0x00ffffff-no-rj'
              
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
