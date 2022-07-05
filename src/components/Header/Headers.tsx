import {listLink} from "../../views/ListLink";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderApp = () => {
    const listLinkNav = Object.entries(listLink).map(([key, value]) => {
        return (<Item><StyledNavLink to={`/${key}`} key={key}>{value}</StyledNavLink></Item>)
    })

    return <>
        <NavBar>
            {listLinkNav}
        </NavBar>
    </>
}

const StyledNavLink = styled(NavLink)`
  height: 20px;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }

  &.active {
    background-color: #04AA6D;
  }
`;

const Item = styled.li`
  float: left;

  &:last-child {
    float: right;
  }
`
const NavBar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;