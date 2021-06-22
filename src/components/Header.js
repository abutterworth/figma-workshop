import React from 'react';
import Logo from '../assets/logo.inline.svg';
import { Container } from '@edx/paragon';
import './Header.scss';

const Header = () => (
  <header className="site-header">
    <Container size="lg">
      <div className="header-content">
        <Logo />
        <nav>
          <a href="#">Discover New</a>
          <a href="#">My Courses</a>
          <a href="#">My Programs</a>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;