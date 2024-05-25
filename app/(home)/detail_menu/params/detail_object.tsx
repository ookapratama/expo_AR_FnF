import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, YStack } from "tamagui";
import { Button } from "../../../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { ImageBackground } from "react-native";

const dataSample = [
  // fauna
  require("../../../../assets/voices/fauna/komodo.mp3"),
  require("../../../../assets/voices/fauna/harimau.mp3"),
  require("../../../../assets/voices/fauna/cendrawasih.mp3"),
  require("../../../../assets/voices/fauna/badak.mp3"),
  require("../../../../assets/voices/fauna/gajah.mp3"),
  require("../../../../assets/voices/fauna/orangutan.mp3"),
  // flora
  require("../../../../assets/voices/flora/semar.mp3"),
  require("../../../../assets/voices/flora/rafflesia.mp3"),
  require("../../../../assets/voices/flora/bangkai.mp3"),
  require("../../../../assets/voices/flora/aqul.mp3"),
];

const detail_object = () => {
  const { desc, voice, id } = useLocalSearchParams();

  // console.log(
  //   "voice tes: ",
  //   require("../../../../assets/voices/fauna/komodo.mp3")
  // );
  // console.log("id voice : ", dataSample[id]);
  // console.log("voice : ", sourceVoice);

  const [sounds, setSound] = useState();

  const getVoice = async () => {
    console.log("loading sound");
    try {
      // const { sound } = await Audio.Sound.createAsync(require("../../../../assets/voices/fauna/komodo.mp3"))
      const { sound } = await Audio.Sound.createAsync(dataSample[id]);
      console.log(sound);
      // console.log(sound);
      setSound(sound);

      console.log("Playing Sound");

      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return sounds
      ? () => {
          console.log("Unloading Sound");
          sounds.unloadAsync();
        }
      : undefined;
  }, [sounds]);

  return (
    <View
      flex={1}
      alignItems="center"
      backgroundColor={"#4EA5D9"}
    >
      <ImageBackground
        source={require("../../../../assets/bg/deskripsi.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", paddingHorizontal: 40 }}
      >
        <YStack
          backgroundColor={"$white"}
          padding={10}
          paddingHorizontal={30}
          borderRadius={"$8"}
        >
          <Text fontSize={28} fontWeight={"bold"} textAlign="center">
            Deskripsi
          </Text>

          <Text marginVertical={30} fontSize={20} textAlign="justify">
            {desc}
          </Text>
        </YStack>

        <Button
          onPress={() => getVoice()}
          backgroundColor={"$white"}
          shadowOpacity={5}
          borderWidth={2}
          padding={10}
          borderRadius={50}
          marginVertical={16}
        >
          <AntDesign name="sound" size={24} color="black" />
        </Button>

        <Link href="/menu" asChild>
          <Button>Back</Button>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default detail_object;
