const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.getElementsByClassName("accordian_body")[0];

function showFaq() {
  const faq = createFaq();
  accordianBody.innerHTML = faq;
}

function createFaq() {
  let html = `<h1>Ineuron FAQ's</h1>`;
  for (let faq of faqData){
    str = `<div id="faq${faq.id}" class="faq">
            <div class="faq_header">
              <h3>${faq.question}</h3>
              <button class="show_btn">+</button>
            </div>
              <div class="faq_hide hidden">
              <p>${faq.answer}</p>
            </div>
          </div>`
    html += str;
  }

  return html;
}

function btnStatusUpdate() {
  const btns = document.getElementsByClassName("show_btn");
  const answer = document.getElementsByClassName("faq_hide");
  Array.from(btns).forEach((btn, index) => {
    btn.addEventListener('click', () => {
      answer[index].classList.toggle('hidden');
    })
  });
}

showFaq();
btnStatusUpdate();