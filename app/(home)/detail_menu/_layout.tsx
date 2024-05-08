import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const Layout = () => {
  const { jenis } = useLocalSearchParams<{ jenis: string }>();

  return (
    <Stack>
      <Stack.Screen
        name="[jenis]"
        options={{
          headerTitle: `Pilih ${jenis} Langka`,
          headerShadowVisible: true,
        }}
      />
    </Stack>
  );
};

export default Layout;
