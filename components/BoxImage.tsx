import React from "react";
import { Image, Text, View, YStack } from "tamagui";
import { h, w } from "../constant/responsive";
// import ARCamera from "../app/(home)/detail_menu/ar_camera";
import { Link } from "expo-router";

type boxImageProps = {
  nama?: string;
  jenis: string | undefined;
  src: string | undefined;
  desc: string;
  sourceImage?: string | undefined;
  index: number
};

export const BoxImage = ({
  jenis,
  nama = "",
  src,
  desc,
  index,
  ...props
}: boxImageProps) => {
  console.log("box 1", src);
  const sourceImage = src ? src : require("../assets/sample.png");
  console.log("box ", sourceImage);
  return (
    <Link  href={''} asChild>
      <YStack
       
        marginVertical={16}
        justifyContent="center"
        alignItems="center"
      >
        <View
          style={{
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.19,
            shadowRadius: 5.62,
            elevation: 6,
          }}
          borderRadius={"$8"}
          width={w(36)}
          height={h(18)}
          backgroundColor={"white"}
          {...props}
        >
          <Image
            source={sourceImage}
            style={{ width: w(36), height: h(18) }}
            resizeMode="contain"
          />
        </View>
        <Text textTransform="capitalize" fontSize={16} marginTop={4}>
          {nama}
        </Text>
      </YStack>
    </Link>
  );
};

export default BoxImage;
