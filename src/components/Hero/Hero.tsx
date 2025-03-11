import { motion } from "motion/react";
import css from "./Hero.module.scss";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

export const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElement}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            嗨！ <br />
            我是 YangXiao
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="secondaryText"
          >
            我是一名前端工程师，
            <br />
            专注于构建现代网站
          </motion.span>
        </div>

        {/* person image */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src="./hero2.png"
            alt="人像"
          />
        </motion.div>

        {/* email */}
        <a className={css.email} href="mailto:1443584075@qq.com">
          1443584075@qq.com
        </a>

        <div className={css.lowerElement}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">4</div>
            <div className="secondaryText">
              <div>年</div>
              <div>经验</div>
            </div>
          </motion.div>
          {/* <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>前端开发工程师</span>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  );
};
