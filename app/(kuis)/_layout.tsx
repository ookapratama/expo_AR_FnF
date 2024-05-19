import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const KuisLayout = () => {
  return (
    <Stack initialRouteName="index" >
      <Stack.Screen name="index" options={{ headerTitle: ''}} />
    </Stack>
  );
};

export default KuisLayout;
