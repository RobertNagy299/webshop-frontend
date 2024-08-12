import {Container, Heading, Text} from "@chakra-ui/react";

export default function HomePage() {
    return (
        <Container as="section" justify="center">
            <Heading p={3}>Welcome to the show!</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, temporibus.</Text>
        </Container>
    )
}