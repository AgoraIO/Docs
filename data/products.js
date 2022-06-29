import React from 'react';
import { Video, Mic, Radio } from 'react-feather';

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
      id: 'interactive-live-streaming',
      label: 'Interactive Live Streaming',
      icon: <Radio />,
      link: '/interactive-live-streaming/understand/product-overview'
    }
  ]
};
