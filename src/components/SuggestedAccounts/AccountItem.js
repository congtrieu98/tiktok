// import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "../Popper";
import styles from "./SuggestedAccounts.module.scss";
import Tippy from "@tippyjs/react/headless";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div>
      <Tippy
        interactive
        offset={[-20, 0]}
        placement="bottom"
        delay={[800, 0]}
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
              <AccountPreview />
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1666670400&x-signature=3PpJY7y7XcPE33EhcDXy6dwl9zk%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>nguyenquocbao</strong>
              <FontAwesomeIcon icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Nguyễn Quốc Bảo</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

// AccountItem.propTypes = {

// }

export default AccountItem;
