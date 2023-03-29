import React, { useState } from 'react';
import './PortfolioItem.css';

interface Props {
  title: string;
  mockups: any;
  screenImage: any;
  tech: string[];
  description: string;
  mockupType: string;
}

export const PortfolioItem: React.FC<Props> = ({mockups, title, tech, description, screenImage, mockupType}: Props) => {
  const [hoverState, setHoverState] = useState(false);

  const showInfo = () => {
    return (
      <div className="portfolio-item-text-container">
        <h5 className="portfolio-item-text title">{title}</h5>
        <p className="portfolio-item-text technologies">{tech.join(", ")}</p>
        <p className="portfolio-item-text description">{description}</p>
      </div>
    );
  }

  const handleHover = () => {
    setHoverState(true);
  }

  const handleLeave = () => {
    setHoverState(false);
  }

  const getDesktopImage = () => {
    return (
      <img className="desktop-image" src={screenImage} />
    );
  }

  return (
    <div className="portfolio-item" onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <img className="mockup-image" src={mockups}></img>
      {hoverState && showInfo()}
      {mockupType === "desktop" && getDesktopImage()}
    </div>
  );
}