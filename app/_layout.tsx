import "@tamagui/core/reset.css";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalProvider, TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import { useFonts } from "expo-font";

export { ErrorBoundary } from "expo-router";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <SafeAreaProvider>
        <PortalProvider>
          <Stack screenOptions={{
          }} initialRouteName="(home)">
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
            <Stack.Screen name="(kuis)" options={{ headerShown: false }} />
          </Stack>
        </PortalProvider>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export default RootLayout;
