import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default (props) => {
  const { result, navigation } = props
  return (
    <View style={styles.resultWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('Result', {id: result.id})}>
        <Image source={{ uri: result.image_url }} style={styles.image} />
        <Text style={styles.name}>{result.name}</Text>
      </TouchableOpacity>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultWrapper: {
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 4,
    marginBottom: 5,
  },
})
