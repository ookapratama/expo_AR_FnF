import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Layout = () => {
  const { jenis } = useLocalSearchParams<{ jenis: string }>();

 

  return (
    <Stack>
      <Stack.Screen
        name="[ar_camera]"
        options={{
          headerTitle: ``,
          headerShadowVisible: true,
          headerRight: () => (
            <AntDesign name="infocirlce" size={26} color="black" />
          ),
        }}
      />
    </Stack>
  );
};

export default Layout;
