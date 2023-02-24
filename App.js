import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(Number);
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      Alert.alert("Bass kar bhai kitna dabaye ga!")
    }
  }

  return (
    <>
      <View style={style.mainContainer}>

        <TouchableOpacity onPress={() => decrement()}>
          <View style={style.container}>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }}>-</Text>
          </View>
        </TouchableOpacity>

        <View style={style.outputContainer}>
          <Text style={style.output}>{count}</Text>
        </View>

        <TouchableOpacity onPress={() => { increment() }}>
          <View style={style.container}>
            <Text style={{ fontSize: 50, fontWeight: 'bold' }}>+</Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "lightblue"
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    margin: 10,
    width: 80,
    height: 80
  },
  outputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 120,
    height: 80
  },
  output: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})