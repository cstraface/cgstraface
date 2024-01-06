const Intro = () => {
  return (
    <div className="elisc_tm_all_wrap" data-magic-cursor="show">
      <div className="elisc_tm_intro">
        <div className="elisc_tm_intro_fixed_price">
          <span className="anim" />
          <span className="anim" />
          <span className="anim" />
          <a
            href="https://themeforest.net/user/codeefly/portfolio"
            target="_blank"
            className="pricing-info anim"
          >
            Buy
          </a>
        </div>
        <div className="short_info">
          <img src="img/logo/logo.png" alt="Image" />
          <h3>Personal Portfolio React NextJS Template</h3>
        </div>
        <span className="intro_line" />
        <span className="intro_line_2" />
        <span className="intro_line_3" />
        <div className="demos">
          <div className="left">
            <div className="desc">
              <img src="img/intro/1.png" alt="Image" />
              <h3 className="title">vCard Version</h3>
            </div>
            <a className="intro_link" href="/" target="_blank" />
          </div>
          <div className="right">
            <div className="desc">
              <img src="img/intro/1.png" alt="Image" />
              <h3 className="title">One Page Version</h3>
            </div>
            <a className="intro_link" href="/index-one-page" target="_blank" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
