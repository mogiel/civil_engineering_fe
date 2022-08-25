import {listLink} from "../../views/ListLink";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {MenuLogged} from "./MenuLogged";
import {Menu, MenuButton} from "@chakra-ui/react";
import {useSelector} from "react-redux";
import {RootState} from "../store";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
    logged: boolean
}

const isLoggedArray = ["main", "fire"]
const notLoggedArray = ["main", "register", "login", "about"]

export const HeaderApp = (props: Props) => {
    const {username} = useSelector((state: RootState) => state)

    const listLinkNav = Object.entries(listLink)
        .filter(([key, value]) => props.logged ? isLoggedArray.includes(key) : notLoggedArray.includes(key))
        .map(([key, value]) => {
            return (<Item><StyledNavLink to={`/${key}`} key={key}>{value}</StyledNavLink></Item>)
        })

    return <>
        <NavBar>
            {listLinkNav}
            {props.logged && <Item><Menu><StyledMenuButton>
                Witaj {username} <ChevronDownIcon />
            </StyledMenuButton><MenuLogged/></Menu></Item>}
        </NavBar>
    </>
}

const StyledMenuButton = styled(MenuButton)`
  height: 60px;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }
`;

const StyledNavLink = styled(NavLink)`
  height: 60px;
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