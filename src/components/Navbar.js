import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Spacer,
    HStack,
    useColorModeValue,
    Avatar,
    AvatarGroup, useToast, AvatarBadge
} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../ColorModeSwitcher";
import React from "react";

import {UnlockIcon} from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation, useNavigate} from "react-router-dom";
import ShoppingCart from "./ShoppingCart";


const Navbar = () => {

    const toast= useToast()

    const location = useLocation();
    const navigate = useNavigate();

    // Define a function to get the title based on the current path
    const getTitle = (path) => {
        switch (path) {
            case '/profile':
                return 'Profile';
            case '/create':
                return 'Create';
            case '/':
                return 'Products';
            default:
                return '';
        }
    };



    const showToast = () =>{
        toast({
            title: 'Logged out',
            description: 'Successfully logged out',
            duration: 3000,
            isClosable: true,
            status: "success",
            position: "top",
            icon: <UnlockIcon/>
        })
    }
    const avatarTextColor = useColorModeValue('white', 'black')
    const avatarColor = useColorModeValue('orange.300', 'orange.200')
    const headingColor = useColorModeValue('orange.500','orange.200')
    return (

        <Flex flexWrap={"wrap"} id={"navbar-container"} as="nav" mb={{base: 5, xl: 10}} mt={{base: 0, xl: -10, md: -15}} p={0.3}  justifyContent={"left"} paddingBottom={5} alignItems="center" >
            <Heading as="h1"  color={headingColor}>{getTitle(location.pathname)}</Heading>
            <Spacer id={'nav-spacer'} />

            <HStack spacing={4} display={"flex"} flexWrap={"wrap"}>
                <ColorModeSwitcher title={"Change theme"}/>
                <Box  p="5px"

                ><AvatarGroup title={"Profile"}
                    onClick={() => {
                        navigate('/profile')
                    }}
                >
                    <Avatar  name="Mario" bg={avatarColor} color={avatarTextColor}  _hover={{cursor: 'pointer'}}

                    >
                        <AvatarBadge width="1.5rem" bg="red.500">
                            <Text fontSize={"sm"} color={"white"}>3</Text>
                        </AvatarBadge>
                    </Avatar>
                </AvatarGroup>

                </Box>
                <Text id={"user-email"} >mario@netninja.dev</Text>
                <Button colorScheme="orange" onClick={showToast}>Logout</Button>
                <ShoppingCart />
            </HStack>

        </Flex>

        // <Flex bg="gray.200" justify="space-around" wrap="wrap" gap={"2"}>
        //     <Box w="150px" h="50x" bg="red">1</Box>
        //     <Box w="150px" h="50x" bg="blue">2</Box>
        //     <Box w="150px" h="50x" bg="green" flexGrow={"1"}>3</Box>
        //     <Box w="150px" h="50x" bg="yellow" flexGrow={"2"}>4</Box>
        //
        // </Flex>
    )
}

export default Navbar;