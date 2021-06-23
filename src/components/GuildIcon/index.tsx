import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://image.flaticon.com/icons/png/512/2111/2111370.png';
  return(
    <Image 
      source={{ uri }}
      style={styles.image} 
      resizeMode='cover'
    />
  )
}