let className = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

let sectionName = ["A", "B", "C", "D"];

let numberOfStudent = [1, 2];

const school = {
    name: "DPS",
    established: 2008,
    classes: className.map((classs) => {
      let subjects = [];
      if (classs <= 2) {
        subjects = ["english", "hindi", "maths"];
      } else if (classs <= 8) {
        subjects = ["english", "hindi", "science", "maths", "social-science", "gk"];
      } else if (classs <= 10) {
        subjects = ["english", "hindi", "maths", "science", "social-science", "history", "gk"];
      }
  
      
      const streams = classs >= 11 ? ["science-math", "science-bio", "commerce", "arts"] : [];
      const streamSubjects = {
        "science-math": ["maths", "physics", "chemistry", "hindi", "english"],
        "science-bio": ["physics", "chemistry", "biology", "hindi", "english"],
        "commerce": ["maths", "finance", "accounts", "hindi", "english"],
        "arts": ["political-science", "literature", "hindi", "english"],
      };
  
      
      const sections = sectionName.map((sectionId, sectionIndex) => {
        const section = {
          Section_Name: sectionId,
          students: [],
        };
  
        if (classs >= 11) {
          section.stream = streams[sectionIndex];
          subjects = streamSubjects[section.stream];
        }

   section.students = numberOfStudent.map((studentNumber) => {
  const student = {
    name: `Student ${studentNumber}`,
    fatherName: `Father ${studentNumber}`,
    motherName: `Mother ${studentNumber}`,
    dob: `200${classs}-0${studentNumber}-01`,
    marks: {},
  };

  subjects.forEach((subject) => {
    student.marks[subject] = Math.floor(Math.random() * 100);
  });

  return student;
});
  
        return section;
      })
  
      return {
        classs,
        sections,
      }
    })
  }


let school_topper = "";
let schoolHighestMarks = 0;

school.classes.forEach((classItem) => {
  let classesTopper="";
  let classesHigestMarks=0;
    classItem.sections.forEach((section) => {
       let sectionTopper="";
  let sectionHigestMarks=0;
        section.students.forEach((student) => {
            const totalMarks = Object.values(student.marks).reduce((sum, mark) => sum + mark, 0);

         if (totalMarks > sectionHigestMarks) {
                sectionHigestMarks = totalMarks;
                sectionTopper = {
                    name: student.name,
                    classs: classItem.classs,
                    section: section.Section_Name,
                    totalMarks,
                    marks: student.marks
                };
            }

            if (totalMarks > classesHigestMarks) {
                classesHigestMarks = totalMarks;
               classesTopper = {
                    name: student.name,
                    classs: classItem.classs,
                    section: section.Section_Name,
                    totalMarks,
                    marks: student.marks
                };
            }

            if (totalMarks > schoolHighestMarks) {
                schoolHighestMarks = totalMarks;
               school_topper = {
                    name: student.name,
                    classs: classItem.classs,
                    section: section.Section_Name,
                    totalMarks,
                    marks: student.marks
                };
            }
        });
        console.log("sectionTopper:")
        console.log(sectionTopper)
         
    });
    console.log("classTopper")
    console.log(classesTopper)
        
});

console.log("SchoolTopper:");
console.log( school_topper)
console.log(school)

