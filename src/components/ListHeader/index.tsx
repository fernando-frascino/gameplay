import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type Propr = {
  title: string;
  subtitle: string;
}

export function ListHeader({ title, subtitle }: Propr) {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        { title }
      </Text>

      <Text style={styles.subtitle}>
        { subtitle }
      </Text>

    </View>
  )
}