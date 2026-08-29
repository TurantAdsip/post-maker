


/* =====================================================
   GLOBAL
===================================================== */

let currentType = "post";



/* =====================================================
   TYPE SELECTOR
===================================================== */

document
    .querySelectorAll(".type-card")
    .forEach(card => {

        card.addEventListener("click", function () {


            document
                .querySelectorAll(".type-card")
                .forEach(c =>
                    c.classList.remove("active")
                );


            this.classList.add("active");


            currentType =
                this.dataset.type;


            showFields();


            updatePoster();


        });

    });



/* =====================================================
   SHOW FIELDS
===================================================== */

function showFields() {


    document.getElementById("postFields").style.display =
        currentType === "post"
            ? "block"
            : "none";


    document.getElementById("gkFields").style.display =
        currentType === "gk"
            ? "block"
            : "none";


    document.getElementById("currentFields").style.display =
        currentType === "current"
            ? "block"
            : "none";


    document.getElementById("quizFields").style.display =
        currentType === "quiz"
            ? "block"
            : "none";


    document.getElementById("holidayFields").style.display =
        currentType === "holiday"
            ? "block"
            : "none";

}



/* =====================================================
   GET VALUE
===================================================== */

function value(id) {

    return document
        .getElementById(id)
        .value;

}



/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(text) {

    return String(text)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");

}



/* =====================================================
   UPDATE POSTER
===================================================== */

function updatePoster() {


    const fixedBrand =
        "Krishna Computer Cafe | krishnaprep.in";


    document.getElementById("brand").textContent =
        fixedBrand;


    document.getElementById("posterDate").textContent =
        value("date");


    document.getElementById("posterContact").textContent =
        value("contact");


    let html = "";



    /* =================================================
       POST
    ================================================== */

    if (currentType === "post") {


        html = `

            <span class="badge">

                📰 IMPORTANT POST

            </span>


            <h1 class="poster-title">

                ${escapeHTML(
            value("postTitle")
        )}

            </h1>


            <h2>

                ${escapeHTML(
            value("postHeading")
        )}

            </h2>


            <p class="poster-text">

                ${escapeHTML(
            value("postDescription")
        )}

            </p>

        `;

    }



    /* =================================================
       STATIC GK
    ================================================== */

    if (currentType === "gk") {


        html = `

            <span class="badge">

                📚
                ${escapeHTML(
            value("gkCategory")
        )}

            </span>


            <div class="quiz-question">

                ${escapeHTML(
            value("gkQuestion")
        )}

            </div>


            <div class="options">


                <div class="option">

                    <b>A)</b>
                    ${escapeHTML(
            value("gkA")
        )}

                </div>


                <div class="option">

                    <b>B)</b>
                    ${escapeHTML(
            value("gkB")
        )}

                </div>


                <div class="option">

                    <b>C)</b>
                    ${escapeHTML(
            value("gkC")
        )}

                </div>


                <div class="option">

                    <b>D)</b>
                    ${escapeHTML(
            value("gkD")
        )}

                </div>


            </div>


            <div class="gk-box">


                <strong>

                    💡 GK FACT

                </strong>


                <p>

                    ${escapeHTML(
            value("gkFact")
        )}

                </p>


            </div>

        `;

    }



    /* =================================================
       CURRENT AFFAIRS
    ================================================== */

    if (currentType === "current") {


        const facts =
            value("currentFacts")
                .split("\n")
                .filter(
                    x =>
                        x.trim() !== ""
                );


        const factHTML =
            facts
                .map(
                    f =>
                        `<li>${escapeHTML(f)}</li>`
                )
                .join("");


        html = `

            <span class="badge">

                🗞️
                ${escapeHTML(
            value("currentCategory")
        )}

            </span>


            <h1 class="poster-title">

                ${escapeHTML(
            value("currentTitle")
        )}

            </h1>


            <p class="poster-text">

                ${escapeHTML(
            value("currentSummary")
        )}

            </p>


            <div class="gk-box">


                <strong>

                    📌 IMPORTANT FACTS

                </strong>


                <ul class="gk-list">

                    ${factHTML}

                </ul>


            </div>


            <div class="source">

                Source:
                ${escapeHTML(
            value("currentSource")
        )}

            </div>

        `;

    }



    /* =================================================
       QUIZ
    ================================================== */

    if (currentType === "quiz") {


        html = `

            <span class="badge">

                ❓
                ${escapeHTML(
            value("quizCategory")
        )}

            </span>


            <div class="quiz-question">

                ${escapeHTML(
            value("quizQuestion")
        )}

            </div>


            <div class="options">


                <div class="option">

                    <b>A)</b>
                    ${escapeHTML(
            value("quizA")
        )}

                </div>


                <div class="option">

                    <b>B)</b>
                    ${escapeHTML(
            value("quizB")
        )}

                </div>


                <div class="option">

                    <b>C)</b>
                    ${escapeHTML(
            value("quizC")
        )}

                </div>


                <div class="option">

                    <b>D)</b>
                    ${escapeHTML(
            value("quizD")
        )}

                </div>


            </div>


            <div class="answer">

                ✅ Correct Answer:

                ${escapeHTML(
            value("quizAnswer")
        )}

            </div>


            <div class="gk-box">


                <strong>

                    💡 Explanation

                </strong>


                <p>

                    ${escapeHTML(
            value("quizExplanation")
        )}

                </p>


            </div>

        `;

    }



    /* =================================================
       HOLIDAY
    ================================================== */

    if (currentType === "holiday") {


        const facts =
            value("holidayFacts")
                .split("\n")
                .filter(
                    x =>
                        x.trim() !== ""
                );


        const factHTML =
            facts
                .map(
                    f =>
                        `<li>${escapeHTML(f)}</li>`
                )
                .join("");


        html = `

            <span class="badge">

                🎉
                ${escapeHTML(
            value("holidayCategory")
        )}

            </span>


            <h1 class="poster-title">

                ${escapeHTML(
            value("holidayName")
        )}

            </h1>


            <div class="holiday-box">


                <strong>

                    📅 HOLIDAY DATE

                </strong>


                <div class="holiday-date">

                    ${escapeHTML(
            value("holidayDate")
        )}

                </div>


                <p class="poster-text">

                    ${escapeHTML(
            value("holidayDescription")
        )}

                </p>


            </div>


            <div class="gk-box">


                <strong>

                    📌 IMPORTANT INFORMATION

                </strong>


                <ul class="gk-list">

                    ${factHTML}

                </ul>


            </div>

        `;

    }



    document.getElementById("posterBody").innerHTML =
        html;

}



