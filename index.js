const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arraynya,fungsinya)=>{
  fungsinya(arraynya);
  let jadi=[];
  for(barisData=0;barisData<arraynya.length;barisData++){
    jadi.push(barisData+1+". "+arraynya[barisData]);
  }
  return jadi;
}

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (AkeZ)=>{
  return AkeZ.sort();
}

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (AkeZ)=>{
  return AkeZ.sort().reverse();
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
