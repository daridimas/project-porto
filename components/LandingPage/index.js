import { Box, Flex, Text} from "@chakra-ui/react"

const LandingPage = ({ profile }) => {
    console.log("profile data di dalam component", profile)
    return (
        <Flex direction = "row" justifyContent="center">
            {profile.map((user, index) => {
                return (
                    <Box key={index} className="userbox">
                        <Text fontSize="md">{user.name}</Text>
                        <Text fontSize="md">{user.job}</Text>
                        <Text fontSize="md">{user.greeting}</Text>
                        <Text fontSize="md">{user.photo}</Text>
                    </Box>
                )
            })}
        </Flex>
    )
}

export default LandingPage