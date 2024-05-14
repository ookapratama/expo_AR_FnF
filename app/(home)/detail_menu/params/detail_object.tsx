import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import {  Text, View } from 'tamagui'
import { Button } from '../../../../components/Button'

const detail_object = () => {

  const {desc}  = useLocalSearchParams<{desc :string}>();
  console.log(desc)

  return (
    <View flex={1} paddingHorizontal={40} justifyContent='center' alignItems='center'>
      <Text fontSize={24} >Deskripsi</Text>

      <Text marginVertical={30} fontSize={20} textAlign='justify'>{desc}</Text>

      <Link href='/menu' asChild>
        <Button>Back</Button>
      </Link>
    </View>
  )
}

export default detail_object