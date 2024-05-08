// import "../tamagui-web.css";
import '@tamagui/core/reset.css'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { Stack } from "expo-router";

import { useColorScheme } from "react-native";

import { tamaguiConfig } from "../tamagui.config";
import { TamaguiProvider } from "tamagui";
export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    // add this
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
