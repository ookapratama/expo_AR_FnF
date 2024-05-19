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
      "Komodo atau Varanus Komodoensis adalah salah satu hewan langka di Indonesia. Komodo sering disebut sebagai reptil terbesar di dunia yang dapat tumbuh hingga 3 meter dan berat sekitar 70 kg atau lebih. Ciri khas mereka memiliki tubuh dan kepala yang besar, ekor yang panjang, kulit bersisik, dan cakar yang tajam. Warna kulit yang dimiliki bervariasi, dari coklat hingga abu-abu dengan bercak hitam. Saat ini habitat komodo hanya fokus pada area Pulau Komodo, Flores, Nusa Tenggara Timur (NTT) dan daerah sekitarnya. Salah satu penyebab populasi komodo berkurang adalah ulah manusia sendiri yang merusak habitat mereka dan perburuan ilegal untuk diperdagangkan di pasar internasional. Saat ini BTNK (Balai Taman Nasional Komodo) menyebut bahwa populasi komodo yang tersisa di Indonesia sebanyak 3.033 ekor (data tahun 2021). Mereka juga menerangkan bahwa penurunan populasi komodo terjadi secara alami mengikuti ketersediaan populasi mangsa atau makanan di Taman Nasional Komodo.",
  },
  {
    id: 1,
    nama: "Kucing Merah Kalimantan",
    jenis: "Fauna",
    src: require("../assets/object/fauna/kucing_kalimantan.png"),
    suara: require("../assets/voices/fauna/kucing.mp3"),
    deskripsi:
      "Kucing Merah Kalimantan atau Prionailurus rubiginosus rabori adalah salah satu subspesies kucing hutan yang ada di Pulau Kalimantan. Kucing ini masuk dalam kategori hewan yang terancam punah oleh IUCN. Menurut Cat Specialist Group, kucing merah Kalimantan memiliki sedikit catatan sejarah, sehingga perkiraan kepadatan populasi mereka tidak tersedia. Organisasi tersebut memperkirakan populasi kucing Kalimantan saat ini kurang dari 2.200 ekor, dengan asumsi kepadatan 1 individu per 100 km².Kucing merah Kalimantan memiliki tubuh yang lebih besar daripada kucing domestik biasa. Mereka memiliki bulu berwarna merah batu bata dan habitat utama di hutan tropis dengan ketinggian sekitar 800 meter. Ukuran tubuh mereka berkisar antara 49,5 hingga 67 sentimeter, dengan ekor panjang sekitar 30 hingga 40,3 cm.Kucing ini sangat aktif pada malam hari, berburu pakan seperti burung kecil, tikus hutan, dan hewan kecil lainnya. Meskipun demikian, penelitian lebih lanjut sulit dilakukan karena sulitnya menemukan spesies ini di habitat alaminya.",
  },
  {
    id: 2,

    nama: "Burung Cendrawasih",
    jenis: "Fauna",
    src: require("../assets/object/fauna/cendrawasih.png"),
    suara: require("../assets/voices/fauna/cendrawasih.mp3"),
    deskripsi:
      "Burung Cenderawasih termasuk anggota keluarga Paradisaeidae dan ordo Passeriformes yang hanya dapat ditemukan di Pulau Papua, Kepulauan Maluku, Kepulauan Selat Torres, Papua Nugini hingga Australia bagian timur.Burung Cenderawasih terdiri dari beberapa genus dan spesies, yaitu 14 genus dan 43 spesies.Spesies Cenderawasih yang masih bisa ditemukan di Indonesia ada 30, 28 spesies berasal dari Papua dan 2 spesies lainnya terdapat di Kepulauan Maluku dan Halmahera. Ciri khas burung ini memiliki bulu yang panjang dan pola rumut yang tumbuh di bagian sayap, kepala, dan paruh. Burung yang mendapat julukan sebagai “Bird of Paradise” ini sempat terkenal di tahun 1522 karena bulunya yang sangat indah.Sampai abad ke-19, burung ini masih diburu oleh banyak orang untuk diambil bulunya. Seiring berjalannya waktu, masyarakat mulai sadar bahwa populasi Burung Cenderawasih semakin berkurang dan harus dilindungi kelestariannya. Tidak diketahui secara pasti populasi Burung Cenderawasih. Namun dari hasil analisisi dugaan, ada sebanyak 28 ekor/ha yang masih hidup di Papua.",
  },
  {
    id: 3,

    nama: "Harimau Sumatra",
    jenis: "Fauna",
    src: require("../assets/object/fauna/sumatra_tiger.png"),
    suara: require("../assets/voices/fauna/harimau.mp3"),
    deskripsi: "Harimau Sumatra adalah salah satu dari tiga subpsesies harimau di Indonesia, dua lainnya adalah Harimau Jawa (sudah punah) dan Harimau Bali (sudah punah). Ciri-ciri hewan ini memiliki tubuh yang relatif lebih kecil dibandingkan dengan harimau kontingental.Untuk harimau jantan dewasa, biasanya memiliki tinggi hingga 60 cm, panjang 250 cm, dan berat hingga 140 kg. Sedangkan untuk harimau jantan betina memiliki panjang 198 cm dengan berat hingga 91 kg. Untuk warna kulit, Harimau Sumatra relatif lebih gelap, dari kuning kemerah-merahan hingga oranye tua dengan garis loreng yang lebih rapat. Harimau Sumatra masuk dalam hewan langka di Indonesia yang dilindungi berdasarkan UU Nomor 5 Tahun 1990 tentang Konservasi Sumber Daya Alam Hayati dan Ekosistemnya, Harimau Sumatera yang bernama latin Panthera tigris sumatrae (Luskin) 2017.Saat ini populasi harimau sumatra hanya tersisa ± 600 individu yang setiap tahunnya terus menurun akibat perburuan dan perdagangan ilegal.",
  },
  {
    id: 4,

    nama: "Burung Merak",
    jenis: "Fauna",
    src: require("../assets/object/fauna/merak.png"),
    suara: require("../assets/voices/fauna/merak.mp3"),
    deskripsi: "Burung Merak yang dikenal sebagai “hewan sombong” berkat keindahan bulu sayapnya ini ternyata masuk dalam daftar hewan langka yang terancam punah oleh IUCN. Mengutip berbagai sumber, burung khas Indonesia ini hanya tersisa sekitar 10.000-20.000 ekor merak dewasa. Salah satu penyebab utama binatang ini terancam punah adalah perburuan dan perdagangan ilegal. Bagaimana tidak? Burung ini sayap dengan bulu yang memiliki cirak bak mata berwarna biru, emas, merah, dan lainnya. Siapapun yang melihat sayapnya tentu akan terpana dengan kecantikannya. Saking indahnya, banyak orang dari berbagai penjuru dunia rela membayar mahal untuk bisa memelihara hewan ini di rumahnya. Akhirnya, IUCN menetapkan burung merak, khususnya merak biru menjadi salah satu hewan endemik yang harus dilindungi untuk mengurangi perdagangan hewan.",
  },
  {
    id: 5,
    
    nama: "Dugong",
    jenis: "Fauna",
    src: require("../assets/object/fauna/dugong.png"),
    suara: require("../assets/voices/fauna/dugong.mp3"),
    deskripsi: "Dugong adalah hewan mamalia laut yang pertama kali diklasifikasikan oleh Műller pada tahun 1776 dengan nama Trichechus dugon. Nama tersebut kemudian diubah oleh Lacépède menjadi Dugon dugon. Ciri khas hewan ini memiliki panjang sekitar 2,4-3 meter dengan berat 230-930 kg, sirip dengan panjang 35-45 cm, berkulit tebal dan keras, namun permukaannya halus. Hewan yang bisa hidup mencapai 70 tahun ini menghabiskan waktunya untuk mencari makan di padang lamun, sebuah ekosistem khas laut dangkal yang ditumbuhi rerumputan. Umumnya dugong akan berproduksi pada usia 10-17 tahun dan menghabiskan waktu selama 13-15 bulan untuk melahirkan satu anak dugong. Tapi sayangnya, IUCN dugong sangat rentan terhadap antropogenik (aktivitas manusia, baik sengaja atau tidak) karena umurnya yang panjang dan tingkat reproduksinya yang lambat.",
  },
  {
    id: 6,
    nama: "Orangutan Kalimantan",
    jenis: "Fauna",
    src: require("../assets/object/fauna/orang_utan.png"),
    suara: require("../assets/voices/fauna/orangutan.mp3"),
    deskripsi: "Ketiga spesies orangutan, kalimantan, sumatra, dan tapanuli, sama-sama berstatus “sangat terancam punah” oleh IUCN dalam Red Data List tahun 2016. Ancaman kepunahan berawal dari perburuan sejak ratusan tahun lalu, yang dimana faktor terbesarnya disebabkan oleh deforestasi masif dan perubahan iklim.Untuk populasi yang tersisa, Orangutan kalimantan (Pongo pygmaeus) memiliki 45 ribu individu yang tersebar di 29 metapopulasi yang terbagi atas 3 sub spesiesnya.",
  },
  {
    id: 7,
    nama: "Badak Jawa",
    jenis: "Fauna",
    src: require("../assets/object/fauna/badak_sumatra.png"),
    suara: require("../assets/voices/fauna/badak.mp3"),
    deskripsi: "Badak Jawa masuk dalam daftar satwa liar yang dilindungi di Indonesia. Berdasarkan laporan tahun 2013, jumlah populasi badak jawa ada sebanyak 55 individu yang tertangkap oleh deteksi kamera. Di tahun 2015, penemuan badan jawa kembali berbeda dengan penampakan 63 individu. Sampai saat ini upaya konservasi masih terus dilakukan untuk menyelamatkan dan meningkatkan populasi badak jawa di Taman Nasional Ujung Kulon.",
  },
  {
    id: 8,
    nama: "Burung Jalak, Bali",
    jenis: "Fauna",
    src: require("../assets/object/fauna/jalak_bali.png"),
    suara: require("../assets/voices/fauna/jalak.mp3"),
    deskripsi: "Burung Jalak Bali (Leucopsar rothschildi) adalah salah satu spesies burung yang sangat langka dan terancam punah. Ciri-ciri burung ini memiliki warna bulu yang kontras antara hitam dan putih, tubuh berukuran 25-28 cm, suara yang indah, dan memiliki sifat yang sosial (berkelompok). Burung Jalak Bali adalah salah satu spesies yang sangat terancam punah, dan upaya konservasi yang serius telah dilakukan untuk melindungi spesies ini di bawah konvensi internasional seperti CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora). Di tahun 2022, media lokal mengabarkan bahwa upaya konservasi burung ini berjalan dengan baik. Bahkan hewan endemik ini dikabarkan mengalami peningkatan populasi sebanyak 100 ekor dalam satu tahun.",
  },
  {
    id: 9,
    nama: "Rusa Bawean",
    jenis: "Fauna",
    src: require("../assets/object/fauna/rusa_bawean.png"),
    suara: require("../assets/voices/fauna/rusa.mp3"),
    deskripsi: "Rusa Bawean (Axis kuhlii) adalah sebuah subspesies rusa yang ditemukan di Pulau Bawean, Indonesia. Rusa ini memiliki ciri-ciri bertubuh sedang sekitar 80-100 cm, bulu pendek, tanda putih di bagian telinga dan wajah, dan termasuk hewan nocturnal (aktif di malam hari). Untuk jumlah populasi hewan endemik, Balai Konservasi Sumber Daya Alam (BKSDA) masih berupaya melakukan pelacakan dengan pemasangan kamera trap. Namun berdasarkan data laporan yang dikeluarkan di tahun 2019, terdapat 304 ekor rusa bawean yang masih hidup, dimana salah satunya terpantau sedang bereproduksi.",
  },
];
