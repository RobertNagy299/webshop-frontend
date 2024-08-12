import {Grid, GridItem, useColorModeValue} from "@chakra-ui/react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

import Footer from "./Footer";


const SiteSkeleton = ({children}) => {
   // const bg = useColorModeValue('orange.300', 'orange.900')
    const color = useColorModeValue('rgb(44,44,44)', 'yellow.50')
    const sideBarBackgroundColor = useColorModeValue('orange.500', 'rgb(67,0,0)')

    const mainBg = useColorModeValue('yellow.50', 'rgba(233,99,0,0.3)')
    const sideBarShadow = useColorModeValue('1px 1px 30px rgb(120,50,0)', '0px 0px 30px rgb(121,0,0)')

    return (
    <Grid templateColumns="repeat(12, 1fr)" minHeight={'100vh'} bg={mainBg} color={color}>

        <GridItem as="aside" colSpan={{base: 12, lg: 3, xl: 2}}
                  bg={sideBarBackgroundColor}
                  color={color}
                  shadow={sideBarShadow}
                  display={"flex"}
                  zIndex={100}

                  flexDirection="column"
                  id={"sidebar-containing-gridItem"}
                  minHeight={{base: "100vh", sm: "10vh", xs: "10vh"}}
                  p={{base: 5, lg: 10, xl: 15}}>
            <SideBar/>

        </GridItem>


        <GridItem as="main"
                  colSpan={{base: 12, lg: 9, xl: 10}}
                  p={{base: 5, lg: 10, xl: 20}}>
            <Navbar/>
            {children}
            <Footer/>
        </GridItem>


    </Grid>
    )
}

export default SiteSkeleton