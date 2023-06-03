document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("notice-bar").style.display = "none";
});

const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");

// Simulated suggestions data
const suggestions = [
  // sem1
  // english
  {
    term: "English 2017 winter",
    link: "https://www.msbte.engg-info.website/sites/default/files/22101-Model-%20-Answer-Winter-%202017.pdf",
  },
  {
    term: "English 2019 winter",
    link: "https://www.msbte.engg-info.website/sites/default/files/New%20fldr3_0/22101-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "English 2019 summer",
    link: "https://www.msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22101-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "English 2018 winter",
    link: "https://www.msbte.engg-info.website/sites/default/files/w18mo161718/22101-2018-Winter-model-answer-paper.pdf",
  },
  {
    term: "English 2018 summer",
    link: "https://www.msbte.engg-info.website/22101-2018-summer-model-answer-paper",
  },
  // basic mathematic
  {
    term: "M1 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22103-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "M1 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22103-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "M1 2018 winter",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22103-2018-Winter-model-answer-paper.pdf",
  },
  {
    term: "M1 2018 summer",
    link: "https://msbte.engg-info.website/22103-2018-summer-model-answer-paper",
  },

  // sem2
  // basic electronics
  {
    term: "Basic Electronics 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3/22225-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "Basic Electronics2018 winter",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22225-2018-Winter-model-answer-paper.pdf",
  },
  {
    term: "Basic Electronics 2018 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22225-2018-Summer-model-answer-paper.pdf",
  },
  // m2
  {
    term: "M2 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22224-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "M2 2019 summer",
    link: "https://msbte.engg-info.website/22224-2019-summer-model-answer-papermsbte-study-resources",
  },
  {
    term: "M2 2018 winter",
    link: "https://msbte.engg-info.website/22224-2018-winter-model-answer-paper",
  },
  {
    term: "M2 2018 summer",
    link: "https://msbte.engg-info.website/22224-2018-summer-model-answer-paper",
  },
  // pci
  {
    term: "PCI 2022 winter",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22226-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "PCI 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22226-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "PCI 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22226-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "PCI 2018 winter",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22226-2018-Winter-model-answer-paper.pdf",
  },
  {
    term: "PCI 2018 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22226-2018-Summer-model-answer-paper.pdf",
  },
  // EEC
  {
    term: "EEC 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr3_0/22215-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "EEC 2018 winter",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo161718/22215-2018-Winter-model-answer-paper.pdf",
  },
  {
    term: "EEC 2018 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s18moupto22233/22215-2018-Summer-model-answer-paper.pdf",
  },

  // sem3
  // OOP
  {
    term: "OOP 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22316-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "OOP 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22316-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "OOP 2018 winter",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22316-2018-Winter-model-answer-paper.pdf",
  },
  // DSU
  {
    term: "DSU 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22317-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "DSU 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22317-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "DSU 2018 winter",
    link: "https://msbte.engg-info.website/22317-2018-winter-model-answer-paper",
  },
  // CGR
  {
    term: "CGR 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22318-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "CGR 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22318-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "CGR 2018 winter",
    link: "https://msbte.engg-info.website/22318-2018-winter-model-answer-paper",
  },
  // DMS
  {
    term: "DMS 2022 winter",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22319-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "DMS 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22319-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "DMS 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22319-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "DMS 2018 winter",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo192021/22319-2018-Winter-model-answer-paper.pdf",
  },
  // DTE
  {
    term: "DTE 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22320-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "DTE 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo%2022201-22334/22320-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  {
    term: "DTE 2018 winter",
    link: "https://msbte.engg-info.website/sites/default/files/w18mo222324/22320-2018-Winter-model-answer-paper.pdf",
  },

  // sem4
  // JPR
  {
    term: "JPR 2022 winter",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22412-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "JPR 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22412-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "JPR 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22412-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  // SEN
  {
    term: "SEN 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22413-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "SEN 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22413-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  // DCC
  {
    term: "DCC 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22414-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "DCC 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22414-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },
  // MIC
  {
    term: "MIC 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr2/22415-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "MIC 2019 summer",
    link: "https://msbte.engg-info.website/sites/default/files/s19mo-22337-33446/22415-2019-Summer-model-answer-paper%5BMsbte-study-resources%5D.pdf",
  },

  // sem5
  // OSY
  {
    term: "OSY 2022 winter",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22516-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  {
    term: "OSY 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22516-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  // STE
  {
    term: "STE 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22518-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  // CSS
  {
    term: "CSS 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22519-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  // ACN
  {
    term: "ACN 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22520-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  // ADM
  {
    term: "ADM 2019 winter",
    link: "https://msbte.engg-info.website/sites/default/files/New%20fldr1/22521-2019-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },

  // sem6
  // PWP
  {
    term: "PWP 2022 winter",
    link: "https://msbte.engg-info.website/sites/default/files/Model%20Answer%2022/22616-2022-Winter-model-answer-paper%5BMsbte%20study%20resources%5D.pdf",
  },
  // MAD
  {
    term: "MAD 2022 winter",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22617-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  // WBP
  {
    term: "WBP 2022 summer",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22619-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
  // NIS
  {
    term: "NIS 2019 summer",
    link: "https://msbte.engg-info.website/22620-2022-summer-question-papermsbte-study-resources",
  },
  // DWM
  {
    term: "DWM 2022 summer",
    link: "https://msbte.engg-info.website/sites/default/files/Summer%202022%20QP%204/22621-2022-Summer-question-paper%5BMsbte-study-resources%5D.pdf",
  },
];
searchInput.addEventListener("input", function () {
  const inputText = this.value;
  suggestionList.innerHTML = "";

  if (inputText.length > 0) {
    const filteredSuggestions = suggestions.filter((suggestion) =>
      suggestion.term.toLowerCase().includes(inputText.toLowerCase())
    );

    filteredSuggestions.forEach((suggestion) => {
      const listItem = document.createElement("li");
      listItem.textContent = suggestion.term;

      const downloadButton = document.createElement("button");
      downloadButton.className = "download-button";
      downloadButton.textContent = "Download";
      downloadButton.addEventListener("click", function () {
        window.location.href = suggestion.link;
      });

      listItem.appendChild(downloadButton);
      suggestionList.appendChild(listItem);
    });

    suggestionList.style.display = "block";
  } else {
    suggestionList.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (!searchInput.contains(e.target)) {
    suggestionList.style.display = "none";
  }
});
