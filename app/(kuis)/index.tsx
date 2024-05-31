import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View, XStack, YStack } from "tamagui";
import { h, w } from "../../constant/responsive";
import { Button } from "../../components/Button";
import { dataKuis } from "../../datas";
import { Link, router } from "expo-router";
import { ImageBackground, Modal } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";

const index = () => {
  const [kuis, setKuis] = useState(dataKuis);

  const [chance, setChande] = useState(3);
  const [visibleModal, setVisibleModal] = useState(false);
  const [timer, setTimer] = useState<number | undefined>(300);

  const [warna1, setWarna1] = useState("$grayscale600");
  const [warna2, setWarna2] = useState("$grayscale600");
  const [warna3, setWarna3] = useState("$grayscale600");

  const [skor, setSkor] = useState(0);
  const [sounds, setSound] = useState();
  const getSound = useRef(new Audio.Sound());
  const [statusSound, setStatusSound] = useState(false);

  const [indexActive, setIndexActive] = useState(0);

  const getVoice = async () => {
    // console.log("loading sound");
    // const checkSound = await getSound.current.getStatusAsync();
    // console.log(checkSound);
    // if (checkSound.isLoaded === false) {
    //   try {
    //     console.log('first')
    //     const result = await getSound.current.loadAsync(
    //       require("../../assets/voices/backsound.mpeg")
    //     );
    //     console.log('second')
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   return;
    // }
    // return;

    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/voices/backsound.mpeg")
      );
      // console.log(sound);
      setSound(sound);

      console.log("Playing Sound");
      sound.setIsLoopingAsync(true);
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const PlayAudio = async () => {
    setStatusSound(false);
    try {
      const result = await getSound.current.getStatusAsync();
      console.log(result);
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          getSound.current.playAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PauseAudio = async () => {
    setStatusSound(true);
    try {
      const result = await getSound.current.getStatusAsync();
      console.log(result);
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          getSound.current.pauseAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      skor !== 0 ? setSkor((v) => v - 5) : "";
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
      skor !== 0 ? setSkor((v) => v - 5) : "";
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
      skor !== 0 ? setSkor((v) => v - 5) : "";
      setVisibleModal(true);
      setWarna1("$grayscale600");
      setWarna2("$grayscale600");
      setWarna3("$alert");
    }
  };

  useEffect(() => {
    // set timer kuis
    let interval = setInterval(() => {
      setTimer((v) => {
        console.log(v);
        if (v === 0) {
          setTimer(0);
          setVisibleModal(true);

          return;
        } else {
          v <= 1 && clearInterval(interval);
          return v - 1;
        }
      });
    }, 1000);

    isNaN(timer) ? setTimer(0) : "";
    return () => clearInterval(interval);
  }, [timer]);

  // handle backsound kuis
  useEffect(() => {
    getVoice();
  }, []);
  useEffect(() => {
    return sounds
      ? () => {
          console.log("Unloading Sound");
          sounds.unloadAsync();
        }
      : undefined;
  }, [sounds]);

  return (
    <View flex={1} backgroundColor={"#4EA5D9"}>
      <ImageBackground
        source={require("../../assets/bg/kuis.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <XStack top={w(6)} justifyContent="space-between">
          <XStack>
            <Entypo
              style={{ marginHorizontal: 15 }}
              onPress={() => router.navigate("/")}
              name="home"
              size={50}
              color="black"
            />
            {/* {statusSound ? ( */}
            {/*  <MaterialCommunityIcons
                 name="music-note-off"
                 size={50}
                 color="black"
                 onPress={() => PlayAudio()}
               /> */}
            {/* ) : ( */}
            <MaterialCommunityIcons name="music-note" size={50} color="black" />
            {/* )} */}
          </XStack>
          <XStack>
            <View position="relative" marginHorizontal={15}>
              <Ionicons name="heart-sharp" size={50} color="black" />
              <Text
                position="absolute"
                right={0}
                left={0}
                top={w(2)}
                textAlign="center"
                fontSize={25}
                color={"$white"}
              >
                {chance}
              </Text>
            </View>
            <View position="relative" marginRight={10}>
              <Image
                source={require("../../assets/alarm.png")}
                width={45}
                height={45}
                resizeMode="cover"
              />
              <Text
                position="absolute"
                right={0}
                left={0}
                top={w(2)}
                textAlign="center"
                fontSize={25}
                color={"$white"}
              >
                {timer}
              </Text>
            </View>
          </XStack>
        </XStack>

        <YStack justifyContent="center" alignItems="center" marginTop={w(20)}>
          <Text fontSize={32} textTransform="uppercase">
            Skor : {skor}
          </Text>
          <XStack
            borderWidth={2}
            borderRadius={10}
            width={"80%"}
            marginTop={w(6)}
            backgroundColor={"$white"}
          >
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
            <Button
              backgroundColor={"$secondary"}
              onPress={() => {
                setIndexActive(0);
                setChande(3);
                setVisibleModal(!visibleModal);
                setWarna1("$grayscale600");
                setWarna2("$grayscale600");
                setWarna3("$grayscale600");
                setTimer(0);
              }}
            >
              Selesai
            </Button>
          </XStack>
        </YStack>

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
                {chance === 0 || timer === 0 || isNaN(timer) ? (
                  <>
                    <Text fontSize={24} textAlign="center">
                      Kuis sudah berakhir.{"\n"}Skor akhir {skor}
                    </Text>
                    <XStack>
                      <Button
                        marginTop={20}
                        marginRight={10}
                        onPress={() => {
                          setIndexActive(0);
                          setSkor(0);
                          setChande(3);
                          setVisibleModal(!visibleModal);
                          setWarna1("$grayscale600");
                          setWarna2("$grayscale600");
                          setWarna3("$grayscale600");
                          setTimer(300);
                        }}
                      >
                        Kuis Lagi
                      </Button>

                      <Button
                        marginTop={20}
                        onPress={() => router.navigate("/")}
                      >
                        Kembali ke beranda
                      </Button>
                    </XStack>
                  </>
                ) : (
                  <>
                    <Text textAlign="center" fontSize={24}>
                      Kesempatan anda tersisa {chance} lagi.
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
      </ImageBackground>
    </View>
  );
};

export default index;
