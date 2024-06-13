import { useState } from "react";
import { Box, Button, Container, Flex, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" height="60vh" border="1px solid #ccc" borderRadius="md" overflowY="auto" p={4}>
          {messages.map((message, index) => (
            <Flex key={index} justify={message.sender === "You" ? "flex-end" : "flex-start"} mb={2}>
              <Box bg={message.sender === "You" ? "blue.500" : "gray.300"} color={message.sender === "You" ? "white" : "black"} p={2} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Flex width="100%">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <Button onClick={handleSendMessage} ml={2}>
            Send
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;