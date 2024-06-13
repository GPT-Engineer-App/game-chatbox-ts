import { Container, VStack } from "@chakra-ui/react";
import ChatBox from "../components/ChatBox";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <ChatBox />
      </VStack>
    </Container>
  );
};

export default Index;