import { Avatar, Box, Flex,Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Ronaldo Rodrigues</Text>
          <Text color="gray.300" fontSize="small">
            ronaldo.rodrigues@agfquipamentos.com
          </Text>
        </Box>
      )}

    <Avatar size="md" name="Ronaldo Rodrigues" src="https://github.com/ronaldoTIrodrigues.png" />
  </Flex>
  );
}