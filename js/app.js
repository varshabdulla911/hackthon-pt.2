const chart = (id, type, labels, data, colors) => {
  new Chart(document.getElementById(id), {
    type,
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderColor: "#40e8ff",
        borderWidth: 2,
        tension: .45,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: "#f8f7ff" } }
      },
      scales: type === "line" ? {
        x: { ticks: { color: "#9292b2" }, grid: { color: "#ffffff12" } },
        y: { ticks: { color: "#9292b2" }, grid: { color: "#ffffff12" } }
      } : {}
    }
  });
};

chart("sentimentChart", "doughnut",
  ["Supportive", "Against", "Angry", "Fear", "Sarcasm"],
  [45, 25, 15, 10, 5],
  ["#baff4d", "#ff4fd8", "#ff765c", "#9274ff", "#40e8ff"]);

chart("emotionChart", "bar",
  ["Supportive", "Against", "Angry", "Fear", "Sarcasm"],
  [45, 25, 15, 10, 5],
  ["#baff4d", "#ff4fd8", "#ff765c", "#9274ff", "#40e8ff"]);

chart("trendChart", "line",
  ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5"],
  [1200, 800, 600, 400, 300],
  ["#40e8ff"]);

chart("ageChart", "bar",
  ["18–24", "25–34", "35–44", "45–54", "55+"],
  [30, 40, 20, 5, 5],
  ["#ff4fd8"]);

chart("languageChart", "pie",
  ["English", "Spanish", "French", "Others"],
  [70, 15, 10, 5],
  ["#40e8ff", "#baff4d", "#ff4fd8", "#9274ff"]);

chart("sentimentChart", "doughnut",
  ["Supportive", "Against", "Angry", "Fear", "Sarcasm"],
  [45, 25, 15, 10, 5],
  ["#baff4d", "#ff4fd8", "#ff765c", "#9274ff", "#40e8ff"]);

chart("emotionChart", "bar",
  ["Supportive", "Against", "Angry", "Fear", "Sarcasm"],
  [45, 25, 15, 10, 5],
  ["#baff4d", "#ff4fd8", "#ff765c", "#9274ff", "#40e8ff"]);

chart("trendChart", "line",
  ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5"],
  [1200, 800, 600, 400, 300],
  ["#40e8ff"]);

chart("ageChart", "bar",
  ["18–24", "25–34", "35–44", "45–54", "55+"],
  [30, 40, 20, 5, 5],
  ["#ff4fd8"]);

chart("languageChart", "pie",
  ["English", "Spanish", "French", "Others"],
  [70, 15, 10, 5],
  ["#40e8ff", "#baff4d", "#ff4fd8", "#9274ff"]);