import React from "react";

export const HeroBanner = () => {
  const logo = "https://github.com/inoculate23/auth0-react/blob/main/public/logo_lg.png?raw=true";

  return (
    <div className="hero-banner hero-banner--blue-aqua ">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Haawke Neural Technology</h1>
      <p className="hero-banner__description">
Advanced Ai and machine learning applications and integrations for business, data-science, musicians, and artists.
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://whisper-experimental.vercel.app/"
        className="button button--secondary"
      >
        Check out Whisper. →
      </a>
    </div>
  );
};
