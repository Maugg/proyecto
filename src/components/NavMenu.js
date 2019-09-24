import React,{Component} from 'react';
import './NavMenu.css';
import {
  Icon,
  Link,
  Navbar,
  NavbarContainer,
  NavbarDropdown,
  NavItem,
  NavbarSticky
} from 'uikit-react';

class NavMenu extends Component {
  render() {

    return (
      <NavbarSticky>
        <NavbarContainer className="color-nav">
          <Navbar left className="height-nav">
            <NavItem>
              <Link href="#" className="logo">
                <Icon image="logo.svg" className="logo"/>
                <span className="lescuadron letra-logo uk-visible@m">squadron</span>
              </Link>
            </NavItem>
          </Navbar>
          <Navbar right className="height-nav">
            <NavItem>
                <Link href="#">ACTIVE</Link>
            </NavItem>
            <NavItem>
              <Link href="#">ITEM</Link>
            </NavItem>
            <NavItem>
              <Link>PARENT</Link>
              <NavbarDropdown>
                <NavItem>
                  <Link href="#">Link</Link>
                </NavItem>
              </NavbarDropdown>
            </NavItem>
            </Navbar>
          </NavbarContainer>
          <div className="barra-nav"></div>
      </NavbarSticky>
    )
  }
}


export default NavMenu;
