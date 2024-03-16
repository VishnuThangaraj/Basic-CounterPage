let count = 0,
  errorToggle = false;

// Buttons
const increment_btn = document.getElementById(`increment_btn`);
const decrement_btn = document.getElementById(`decrement_btn`);
const clear_val_btn = document.getElementById(`clear_val_btn`);

// Display & Error Region(HTML)
const display_count = document.getElementById(`display_count`);
const Error_region = document.getElementById(`Error_region`);

// On Click functions for Buttonss
increment_btn.addEventListener("click", incrementCount);
decrement_btn.addEventListener("click", decrementCount);
clear_val_btn.addEventListener("click", clearCount);

// Function to Increment the count in display HTML
function incrementCount() {
  if (errorToggle) {
    Error_region.classList.add(`hidden`);
    errorToggle = !errorToggle;
  }
  count++;
  display_count.innerHTML = `Your Current Count is : ${count}`;

  if (clear_val_btn.classList.contains(`hidden`)) {
    clear_val_btn.classList.remove(`hidden`);
  }
}

// Function to Decrement the count in display HTML
function decrementCount() {
  if (count == 0) {
    if (!errorToggle) {
      Error_region.classList.remove(`hidden`);
      errorToggle = !errorToggle;
    }
    clear_val_btn.classList.add(`hidden`);
    return;
  }
  count--;
  display_count.innerHTML = `Your Current Count is : ${count}`;
}

//Function to Clear the count in the display HTML
function clearCount() {
  count = 0;
  display_count.innerHTML = `Your Current Count is : ${count}`;
  clear_val_btn.classList.add(`hidden`);
}
