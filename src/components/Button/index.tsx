import React from 'react';
import {TouchableOpacity, View, Text, TouchableOpacityProps} from 'react-native';
import {Feather} from '@expo/vector-icons';

import styles from './styles';

interface propsButton extends TouchableOpacityProps {
  text: string;
  icon?: string;
}

const Button: React.FC<propsButton> = ({ text, icon, ...rest }) => {
  return (
    <TouchableOpacity {...rest}>
      <View style={styles.container}>
        {icon && (
          <Feather name={icon} style={styles.icon} size={30} color='#E3E3E3' />
        )}
        <Text style={styles.textButton}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
