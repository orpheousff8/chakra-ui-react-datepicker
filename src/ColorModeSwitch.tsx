import { HStack, Switch, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export const ColorModeSwitch = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack>
            <Switch colorScheme="teal" onChange={toggleColorMode} />
            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </HStack>
    )
}

export default ColorModeSwitch
