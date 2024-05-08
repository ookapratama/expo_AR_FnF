import { Text, View } from "@/components/Themed";
import React from "react";
import { XStack, YStack } from "tamagui";
import { PlayCircle } from "@tamagui/lucide-icons";
import { Image } from "tamagui";
import { TouchableOpacity } from "react-native";
import Button from "@/components/Button";

const home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Button style={{  backgroundColor: 'green' }} icon={PlayCircle}>
      </Button> */}
      <YStack>
        <TouchableOpacity>
          <Image
            source={{
              uri: require("../../assets/images/play-button.png"),
              width: 350,
              height: 350,
            }}
          />
        </TouchableOpacity>

        <XStack backgroundColor={'red'}  justifyContent="space-between" margin={30} >
          <Button></Button>   
          {/* <Button backgroundColor={'#56CBF9'} color={'#fff'} fontWeight={'bold'}>Petunjuk</Button> */}
          {/* <Button>Kuis</Button> */}
          {/* <Button>Tentang</Button> */}
        </XStack>

      </YStack>
    </View>
  );
};

export default home;
