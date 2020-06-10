import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        onChangeText={props.onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        value={props.term}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
})