/* =====================================================
   POSTER SIZE
===================================================== */

document
    .getElementById("size")
    .addEventListener(
        "change",
        function () {


            const poster =
                document.getElementById("poster");


            const size =
                this.value;



            if (size === "portrait") {


                poster.style.width =
                    "540px";


                poster.style.height =
                    "675px";


                document.getElementById(
                    "sizeInfo"
                ).textContent =
                    "Current size: 1080 × 1350";

            }



            if (size === "square") {


                poster.style.width =
                    "540px";


                poster.style.height =
                    "540px";


                document.getElementById(
                    "sizeInfo"
                ).textContent =
                    "Current size: 1080 × 1080";

            }



            if (size === "story") {


                poster.style.width =
                    "540px";


                poster.style.height =
                    "960px";


                document.getElementById(
                    "sizeInfo"
                ).textContent =
                    "Current size: 1080 × 1920";

            }



            if (size === "long") {


                poster.style.width =
                    "540px";


                poster.style.height =
                    "800px";


                document.getElementById(
                    "sizeInfo"
                ).textContent =
                    "Current size: 1080 × 1600";

            }

        }
    );



/* =====================================================
   LIVE UPDATE
===================================================== */

document
    .querySelectorAll(
        "input:not([type='file']), textarea, select"
    )
    .forEach(element => {


        element.addEventListener(
            "input",
            updatePoster
        );


        element.addEventListener(
            "change",
            updatePoster
        );

    });



/* =====================================================
   WATERMARK UPLOAD
===================================================== */

document
    .getElementById(
        "watermarkImageInput"
    )
    .addEventListener(
        "change",
        function (event) {


            const file =
                event.target.files[0];


            if (!file) {

                return;

            }


            const reader =
                new FileReader();


            reader.onload =
                function (e) {


                    document.getElementById(
                        "watermarkImagePreview"
                    ).src =
                        e.target.result;


                };


            reader.readAsDataURL(file);

        }
    );



/* =====================================================
   DOWNLOAD POSTER
===================================================== */

async function downloadPoster() {


    const poster =
        document.getElementById("poster");


    try {


        const canvas =
            await html2canvas(
                poster,
                {

                    scale: 2,

                    useCORS: true,

                    allowTaint: true,

                    backgroundColor: "#ffffff"

                }
            );


        const link =
            document.createElement("a");


        link.download =
            "KrishnaPrep-" +
            currentType +
            "-" +
            Date.now() +
            ".png";


        link.href =
            canvas.toDataURL(
                "image/png"
            );


        link.click();


    } catch (error) {


        console.error(error);


        alert(
            "Poster download failed. Please try again."
        );

    }

}



/* =====================================================
   INITIAL LOAD
===================================================== */

showFields();

updatePoster();

