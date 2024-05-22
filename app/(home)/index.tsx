import { Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, XStack, YStack } from "tamagui";
import { w } from "../../constant/responsive";
import { Button } from "../../components/Button";
import { Link, useRouter } from "expo-router";

const index = () => {

  const router = useRouter();
  // const toKuis = () => {
  //   console.log(segment);
  //   return segment === "(kuis)" ? <KuisLayout /> : "";
  // };

  return (
    <View flex={1} justifyContent="center">
      <YStack>
        {/* AR Camera */}
        <XStack justifyContent="center">
          <Link href="/menu">
            <AntDesign name="playcircleo" size={w(70)} color="black" />
          </Link>
        </XStack>

        {/* Button Menu */}
        <XStack
          maxWidth={"100%"}
          justifyContent="space-around"
          marginVertical={80}
        >
          <Button onPress={() => router.navigate('/(guide)')}>Petunjuk</Button>
          <Button onPress={() => router.navigate('/(kuis)')}>Kuis</Button>
          <Button onPress={() => router.navigate('/(about)')}>Tentang</Button>
        </XStack>
      </YStack>
    </View>
  );
};

export default index;
