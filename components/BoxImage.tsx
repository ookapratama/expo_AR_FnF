import React from "react";
import { Image, Text, View, YStack } from "tamagui";
import { h, w } from "../constant/responsive";
import ARCamera from "../app/(home)/detail_menu/ar_camera";

type boxImageProps = {
  hewan?: string;
  jenis: string | undefined;
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
  const sourceImage: string | undefined =
    hewan || tumbuhan
      ? "../assets/images/kitten.jpg"
      : "../assets/sample.png";

  return (
    <YStack
      onPress={() => <ARCamera />}
      marginVertical={16}
      justifyContent="center"
      alignItems="center"
    >
      <View
        borderRadius={"$8"}
        width={w(36)}
        height={h(18)}
        backgroundColor={"green"}
        {...props}
      >
        <Image
          source={{
            uri: require("../assets/images/kitten.jpg"),
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
