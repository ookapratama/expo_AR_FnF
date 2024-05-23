import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import { Audio } from "expo-av";
import { Text, View } from "tamagui";

const dataKuis = [
  // fauna
  require("../../assets/voices/fauna/komodo.mp3"),
  require("../../assets/voices/fauna/harimau.mp3"),
  require("../../assets/voices/fauna/cendrawasih.mp3"),
  require("../../assets/voices/fauna/badak.mp3"),
  require("../../assets/voices/fauna/gajah.mp3"),
  require("../../assets/voices/fauna/orangutan.mp3"),
  // flora
  require("../../assets/voices/flora/semar.mp3"),
  require("../../assets/voices/flora/rafflesia.mp3"),
  require("../../assets/voices/flora/bangkai.mp3"),
  require("../../assets/voices/flora/aqul.mp3"),
];

const KuisLayout = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  const router = useRouter();
  const [sounds, setSound] = useState();
  const [indexActive, setIndexActive] = useState(0);

  const getVoice = async () => {
    console.log("loading sound");
    try {
      // const { sound } = await Audio.Sound.createAsync(require("../../../../assets/voices/fauna/komodo.mp3"))
      const { sound } = await Audio.Sound.createAsync(dataKuis[id]);
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
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <>
             
              <Entypo
                style={{ marginHorizontal: 15 }}
                onPress={() => router.navigate("/")}
                name="home"
                size={32}
                color="black"
              />
            </>
          ),
          headerRight: () => (
            <>
              <View>
                <Ionicons
                  name="heart-sharp"
                  size={40}
                  color="black"
                />
                
              </View>
              <View  >
                <Entypo
                  style={{ position: "relative" }}
                  name="stopwatch"
                  size={40}
                  color="black"
                />
              </View>
            </>
          ),
        }}
      />
    </Stack>
  );
};

export default KuisLayout;
