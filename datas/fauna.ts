type faunaProps = {
  id: number;
  nama: string;
  jenis: string;
  src: undefined;
  suara: undefined;
  deskripsi: string;
};

export const dataFauna: faunaProps[] = [
  {
    id: 0,
    nama: "Komodo",
    jenis: "Fauna",
    src: require("../assets/object/fauna/komodo.png"),
    suara: require("../assets/voices/fauna/komodo.mp3"),
    deskripsi:
      "Komodo merupakan spesies terbesar dari keluarga Varanidae dan kadal terbesar di dunia, dengan rata-rata panjang 2-3 meter dan berat mencapai 100 kg. Komodo hanya terdapat di pulau Komodo, nusa Tenggara Timur keberadaanya terancam punah. Menurunnya populasi Komodo disebabkan karena perburuan liar, perubahan lingkungan, dan berkurangnya suber makanan.",
  },
  {
    id: 1,

    nama: "Harimau Sumatra",
    jenis: "Fauna",
    src: require("../assets/object/fauna/sumatra_tiger.png"),
    suara: require("../assets/voices/fauna/harimau.mp3"),
    deskripsi: "Harimau sumatera merupakan hewan yang terancam punah. Hilangnya habitat harimau sumatera menjadi penyebab utama satwa tersebut terancam punah. Selain itu, perburuan liar semakin meningkat karena meningkatnya permintaan bagian tubuh. Kulit harimau banyak dimanfaatkan untuk berbagai keperluan seperti tas, sepatu atau pakaian.",
  },
  {
    id: 2,

    nama: "Burung Cendrawasih",
    jenis: "Fauna",
    src: require("../assets/object/fauna/cendrawasih.png"),
    suara: require("../assets/voices/fauna/cendrawasih.mp3"),
    deskripsi:
      "Burung cenderawasih adalah menjadi ciri khas dari papua karena hidup di daerah pedalaman papua. Jumlah populasi cendrawasih semakin menurun disebabkan karena maraknya penangkapan, penebangan hutan, pencarian kayu gaharu hutan di pegunungan lingkunagan tempat tinggal cendrawasih. Selain itu, disebabkan sifat reproduksi yang sangat lambat.",
  },
  {
    id: 3,

    nama: "Badak Bercula Satu",
    jenis: "Fauna",
    src: require("../assets/object/fauna/badak_cula.png"),
    suara: require("../assets/voices/fauna/badak.mp3"),
    deskripsi: "Badak bercula satu merupakan hewan endemik Indonesia, khususnya di wilayah Ujung Kulon Banten. Badak bercula satu merupakan hewan paling langka dan terancam punah. Hewan ini melewati masa reproduksi yang panjang, dalam 1 tahun hanya mampu melahirkan 1-2 ekor saja. Populasi badak bercula satu semakin berkurang setiap harinya akibat perburuan liar secara besar-besaran untuk mengambil culanya.",
  },
  {
    id: 4,
    
    nama: "Gajah Sumatra",
    jenis: "Fauna",
    src: require("../assets/object/fauna/gajah.png"),
    suara: require("../assets/voices/fauna/gajah.mp3"),
    deskripsi: "Gajah sumatra menjadi salah satu dari beberapa hewan terancam punah di Indonesia. Hewan dengan tinggi badan mencapai 1,7 hingga 2,6 meter ini mengalamai penurunan populasi sejalan dengan meningkatkannya laju kehilangan hutan di Sumatra. Gajah Sumatra kehilangan 70% habitat mereka dalam satu generasi. Penyebab utamanya tentu saja adalah alih fungsi hutan menjadi kawasan pertanian, pemukiman, perkebunan, dan hutan produksi. Karena kondisinya yang berada pada status kritis dan terancam punah, gajah sumatra menjadi salah satu hewan yang di lindungi keberadaannya. Di taman nasional bukit barisan Selatan (TNBBS), gajah Sumatra memiliki populasi yang tidak terlalu banyak, yaitu hanya sekitar 2.000 ekor",
  },
  {
    id: 5,
    nama: "Orangutan",
    jenis: "Fauna",
    src: require("../assets/object/fauna/orang_utan.png"),
    suara: require("../assets/voices/fauna/orangutan.mp3"),
    deskripsi: "Orang utan adalah spesies yang terancam punah karena jumlahnya di alam bebas semakin berkurang. Berkurangnya jumlah orang utan disebabkan perburuan liar dan kerusakan habitat akibat pembukaan lahan hutan untuk pemukiman dan Perkebunan.",
  },

];
