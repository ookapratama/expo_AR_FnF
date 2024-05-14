import React, { useEffect, useRef, useState } from "react";
import {  GLView } from "expo-gl";
import { ViroARScene, ViroImage } from "@viro-community/react-viro";

const renderAR = () => {


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

};

export default renderAR;