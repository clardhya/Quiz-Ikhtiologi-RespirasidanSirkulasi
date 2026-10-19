export interface QuizQuestion {
  id: number
  question: string
  correctAnswers: string[]
  pembahasan: string
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Oksigen yang diperoleh ikan dari lingkungannya digunakan dalam proses fosforilasi oksidatif untuk menghasilkan apa?',
    correctAnswers: ['atp', 'energi'],
    pembahasan: 'Oksigen digunakan dalam proses fosforilasi oksidatif untuk menghasilkan ATP bagi aktivitas tubuh ikan.',
  },
  {
    id: 2,
    question: 'Berapa kali lipat kerapatan molekul air jika dibandingkan dengan udara bebas?',
    correctAnswers: ['800', '800 kali', '800x'],
    pembahasan: 'Kerapatan molekul air lebih besar 800 kali dibandingkan udara bebas, sehingga oksigen terlarut menjadi faktor pembatas.',
  },
  {
    id: 3,
    question: 'Gas apa yang lebih mudah dibuang oleh ikan ke lingkungannya karena kandungannya terlarut lebih tinggi di air daripada di udara?',
    correctAnswers: ['karbondioksida', 'co2', 'karbon dioksida'],
    pembahasan: 'Kandungan karbondioksida terlarut di air lebih tinggi daripada di udara, sehingga ikan lebih mudah membuangnya.',
  },
  {
    id: 4,
    question: 'Apa yang menjadi stimulus utama bagi ikan untuk melakukan pernapasan?',
    correctAnswers: ['oksigen', 'oksigen terlarut', 'keberadaan oksigen terlarut', 'keberadaan oksigen'],
    pembahasan: 'Stimulus ikan untuk melakukan pernapasan adalah keberadaan oksigen terlarut.',
  },
  {
    id: 5,
    question: 'Menurut modul, sebutkan satu organ pernapasan tambahan selain gelembung renang, arborescent, dan labirin!',
    correctAnswers: ['kulit'],
    pembahasan: 'Organ pernapasan tambahan pada ikan tertentu antara lain kulit, gelembung renang, arborescent organ, dan labirin.',
  },
  {
    id: 6,
    question: 'Saat praktikum, ke arah manakah kepala ikan harus diletakkan di atas nampan?',
    correctAnswers: ['kiri', 'kiri tangan', 'kiri tangan praktikan', 'sebelah kiri'],
    pembahasan: 'Letakkan ikan di atas nampan dengan kepala ikan mengarah ke kiri tangan praktikan.',
  },
  {
    id: 7,
    question: 'Untuk mematikan ikan saat praktikum, praktikan harus memutus syaraf di bagian mana?',
    correctAnswers: ['tulang belakang', 'otak', 'syaraf tulang belakang'],
    pembahasan: 'Matikan ikan dengan cara memutus syaraf tulang belakang atau menusuk kepala ikan tepat menuju otak.',
  },
  {
    id: 8,
    question: 'Bagian tubuh luar manakah yang harus dipotong dengan hati-hati agar insang dapat diambil?',
    correctAnswers: ['operculum', 'operkulum', 'tutup insang'],
    pembahasan: 'Potonglah operculum ikan dan potong ujung insang dengan hati-hati sehingga insang dapat diambil.',
  },
  {
    id: 9,
    question: 'Pada ikan lele, bagian mana yang harus dibedah secara hati-hati untuk mengambil organ arborescent?',
    correctAnswers: ['cephal', 'kepala', 'bagian cephal'],
    pembahasan: 'Pada ikan lele, bedahlah bagian cephal secara hati-hati sehingga arborescent organ dapat diambil.',
  },
  {
    id: 10,
    question: 'Selain ikan gabus, ikan apa lagi yang disebutkan dalam modul memiliki organ labirin?',
    correctAnswers: ['gurame', 'ikan gurame'],
    pembahasan: 'Pada ikan gabus dan gurame terdapat organ pernapasan tambahan berupa labirin.',
  },
  {
    id: 11,
    question: 'Bagian insang yang berfungsi sebagai penguat struktur insang disebut?',
    correctAnswers: ['gill arch', 'lengkung insang'],
    pembahasan: 'Gill arch adalah bagian yang berfungsi sebagai penguat struktur insang ikan.',
  },
  {
    id: 12,
    question: 'Bagian insang yang berfungsi menyaring makanan agar tidak merusak insang adalah?',
    correctAnswers: ['gill rakers', 'gill raker', 'tapis insang'],
    pembahasan: 'Gill rakers berfungsi untuk menyaring partikel makanan.',
  },
  {
    id: 13,
    question: 'Tempat utama terjadinya pertukaran oksigen dan karbondioksida pada lembaran insang disebut?',
    correctAnswers: ['lamela', 'lamella', 'gill filament', 'elemen insang'],
    pembahasan: 'Lamela atau gill filament berfungsi sebagai tempat pertukaran oksigen dan karbondioksida.',
  },
  {
    id: 14,
    question: 'Gas apakah yang umumnya terdapat di dalam kantong selaput gelembung renang?',
    correctAnswers: ['oksigen', 'gas oksigen', 'o2'],
    pembahasan: 'Gas yang terdapat pada gelembung renang biasanya adalah gas oksigen.',
  },
  {
    id: 15,
    question: 'Selain untuk respirasi, gelembung renang berfungsi sebagai ruang beresonansi untuk sistem?',
    correctAnswers: ['pendengaran', 'suara', 'menerima suara', 'alat pendengaran'],
    pembahasan: 'Gelembung renang juga berfungsi sebagai alat pendengaran atau ruang resonansi.',
  },
  {
    id: 16,
    question: 'Sistem peredaran darah ikan sangat sederhana dan diibaratkan bekerja terus-menerus seperti?',
    correctAnswers: ['pipa', 'sistem pipa'],
    pembahasan: 'Sistem peredaran darah pada ikan sangat sederhana dan diibaratkan sebagai pipa.',
  },
  {
    id: 17,
    question: 'Bentuk jantung ikan sangat sederhana dan hanya terdiri dari dua bagian ruang utama, yaitu ventrikel dan?',
    correctAnswers: ['atrium', 'serambi'],
    pembahasan: 'Jantung ikan terdiri dari dua ruang utama yaitu ventrikel dan atrium.',
  },
  {
    id: 18,
    question: 'Bagian jantung yang berfungsi untuk mengalirkan darah menuju ventrikel adalah?',
    correctAnswers: ['atrium', 'serambi'],
    pembahasan: 'Atrium terletak di dorsal region perikardial yang berfungsi mengalirkan darah menuju ke ventrikel.',
  },
  {
    id: 19,
    question: 'Bagian jantung yang berdinding tebal dan berfungsi memompa darah menuju ke insang adalah?',
    correctAnswers: ['ventrikel', 'bilik'],
    pembahasan: 'Ventrikel adalah ruang berdinding tebal yang memompa darah ke seluruh tubuh dan insang.',
  },
  {
    id: 20,
    question: 'Pelebaran pembuluh yang terletak di antara basis ventrikel dan aorta ventralis disebut?',
    correctAnswers: ['bulbus arteriosus'],
    pembahasan: 'Bulbus arteriosus adalah pelebaran untuk merespon perbedaan tekanan darah dari kontraksi ventrikel.',
  },
]
