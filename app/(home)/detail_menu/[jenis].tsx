import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, XStack } from "tamagui";
import { BoxImage } from "../../../components/BoxImage";

type jenisType = {
  jenis: string;
};

const detail_menu = () => {
  const { jenis } = useLocalSearchParams<{ jenis: string }>();

  const [render, setRender] = useState<string>();

  useEffect(() => {
    setRender(jenis);
  }, []);
  return (
    <ScrollView>
      <XStack
        justifyContent="space-around"
        marginVertical={24}
        flexWrap="wrap"
        flex={1}
      >
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
        <BoxImage hewan="kitten" jenis="fauna" />
      </XStack>
    </ScrollView>
  );
};

export default detail_menu;
