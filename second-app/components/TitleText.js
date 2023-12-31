import React from 'react'
import { StyleSheet, Text } from 'react-native'

const TitleText = (props) => {
  return <Text style={styles.body}>{props.children}</Text>
}

export default TitleText

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Playpen-Sans',
    fontSize: 18
  },
})
