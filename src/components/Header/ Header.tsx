import { BiPhoneCall } from "react-icons/bi";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>YangXiao</div>
        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="">服务</a>
          </li>
          <li>
            <a href="">经验</a>
          </li>
          <li>
            <a href="">投资组合</a>
          </li>
          <li>
            <a href="">推荐</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+156 1691 7255</p>
            <BiPhoneCall size={`40px`} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
