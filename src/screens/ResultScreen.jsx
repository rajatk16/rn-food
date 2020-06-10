import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'

import yelp from '../api/yelp'

export default ({route}) => {
  const [result, setResult] = useState(null);
  const id = route.params.id
  const getResult = async (id) => {
    const response = await yelp.get(`${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, []);

  if(!result) {
    return (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    )
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos} 
        keyExtractor={(photo) => photo} 
        renderItem={({item}) => {
          return (
            <Image source={{uri: item}} style={styles.image} /> 
          )
        }} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
})
