import css from "./Hero.module.scss";

export const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>
        <div className={css.upperElement}>
          <span className="primaryText">
            嗨！ <br />
            我是 YangXiao
          </span>
          <span className="secondaryText">
            我是一名前端工程师，
            <br />
            专注于构建现代网站
          </span>
        </div>

        <div className={css.lowerElement}>
          <div className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>年</div>
              <div>经验</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>前端开发工程师</span>
          </div>
        </div>
      </div>
    </section>
  );
};
