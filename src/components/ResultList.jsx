import React from 'react'
import {withNavigation} from '@react-navigation/compat'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ResultDetail from './ResultDetail'

const ResultList = (props) => {
  if(!props.results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} navigation={props.navigation} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 15,
  },
})

export default withNavigation(ResultList)