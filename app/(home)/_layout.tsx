import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="menu" options={{ headerTitle: "" }} />
      <Stack.Screen name="detail_menu" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
