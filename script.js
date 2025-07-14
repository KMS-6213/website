// script.js

// Function to handle search button click
function handleSearch() {
  const query = document.getElementById("searchInput").value;
  const result = document.getElementById("searchResult");

  if (query.trim() === "") {
    result.textContent = "Please enter something to search.";
  } else {
    result.textContent = `You searched for: "${query}"`;
  }
}
