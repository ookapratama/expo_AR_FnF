import { CameraView, useCameraPermissions, Camera } from "expo-camera";
import React, { useState } from "react";
import { Text, View } from "tamagui";
import { Button } from "../../../components/Button";

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
          {/* <Button onPress={toggleCamera}>Flip Camera</Button> */}
        </View>
      </CameraView>
      {/* <Text>AR Camera</Text> */}
    </View>
  );
};

export default ARCamera;
