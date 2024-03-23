document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");
    const decrementBtn = document.getElementById("decrementBtn");
    const clearBtn = document.getElementById("clearBtn");
    const error = document.getElementById("error");
  
    let count = 0;
  
    incrementBtn.addEventListener("click", function() {
      count++;
      counter.innerHTML = count;
      error.style.display = "none";
      clearBtn.style.display = "block";
    });
  
    decrementBtn.addEventListener("click", function() {
      if (count > 0) {
        count--;
        counter.innerHTML = count;
        error.style.display = "none";
      } else {
        error.style.display = "block";
      }
      if (count === 0) {
        clearBtn.style.display = "none";
      } else {
        clearBtn.style.display = "block";
      }
    });
  
    clearBtn.addEventListener("click", function() {
      count = 0;
      counter.innerHTML = count;
      clearBtn.style.display = "none";
      error.style.display = "none";
    });
  });