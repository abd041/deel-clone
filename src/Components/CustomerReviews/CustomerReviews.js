import React from 'react'

const CustomerReviews = () => {
  return (
<div className="MuiBox-root mui-dt1pk5">
  <div className="MuiBox-root mui-1bjcx4s">
    <div className="MuiBox-root mui-1pztp68">
      <p className="MuiTypography-root MuiTypography-body1 mui-15i4id9">
        Customer Stories
      </p>
      <h5 className="MuiTypography-root MuiTypography-h5 mui-1l28djp">
        We’ve helped 35,000+ companies grow and manage global teams
      </h5>
    </div>
    <div className="MuiBox-root mui-3lj5vg">
      <div className="MuiTabs-root mui-fxyju8">
        <div
          className="MuiTabs-scroller MuiTabs-fixed mui-1anid1y"
          style={{ overflow: "hidden", marginBottom: 0 }}
        >
          <div className="MuiTabs-flexContainer mui-k008qs" role="tablist">
            <button
              className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected font-feature-2 mui-1iebj1g"
              tabIndex={0}
              type="button"
              role="tab"
              aria-selected="true"
            >
              Global Hiring
              <span className="MuiTabs-indicator mui-ttwr4n" />
            </button>
            <button
              className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary font-feature-2 mui-1iebj1g"
              tabIndex={-1}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Global Payroll
            </button>
            <button
              className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary font-feature-2 mui-1iebj1g"
              tabIndex={-1}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Compliance
            </button>
            <button
              className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary font-feature-2 mui-1iebj1g"
              tabIndex={-1}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Employee relocation
            </button>
            <button
              className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary font-feature-2 mui-1iebj1g"
              tabIndex={-1}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Mergers/Acquistions
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="MuiBox-root mui-e55qlo">
      <div className="MuiBox-root mui-1b04ki9">
        <div className="MuiBox-root mui-18w9lct">
          <img
            alt="Image"
            loading="lazy"
            width={672}
            height={720}
            decoding="async"
            data-nimg={1}
            className="mui-ducv57"
            style={{ color: "transparent", maxWidth: 672 }}
            src="https://website-media.deel.com/Turing_min_9a47ee9e29.jpg"
          />
        </div>
        <div className="MuiBox-root mui-41qk32">
          <h5 className="MuiTypography-root MuiTypography-h5 mui-l4qadx">
            5,000+
          </h5>
          <h6 className="MuiTypography-root MuiTypography-h6 mui-sbpxwk">
            contracts created
          </h6>
          <p className="MuiTypography-root MuiTypography-body1 mui-z964pk">
            Turing has around 400 developers working for customers and 150
            developers working to build Turing. They were able to migrate
            everyone to Deel in days. Now they use Deel to manage, pay, and
            onboard every developer, in over 60 different countries.
          </p>
          <a
            href="https://www.deel.com/case-studies/turing"
            target="_self"
            className="mui-15k05j0"
          >
            <button type="button" className="mui-nghq9i">
              Read customer story
              <div className="cta-icon mui-1e5u1e9">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ArrowForwardIcon"
                >
                  <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CustomerReviews