import React from "react";
import { Text, View, YStack } from "tamagui";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { w } from "../../constant/responsive";
import { Button } from "../../components/Button";
import { Link } from "expo-router";

const Icons = (jenis: string) => {
  return jenis === "flora" ? (
    <FontAwesome5 name="pastafarianism" size={w(8)} color="white" />
  ) : (
    <FontAwesome6 name="plant-wilt" size={w(8)} color="white" />
  );
};

const menu = () => {
  return (
    <View flex={1} justifyContent="center" backgroundColor={"#4EA5D9"}>
      <YStack justifyContent="center" alignItems="center" width={w(100)}>
        <Link
          style={{ marginBottom: 50 }}
          href={{
            pathname: "/detail_menu/[jenis]",
            params: { jenis: "Flora" },
          }}
          asChild
        >
          <Button themeInverse size={"$10"} iconAfter={Icons("")}>
            Flora
          </Button>
        </Link>

        <Link
          href={{
            pathname: "/detail_menu/[jenis]",
            params: { jenis: "Fauna" },
          }}
          asChild
        >
          <Button themeInverse size={"$10"} iconAfter={Icons("flora")}>
            Fauna
          </Button>
        </Link>
      </YStack>
    </View>
  );
};

export default menu;
