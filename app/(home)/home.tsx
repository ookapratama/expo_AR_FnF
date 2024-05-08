import { Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, XStack, YStack } from "tamagui";
import { w } from "../../constant/responsive";
import { Button } from "../../components/Button";
import { Link } from "expo-router";

const index = () => {
  return (
    <View flex={1} justifyContent="center">
      <YStack>
        {/* AR Camera */}
        <XStack justifyContent="center">
          <Link href="/menu">
            <AntDesign name="playcircleo" size={w(70)} color="black" />
          </Link>
        </XStack>
        {/* <TouchableOpacity style={{ alignItems: "center" }}> */}
        {/* </TouchableOpacity> */}

        {/* Button Menu */}
        <XStack
          maxWidth={"100%"}
          justifyContent="space-around"
          marginVertical={80}
        >
          <Button>Petunjuk</Button>
          <Button>Kuis</Button>
          <Button>Tentang</Button>
        </XStack>
      </YStack>
    </View>
  );
};

export default index;
