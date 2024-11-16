"use client"; // Marks this file as a Client Component

import React, { useState, useEffect } from 'react';
import { Avatar, Box, Container, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography, TextField } from '@mui/material';
import { Phone, Videocam, Info, Mood, Image, Favorite } from '@mui/icons-material';
import axios from 'axios';

const Messages: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState<string>('Julien Lefèvre');
  const [friends, setFriends] = useState<any[]>([  // Fake friends data
    {
      id: 1,
      username: 'Julien Lefèvre',
      firstName: 'Julien',
      lastName: 'Lefèvre',
      email: 'julien@example.com',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      username: 'Sarah Smith',
      firstName: 'Sarah',
      lastName: 'Smith',
      email: 'sarah@example.com',
      profileImageUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      username: 'John Doe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      profileImageUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ]);

  const [messages, setMessages] = useState<any>({
    'Julien Lefèvre': [
      {
        sender: 'sent',
        content: 'Hello, how are you?',
        timestamp: '2024-11-11 10:00 AM',
      },
      {
        sender: 'received',
        content: 'I\'m good, thanks! How about you?',
        timestamp: '2024-11-11 10:05 AM',
      },
      {
        sender: 'sent',
        content: 'I\'m doing great, thanks for asking!',
        timestamp: '2024-11-11 10:10 AM',
      },
    ],
    'Sarah Smith': [
      {
        sender: 'sent',
        content: 'Hey Sarah, are you available for a call?',
        timestamp: '2024-11-11 09:30 AM',
      },
      {
        sender: 'received',
        content: 'Yes, I am! What time works for you?',
        timestamp: '2024-11-11 09:35 AM',
      },
    ],
    'John Doe': [
      {
        sender: 'sent',
        content: 'Hi John, do you have any updates on the project?',
        timestamp: '2024-11-11 08:15 AM',
      },
      {
        sender: 'received',
        content: 'Not yet, but I\'ll keep you posted.',
        timestamp: '2024-11-11 08:20 AM',
      },
    ],
  });

  // Fetch friends list from the API (simulated with fake data)
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        // Simulate an API request by using the fake data
        setFriends(friends);  // Set the friends data
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    fetchFriends();
  }, []);

  // Fetch messages for the selected contact
  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedContact) return;
      try {
        // Simulate an API request by using the fake data
        setMessages((prevMessages: any) => ({
          ...prevMessages,
          [selectedContact]: messages[selectedContact],
        }));
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, [selectedContact]);

  const handleContactSelect = (contactName: string) => {
    setSelectedContact(contactName);
  };

  return (
    <Container sx={{ display: 'flex', height: '100vh', padding: 0 }}>
      <Paper sx={{ width: '30%', height: '100%', overflowY: 'auto' }}>
        <Typography variant="h6" sx={{ padding: 2 }}>Friends</Typography>
        <Divider />
        <List>
          {friends.map((friend) => (
            <ListItem
              button
              key={friend.id}
              selected={selectedContact === friend.username}
              onClick={() => handleContactSelect(friend.username)}
              sx={{ padding: '10px 20px' }}
            >
              <ListItemAvatar>
                <Avatar src={friend.profileImageUrl} />
              </ListItemAvatar>
              <ListItemText primary={`${friend.firstName} ${friend.lastName}`} secondary={friend.email} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, borderBottom: '1px solid #e0e0e0' }}>
          <Avatar src={friends.find(friend => friend.username === selectedContact)?.profileImageUrl} />
          <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 2 }}>{selectedContact}</Typography>
          <IconButton><Phone /></IconButton>
          <IconButton><Videocam /></IconButton>
          <IconButton><Info /></IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, padding: 2, overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
          {messages[selectedContact]?.map((message: any, index: number) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'sent' ? 'flex-end' : 'flex-start',
                marginBottom: 2,
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 1.5,
                  borderRadius: 1,
                  backgroundColor: message.sender === 'sent' ? '#fff' : '#ffebee',
                  maxWidth: '60%',
                }}
              >
                <Typography variant="body2">{message.content}</Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        <Box sx={{
          display: 'flex', alignItems: 'center', padding: 1, borderTop: '1px solid #e0e0e0',
          backgroundColor: '#fff', boxShadow: 1, marginTop: 1, borderRadius: 2
        }}>
          <IconButton><Mood /></IconButton>
          <TextField
            variant="outlined"
            placeholder="Type a message"
            fullWidth
            sx={{
              marginX: 2,
              backgroundColor: '#f9f9f9',
              borderRadius: 2,
              border: 0,
              '.MuiOutlinedInput-notchedOutline': {
                border: 0
              },
              '.MuiOutlinedInput-root': {
                padding: '8px 12px'
              }
            }}
          />
          <IconButton><Image /></IconButton>
          <IconButton><Favorite /></IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default Messages;
