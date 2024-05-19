import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, XStack } from "tamagui";
import { BoxImage } from "../../../components/BoxImage";

// data static
import { dataFauna, dataFlora } from "../../../datas";

type dataProps = {
  nama: string;
  jenis: string;
  src: string | undefined;
  suara: undefined;
  deskripsi: string;
};

const detail_menu = () => {
  const { jenis } = useLocalSearchParams<{ jenis: string }>();
  const routeName = "/detail_menu/params/[ar_camera]";

  const [render, setRender] = useState<string>();
  const [datas, setDatas] = useState<dataProps[]>([]);

  const fetchData = () => {
    const res =
      jenis === "Flora" ? dataFlora.map((i) => i) : dataFauna.map((i) => i);
    // console.log(typeof(res));
    setDatas(res);
  };

  useEffect(() => {
    setRender(jenis);
    fetchData();
  }, []);
  return (
    <ScrollView>
      <XStack
        justifyContent="space-around"
        marginVertical={24}
        flexWrap="wrap"
        flex={1}
      >
        {datas.map((item, index) => (
          <Link
            key={index}
            // href={{ pathname: routeName }}
            href={{
              pathname: routeName,
              params: { src: item.src, desc: item.deskripsi },
            }}
            asChild
          >
            {jenis === "Flora" ? (
              <BoxImage
                nama={item.nama}
                src={item.src}
                desc={item.deskripsi}
                jenis={jenis}
              />
            ) : (
              <BoxImage
                nama={item.nama}
                src={item.src}
                desc={item.deskripsi}
                jenis={jenis}
              />
            )}
          </Link>
        ))}
        {/* <Link href={{ pathname: routeName }} asChild>
          <BoxImage hewan="kitten" jenis={jenis} />
        </Link> */}
      </XStack>
    </ScrollView>
  );
};

export default detail_menu;
