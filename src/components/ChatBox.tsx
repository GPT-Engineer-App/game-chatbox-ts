import React, { useState } from 'react';
import { Box, Button, Input, VStack, HStack, Text } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

interface Message {
  user: string;
  text: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'User', text: input }]);
      setInput('');
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} width="100%" maxW="md">
      <VStack spacing={4} align="stretch">
        <Box overflowY="auto" maxHeight="200px" borderWidth="1px" borderRadius="md" p={2}>
          {messages.map((msg, index) => (
            <HStack key={index} spacing={2} align="start">
              <Text fontWeight="bold">{msg.user}:</Text>
              <Text>{msg.text}</Text>
            </HStack>
          ))}
        </Box>
        <HStack spacing={2}>
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <Button onClick={handleSend} colorScheme="blue" rightIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ChatBox;