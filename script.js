document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedbackForm");

    const successMessage =
        document.getElementById("successMessage");

    /* IMPORTANT:
       There are two elements with id="feedback".
       We specifically select the TEXTAREA here.
    */
    const feedbackBox =
        document.querySelector('textarea[name="feedback"]');

    const characterCount =
        document.querySelector(".character-count");

    const submitButton =
        document.querySelector("#feedbackForm button[type='submit']");


    /* =========================================
       CHARACTER COUNTER
       ========================================= */

    if (feedbackBox && characterCount) {

        feedbackBox.addEventListener("input", function () {

            characterCount.textContent =
                feedbackBox.value.length + " / 500 characters";

        });

    }


    /* =========================================
       SUBMIT BUTTON
       ========================================= */

    if (submitButton && form) {

        submitButton.addEventListener("click", function (event) {

            event.preventDefault();


            const nameField =
                document.getElementById("studentName");

            const emailField =
                document.getElementById("studentEmail");

            const departmentField =
                document.getElementById("department");

            const yearField =
                document.getElementById("year");


            const name =
                nameField ? nameField.value.trim() : "";

            const email =
                emailField ? emailField.value.trim() : "";

            const department =
                departmentField ? departmentField.value : "";

            const year =
                yearField ? yearField.value : "";

            const feedback =
                feedbackBox ? feedbackBox.value.trim() : "";


            const rating =
                document.querySelector(
                    'input[name="rating"]:checked'
                );


            /* =====================================
               VALIDATION
               ===================================== */

            if (name === "") {

                alert("Please enter your full name.");

                if (nameField) {
                    nameField.focus();
                }

                return;
            }


            if (email === "") {

                alert("Please enter your email address.");

                if (emailField) {
                    emailField.focus();
                }

                return;
            }


            if (!email.includes("@")) {

                alert("Please enter a valid email address.");

                if (emailField) {
                    emailField.focus();
                }

                return;
            }


            if (department === "") {

                alert("Please select your department.");

                if (departmentField) {
                    departmentField.focus();
                }

                return;
            }


            if (year === "") {

                alert("Please select your year of study.");

                if (yearField) {
                    yearField.focus();
                }

                return;
            }


            if (!rating) {

                alert(
                    "Please select your overall experience rating."
                );

                return;
            }


            if (feedback === "") {

                alert("Please enter your feedback.");

                if (feedbackBox) {
                    feedbackBox.focus();
                }

                return;
            }


            /* =====================================
               SUCCESS MESSAGE
               ===================================== */

            if (successMessage) {

                successMessage.style.display = "flex";
                successMessage.style.visibility = "visible";
                successMessage.style.opacity = "1";

                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }


            /* =====================================
               RESET FORM
               ===================================== */

            form.reset();


            if (characterCount) {

                characterCount.textContent =
                    "0 / 500 characters";

            }


            console.log(
                "Feedback submitted successfully."
            );

        });

    }

});