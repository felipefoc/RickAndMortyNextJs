import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Input } from 'reactstrap';

const cNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div id="list">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">RickAndMorty API
        </NavbarBrand>
        
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Github Repo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/felipefoc/">Contact-me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default cNavbar;