import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "tamagui";
import { Button } from "../../../../components/Button";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";

const dataSample = [
  // fauna
  require("../../../../assets/voices/fauna/komodo.mp3"),
  require("../../../../assets/voices/fauna/kucing.mp3"),
  require("../../../../assets/voices/fauna/cendrawasih.mp3"),
  require("../../../../assets/voices/fauna/harimau.mp3"),
  require("../../../../assets/voices/fauna/merak.mp3"),
  require("../../../../assets/voices/fauna/dugong.mp3"),
  require("../../../../assets/voices/fauna/orangutan.mp3"),
  require("../../../../assets/voices/fauna/badak.mp3"),
  require("../../../../assets/voices/fauna/jalak.mp3"),
  require("../../../../assets/voices/fauna/rusa.mp3"),
  // flora
  require("../../../../assets/voices/flora/bangkai.mp3"),
  require("../../../../assets/voices/flora/edelweis.mp3"),
  require("../../../../assets/voices/flora/cendana.mp3"),
  require("../../../../assets/voices/flora/semar.mp3"),
  require("../../../../assets/voices/flora/damar.mp3"),
  require("../../../../assets/voices/flora/anggrek.mp3"),
  require("../../../../assets/voices/flora/tengkawang.mp3"),
  require("../../../../assets/voices/flora/payung.mp3"),
  require("../../../../assets/voices/flora/semut.mp3"),
  require("../../../../assets/voices/flora/taxus.mp3"),
];

const detail_object = () => {
  const { desc, voice, id } = useLocalSearchParams();

  const sourceVoice = voice ? voice : dataSample;

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
      paddingHorizontal={40}
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={24}>Deskripsi</Text>

      <Text marginVertical={30} fontSize={20} textAlign="justify">
        {desc}
      </Text>

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
    </View>
  );
};

export default detail_object;
