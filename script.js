const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");

// Simulated suggestions data
const suggestions = [
  {
    term: "SEN 2019 winter",
    link: " 22413-2019-Winter-model-answer-paper[Msbte study resources].pdf",
  },
  { term: "SEN 2022 winter", link: "" },
  { term: "SEN 2019 summer", link: "" },
  { term: "JPR 2019 winter", link: "" },
  { term: "JPR 2022 winter", link: "" },
  { term: "JPR 2019 summer", link: "" },

  { term: "SEN 2019 winter", link: "" },
  { term: "SEN 2022 winter", link: "" },
  { term: "SEN 2019 summer", link: "" },
  { term: "JPR 2019 winter", link: "" },
  { term: "JPR 2022 winter", link: "" },
  { term: "JPR 2019 summer", link: "" },
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
