import {
    Button,
    Icon,
    List,
    ListIcon,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    useDisclosure
} from "@chakra-ui/react";
import {ChatIcon, EmailIcon, StarIcon, ViewIcon} from "@chakra-ui/icons";
import ProductView from './ProductView'

export default function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    let profileDataListItemBottomMargin = 3;
    let profileDataFirstListItemTopMargin = 2;
    return (
        <Tabs colorScheme="orange" variant="enclosed">
            <TabList>
                <Tab _selected={{color: "white", bg: "orange.600" }}>Account Info</Tab>
                <Tab>Purchase History</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <List>
                        <ListItem  mt={profileDataFirstListItemTopMargin} mb={profileDataListItemBottomMargin}>
                            <ListIcon as={EmailIcon} mb={0.5}/>
                            Email: marko@balkan.bet
                        </ListItem>
                        <ListItem mb={profileDataListItemBottomMargin}>
                            <ListIcon as={ChatIcon}/>
                            Number of active listings: 3
                        </ListItem>
                        <ListItem mb={profileDataListItemBottomMargin}>
                            <ListIcon as={StarIcon} mb={0.5 }/>
                            Member since: 1970.01.01.
                        </ListItem>

                    </List>
                </TabPanel>
                <TabPanel>
                    <List>
                        <ListItem>
                            <Button onClick={onOpen} boxSize="fit-content" p={2} variant={"ghost"}><Icon><ViewIcon/></Icon></Button>
                            4k TV
                        </ListItem>
                        <ListItem>
                            <Button onClick={onOpen} boxSize="fit-content" p={2} variant={"ghost"}><Icon><ViewIcon/></Icon></Button>
                            Electric Kettle
                        </ListItem>
                        <ListItem>
                            <Button onClick={onOpen} boxSize="fit-content" p={2} variant={"ghost"}><Icon><ViewIcon/></Icon></Button>
                            Gaming Mouse
                        </ListItem>
                        <ListItem>
                            <Button onClick={onOpen} boxSize="fit-content" p={2} variant={"ghost"}><Icon><ViewIcon/></Icon></Button>
                            Headset
                        </ListItem>
                    </List>
                </TabPanel>
            </TabPanels>

        <ProductView showAddToCartBT={false} onClose={onClose} isOpen={isOpen} product={{
            title: 'sample product',
            description: 'sample description',
            images: [],
        }}></ProductView>


        </Tabs>
    )
}