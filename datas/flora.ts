type floraProps = {
  id: number;
  nama: string;
  jenis: string;
  src: undefined;
  suara: undefined;
  deskripsi: string;
};

export const dataFlora: floraProps[] = [
  {
    id: 6,
    nama: "Kantong Semar",
    jenis: "Flora",
    src: require("../assets/object/flora/semar.png"),
    suara: require("../assets/voices/flora/semar.mp3"),
    deskripsi:
    'Tanaman kantong semar merupakan tanaman karnivora, artinya memakan daging  serangga dan hewan kecil. Banyak orang mengira kantong pada tanaman ini adalah bunga. Tapi ini sebenarnya adalah versi modifikasi dari bilahnya. Kantong ini digunakan untuk menangkap serangga dan hewan kecil lainnya. Tumbuhan ini termasuk tumbuhan langka karena disebabkan eksploitasi berlebihan, pembalakan liar, dan alih fungsi hutan.',
  },
  {
    id: 7,
    nama: "Rafflesia Arnoldii",
    jenis: "Flora",
    src: require("../assets/object/flora/rafflesia.png"),
    suara: require("../assets/voices/flora/rafflesia.mp3"),
    deskripsi:
    "Rafflesia arnoldi merupakan tumbuhan endemik bengkulu dengan persebaran hutan pulau sumatra. Anatomi tanaman Rafflesia belum lengkap. Organ tubuh Rafflesia hanya berupa bunga atau kuncup yang sedang mekar. Rafflesia tidak memiliki daun, batang atau akar. Penyebab berkurangnya habitat bunga ini disebabkan oleh kegiaan manusia seperti pembukaan wilaya hutan untuk pertambangan, pertanian, maupun pemukinan.",
  },
  {
    id: 8,
    nama: "Bunga Bangkai Raksasa",
    jenis: "Flora",
    src: require("../assets/object/flora/bangkai.png"),
    suara: require("../assets/voices/flora/bangkai.mp3"),
    deskripsi:
    "Bunga bangkai raksasa adalah tumbuhan dari famili talas-talasan (Araceae) endemik dari Sumatra Indonesia, yang dikenal sebagai tumbuhan dengan bunga majemuk terbesar di dunia. Bunga ini mengeluarkan bau seperti bangkai sehingga dinamakan bunga bangkai. Populasibunga ini semakin berkurang karena habitatnya mengalami alih fungsi hutan menjadi pertanian, Perkebunan  dan pemukiman.",
  },
  {
    id: 9,
    nama: "Aquilaria",
    jenis: "Flora",
    src: require("../assets/object/flora/Aquilaria.jpg"),
    suara: require("../assets/voices/flora/aqul.mp3"),
    deskripsi:
    "Aqularia merupakan tumbuhan penghasil kayu gaharu. Gaharu memiliki kandungan kadar damar yang wangi sehingga dijuluki emas beraroma dari hutan. Tempat hidupnya di hutan pedalaman Kalimantan. Harga jual tanaman ini mahal sehingga banyak yang memburunya. Keberadaanya sekarang sangat mengkhawatirkan dan terancam punah.",
  },
  
];
