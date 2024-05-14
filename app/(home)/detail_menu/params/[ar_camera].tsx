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
import { useLocalSearchParams } from "expo-router";

type dataProps = {
  src?: string | undefined;
  sourceImage?: undefined;
  nama: string;
};

const ARCamera = ({  nama }: dataProps) => {
  const [permission, requestPermission] = useCameraPermissions();
  
  const { src } = useLocalSearchParams<{ src: string }>();

  console.log("ar camera 1: ", src);

  const sourceImage = src ? src : require("../../../../assets/sample.png");

  console.log("ar camera : ", sourceImage);

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
        {/* //   <ViroText
      //     text="Hello World"
      //     position={[0, -3, -6]}
      //     style={{ fontSize: 50 }}
      //   /> */}

        {/* <Viro360Image source={require("../../../assets/images/kitten.jpg")} /> */}

        <ViroImage
          position={[0, 0, -2]}
          resizeMode="ScaleToFit"
          placeholderSource={require("../../../../assets/sample.png")}
          source={sourceImage}
          // source={{
          //   uri: sourceImage,
          //   width: w(36),
          //   height: h(18),
          // }}
        />
      </ViroARScene>
    );
  };

  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: ARImage,
      }}
      style={{ flex: 1 }}
    />
  );
};

export default ARCamera;
