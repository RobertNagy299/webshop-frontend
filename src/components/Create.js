import {
    Box,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Textarea,
    Divider,
    Checkbox,
    Button, useColorModeValue
} from "@chakra-ui/react";
import {Form, redirect} from "react-router-dom";
import React from "react";

export default function Create() {

    const textAreaFontColor = useColorModeValue('rgb(67,0,0)', 'orange.100')

    const textInputBorderStyle = useColorModeValue('1px solid rgb(67,0,0)', '1px solid rgb(211,197,0)')
    const labelTextColor =  useColorModeValue('rgb(67,0,0)', 'orange.100')
    const checkBoxShadow = useColorModeValue('0px 0px 1px rgb(67,0,0)','0px 0px 1px rgb(211,185,0)')

    return (
        <Box maxW={480}>
            <Form method="post" action="/create" >
                <FormControl isRequired >
                    <FormLabel color={labelTextColor}>
                        Product name:
                    </FormLabel>
                    <Input type="text" name="title"
                           border={textInputBorderStyle}
                           _placeholder={{color: textAreaFontColor}}
                           placeholder="Example name" _focus={{outline: "none", border: "2px solid orange", shadow: "none"}}/>
                    <FormHelperText color={labelTextColor}>Enter a descriptive name</FormHelperText>

                </FormControl>
                <Divider mt={8} mb={21} bg="gray.500" borderRadius={"15%"}/>
                <FormControl>
                    <FormLabel color={labelTextColor}>
                        Product Description
                    </FormLabel>
                    <Textarea placeholder="Enter a detailed description for the product"
                              color={textAreaFontColor}
                              border={textInputBorderStyle}
                              _placeholder={{color: textAreaFontColor}}
                        name="description"

                              _focus={{outline: "2px solid orange", border: "none", shadow: "none"}}
                    />
                </FormControl>
                <Divider mt={8} mb={21} bg="gray.500" borderRadius={"15%"}/>
                <FormControl display="flex" alignItems="center">
                    <Checkbox
                        shadow={checkBoxShadow}
                        borderRadius={4}
                        colorScheme={"orange"}
                        _focus={{outline: "2px solid orange" ,border: "none", shadow: "none"}}
                        name="isPremium"
                        size="lg"
                        mr={2}
                    />
                    <FormLabel color={labelTextColor} mb={0}>Make this a premium product?</FormLabel>
                </FormControl>
                <Divider mt={8} mb={21} bg="gray.500" borderRadius={"15%"}/>
                <Button type={"submit"} colorScheme={"orange"} variant={"solid"}>Submit</Button>
            </Form>
        </Box>
    )
}

export const createAction = async ({request}) => {
    const data = await request.formData()

    const task = {
        title: data.get('title'),
        description: data.get('description'),
        isPremium: data.get('isPremium') === '',
    }

    console.log(task)

    return redirect("/")
}