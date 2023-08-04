let scholarships =
  { "Computer Science": [["National Videogame Museum Scholarship", "/images/nvmscholar.jpeg", "https://nvmusa.org/nvm-scholarship.html", "The National Videogame Museum is devoted to chronicling and preserving our industry's rich past but we also look to contribute to the future of the videogame and technology industries through our scholarship program. There are five different scholarship opportunities available to high school graduates pursuing careers in gaming or technology-based fields. Four of the five are limited to Texas residents but the fifth is open to women across the country - Up to $5000"], ["Women at Microsoft Scholarship", "/images/wmis.jpeg", "https://www.microsoft.com/en-us/diversity/programs/women-at-microsoft-scholarship", "This scholarship will be awarded to promising high school senior and current undergraduate women and non-binary people* who plan to attend or are attending a vocational or academic college and targeting a career in STEAM (Science, Technology, Engineering, Arts, and Math) - Up to $5000"], ["NSHSS STEAM Scholarships", "/images/nshss.jpeg", "https://www.nshss.org/scholarships/s/nshss-steam-scholarship/", "The increasing role of technological innovations in our daily life cannot be understated, and by recognizing the significance of the arts, the STEAM field provides a vast amount of opportunity for those interested in it. NSHSS created this scholarship to honor those students who embrace and celebrate the STEAM field and thrive within it - Up to $1000"]], "Health Care": [["Save a Life Scholarship", "/images/save.jpeg", "https://www.onlinecprcertification.net/scholarship.php", "The “Save a Life” Scholarship of, $1,500, is awarded twice per year: once in the spring and once in the fall. Each $1,500 award will go to a different student, in order to maximize the impact of the scholarship, spread the word of the importance first aid and CPR training, and share more stories from future educators and healthcare professionals."], ["Red Cross Navin Narayan Scholarship", "/images/redcross.jpeg", "https://www.redcross.org/red-cross-youth/opportunities/scholarships-and-awards.html", "Both a Rhodes Scholar and a Harvard graduate, Navin Narayan was a high achieving student as well as a dedicated, compassionate, and innovative American Red Cross volunteer. Navin served many roles in the American Red Cross, including National Youth Council Chair. Tragically, at the age of 23, Navin succumbed to cancer. Since 2001, the National Youth Council has continued Navin Narayan’s legacy of volunteerism and academic excellence by awarding the Navin Narayan College Scholarship to a high school senior who embodies his principles.  This scholarship is a one-time award of $1,000 paid directly to one recipient upon proof of matriculation."], ["Robert F. Lawson Fund for Careers that Care", "/images/bold.png", "https://bold.org/scholarships/robert-f-lawson-fund-for-careers-that-care/", "This scholarship seeks to support high school and undergraduate students who intend to spend their careers helping other people. Any low-income high school senior or undergraduate student who is planning to pursue a career in healthcare, social work, government, education or a related field may apply for this scholarship - Up to $500"]], "Business": [["Abbott and Fenner Scholarship", "/images/abott.jpeg", "https://abbottandfenner.com/scholarships.php", "Abbott & Fenner are committed to continuing our efforts at helping those who have the desire and ambition to succeed. The winner(s) of this annual scholarship will receive their award within 2 weeks of the listed deadline. All applicants should include their full name and mailing address with their submissions as well as the school they are currently attending."], ["Chicago Roofing Contractors", "/images/roof.png", "https://www.crca.org/CRCA-Foundation/CRCA-Scholarship", "Each year the Chicago Roofing Contractors Association will award at least one $5,000 renewable scholarship to a high school senior who will enter college in the Fall Semester in the following programs – liberal arts and sciences, engineering, architecture or business. The scholarship recipient will be selected on the basis of academic performance, faculty recommendation, extracurricular activities, employment experience, and a demonstrated interest in a productive career."],["NFIB Young Entrepreneur Foundation Scholarship", "/images/nfib.jpeg", "https://www.financialaidfinder.com/student-scholarship-search/student-scholarships-college-major/business-scholarships/young-entrepreneur-scholarship/", "The NFIB Young Entrepreneur Award program provides up to $10,000 in tuition assistance to high school seniors pursuing higher education and their entrepreneurial dreams."]]};



const scholarshipItem = document.querySelector("#scholarship-item");

const card1 = document.querySelector("#card1")

const cardTitle1 = document.querySelector("#title1");
const cardBody1 = document.querySelector("#body1");
const cardImage1 = document.querySelector("#image1");
const cardLink1 = document.querySelector("#link1");

const cardTitle2 = document.querySelector("#title2");
const cardBody2 = document.querySelector("#body2");
const cardImage2 = document.querySelector("#image2");
const cardLink2 = document.querySelector("#link2");

const cardTitle3 = document.querySelector("#title3");
const cardBody3 = document.querySelector("#body3");
const cardImage3 = document.querySelector("#image3");
const cardLink3 = document.querySelector("#link3");

const button = document.querySelector('#enter');
console.log(button);

function displayCardInfo(input, output) {
  output.innerHTML = input;
}

function updateLink(input, output) {
  output.setAttribute("href", input);
}

function updateImage(input, output) {
  output.setAttribute("src", input);
}

function runProgram() {
  displayCardInfo(scholarships[scholarshipItem.value][0][0], cardTitle1);
  updateImage(scholarships[scholarshipItem.value][0][1], cardImage1);
  updateLink(scholarships[scholarshipItem.value][0][2], cardLink1);
  displayCardInfo(scholarships[scholarshipItem.value][0][3], cardBody1);

  displayCardInfo(scholarships[scholarshipItem.value][1][0], cardTitle2);
  updateImage(scholarships[scholarshipItem.value][1][1], cardImage2);
  updateLink(scholarships[scholarshipItem.value][1][2], cardLink2);
  displayCardInfo(scholarships[scholarshipItem.value][1][3], cardBody2);

  displayCardInfo(scholarships[scholarshipItem.value][2][0], cardTitle3);
  updateImage(scholarships[scholarshipItem.value][2][1], cardImage3);
  updateLink(scholarships[scholarshipItem.value][2][2], cardLink3);
  displayCardInfo(scholarships[scholarshipItem.value][2][3], cardBody3);
}


button.addEventListener("click", runProgram);


