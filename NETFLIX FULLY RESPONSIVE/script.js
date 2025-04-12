const question1 = document.querySelector(".faq-box1");
const paragraph1 = document.querySelector(".faq-para1");

const question2 = document.querySelector(".faq-box2");
const paragraph2 = document.querySelector(".faq-para2");

const question3 = document.querySelector(".faq-box3");
const paragraph3 = document.querySelector(".faq-para3");

const question4 = document.querySelector(".faq-box4");
const paragraph4 = document.querySelector(".faq-para4");

const question5 = document.querySelector(".faq-box5");
const paragraph5 = document.querySelector(".faq-para5");

const question6 = document.querySelector(".faq-box6");
const paragraph6 = document.querySelector(".faq-para6");

const adds1 = document.querySelector(".adds1");
const adds2 = document.querySelector(".adds2");
const adds3 = document.querySelector(".adds3");
const adds4 = document.querySelector(".adds4");
const adds5 = document.querySelector(".adds5");
const adds6 = document.querySelector(".adds6");

function hideAllExcept(currentParagraph, currentAdd) {
    const allParagraphs = [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6];
    const allAdds = [adds1, adds2, adds3, adds4, adds5, adds6];

    // Hide all paragraphs except the current one
    allParagraphs.forEach((para, index) => {
        if (para !== currentParagraph) {
            para.style.display = "none";
            allAdds[index].style.transform = "rotate(0deg)";
        }
    });
}

question1.addEventListener("click", () => {
    if (paragraph1.style.display === "none" || paragraph1.style.display === "") {
        paragraph1.style.display = "block";
        adds1.style.transform = "rotate(45deg)";
        hideAllExcept(paragraph1, adds1);
    } else {
        paragraph1.style.display = "none";
        adds1.style.transform = "rotate(0deg)";
    }
});

question2.addEventListener("click", () => {
    if (paragraph2.style.display === "none" || paragraph2.style.display === "") {
        paragraph2.style.display = "block";
        adds2.style.transform = "rotate(45deg)";
        hideAllExcept(paragraph2, adds2);
    } else {
        paragraph2.style.display = "none";
        adds2.style.transform = "rotate(0deg)";
    }
});

question3.addEventListener("click", () => {
    if (paragraph3.style.display === "none" || paragraph3.style.display === "") {
        paragraph3.style.display = "block";
        adds3.style.transform = "rotate(45deg)";
        hideAllExcept(paragraph3, adds3);
    } else {
        paragraph3.style.display = "none";
        adds3.style.transform = "rotate(0deg)";
    }
});

question4.addEventListener("click", () => {
    if (paragraph4.style.display === "none" || paragraph4.style.display === "") {
        paragraph4.style.display = "block";
        adds4.style.transform = "rotate(45deg)";
        hideAllExcept(paragraph4, adds4);
    } else {
        paragraph4.style.display = "none";
        adds4.style.transform = "rotate(0deg)";
    }
});

question5.addEventListener("click", () => {
    if (paragraph5.style.display === "none" || paragraph5.style.display === "") {
        paragraph5.style.display = "block";
        adds5.style.transform = "rotate(45deg)";
        hideAllExcept(paragraph5, adds5);
    } else {
        paragraph5.style.display = "none";
        adds5.style.transform = "rotate(0deg)";
    }
});

question6.addEventListener("click", () => {
    if (paragraph6.style.display === "none" || paragraph6.style.display === "") {
        paragraph6.style.display = "block";
        adds6.style.transform = "rotate(45deg)";
        hideAllExcept(paragraph6, adds6);
    } else {
        paragraph6.style.display = "none";
        adds6.style.transform = "rotate(0deg)";
    }
});
