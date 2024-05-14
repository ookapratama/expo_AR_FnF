import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "tamagui";

const Layout = () => {
  const { desc } = useLocalSearchParams<{ desc: string }>();

  return (
    <Stack>
      <Stack.Screen
        name="[ar_camera]"
        options={{
          headerTitle: ``,
          headerShadowVisible: true,
          headerRight: () => (
            <Link
              href={{
                pathname: "/detail_menu/params/detail_object",
                params: {desc : desc},
              }}
              asChild
            >
              <Button>
                <AntDesign name="infocirlce" size={26} color="black" />
              </Button>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="detail_object"
        options={{
          headerShown: false,
          headerTitle: ``,
          headerShadowVisible: true,
        }}
      />
    </Stack>
  );
};

export default Layout;
