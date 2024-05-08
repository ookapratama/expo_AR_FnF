import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='home'>
      <Stack.Screen name='home' options={{ headerShown: false, title: 'Home' }} />
    </Stack>
  )
}

export default _layout