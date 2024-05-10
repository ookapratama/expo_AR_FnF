import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, XStack } from "tamagui";
import { BoxImage } from "../../../components/BoxImage";

type jenisType = {
  jenis: string;
};

const detail_menu = () => {
  const { jenis } = useLocalSearchParams<{ jenis: string }>();
  const routeName  = '/detail_menu/ar_camera';

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
        <Link href={routeName} asChild>
          <BoxImage hewan="kitten" jenis={jenis} />
        </Link>
        <Link href={routeName} asChild>
          <BoxImage hewan="kitten" jenis={jenis} />
        </Link>
      </XStack>
    </ScrollView>
  );
};

export default detail_menu;
