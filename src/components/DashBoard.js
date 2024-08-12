import {Grid, GridItem} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import Products from "../components/Products";
import SideBar from "./SideBar";

export default function DashBoard() {
    return (

        <Grid templateColumns="repeat(6, 1fr)" bg="yellow.50">

      <GridItem as="aside" colSpan={{base: 6, lg: 2, xl: 1}}
                bg="orange.300"
                minHeight={{base: "100vh", sm: "15vh", xs: "15vh"}}
                p={{base: 5, lg: 10, xl: 15}}>
        <SideBar/>
      </GridItem>


      <GridItem as="main"
                colSpan={{base: 6, lg: 4, xl: 5}}
                p={{base: 5, lg: 10, xl: 20}}>
        <Navbar/>
        <HomePage/>
        <Products/>
      </GridItem>


    </Grid>


    // <Box textAlign="center" fontSize="xl">
    //   <Grid minH="100vh" p={3}>
    //     <ColorModeSwitcher justifySelf="flex-end" />
    //     <VStack spacing={8}>
    //       <Logo h="40vmin" pointerEvents="none" />
    //       <Text>
    //         Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
    //       </Text>
    //       <Link
    //         color="teal.500"
    //         href="https://chakra-ui.com"
    //         fontSize="2xl"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn Chakra
    //       </Link>
    //     </VStack>
    //   </Grid>
    // </Box>
    )
}


