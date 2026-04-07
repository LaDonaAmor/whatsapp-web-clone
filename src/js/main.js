const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-search");

// Show the 'X' button only when user types
searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }
});

// Clear the input and hide 'X' button when clicked
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.classList.add("hidden");
  searchInput.focus(); // Keep the cursor in the box
});
