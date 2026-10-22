// Change this date to set a different countdown target.
const targetDate = new Date("2026-12-31T23:59:59");

const timerElement = document.querySelector("#timer");
const completionMessage = document.querySelector("#completion-message");
const targetDateElement = document.querySelector("#target-date");
const timeValues = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};
let countdownInterval = null;

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
  timeStyle: "short",
});

targetDateElement.dateTime = targetDate.toISOString();
targetDateElement.textContent = dateFormatter.format(targetDate);

function updateCountdown() {
  const remainingMilliseconds = Math.max(0, targetDate.getTime() - Date.now());

  if (remainingMilliseconds === 0) {
    if (countdownInterval !== null) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
    timerElement.hidden = true;
    completionMessage.hidden = false;
    return;
  }

  const totalSeconds = Math.floor(remainingMilliseconds / 1000);
  const values = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };

  Object.entries(values).forEach(([unit, value]) => {
    const element = timeValues[unit];
    const formattedValue = unit === "days" ? String(value) : String(value).padStart(2, "0");

    if (element.textContent !== formattedValue) {
      element.textContent = formattedValue;
      element.classList.remove("tick");
      void element.offsetWidth;
      element.classList.add("tick");
    }
  });
}

// Check immediately so an already-passed target never shows negative values.
updateCountdown();
if (targetDate.getTime() > Date.now()) {
  countdownInterval = window.setInterval(updateCountdown, 1000);
}
