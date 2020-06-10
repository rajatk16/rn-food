import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultList'
import useResults from '../hooks/useResults'

export default ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList
          title="Hella Expensive"
          results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})
