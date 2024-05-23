import React, { useEffect, useState } from "react";
import { AlertDialog, Image, Text, View, XStack, YStack } from "tamagui";
import { w } from "../../constant/responsive";
import { Button } from "../../components/Button";
import { dataKuis } from "../../datas";
import { Link, router } from "expo-router";
import { Modal } from "react-native";

const index = () => {
  const [kuis, setKuis] = useState(dataKuis);

  const [chance, setChande] = useState(3);
  const [visibleModal, setVisibleModal] = useState(false);

  const [warna1, setWarna1] = useState("$grayscale600");
  const [warna2, setWarna2] = useState("$grayscale600");
  const [warna3, setWarna3] = useState("$grayscale600");

  const [jawaban, setJawaban] = useState<boolean>();
  const [skor, setSkor] = useState(0);

  const [indexActive, setIndexActive] = useState(0);

  const nextBtn = () => {
    setIndexActive((v) => v + 1);
    setWarna1("$grayscale600");
    setWarna2("$grayscale600");
    setWarna3("$grayscale600");
  };

  const prevBtn = () => {
    setIndexActive((v) => v - 1);
    setWarna1("$grayscale600");
    setWarna2("$grayscale600");
    setWarna3("$grayscale600");
  };

  const handleJawaban1 = (pilihan: string) => {
    if (pilihan === kuis[indexActive].jawaban) {
      setWarna1("$success");
      setWarna2("$grayscale600");
      setWarna3("$grayscale600");
      setSkor((v) => v + kuis[indexActive].skor);
    } else {
      setChande((v) => v - 1);
      setVisibleModal(true);
      setWarna1("$alert");
      setWarna2("$grayscale600");
      setWarna3("$grayscale600");
    }
  };
  const handleJawaban2 = (pilihan: string) => {
    if (pilihan === kuis[indexActive].jawaban) {
      setWarna1("$grayscale600");
      setWarna2("$success");
      setWarna3("$grayscale600");
      setSkor((v) => v + kuis[indexActive].skor);
    } else {
      setChande((v) => v - 1);
      setVisibleModal(true);
      setWarna1("$grayscale600");
      setWarna2("$alert");
      setWarna3("$grayscale600");
    }
  };
  const handleJawaban3 = (pilihan: string) => {
    if (pilihan === kuis[indexActive].jawaban) {
      setWarna1("$grayscale600");
      setWarna2("$grayscale600");
      setWarna3("$success");
      setSkor((v) => v + kuis[indexActive].skor);
    } else {
      setChande((v) => v - 1);
      setVisibleModal(true);
      setWarna1("$grayscale600");
      setWarna2("$grayscale600");
      setWarna3("$alert");
    }
  };

  return (
    <View
      flex={1}
      backgroundColor={"#4EA5D9"}
      paddingTop={w(25)}
      alignItems="center"
    >
      <Text fontSize={32} textTransform="uppercase">
        Skor : {skor}
      </Text>
      <XStack borderWidth={2} borderRadius={10} width={"80%"} marginTop={w(6)}>
        <Text fontSize={20} textAlign="justify" padding={12}>
          {kuis[indexActive]?.soal}
        </Text>
      </XStack>

      {/* opsi */}
      <YStack marginTop={40} width={"70%"}>
        <Button
          onPress={() => {
            handleJawaban1(kuis[indexActive].opsi.a);
          }}
          backgroundColor={warna1}
        >
          {kuis[indexActive].opsi.a}
        </Button>

        <Button
          onPress={() => {
            handleJawaban2(kuis[indexActive].opsi.b);
          }}
          marginVertical={24}
          backgroundColor={warna2}
        >
          {kuis[indexActive].opsi.b}
        </Button>

        <Button
          onPress={() => {
            handleJawaban3(kuis[indexActive].opsi.c);
          }}
          backgroundColor={warna3}
        >
          {kuis[indexActive].opsi.c}
        </Button>
      </YStack>

      {/* navigation */}
      <XStack justifyContent="space-between" marginTop={42}>
        <Button
          disabled={indexActive === 0}
          backgroundColor={indexActive == 0 ? "$grayscale400" : "$primary"}
          onPress={() => prevBtn()}
        >
          Previous
        </Button>
        <Button
          marginHorizontal={20}
          disabled={kuis.length === indexActive + 1}
          backgroundColor={
            kuis.length == indexActive + 1 ? "$grayscale300" : "$primary"
          }
          onPress={() => nextBtn()}
        >
          Next
        </Button>
        <Link href={"(home)"} asChild>
          <Button backgroundColor={"$secondary"}>Selesai</Button>
        </Link>
      </XStack>
      <Modal animationType="slide" transparent={true} visible={visibleModal}>
        <View
          justifyContent="center"
          alignItems="center"
          backgroundColor={"$white"}
          marginHorizontal={30}
          marginVertical={350}
          flex={1}
        >
          <View>
            <YStack justifyContent="center" alignItems="center">
              {chance === 0 ? (
                <>
                  <Text fontSize={24}>Kesmepatan anda sudah habis,</Text>
                  <Button
                    marginTop={20}
                    onPress={() => router.navigate('/')}
                  >
                    Kembali ke beranda
                  </Button>
                </>
              ) : (
                <>
                  <Text fontSize={24}>
                    Kesmepatan anda tersisa {chance} lagi.
                  </Text>
                  <Button
                    marginTop={20}
                    onPress={() => setVisibleModal(!visibleModal)}
                  >
                    Ok
                  </Button>
                </>
              )}
            </YStack>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default index;
