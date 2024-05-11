import { CameraView, useCameraPermissions, Camera } from "expo-camera";
import React, { useState } from "react";
import { Text, View } from "tamagui";
import { Button } from "../../../components/Button";
import * as THREE from 'three';
import ExpoTHREE from 'expo-three';
import Expo from 'expo';
import { h, w } from "../../../constant/responsive";
import { onContextCreate } from "../../../components/renderAR";

const ARCamera = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

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

  const toggleCamera = () => {
    setFacing((val) => (val === "back" ? "front" : "back"));
  };

  return (
    <View flex={1} justifyContent="center">
      <CameraView style={{ flex: 1 }} facing={facing}>
        <View flex={1} flexDirection="row" backgroundColor="transparent">
        </View>
      </CameraView>
    </View>
  );
};

export default ARCamera;
