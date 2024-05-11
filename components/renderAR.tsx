import React, { useEffect, useRef, useState } from "react";
import {  GLView } from "expo-gl";
import * as THREE from "three";
import { Renderer } from "expo-three";
import { AR } from "expo";

const renderAR = () => {
  const arSession = useRef(null);
  const renderer = useRef(new Renderer({ gl: GLView }));

  const [arReacy, setArReady] = useState(false);
  const [scene, setScene] = useState(null);

  useEffect(() => {
    
  }, []);
};
