import React from 'react'

const Header = () => {
  return (
    <div>
      <header style={{ position: "sticky", top: 0, zIndex: 500, width: "100%" }}>
  <div className="banner-wrapper-opt" />
  <nav className="mui-x5odr0">
    <div className="MuiBox-root mui-n9ndkr">
      <a href="/" id="navbar-logo-link" className="mui-1betn9n">
        <div className="MuiBox-root mui-1xksqvf">
          <img
            alt="Deel Logo Black"
            loading="lazy"
            width={78}
            height={27}
            decoding="async"
            data-nimg={1}
            className="mui-ducv57"
            style={{ color: "transparent", maxWidth: 78 }}
            src="./headerlogo.png"
          />
        </div>
      </a>
      <div className="MuiBox-root mui-jwvktd" id="navbar-category-area" />
      <div className="MuiBox-root mui-1vc501p">
        <div className="MuiBox-root mui-v456h3">
          <button type="button" className="mui-1chf0cu">
            What we offer
            <div className="cta-icon mui-1e5u1e9">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-4sy6dv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowDownIcon"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </div>
          </button>
        </div>
        <div className="MuiBox-root mui-v456h3">
          <button type="button" className="mui-1chf0cu">
            Who we serve
            <div className="cta-icon mui-1e5u1e9">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-4sy6dv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowDownIcon"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </div>
          </button>
        </div>
        <div className="MuiBox-root mui-v456h3">
          <a href="https://www.deel.com/pricing/" className="mui-8y5eit">
            Pricing
          </a>
        </div>
        <div className="MuiBox-root mui-v456h3">
          <a href="https://www.deel.com/case-studies/" className="mui-8y5eit">
            Customer stories
          </a>
        </div>
        <div className="MuiBox-root mui-v456h3">
          <button type="button" className="mui-1chf0cu">
            Resources
            <div className="cta-icon mui-1e5u1e9">
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-4sy6dv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="KeyboardArrowDownIcon"
              >
                <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="MuiBox-root mui-fy11xf">
        <a
          href="https://app.deel.com/login"
          target="_self"
          className="mui-15k05j0"
        >
          <button type="button" className="hidden-phone mui-11qqea5">
            Log in
          </button>
        </a>
        <button type="button" className="mui-ma63yw">
          Book a demo
        </button>
        <button type="button" className="mui-o5rxjx">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="MenuIcon"
          >
            <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</header>

    </div>
  )
}

export default Header