import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "https://auth0.com/why-auth0/",
      label: "Why Auth0",
    },
    {
      path: "https://auth0.com/docs/get-started",
      label: "How It Works",
    },
    {
      path: "https://auth0.com/blog/developers/",
      label: "Developer Blog",
    },
    {
      path: "https://inoculate.media/contact/index.html",
      label: "Contact an Expert",
    },
  ];

  return (
     <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
              <PageFooterHyperlink path="https://auth0.com/">
                Auth0
              </PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="https://auth0.com/docs/quickstarts/">
                <span>
                  Securely implement authentication using Auth0 on any stack and
                  any device&nbsp;
                </span>
                <u>in less than 10 minutes</u>
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              href="https://dev-hxoz48d37guyzgvs.us.auth0.com/u/signup?state=hKFo2SA4VlVCSGp6U0xRNFpPTU9NM3RBajBSZzVIZGJHNjdpSqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEkxaFRldEwxcGpZbVNEUnpGMGxlcjFYSU1kRFBJejdLo2NpZNkgeVFXUlA5U1pUZHhEYmVVM3hDTk4wVFpkQ3RQUDRPYnA"
              target="_blank"
              rel="noreferrer noopener"
            >
              Create Free Account
            </a>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://inoculate.media/assets/logo.gif"
              alt="InoculateMedia"
              width="50"
              height="50"
            />
            <PageFooterHyperlink path="https://inoculate.media/">
            Inoculate Media
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
