import React from 'react';
import { 
  Text, 
  Image, 
  View, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native';

import DirscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props){
  return(
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DirscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  );
}