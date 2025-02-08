import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "motion/react";
import { getMenuStyles, headerVariants } from "../../utils/motion";

import css from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>YangXiao</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
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

        {/* 只适用小屏幕和中等屏幕 */}
        <div
          onClick={() => setMenuOpened(!menuOpened)}
          className={css.menuIcon}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
