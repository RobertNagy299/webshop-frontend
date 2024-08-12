import {Image, Divider, Flex, HStack, Link, Spacer, Text, useColorModeValue, VStack} from "@chakra-ui/react";
import { SocialIcon } from 'react-social-icons'
const Footer = () => {

    const footerBGcolor = useColorModeValue('orange.300', 'rgb(67,0,0)');
    const footerTextColor = useColorModeValue('rgb(67,0,0)', 'orange.200');
    const footerLinkColor = useColorModeValue('orange.900', 'orange.200');
    const divierBorder = useColorModeValue('1px solid rgb(67,0,0)', '1px solid rgb(211,189,0)')
    return (
        <footer>
        <Flex
            id={"footer-container"}
            flexDirection="column"
            flexWrap="wrap"
            align="center"
            bg={footerBGcolor}
            color={footerTextColor}
            m={{base: -5, xl: -20, lg: -20}}
            mt={{base: 100, xl: 20, lg: 20}}
            zIndex={-1}
            p={{base: 5, lg: 10, xl : 10}}

        >
            <Flex
                width={"100%"}
                justify={"space-evenly"}
                flexWrap="wrap"
                flex={1}
                id={"footer-links-container"}
            >
                <VStack>
                    <Text className={"footer-section-title"}>
                        Company
                    </Text>

                    <Link color={footerLinkColor} href='#'>
                        Why Us
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        Our Story
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        Careers
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        FAQs
                    </Link>
                </VStack>
                <Divider border={divierBorder} width={"50%"} className={"mobile-links-divider"}/>

                <VStack>
                    <Text className={"footer-section-title"}>
                        Product
                    </Text>

                    <Link color={footerLinkColor} href='#'>
                        Pricing
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        How It Works
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        Use Cases
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        Premium Offers
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        Enterprise Solutions
                    </Link>

                </VStack>
                <Divider border={divierBorder} width={"50%"} className={"mobile-links-divider"}/>

                <VStack>
                    <Text className={"footer-section-title"}>
                        Legal
                    </Text>

                    <Link color={footerLinkColor} href='#'>
                        Privacy Policy
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        Terms of Service
                    </Link>
                    <Link color={footerLinkColor} href='#'>
                        License
                    </Link>
                </VStack>

            </Flex>
            <Divider  border={divierBorder} mt={8} mb={13}/>
            <Flex width={"70%"}
                justify={"space-around"}
                  align={"center"}
                  flexWrap={"wrap"}
                  id={"footer-bottom-container"}
            >
                <Flex width={"80vw"} id={"socials-container"}>
                    <Image/>
                    <address>
                        <Flex gap={3} id={"socialmedia-flex"}>
                            <SocialIcon target={"_blank"} url={"https://facebook.com"} network="facebook"/>
                            <SocialIcon target={"_blank"} urk={"https://linkedin.com"} network="linkedin"/>
                            <SocialIcon target={"_blank"} url={"https://instagram.com"} network="instagram"/>
                            <SocialIcon target={"_blank"} url={"https://x.com"} network="x"/>
                        </Flex>
                    </address>
                    <Spacer flex={1}/>
                    <Flex
                        align={"center"}
                        gap={5}
                    >
                        <Text>&copy; Copyright 2024 Robert Nagy</Text>
                        <SocialIcon target={"_blank"} url="https://github.com/RobertNagy299" />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        </footer>
    )
}

export default Footer;