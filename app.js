// template_hayq7kt
// service_m8k4nma
// RJkoSt7wR_cUEhl5j
const scaleFactor = 1/20

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal_overlay-loading");
  const success = document.querySelector(".modal_overlay-success");
  loading.classList += " .modal_overlay-visible";
  emailjs
    .sendForm(
      "service_m8k4nma",
      "template_hayq7kt",
      event.target,
      "RJkoSt7wR_cUEhl5j"
    )
    .then(() => {
      loading.classList.remove("modal_overlay-visible");
      success.classList += " modal_overlay-visible";
    })
    .catch(() => {
      loading.classList.remove("modal_overlay-visible");
      alert(
        "The email service is temporarily unavailable, please contact me directly at lds1901@gmail.com"
      );
    });
}

function contact2(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal_overlay-loading");
  const success = document.querySelector(".modal_overlay-success");
  loading.classList += " modal_overlay-visible";
  setTimeout(() => {
    loading.classList.remove("modal_overlay-visible");
    success.classList += " modal_overlay-visible";
  }, 2000);
}

function toggleModal() {
    document.body.classList.toggle('modal_open')
}
function toggleContrast() {
    document.body.classList.toggle('dark-theme')
}
function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const oddScalar = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddScalar}px, ${y * oddScalar}px)`
    }
}
