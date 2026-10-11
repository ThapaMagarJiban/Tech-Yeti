(function () {
  const form = document.getElementById("demoRequestForm");
  if (!form) return;

  const status = document.getElementById("demoStatus");
  const button = document.getElementById("demoSubmit");
  const recipient = "bi95ny@student.sunderland.ac.uk";
  const endpoint = "https://formsubmit.co/ajax/" + recipient;

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    status.hidden = true;
    status.textContent = "";
    status.classList.remove("error");
    button.disabled = true;
    button.textContent = "Sending…";

    const values = new FormData(form);
    const name = String(values.get("name") || "").trim();
    const company = String(values.get("company") || "").trim();
    const email = String(values.get("email") || "").trim();
    const dateTime = String(values.get("dateTime") || "").trim();
    const message = String(values.get("message") || "").trim();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          company,
          email,
          _replyto: email,
          dateTime,
          message,
          _subject: "New Tech-Yeti demo request — " + name,
          _template: "table",
          _captcha: "true"
        })
      });

      const result = await response.json().catch(() => ({}));
      const accepted = result.success === true || result.success === "true";
      if (!response.ok || !accepted) {
        throw new Error(result.message || "The email service could not confirm your request. Please try again.");
      }

      status.textContent = "Thank you! Your request was submitted. If this is the first submission, Tech-Yeti must confirm the activation email before future enquiries can be delivered.";
      form.reset();
    } catch (error) {
      console.error("Demo request submission failed:", error);
      status.classList.add("error");
      status.textContent = error.message || "We couldn't send your request. Please check your connection and try again.";
    } finally {
      status.hidden = false;
      button.disabled = false;
      button.textContent = "Request a Demo →";
    }
  });
})();
