import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from './styles'
import { categories } from '../../utils/category';

export function CategorySelect() {
  return(
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        // categories.map(category => ())
      }
    </ScrollView>
  )
}