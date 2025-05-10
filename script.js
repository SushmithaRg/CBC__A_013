let currentStep = 1;

function nextStep() {
    if (validateStep()) {
        document.getElementById(`step${currentStep}`).style.display = "none";
        currentStep++;
        document.getElementById(`step${currentStep}`).style.display = "block";
        document.getElementById("step-indicator").innerText = `Step ${currentStep} of 6`;
    }
}

function validateStep() {
    let id = "";
    switch (currentStep) {
        case 1: id = "age"; break;
        case 2: id = "education"; break;
        case 3: id = "field"; break;
        case 4: id = "interest"; break;
        case 5: id = "skill"; break;
    }
    const value = document.getElementById(id).value;
    if (value === "" || (currentStep === 1 && (value < 10 || value > 100))) {
        alert("Please enter/select a valid option.");
        return false;
    }
    return true;
}

function analyze() {
    const age = parseInt(document.getElementById("age").value);
    const education = document.getElementById("education").value;
    const field = document.getElementById("field").value;
    const interest = document.getElementById("interest").value;
    const skill = document.getElementById("skill").value;
    const workstyle = document.getElementById("workstyle").value;

    const result = document.getElementById("result");

    if (workstyle === "") {
        alert("Please select an option to continue.");
        return;
    }

    let suggestion = "";
    let advice = "";

    if (age <= 18) {
        advice += "Focus on building skills and gaining education. ";
    } else if (age > 18 && age <= 25) {
        advice += "You can explore internships, entry-level jobs, or higher studies. ";
    } else if (age > 25) {
        advice += "Focus on specialization, career growth, or leadership roles. ";
    }

    if (interest === "technology") {
        if (field === "engineering" || field === "science") {
            suggestion = "Software Developer, Data Analyst, Cybersecurity Expert";
        } else {
            suggestion = "IT Support, Web Developer, Technical Consultant";
        }
    } else if (interest === "healthcare") {
        if (field === "medicine" || field === "science") {
            suggestion = "Doctor, Nurse, Medical Researcher";
        } else {
            suggestion = "Healthcare Manager, Medical Support Staff";
        }
    } else if (interest === "business") {
        suggestion = "Business Analyst, Entrepreneur, Digital Marketer";
    } else if (interest === "art") {
        suggestion = "Graphic Designer, Animator, Fashion Designer";
    } else if (interest === "education") {
        suggestion = "Teacher, Corporate Trainer, Academic Counselor";
    }

    // Adjusting based on skill
    if (skill === "leadership") {
        suggestion += ", Managerial Positions";
    } else if (skill === "creativity") {
        suggestion += ", Creative Roles";
    } else if (skill === "problem-solving") {
        suggestion += ", Analytical Roles";
    }

    // Adding work style preference
    if (workstyle === "remote") {
        advice += "You can explore remote-friendly careers.";
    } else if (workstyle === "team") {
        advice += "Roles requiring collaboration would suit you.";
    } else if (workstyle === "independent") {
        advice += "Freelancing and independent projects would fit.";
    } else if (workstyle === "onfield") {
        advice += "Look for field-based roles requiring mobility.";
    }

    result.innerHTML = `
        <h2>Career Suggestions</h2>
        <p><strong>${suggestion}</strong></p>
        <p>${advice}</p>
    `;
    result.style.color = "green";

    document.getElementById("questions").style.display = "none";
    document.getElementById("step-indicator").style.display = "none";
    document.getElementById("restart").style.display = "inline-block";
}

function restart() {
    currentStep = 1;
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`step${i}`).style.display = (i === 1) ? "block" : "none";
    }
    document.getElementById("questions").style.display = "block";
    document.getElementById("result").innerHTML = "";
    document.getElementById("restart").style.display = "none";
    document.getElementById("step-indicator").style.display = "block";
    document.getElementById("step-indicator").innerText = `Step 1 of 6`;

    // Reset inputs
    document.getElementById("age").value = "";
    document.getElementById("education").value = "";
    document.getElementById("field").value = "";
    document.getElementById("interest").value = "";
    document.getElementById("skill").value = "";
    document.getElementById("workstyle").value = "";
}
