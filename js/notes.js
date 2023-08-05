const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");

// Simulated suggestions data
const suggestions = [
  //sem 1
  {
    term: "English",
    link: "https://drive.google.com/file/d/1-N_RPbY4xbri0tSHtUBIJRk3q7PLIPDU/view",
  },
  {
    term: "Basic Mathematics (22103)",
    link: "https://drive.google.com/file/d/1Zhyry8PsgfJ14MScjb_76aHcwb2yTyan/view",
  },
  {
    term: "Engineering Graphics (22002)",
    link: "https://drive.google.com/file/d/17KBTOjnKRqbK-isi9wU96qOSRGcfYM4H/view",
  },
  {
    term: "Basic Science (22102)",
    link: "https://drive.google.com/file/d/12_Y0EL187sIg01Kdr50OBGmGVtzlzoz5/view",
  },
  {
    term: "Fundamentals of ICT (22001)",
    link: "https://drive.google.com/file/d/1ErH526DfxuUmM5_5f0VjTYU4Emt21RKT/view",
  },
  //sem 2
  {
    term: "BASIC ELECTRONICS (BEC 22225)",
    link: "https://drive.google.com/drive/folders/1z3gpKj-n5dUMCwjDed32zSU4GGCV366b",
  },
  {
    term: "PROGRAMMING IN 'C' (PCI-22226)",
    link: "https://drive.google.com/drive/folders/1G2zCcUPueBkco3LUAnhrhzSJUHiP1XFX",
  },
  {
    term: "BUSINESS COMUNICATION USING COMPUTER (BCC 22009)",
    link: "https://drive.google.com/file/d/1d8Vs4K73yPb5vYNhQ1NTHAmzAXEqBQzP/view",
  },
  {
    term: "COMPUTER PERIPHERAL & HARDWARE MAINTANANCE (CPH 22013)",
    link: "https://drive.google.com/drive/folders/1UUR3CqrBOKmk4mnoQx1Dp7ta-2zlYItq",
  },
  {
    term: "WEB PAGE DESIGNING WITH HTML (WPD 22014)",
    link: "https://drive.google.com/file/d/1453mrqUO83kpSGR4jd8SZ_Uupjztuo2y/view",
  },
  {
    term: "ELEMENTS OF ELECTRICAL ENGINEERING (EEC 22215) ",
    link: "https://drive.google.com/drive/folders/1z3gpKj-n5dUMCwjDed32zSU4GGCV366b",
  },
  {
    term: "APPLIED MATHEMATICS (AMI 22224) ",
    link: "https://drive.google.com/drive/folders/1xThM-e7JWCyWCu8hc-Rmlx41AHNjzEI2",
  },
  // sem 3
  {
    term: "OOP-22316 Chapter 1",
    link: "https://drive.google.com/file/d/10jM9_-uHd2U5hTSSRLQGPdXsrYTxJ7Fa/view",
  },
  {
    term: "OOP-22316 Chapter 2",
    link: "rive.google.com/file/d/1B-lz_WEYTOtHQnlcva1rO7LhMLtagJwT/view",
  },
  {
    term: "OOP-22316 Chapter 3",
    link: "https://drive.google.com/file/d/1V6ITfTdHMBygbg7t95f_jtlUSpQ4rOgn/view",
  },
  {
    term: "OOP-22316 Chapter 4",
    link: "https://drive.google.com/file/d/1rMPDS6mJXjb2WJ4UqM6auuEuJUJGmU2f/view",
  },
  {
    term: "DSU-22317 Chapter 3",
    link: "https://drive.google.com/file/d/1xpRt1uIcO-QDoRBoi7XSxyFLNy2oktbd/view",
  },
  {
    term: "DSU-22317 Chapter 4",
    link: "https://drive.google.com/file/d/1KU1We7JWMycknd6eNcVL08tZ0G1D3qrp/view",
  },
  {
    term: "DSU-22317 Chapter 5",
    link: "https://drive.google.com/file/d/1MYmPpbjUprWfQdaCRDaOF-gJoj1QwzFr/view",
  },
  {
    term: "CGR-22318",
    link: "https://drive.google.com/file/d/1aERHa6hT8PUR8DaHdUPZHW8e2Fb66gyd/view",
  },
  {
    term: "DMS-22319",
    link: "https://drive.google.com/file/d/1uV2tQu5CsiV8Uhfj0uuzmyWSpQRk56Xt/view",
  },
  {
    term: "DTE-22320 Chapter 1",
    link: "https://drive.google.com/file/d/1E_4CahMqSay0fD1BKJ8pIzvQYlLgsBPN/view",
  },
  {
    term: "DTE-22320 Chapter 4",
    link: "https://docs.google.com/presentation/d/1_ZeLSAy2V5JdnSe2qXhQD4j3CEeJIjaR/edit#slide=id.p1",
  },
  {
    term: "DTE-22320 Chapter 5",
    link: "https://docs.google.com/presentation/d/1I0xwP4JBVZkSc6UKLABy9fCE_qVxyRFS/edit#slide=id.p1",
  },
  // sem 4
  {
    term: "JPR-22412 U-1 Chapter 1",
    link: "https://docs.google.com/presentation/d/1QEKWk_qseg4FybyrA2GmEWwztx85f1fG/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-1 Chapter 2",
    link: "https://docs.google.com/presentation/d/1Fgpl4b6AnfxXpq_-Rn9tsT9_m2miYf3m/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-1 Chapter 3",
    link: "https://docs.google.com/presentation/d/1YGQqjfOvKoGdwwBg-gPOp5cEA_TcNpzU/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-1 Chapter 4",
    link: "https://docs.google.com/presentation/d/1xk7PZpQlHus1QvY9DU6cjFWyg_GpCTPG/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-1 Chapter 5",
    link: "https://docs.google.com/presentation/d/19lKh2l1Nv2vIRliIxJmXAqKRfRivCKBr/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-1 Chapter 6",
    link: "https://docs.google.com/presentation/d/1wQQR7QPXd_OLNgJlVxSZpD0j5WUl20On/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-2 Chapter 1",
    link: "https://docs.google.com/presentation/d/1EYi5v8fv3IBLMqN0G7T0sb07IAyDcTgG/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-2 Chapter 2",
    link: "https://docs.google.com/presentation/d/1_63jblz6hLvekpX57169v9A2kMzZoCnV/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-3 Chapter 1",
    link: "https://docs.google.com/presentation/d/1AvGHEKy9-4EUbZnW_MX0fP8K07Q6sS4l/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-3 Chapter 2",
    link: "https://docs.google.com/presentation/d/1FnhF7_RfrKx_rsbMSL8o2Cf7J3sLTTlV/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-3 Chapter 3",
    link: "https://docs.google.com/presentation/d/1kO9iSFoM17NXjX_kGwj7yXgWD21UAUCO/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-3 Chapter 4",
    link: "https://docs.google.com/presentation/d/1dKtAUpRdgZKRo4KBHSRKFF7GZuB5IBfh/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-4 Chapter 1",
    link: "https://docs.google.com/presentation/d/1sICUPPR81G_g4ECSGAGnk62Lb9PrsqGq/edit#slide=id.p1",
  },
  {
    term: "JPR-22412 U-4 Chapter 2",
    link: "https://docs.google.com/presentation/d/1Di5sR-MV9IcaEVtayh9QZNJP7HrMSJXO/edit#slide=id.p1",
  },
  {
    term: "SEN-22413 Chapter 1",
    link: "https://docs.google.com/presentation/d/1YIXj4mXnV_YknjHAC9IGaY2oNHssFOub/edit#slide=id.p1",
  },
  {
    term: "SEN-22413 Chapter 2",
    link: "https://docs.google.com/presentation/d/1IZ1K7Bulsz5nF6We4FshTWRO2SYwoB0S/edit#slide=id.p1",
  },
  {
    term: "SEN-22413 Chapter 3",
    link: "https://docs.google.com/presentation/d/1mxOFlToAKrhTh5LSYlrCigibGo9ruc8u/edit#slide=id.p1",
  },
  {
    term: "SEN-22413 Chapter 4",
    link: "https://docs.google.com/presentation/d/1ZSJh9PIgUQcH84Y6EHGzX-VVXwQix_4D/edit#slide=id.p1",
  },
  {
    term: "SEN-22413 Chapter 5",
    link: "https://docs.google.com/presentation/d/1QCNWpyXqOeglyPGEgLIGrZiQKjCxg0nm/edit#slide=id.p1",
  },
  {
    term: "SEN-22413 Chapter 6",
    link: "https://docs.google.com/presentation/d/1llKL14_8gyPQxStG9XIqz-98mYqWQ-CE/edit#slide=id.p1",
  },
  {
    term: "DCC-22414 Chapter 1",
    link: "https://drive.google.com/file/d/1yIvOOljrpkYkJPryGgFM4tswBSONpxXP/view",
  },
  {
    term: "DCC-22414 Chapter 2",
    link: "https://drive.google.com/file/d/1r2tCgPF_JqJOf1ttudljCxmD9Fj6rPB-/view",
  },
  {
    term: "DCC-22414 Chapter 3",
    link: "https://drive.google.com/file/d/1ydqR2renk15d7P6lVl7BNJNrSIqXMMdU/view",
  },
  {
    term: "DCC-22414 Chapter 4",
    link: "https://drive.google.com/file/d/1nyyGCB_9tM_-u5ITK1AjJuC5MJrPLTkb/view",
  },
  {
    term: "DCC-22414 Chapter 5",
    link: "https://drive.google.com/file/d/1dknIVayYzM-pAXS0JP_I81UzmlDYWHBH/view ",
  },
  {
    term: "MIC-22415 Chapter 1",
    link: "https://drive.google.com/file/d/1uGTHYol7yI8xdX5mcfvR2AdqHLnDgPYl/view",
  },
  {
    term: "MIC-22415 Chapter 2",
    link: "https://drive.google.com/file/d/16TemnrFIn8QRzPnwIQIEHorQBB4JbGmv/view",
  },
  {
    term: "MIC-22415 Chapter 3",
    link: "https://drive.google.com/file/d/1S_dn5qyy9JKLjtjEIuVTgwK7uwpJejRz/view",
  },
  {
    term: "MIC-22415 Chapter 4",
    link: "https://drive.google.com/file/d/1kQs7ZtNRjzCxtjiyAOFmxwgWLv9CxKmM/view",
  },
  {
    term: "MIC-22415 Chapter 5",
    link: "https://drive.google.com/file/d/1kQs7ZtNRjzCxtjiyAOFmxwgWLv9CxKmM/view",
  },
  {
    term: "MIC-22415 Chapter 6",
    link: "https://drive.google.com/file/d/1YIV0TNLm1hAluLE31nx6EZSvlgV2sxvT/view",
  },
  {
    term: "MIC-22415 Chapter 7",
    link: "https://drive.google.com/file/d/1XFrRtXSrsaCuzUMCse4S7glF55m8Yy07/view",
  },
  {
    term: "GUI U-1",
    link: "https://docs.google.com/presentation/d/1O7djougTjso5imAvTTfCzfMLe_bdE5ux/edit#slide=id.p1",
  },
  // sem 5
  {
    term: "OS-22516 Operating System",
    link: "https://onedrive.live.com/?authkey=%21AF3mh2PxgUmkD3o&id=17AFE4A0D78ECCAE%21169&cid=17AFE4A0D78ECCAE",
  },
  {
    term: "AJP Advanced Java Notes",
    link: "https://onedrive.live.com/?authkey=%21AMdWNAIdtIoKAI4&id=17AFE4A0D78ECCAE%21168&cid=17AFE4A0D78ECCAE",
  },
  {
    term: "STE Software Testing Notes",
    link: "https://onedrive.live.com/?authkey=%21AOCIAO62ptTo7oQ&id=17AFE4A0D78ECCAE%21171&cid=17AFE4A0D78ECCAE",
  },
  {
    term: "EST Environmental Studies MCQs",
    link: "https://www.dropbox.com/s/vxu9innj7sn7u93/EST%20MCQs_cwipedia.in.pdf?dl=1",
  },
  // SEM 6
  {
    term: "22509 MANGEMENT ",
    link: "https://drive.google.com/file/d/1RIgcxuHqM5pUlQUFa033R57amRNjbrYh/view",
  },
  {
    term: "22616 PWP ",
    link: "https://server.cwipedia.in/DATA/SEM-VI/Notes/22616-PWP-Notes(Chapter-Wise).pdf",
  },
  {
    term: "22617 MAD",
    link: "https://drive.google.com/file/d/1Wq0wSL4BZNIhtoQBg5G5Lzpi6HOCrVXZ/view",
  },
  {
    term: "22618 ETI",
    link: "https://drive.google.com/file/d/1Wdqhcm9-IB8X0-M0x0U2kiOtq7hyfGqd/view",
  },
  {
    term: "22619 WBP",
    link: "http://mvp.edu.in/rsmpoly/wp-content/uploads/2020/01/BWP22619-QB-Upload.pdf",
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
