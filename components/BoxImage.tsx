import React from "react";
import { Image, Text, View, YStack } from "tamagui";
import { h, w } from "../constant/responsive";

type boxImageProps = {
  hewan?: string;
  jenis: string;
  tumbuhan?: string;
  extension?: "jpg" | "png" | "jpeg";
};

export const BoxImage = ({
  jenis,
  hewan = "",
  tumbuhan = "",
  extension,
  ...props
}: boxImageProps) => {
  return (
    <YStack marginVertical={16} justifyContent="center" alignItems="center">
      <View
        borderRadius={"$8"}
        width={w(36)}
        height={h(18)}
        backgroundColor={"green"}
        {...props}
      >
        <Image
          source={{
            uri: require(`../assets/images/kitten.jpg`),
            width: w(36),
            height: h(18),
          }}
          resizeMode="cover"
        />
      </View>
      <Text textTransform="capitalize" fontSize={16} marginTop={4}>
        Hewan {hewan}
      </Text>
    </YStack>
  );
};

export default BoxImage;
