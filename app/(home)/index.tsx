import {  Modal } from "react-native";
import React, { useState } from "react";
import { Image, Text, View, XStack, YStack } from "tamagui";
import { h, w } from "../../constant/responsive";
import { Button } from "../../components/Button";
import { Link, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);

  return (
    <>
      <View flex={1} backgroundColor={"#4EA5D9"} justifyContent="center">
        <YStack>
          {/* AR Camera */}
          <YStack alignItems="center">
            <Image
              source={require("../../assets/text.png")}
              width={w(80)}
              resizeMode="contain"
            />
            <Link style={{ marginTop: -320 }} href="/menu">
              <Image
                // source={sourceImage}
                source={require("../../assets/play.png")}
                style={{ width: 300 }}
                resizeMode="repeat"
              />
            </Link>
          </YStack>

          {/* Button Menu */}
          <XStack
            maxWidth={"100%"}
            justifyContent="space-around"
            marginVertical={60}
          >
            <Button
              borderRadius={"$12"}
              backgroundColor={"$white"}
              paddingVertical={55}
              onPress={() => setVisibleModal(true)}
            >
              <Image
                source={require("../../assets/user-guide.png")}
                resizeMode="contain"
                width={w(15)}
                height={h(10)}
              />
            </Button>
            <Button
              borderRadius={"$12"}
              backgroundColor={"$white"}
              paddingVertical={55}
              onPress={() => router.navigate("/(kuis)")}
            >
              <Image
                source={require("../../assets/quiz.png")}
                resizeMode="contain"
                width={w(15)}
                height={h(10)}
              />
            </Button>
            <Button
              borderRadius={"$12"}
              backgroundColor={"$white"}
              paddingVertical={55}
              onPress={() => setVisibleModal2(true)}
            >
              <Image
                source={require("../../assets/information.png")}
                resizeMode="contain"
                width={w(15)}
                height={h(10)}
              />
            </Button>
          </XStack>
        </YStack>
      </View>

      {/* modal 1 */}
      <Modal animationType="slide" transparent={true} visible={visibleModal}>
        <View
          justifyContent="center"
          alignItems="center"
          backgroundColor={"$white"}
          marginHorizontal={30}
          marginVertical={150}
          flex={1}
        >
          <View>
            <YStack justifyContent="center" alignItems="center">
              <Text fontSize={38}>Tentang {"\n"} Aplikasi</Text>
              <Image
                marginTop={-100}
                source={require("../../assets/handayani.png")}
                resizeMode="contain"
                width={w(30)}
              />

              <Text
                marginTop={-100}
                paddingHorizontal={15}
                textAlign="center"
                fontSize={24}
              >
                IMPLEMENTASI AUGMENTED REALITY PADA PENGENALAN OBJEK 3 DIMENSI
                FLORA DAN FAUNA LANGKA BERBASIS ANDROID
              </Text>

              <Text paddingHorizontal={15} textAlign="center" fontSize={20}>
                Oleh {"\n"} LISA SENJANI {"\n"} 2020020048
              </Text>
            </YStack>
            <Button
              marginTop={20}
              onPress={() => setVisibleModal(!visibleModal)}
            >
              Kembali
            </Button>
          </View>
        </View>
      </Modal>

      {/* modal  */}
      <Modal animationType="slide" transparent={true} visible={visibleModal2}>
        <View
          justifyContent="center"
          alignItems="center"
          backgroundColor={"$white"}
          marginHorizontal={30}
          marginVertical={120}
          flex={1}
        >
          <View>
            <Text textAlign="center" fontSize={38}>
              Petunjuk {"\n"} Aplikasi
            </Text>
            <YStack marginTop={20} justifyContent="center" alignItems="center">
              <Image
                marginVertical={-100}
                source={require("../../assets/handayani.png")}
                resizeMode="contain"
                width={w(30)}
              />
            </YStack>
              <Text paddingHorizontal={15} fontSize={24}>
                Cara Penggunaan Aplikasi ini :
              </Text>

              <Text paddingHorizontal={15} fontSize={20}>
                1. Silahkan Pilih Tombol Play
              </Text>
              <Text paddingHorizontal={15} fontSize={20}>
                2. Pilih kategori yang ingin dilihat
              </Text>
              <Text paddingHorizontal={15} fontSize={20}>
                3. Pilih gambar yang ingin ditampilkan
              </Text>
              <Text paddingHorizontal={15} fontSize={20}>
                4. Izinkan akses kamera untuk menampilkan objek gambar
              </Text>
              <Text paddingHorizontal={15} fontSize={20}>
                5. Sudut kanan atas adalah icon untuk melihat deskripsi objek
                yang dipilih
              </Text>
            <Button
              marginTop={40}
              onPress={() => setVisibleModal2(!visibleModal2)}
            >
              Kembali
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default index;
