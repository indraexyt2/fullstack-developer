import { useState } from "react";

// Data konten untuk setiap tab
const content = [
  {
    title: "Pendidikan Berkualitas",
    body: "Mendapatkan pendidikan yang baik membantu membangun fondasi untuk sukses.",
  },
  {
    title: "Kerja Keras dan Konsistensi",
    body: "Kerja keras dan konsistensi adalah kunci mencapai tujuan hidup.",
  },
  {
    title: "Networking dan Kolaborasi",
    body: "Membangun jaringan dan bekerja sama dapat membuka banyak peluang.",
  },
];

export default function ToDoList() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      {/* Tab navigasi */}
      <div className="flex space-x-2 mb-4">
        {content.map((_, index) => (
          <Tab
            key={index}
            num={index}
            activeTab={activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      {/* Konten tab yang aktif */}
      <TabContent item={content[activeTab]} />
    </div>
  );
}

// Komponen Tab
function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={`py-2 px-4 rounded-lg text-sm font-medium ${
        activeTab === num
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      Tab {num + 1}
    </button>
  );
}

// Komponen untuk menampilkan konten tab
function TabContent({ item }) {
  return (
    <div className="text-center">
      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
      <p className="text-gray-600">{item.body}</p>
    </div>
  );
}
