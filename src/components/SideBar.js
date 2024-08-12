import {IconButton, Link, List, ListIcon, ListItem} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";
import {AtSignIcon, CalendarIcon, EditIcon, HamburgerIcon} from "@chakra-ui/icons";



export default function SideBar() {

    const activeStyle = {
        fontWeight: 'bold',
        color: 'yellow.50',
        textDecoration: 'underline',
    };

    const openDropdown = () => {
        const menu = document.getElementById('sidebar-wrapper-div');
        const gridItem = document.getElementById('sidebar-containing-gridItem')

        if( gridItem.style.minHeight==='250px') {
            gridItem.style.minHeight = '100px'
            //menu.style.display = 'none'
            menu.style.transition = '0.5s'

        } else
        {
            gridItem.style.minHeight="250px"
            menu.style.display = 'flex'
            menu.style.transition = '0.5s'
        }

    }

    return (
        <>
            <div className="nav__toggle" id="nav-toggle">
                <IconButton
                    onClick={openDropdown}
                    aria-label={"Hamburger icon for dropdown navigation menu"} icon={<HamburgerIcon boxSize={35}/>}
                    boxSize={55}></IconButton>
            </div>
            <div id={"sidebar-wrapper-div"}>

                <List color="white"
                      fontSize="1.1rem"
                      spacing={6}
                      paddingTop={5}
                      position="sticky"
                      top={5}
                      paddingLeft={1}
                >
                    <ListItem>
                        <Link as={NavLink} to="/" _activeLink={activeStyle}>
                            <ListIcon as={CalendarIcon} color="white"/>
                            Dashboard
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link as={NavLink} to="/create" _activeLink={activeStyle}>
                            <ListIcon as={EditIcon} color="white"/>
                            Upload a product
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListIcon as={AtSignIcon} color="white"/>

                        <Link as={NavLink} to="/profile" _activeLink={activeStyle}>
                            Profile
                        </Link>
                    </ListItem>

                </List>

            </div>

        </>
    )
}