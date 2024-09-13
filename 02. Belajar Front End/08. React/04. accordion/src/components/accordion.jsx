import React, { useState } from "react";

const Accordion = () => {

  const accordionData = [
    {
      title: "Apa itu JavaScript?",
      description: "JavaScript adalah bahasa pemrograman yang digunakan untuk membuat konten web yang dinamis. Ini memungkinkan pengembang untuk menambahkan interaktivitas pada halaman web, seperti pembaruan konten secara real-time, pengendalian multimedia, animasi, dan banyak lagi."
    },
    {
      title: "Apa perbedaan antara var, let, dan const?",
      description: "Perbedaan utama adalah dalam cakupan (scope) dan kemampuan untuk mengubah nilainya. `var` memiliki cakupan fungsi, sedangkan `let` dan `const` memiliki cakupan blok. `let` bisa diubah nilainya, sedangkan `const` digunakan untuk nilai yang tidak bisa diubah setelah diinisialisasi."
    },
    {
      title: "Apa itu DOM dalam JavaScript?",
      description: "DOM (Document Object Model) adalah representasi struktur halaman web yang memungkinkan JavaScript untuk memanipulasi konten, struktur, dan gaya dari halaman tersebut secara dinamis. JavaScript dapat menambahkan, menghapus, atau memodifikasi elemen di DOM untuk mengubah tampilan halaman web."
    },
    {
      title: "Apa itu callback function?",
      description: "Callback function adalah fungsi yang dipanggil setelah fungsi lain selesai dieksekusi. Callback sering digunakan dalam JavaScript untuk menangani operasi asinkron seperti pengambilan data dari server atau menunggu respons pengguna."
    }
  ];

  const [ActiveIndex, setActiveIndex] = useState(null);

  function HandleAcc(index) {
    setActiveIndex(ActiveIndex === index ? null : index);
  }

  return (
    <div className="">
      <div className="flex flex-col max-w-96 bg-slate-100 mx-auto rounded-xl mb-6 overflow-hidden">
        {accordionData.map((item, index) => (
          <React.Fragment key={index}>
            <div className={`flex py-4 px-4 border-b shadow-sm ${ActiveIndex === index ? "bg-slate-300 " : ""}`}>
              <h2 className="font-bold">{item.title}</h2>
              <span onClick={() => HandleAcc(index)} className="ms-auto me-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 transform duration-300 ${ActiveIndex === index ? "rotate-180" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </span>
            </div>
            <div className={`ms-6 me-6 transition-all ease-in-out duration-300 overflow-hidden ${ActiveIndex === index ? "max-h-96" : "max-h-0"}`}>
              <p className="mb-2">{item.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
