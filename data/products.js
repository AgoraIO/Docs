import React from 'react';
import { Video, Mic, MessageSquare } from 'react-feather';

export const products = {
  core: [
    {
      id: 'video-calling',
      label: 'Video Calling',
      icon: <Video />,
      link: '/video-calling/understand/product-overview'
    },
    {
      id: 'voice-calling',
      label: 'Voice Calling',
      icon: <Mic />,
      link: '/voice-calling/understand/product-overview'
    },
    {
      id: 'realtime-messaging',
      label: 'Realtime Messaging',
      icon: <MessageSquare />,
      link: '/realtime-messaging/understand/product-overview'
    }
  ]
};
