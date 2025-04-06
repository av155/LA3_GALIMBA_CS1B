function assignGrade(score) {
  let grade;
  let remarks;

  // Grade assignment using ternary operators
  grade = score >= 97 ? "1.00 Excellent" :
          score >= 94 ? "1.25 Excellent" :
          score >= 91 ? "1.50 Above Average" :
          score >= 88 ? "1.75 Above Average" :
          score >= 85 ? "2.00 Average" :
          score >= 82 ? "2.25 Average" :
          score >= 79 ? "2.50 Below Average" :
          score >= 76 ? "2.75 Below Average" :
          score >= 75 ? "3.00 Below Average" :
          score >= 72 ? "4.00 Poor" : "5.00 Poor";


  // Remarks assignment using if-else if-else statements
  remarks = score >= 90 ? "HIGH PASS, Candidate for Cum Laude" :
            score >= 80 ? "AVERAGE PASS" :
            score >= 75 ? "LOW PASS" : "FAILED, Needs Improvement";

  console.log("Your equivalent Grade is \"" + grade + "\"");
  console.log("Final Remarks: " + remarks);
}


//Example usage
let score = prompt("Enter your score:");
assignGrade(parseInt(score));
