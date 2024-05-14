import { useCameraPermissions } from "expo-camera";
import React, { useState } from "react";
import { Text, View } from "tamagui";
import { Button } from "../../../../components/Button";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
} from "@viro-community/react-viro";
import { h, w } from "../../../../constant/responsive";
import { Link, useLocalSearchParams } from "expo-router";

type dataProps = {
  src?: string | undefined;
  sourceImage?: undefined;
  nama: string;
};

const ARCamera = ({ nama }: dataProps) => {
  const [permission, requestPermission] = useCameraPermissions();

  const { src } = useLocalSearchParams<{ src: string }>();

  const sourceImage = src ? src : require("../../../../assets/sample.png");

  // console.log("ar camera : ", sourceImage);

  if (!permission) {
    return <View flex={1} backgroundColor={"skyblue"} />;
  }

  if (!permission.granted) {
    return (
      <View flex={1} justifyContent="center">
        <Text>Aplikasi ini membutuhkan perizinan untuk mengakses Kamera</Text>
        <Button onPress={requestPermission}>Izinkan</Button>
      </View>
    );
  }

  const ARImage = () => {
    return (
      <ViroARScene>
        <ViroImage
          position={[0, 0, -2]}
          resizeMode="ScaleToFit"
          placeholderSource={require("../../../../assets/sample.png")}
          source={sourceImage}
        />
      </ViroARScene>
    );
  };

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{
          scene: ARImage,
        }}
        style={{ flex: 1 }}
      />
    </>
  );
};

export default ARCamera;
