import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const AppButton = () => {
    return (
        <Pressable style={styles.actionButton}>
        <Text>Size</Text>

        <View style={styles.optionsButton}>
          <Text>S</Text>
          <Text>{'>'}</Text>
        </View>
      </Pressable>
    )
}

const styles = StyleSheet.create({

    pageView: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      paddingHorizontal: 24,
      alignItems: 'center',
    },
  
    actionButton: {
      width: '100%',
      backgroundColor: 'red',
      borderRadius: 100,
      height: 56,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
  
    optionsButton: {
      flexDirection: 'row',
      gap: 20
    }
  
  
  });