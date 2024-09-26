import React, { useState } from "react";

// Döküman kategorileri için örnek veri
const documentsData = [
  {
    category: "Genel Belgeler",
    documents: [
      { title: "Belge 1", description: "Genel belge açıklaması", link: "#" },
      { title: "Belge 2", description: "Genel belge açıklaması", link: "#" },
    ],
  },
  {
    category: "İş Güvenliği Belgeleri",
    documents: [
      { title: "Belge 3", description: "İş güvenliği ile ilgili belge", link: "#" },
      { title: "Belge 4", description: "İş güvenliği ile ilgili belge", link: "#" },
    ],
  },
  // Diğer kategoriler...
];

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Arama işlevi
  const filteredDocuments = documentsData.map((category) => ({
    ...category,
    documents: category.documents.filter((doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="container mx-auto p-4">
        <br />
        <br />
        <br />
      <h1 className="text-3xl font-bold text-center mb-8">Dokümanlar</h1>

      {/* Arama Alanı */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Belge Ara..."
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Kategoriler ve Dokümanlar */}
      <div className="space-y-8">
        {filteredDocuments.map((category, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
            <ul className="space-y-4">
              {category.documents.map((doc, docIndex) => (
                <li
                  key={docIndex}
                  className="flex justify-between items-center p-4 border rounded-md shadow-md bg-white"
                >
                  <div>
                    <h3 className="text-lg font-medium">{doc.title}</h3>
                    <p className="text-sm text-gray-500">{doc.description}</p>
                  </div>
                  <a
                    href={doc.link}
                    className="text-blue-500 hover:underline"
                    download
                  >
                    İndir
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
