type kuisProps = {
  id: number;
  soal: string;
  opsi: {
    a: string;
    b: string;
    c: string;
  };
  jawaban: string;
  skor: number;
};

export const dataKuis: kuisProps[] = [
  {
    id: 0,
    soal: "Hewan langka yang diburu karena keindahan bulunya, yaitu",
    opsi: {
      a: "Badak",
      b: "Harimau",
      c: "Komodo",
    },
    jawaban: "Harimau",
    skor: 10,
  },
  {
    id: 1,
    soal: "Tumbuhan langka yang di buru banyak orang karena harganya sangat mahal di sebut..",
    opsi: {
      a: "Aqularia",
      b: "Katong Semar",
      c: "Rafllesia Arnoldi",
    },
    jawaban: "Aqularia",
    skor: 10,
  },
  {
    id: 2,
    soal: "Hewan langka yang berasal dari Papua yang hidup di pedalaman Papua disebut...",
    opsi: {
      a: "Orang utan",
      b: "Badak bercula 1",
      c: "Burung cenderawasih",
    },
    jawaban: "Burung cenderawasih",
    skor: 10,
  },
  {
    id: 3,
    soal: "Kulit harimau Sumatra banyak di manfaatkan untuk...",
    opsi: {
      a: "Pembuatan buku",
      b: "Pembuatan sepatu",
      c: "Pembuatan kursi",
    },
    jawaban: "Pembuatan sepatu",
    skor: 10,
  },
  {
    id: 4,
    soal: "Bunga bangkai berasal dari...",
    opsi: {
      a: "Sumatra",
      b: "Nusa tenggara timur",
      c: "Kalimantan",
    },
    jawaban: "Sumatra",
    skor: 10,
  },
  {
    id: 5,
    soal: "Kantong Semar merupakan tumbuhan langka Kantong berfungsi untuk..",
    opsi: {
      a: "mengumpulkan air",
      b: "tempat hidup serangga",
      c: "Menangkap serangga dan hewan kecil",
    },
    jawaban: "Menangkap serangga dan hewan kecil",
    skor: 10,
  },
  {
    id: 6,
    soal: "Badak bercula satu hewan langka yang berasal dari Banten cula badak berfungsi untuk.",
    opsi: {
      a: "Menangkap mangsa",
      b: "Sebagai alat pertahanan dan melawan predator",
      c: "menyebarkan benih untuk menjaga keseimbangan ekosistem",
    },
    jawaban: "Sebagai alat pertahanan dan melawan predator",
    skor: 10,
  },
  {
    id: 7,
    soal: "Tumbuhan langka yang tidak memiliki akar , daun, batang disebut...",
    opsi: {
      a: "Kantong Semar",
      b: "Refflesia Arnoldi",
      c: "Aquilaria",
    },
    jawaban: "Refflesia Arnoldi",
    skor: 10,
  },
];
