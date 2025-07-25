function handleSearch() {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const result = document.getElementById("searchResult");

  if (query === "") {
    result.textContent = "Please enter something to search.";
  } else if (query === "history") {
    result.textContent = "Redirecting to the history page...";
    setTimeout(() => {
      window.location.href = "history.html"; // Ensure this matches your file name!
    }, 1000);
  } else {
    result.textContent = `No results found for "${query}".`;
  }
}
