import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import flows from '../../assets/templates.png';
import stacks from '../../assets/stacks.png';
import home from '../../assets/home.png';
import group from '../../assets/groups.png';
import survey from '../../assets/survey.png';

export const NavBar = () => {
  const CardsButton = [
    { name: 'home', image: home, title: 'Home', path: '/' },
    { name: 'stack', image: stacks, title: 'Gráficos', path: '/stacks' },
    { name: 'groups', image: group, title: 'Grupos', path: '/grupos' },
    { name: 'flows', image: flows, title: 'Flows Template', path: '/templates' },
    { name: 'survey', image: survey, title: 'survey Template', path: '/survey' },
  ];

  return (
    <div className="container-navbar">
      {CardsButton.map((card, index) => (
        <Link to={card.path} key={index} className="card-button">
          <img src={card.image} alt={card.name} />
        </Link>
      ))}
    </div>
  );
};
