import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Layout = () => {
  const { jenis } = useLocalSearchParams<{ jenis: string }>();

  const infoIcon = () => {
    return <AntDesign name="infocirlce" size={24} color="black" />;
  };

  return (
    <Stack>
      <Stack.Screen
        name="[jenis]"
        options={{
          headerTitle: `Pilih ${jenis} Langka`,
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="params"
        options={{
          headerShown : false,
        }}
      />
    </Stack>
  );
};


export default Layout;
