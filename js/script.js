/* =====================================================
   GLOBAL
===================================================== */

let currentType = "post";



/* =====================================================
   FIXED BRANDING
===================================================== */

const FIXED_BRAND =
    "Krishna Computer Cafe | krishnaprep.in";



/* =====================================================
   FIXED WATERMARK
===================================================== */

/*
   Logo is NOT uploaded by the user.

   Logo is fixed in the code:

   ./img/Logo.png

   User cannot change it from the interface.
*/

const FIXED_LOGO_PATH =
    "./img/Logo.png";



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

    document.getElementById("motivationFields").style.display =
        currentType === "motivation"
            ? "block"
            : "none";

}



/* =====================================================
   GET VALUE
===================================================== */

function value(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value;

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

    document.getElementById("brand").textContent =
        FIXED_BRAND;


    document.getElementById("posterDate").textContent =
        formatDate(value("date"));


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


            <div class="quiz-answer">

                <strong>
                    ✅ Correct Answer:
                </strong>

                ${escapeHTML(
            value("quizAnswer")
        )}

            </div>


            <div class="quiz-explanation">

                <strong>
                    💡 Explanation:
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

      /* =====================================================
   MOTIVATION
===================================================== */

if (currentType === "motivation") {

    html = `
        <span class="badge">
            💪
            ${escapeHTML(value("motivationCategory"))}
        </span>

        <h1 class="poster-title">
            ${escapeHTML(value("motivationTitle"))}
        </h1>

        <div class="gk-box">
            <strong>
                ✨ MOTIVATIONAL QUOTE
            </strong>

            <p class="poster-text">
                ${escapeHTML(value("motivationQuote"))}
            </p>
        </div>

        <div class="holiday-box">
            <strong>
                💡 MOTIVATION
            </strong>

            <p class="poster-text">
                ${escapeHTML(value("motivationMessage"))}
            </p>
        </div>

        <div class="gk-box">
            <p class="poster-text">
                ${escapeHTML(value("motivationExtraText"))}
            </p>
        </div>
    `;
}



    document.getElementById("posterBody").innerHTML =
        html;


    /*
       Make sure automatic height is recalculated
       after content changes.
    */

    requestAnimationFrame(() => {

        autoAdjustPoster();

    });

  
}





/* =====================================================
   DATE FORMAT
===================================================== */

/* =====================================================
   AUTOMATIC CURRENT DATE
===================================================== */

function setTodayDate() {

    const dateInput =
        document.getElementById("date");

    if (!dateInput) {
        return;
    }

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(today.getMonth() + 1).padStart(2, "0");

    const day =
        String(today.getDate()).padStart(2, "0");

    dateInput.value =
        `${year}-${month}-${day}`;

}


/* Set today's date automatically */
setTodayDate();

function formatDate(dateValue) {

    if (!dateValue) {
        return "";
    }


    /*
       If date input is YYYY-MM-DD
    */

    const date =
        new Date(
            dateValue + "T00:00:00"
        );


    if (isNaN(date.getTime())) {
        return dateValue;
    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

}



/* =====================================================
   AUTOMATIC POSTER HEIGHT
===================================================== */

function autoAdjustPoster() {

    const poster =
        document.getElementById("poster");

    const content =
        document.querySelector(".poster-content");


    if (!poster || !content) {
        return;
    }


    /*
       Reset height first.
    */

    poster.style.height = "auto";

    content.style.height = "auto";


    /*
       Read actual content height.
    */

    const requiredHeight =
        content.scrollHeight;


    /*
       Minimum poster height.

       1080 width / 1:1 ratio
       gives minimum 1080px actual height.

       Preview uses 540px width,
       therefore minimum preview height = 540px.
    */

    const minimumPreviewHeight = 540;


    const finalHeight =
        Math.max(
            requiredHeight,
            minimumPreviewHeight
        );


    poster.style.height =
        finalHeight + "px";


    content.style.minHeight =
        finalHeight + "px";

}



/* =====================================================
   MAIN IMAGE UPLOAD
===================================================== */

document
    .getElementById("mainImageInput")
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

                    const image =
                        document.getElementById(
                            "mainImagePreview"
                        );


                    const container =
                        document.getElementById(
                            "mainImageContainer"
                        );


                    image.onload =
                        function () {

                            container.style.display =
                                "block";


                            updatePoster();

                        };


                    image.src =
                        e.target.result;

                };


            reader.readAsDataURL(file);

        }
    );



/* =====================================================
   FIXED WATERMARK LOGO
===================================================== */

function loadFixedWatermark() {

    const logo =
        document.getElementById(
            "watermarkImagePreview"
        );


    if (!logo) {
        return;
    }


    /*
       Fixed logo.

       User cannot select/change it.
    */

    logo.src =
        FIXED_LOGO_PATH;


    logo.onload =
        function () {

            updatePoster();

        };

}


loadFixedWatermark();



/* =====================================================
   LIVE UPDATE
===================================================== */

document
    .querySelectorAll(
        "input:not([type='file']), textarea"
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
   DOWNLOAD POSTER
===================================================== */

async function downloadPoster() {

    const poster =
        document.getElementById("poster");


    /*
       Update first.
    */

    updatePoster();


    /*
       Give browser time to render
       the latest content.
    */

    await new Promise(
        resolve =>
            setTimeout(
                resolve,
                150
            )
    );


    try {

        const canvas =
            await html2canvas(
                poster,
                {

                    /*
                       2x resolution.

                       Example:
                       Poster 1080 x 1350
                       Download becomes
                       approximately 1080 x 1350
                       depending on preview scale.
                    */

                    scale: 2,

                    useCORS: true,

                    allowTaint: true,

                    backgroundColor: "#ffffff",

                    imageTimeout: 15000

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

        console.error(
            "Poster download error:",
            error
        );


        alert(
            "Poster download failed. Please try again."
        );

    }

}



/* =====================================================
   RESET
===================================================== */

function resetMaker() {

    /*
       Reload page.

       Fixed logo remains fixed.
    */

    location.reload();

}



/* =====================================================
   INITIAL LOAD
===================================================== */

showFields();

updatePoster();
