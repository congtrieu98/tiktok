import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from "..";
import MenuItem from "./MenuItem";
// import Header from './Header';
import styles from "./Menu.module.scss";
import { useState } from "react";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange={defaultFn} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children; //2 dấu ! là để convert từ object sang boolean
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory(prev => [...prev, item.children]);
            } else {
              onChange(item)
            }
          }}
        />
      );
    });
  };

  const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1))

  const handleBack = () => {
    setHistory(prev => prev.slice(0, prev.length -1))
  }
  
  return (
    <Tippy
      interactive
      placement="bottom-end"
      hideOnClick={hideOnClick}
      delay={[0, 700]}
      offset={[12, 8]}
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
            <div className={cx('menu-body')}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHidden={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired, 
  items:  PropTypes.array,
  hideOnClick:  PropTypes.bool,
  onChange:  PropTypes.func
}

export default Menu;
