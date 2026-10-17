export interface QuizQuestion {
  id: number
  question: string
  correctAnswers: string[]
  pembahasan: string
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Proses pengambilan oksigen terlarut di dalam air oleh ikan untuk metabolisme disebut?',
    correctAnswers: ['respirasi', 'proses respirasi'],
    pembahasan: 'Pengambilan oksigen terlarut di dalam air oleh sel-sel tubuh ikan untuk metabolisme disebut respirasi.',
  },
  {
    id: 2,
    question: 'Apa organ pernapasan utama pada ikan?',
    correctAnswers: ['insang'],
    pembahasan: 'Sistem respirasi pada ikan memiliki organ utama berupa insang.',
  },
  {
    id: 3,
    question: 'Sebutkan organ pernapasan tambahan yang terdapat pada ikan lele!',
    correctAnswers: ['arborescent', 'organ arborescent', 'arboresen'],
    pembahasan: 'Ikan lele memiliki organ tambahan berupa arborescent untuk membantu pernapasan.',
  },
  {
    id: 4,
    question: 'Organ pernapasan tambahan yang bentuknya berlipat-lipat dan ditemukan pada ikan gabus dinamakan?',
    correctAnswers: ['labirin'],
    pembahasan: 'Ikan gabus memiliki alat pernapasan tambahan berupa labirin.',
  },
  {
    id: 5,
    question: 'Ikan mas memiliki organ pernapasan tambahan yang terletak di bagian rongga tubuh yang disebut?',
    correctAnswers: ['gelembung renang', 'swim bladder'],
    pembahasan: 'Ikan mas memiliki organ pernapasan tambahan berupa gelembung renang.',
  },
  {
    id: 6,
    question: 'Gas apakah yang umumnya terdapat di dalam kantong selaput gelembung renang?',
    correctAnswers: ['oksigen', 'gas oksigen', 'o2'],
    pembahasan: 'Gas yang terdapat pada gelembung renang biasanya adalah gas oksigen dengan tekanan yang berubah-ubah.',
  },
  {
    id: 7,
    question: 'Selain sebagai organ respirasi tambahan, gelembung renang juga berfungsi sebagai ruang untuk beresonansi dalam sistem?',
    correctAnswers: ['pendengaran', 'suara', 'sistem pendengaran'],
    pembahasan: 'Gelembung renang juga berfungsi sebagai alat pendengaran ruang beresonansi untuk menghasilkan atau menerima suara.',
  },
  {
    id: 8,
    question: 'Bagian insang yang berfungsi sebagai penguat struktur insang disebut?',
    correctAnswers: ['gill arch', 'lengkung insang'],
    pembahasan: 'Gill arch adalah bagian yang berfungsi sebagai penguat struktur insang ikan.',
  },
  {
    id: 9,
    question: 'Bagian insang yang berfungsi menyaring/menapis makanan adalah?',
    correctAnswers: ['gill rakers', 'gill raker', 'tapis insang'],
    pembahasan: 'Gill rakers berfungsi untuk menyaring partikel makanan agar tidak masuk ke lembaran insang.',
  },
  {
    id: 10,
    question: 'Tempat utama terjadinya pertukaran oksigen dan karbondioksida pada insang disebut?',
    correctAnswers: ['lamela', 'gill filament', 'elemen insang', 'lamella', 'gill element'],
    pembahasan: 'Gill element atau lamela berfungsi sebagai tempat pertukaran oksigen dan karbondioksida.',
  },
  {
    id: 11,
    question: 'Dalam video disebutkan bahwa sistem peredaran darah ikan sangat sederhana dan diibaratkan bekerja terus-menerus seperti?',
    correctAnswers: ['pipa', 'sistem pipa'],
    pembahasan: 'Sistem peredaran darah pada ikan sangat sederhana dan diibaratkan sebagai pipa yang bekerja secara terus-menerus.',
  },
  {
    id: 12,
    question: 'Jantung ikan terdiri dari dua bagian utama, yaitu ventrikel dan?',
    correctAnswers: ['atrium', 'serambi'],
    pembahasan: 'Bentuk jantung ikan sederhana dan hanya terdiri dari dua bagian utama yaitu ventrikel dan atrium.',
  },
  {
    id: 13,
    question: 'Bagian jantung yang terletak di dorsal region perikardial dan berfungsi mengalirkan darah menuju ventrikel adalah?',
    correctAnswers: ['atrium', 'serambi'],
    pembahasan: 'Atrium berfungsi untuk mengalirkan darah menuju ke ventrikel.',
  },
  {
    id: 14,
    question: 'Bagaimana karakteristik struktur dinding ventrikel dibandingkan bagian jantung lainnya?',
    correctAnswers: ['tebal', 'berdinding tebal', 'lebih tebal'],
    pembahasan: 'Ventrikel merupakan bagian jantung yang berdinding tebal yang terletak di bagian ventral caudal sakus perikardium.',
  },
  {
    id: 15,
    question: 'Bagian jantung yang berfungsi untuk memompa darah menuju ke insang dan seluruh bagian tubuh ikan adalah?',
    correctAnswers: ['ventrikel', 'bilik'],
    pembahasan: 'Ventrikel memiliki fungsi utama untuk memompa darah ke insang dan seluruh tubuh.',
  },
  {
    id: 16,
    question: 'Pelebaran yang terletak di antara basis ventrikel dan aorta ventralis disebut?',
    correctAnswers: ['bulbus arteriosus'],
    pembahasan: 'Bulbus arteriosus adalah pelebaran yang terletak di antara basis ventrikel dan aorta ventralis.',
  },
  {
    id: 17,
    question: 'Bagian yang berfungsi untuk merespon perbedaan tekanan darah saat ventrikel melakukan kontraksi dan relaksasi adalah?',
    correctAnswers: ['bulbus arteriosus'],
    pembahasan: 'Bulbus arteriosus merespon perbedaan tekanan darah yang ditimbulkan oleh kontraksi dan relaksasi ventrikel.',
  },
  {
    id: 18,
    question: 'Salah satu set alat bedah utama yang disebutkan untuk digunakan dalam praktikum ini adalah?',
    correctAnswers: ['section set', 'dissecting set', 'alat bedah'],
    pembahasan: 'Alat yang digunakan pada praktikum kali ini antara lain section set, nampan, dan alat tulis.',
  },
]
