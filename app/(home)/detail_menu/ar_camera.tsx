import { CameraView, useCameraPermissions, Camera } from "expo-camera";
import React, { useState } from "react";
import { Text, View } from "tamagui";
import { Button } from "../../../components/Button";
import { h, w } from "../../../constant/responsive";
import {
  Viro360Image,
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
  ViroScene,
  ViroText,
} from "@viro-community/react-viro";

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

  const ARImage = () => {
    return (
      // <CameraView style={{ flex: 1 }} facing={facing}>

      <ViroARScene>
        {/* //   <ViroText
      //     text="Hello World"
      //     position={[0, -3, -6]}
      //     style={{ fontSize: 50 }}
      //   /> */}

        {/* <Viro360Image source={require("../../../assets/images/kitten.jpg")} /> */}

        <ViroImage
          // height={15}
          // width={15}
          position={[0, 0, -2]}
          resizeMode="ScaleToFit"
          source={require("../../../assets/object/fauna/tiger.png")}
        />
      </ViroARScene>

      // </CameraView>;
    );
  };

  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: ARImage,
      }}
      style={{ flex: 1 }}
    />

    // <View flex={1} justifyContent="center">
    //   <CameraView style={{ flex: 1 }} facing={facing}>
    //     <ViroScene>
    //       <ViroText
    //         text="Hello World"
    //         position={[0, -5, -3]}
    //         style={{ fontSize: 100 }}
    //       />
    //     </ViroScene>
    //   </CameraView>
    // </View>

    // <ViroScene>
    //   <ViroText
    //     text="Hello World"
    //     position={[0, -5, -3]}
    //     style={{ fontSize: 100 }}
    //   />
    // </ViroScene>
  );
};

export default ARCamera;
