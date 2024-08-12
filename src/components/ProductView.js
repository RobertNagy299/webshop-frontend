// ProductView.js
import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    IconButton,
    Box,
    Image,
    Flex,
    HStack, Spacer, useColorModeValue
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';

const ProductView = ({ isOpen, onClose, product, showAddToCartBT }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));

    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);

    };
    const productViewModalBGColor = useColorModeValue('yellow.50', 'rgb(67,0,0)')
    const productViewTextColor = useColorModeValue('rgb(67,0,0)','orange.100')

    const viewContentContainerOutShadow = useColorModeValue('0px 2px 10px -5px orange', '0px 1px 10px -5px rgb(150,120,0)')

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay bg={"blackAlpha.100"}/>
            <ModalContent bg={productViewModalBGColor} color={productViewTextColor}
                          borderRadius={15} shadow={viewContentContainerOutShadow}
            >
                <ModalHeader>{product.title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex position="relative" alignItems="center" justifyContent="center">
                        <IconButton

                            icon={<ArrowLeftIcon />}
                            position="absolute"
                            left="0"
                            onClick={handlePrevClick}
                            zIndex="1"
                            variant={"ghost"}

                            aria-label={"Previous image"}
                        />
                        <Image borderRadius={15} src={product.images[currentImageIndex]} boxSize="xs" objectFit="cover" alt={product.title} />
                        <IconButton
                            variant={"ghost"}
                            icon={<ArrowRightIcon />}
                            position="absolute"
                            right="0"
                            onClick={handleNextClick}
                            zIndex="1"

                            aria-label={"Next image"}/>


                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <HStack display="flex" direction="row" >
                        {showAddToCartBT &&  <Button colorScheme="orange" variant="solid" justifySelf="flex-start !important" mr={'auto'}>
                            Add to cart
                        </Button>}


                        <Button colorScheme="orange" variant="ghost" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </HStack>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ProductView;
