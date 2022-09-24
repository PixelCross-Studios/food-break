import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ 
    title, 
    onPress, 
    color, 
    customStyle,
    disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, customStyle, { backgroundColor: color}]}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: '6%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      }
});

export default Button;
