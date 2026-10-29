// =========================================================================
// Task 7.1: Variable Practice
// =========================================================================
const myName = "Hellen Wamucii Njue"; 
const myAge = 21; 
const isStudent = true; 
const favoriteColors = ["Emerald Green", "Navy Blue", "Black"];
const todayDate = new Date(); 

console.log("--- Task 7.1: My Personal Variables ---");
console.log(`Name: ${myName} (${typeof myName})`);
console.log(`Age: ${myAge} (${typeof myAge})`);
console.log(`Is Student: ${isStudent} (${typeof isStudent})`);
console.log(`Favorite Colors: ${favoriteColors.join(", ")}`);
console.log(`Today's Date: ${todayDate.toDateString()}`);

// =========================================================================
// Task 7.2: Data Types & Operators Challenge
// =========================================================================
const ageInDays = myAge * 365.25; 
const ageInHours = ageInDays * 24;
const currentYear = todayDate.getFullYear();
const yearTurning100 = currentYear + (100 - myAge);

console.log("\n--- Task 7.2: Age Math Challenge ---");
console.log(`My approximate age in days: ${ageInDays} days`);
console.log(`My approximate age in hours: ${ageInHours} hours`);
console.log(`The year I will turn 100 years old: ${yearTurning100}`);

// =========================================================================
// Task 7.3 & 7.4: Functions & Loops
// =========================================================================
console.log("\n--- Task 7.3 & 7.4: Functions & Loops ---");

const calculateArea = (width, height) => width * height;
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const isEven = (number) => number % 2 === 0;

const getInitials = (fullName) => {
    return fullName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");
};

const reverseString = (str) => str.split("").reverse().join("");
const calculateTip = (bill, tipPercent = 15) => bill * (tipPercent / 100);

console.log(`Initials for my name: ${getInitials(myName)}`);

console.log("--- Star Triangle Output ---");
for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

// =========================================================================
// Mini-Project: Interactive Calculator Function
// =========================================================================
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? "Error: Cannot divide by zero" : a / b);
const modulus = (a, b) => a % b;
const power = (a, b) => a ** b;

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return modulus(num1, num2);
        case "**": return power(num1, num2);
        default: return "Invalid operator";
    }
}

console.log("\n--- Calculator Project Tests ---");
console.log(`10 + 5 = ${calculate(10, "+", 5)}`);
console.log(`10 / 0 = ${calculate(10, "/", 0)}`);
console.log(`2 ** 3 = ${calculate(2, "**", 3)}`);

// =========================================================================
// Mini-Project: Student Grade Tracker
// =========================================================================
console.log("\n--- Student Grade Tracker Mini-Project ---");

const gradeTracker = {
    students: [],
    
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    getStudent(name) {
        return this.students.find(s => s.name.toLowerCase() === name.toLowerCase()) || null;
    },
    
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return 0;
        const scores = Object.values(student.grades);
        if (scores.length === 0) return 0;
        const total = scores.reduce((sum, score) => sum + score, 0);
        return parseFloat((total / scores.length).toFixed(2));
    },
    
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;
        this.students.forEach(student => {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        });
        return count === 0 ? 0 : parseFloat((total / count).toFixed(2));
    },
    
    getTopStudent() {
        if (this.students.length === 0) return null;
        let topStudent = this.students[0];
        let highestAvg = this.getStudentAverage(topStudent.name);
        
        for (const student of this.students) {
            const currentAvg = this.getStudentAverage(student.name);
            if (currentAvg > highestAvg) {
                highestAvg = currentAvg;
                topStudent = student;
            }
        }
        return topStudent.name;
    },
    
    getStrugglingStudents() {
        return this.students.filter(student => this.getStudentAverage(student.name) < 70);
    },
    
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `Student ${name} not found.`;
        
        let report = `Report Card for ${student.name}\n-----------------------------\n`;
        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject.toUpperCase()}: ${score} (${this.getLetterGrade(score)})\n`;
        }
        const average = this.getStudentAverage(name);
        report += `-----------------------------\nAVERAGE: ${average} (${this.getLetterGrade(average)})`;
        return report;
    }
};

// Running Grade Tracker Tests with custom non-template data
gradeTracker.addStudent("Mariam", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Zayed", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Wanjiku", { math: 60, english: 65, science: 58 });

console.log(`Mariam's Average: ${gradeTracker.getStudentAverage("Mariam")}`); // 91.67
console.log(`Math Class Average: ${gradeTracker.getSubjectAverage("math")}`);  // 75.67
console.log(`Top Performing Student: ${gradeTracker.getTopStudent()}`);        // Mariam
console.log(`Struggling Students Count: ${gradeTracker.getStrugglingStudents().length}`); // 1 (Wanjiku)
console.log("\n" + gradeTracker.generateReportCard("Mariam"));


// =========================================================================
// DAILY CHALLENGES
// =========================================================================
console.log("\n--- Daily Challenges Loaded ---");

// Day 1: FizzBuzz 
function runFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}

// Day 2: Reverse a String
const reverseStringLoop = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) { reversed += str[i]; }
    return reversed;
};

// Day 3: Find Largest Number
const findLargestNumber = (arr) => {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) { if (arr[i] > max) max = arr[i]; }
    return max;
};

// Day 4: Remove Duplicates
const removeDuplicatesSet = (arr) => [...new Set(arr)];

// Day 5: Palindrome Checker
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}
