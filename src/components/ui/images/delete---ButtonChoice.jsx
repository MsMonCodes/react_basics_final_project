import { Button } from "@chakra-ui/react"

export const ButtonChoice = ({ text, clickFn }) => {
    return (
        <>
            <Button
                bgColor={'red.600'}
                border={'green.200'}
                onClick={clickFn}
                cursor={'pointer'}
            >
                {text}</Button></>
    );
}