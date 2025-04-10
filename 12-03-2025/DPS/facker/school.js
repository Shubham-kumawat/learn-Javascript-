// import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';


//  function createSchool() {
//      const subjects = {
//          '1-2': ['English', 'Math', 'Hindi'],
//          '3-8': ['English', 'Math', 'Hindi', 'Science', 'GK', 'Social Science'],
//          '8-10': ['English', 'Math', 'Hindi', 'Science', 'History', 'Social Science', 'GK'],
//          '11-12': {
//              Science_Math: ['Physics', 'Chemistry', 'Math', 'English', 'Hindi'],
//              Science_Bio: ['Physics', 'Chemistry', 'Biology', 'English', 'Hindi'],
//              Commerce: ['Math', 'Finance', 'Accounts', 'Hindi', 'English'],
//              Arts: ['Hindi', 'Political Science', 'Literature', 'English']
//          }
//      };

    
//      const school = {
//          name: 'DPS',
//          establishedYear: 2008,
//          classes: {}
//      };


//      for (let classNum = 1; classNum <= 12; classNum++) {
//          school.classes[`Class ${classNum}`] = {};

//          const numSections = faker.number.int({ min: 4, max: 10 });
//          for (let section = 0; section < numSections; section++) {
//              const sectionName = String.fromCharCode(65 + section); 
//              school.classes[`Class ${classNum}`][`Section ${sectionName}`] = {};

//              const numStudents = faker.number.int({ min: 10, max: 15 });
//              for (let roll = 1; roll <= numStudents; roll++) {
//                  const student = {
//                      name: faker.person.fullName(),
//                      fathersName: faker.person.fullName(),
//                      mothersName: faker.person.fullName(),
//                      dob: faker.date.birthdate({ min: 6, max: 18, mode: 'age' }).toISOString().split('T')[0],
//                      rollNumber: roll,
//                      marks: {}
//                  };

                   
//                  let studentSubjects = [];
//                  if (classNum >= 1 && classNum <= 2) {
//                      studentSubjects = subjects['1-2'];
//                  } else if (classNum >= 3 && classNum <= 8) {
//                      studentSubjects = subjects['3-8'];
//                  } else if (classNum > 8 && classNum <= 10) {
//                      studentSubjects = subjects['8-10'];
//                  } else if (classNum >= 11 && classNum <= 12) {
//                      const streams = Object.keys(subjects['11-12']);
//                      const stream = streams[section % streams.length];
//                      studentSubjects = subjects['11-12'][stream];
//                      student.stream = stream.replace('_', ' ');
//                  }

//                  studentSubjects.forEach(subject => {
//                      student.marks[subject] = faker.number.int({ min: 33, max: 100 });
//                  });

//                  school.classes[`Class ${classNum}`][`Section ${sectionName}`][`Roll ${roll}`] = student;
//              }
//          }
//      }

//      return school;
//  }

//  const school = createSchool();
//  console.log(school);
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

function createSchool() {
    const subjects = {
        '1-2': ['English', 'Math', 'Hindi'],
        '3-8': ['English', 'Math', 'Hindi', 'Science', 'GK', 'Social Science'],
        '8-10': ['English', 'Math', 'Hindi', 'Science', 'History', 'Social Science', 'GK'],
        '11-12': {
            Science_Math: ['Physics', 'Chemistry', 'Math', 'English', 'Hindi'],
            Science_Bio: ['Physics', 'Chemistry', 'Biology', 'English', 'Hindi'],
            Commerce: ['Math', 'Finance', 'Accounts', 'Hindi', 'English'],
            Arts: ['Hindi', 'Political Science', 'Literature', 'English']
        }
    };

    const school = {
        name: 'DPS',
        establishedYear: 2008,
        classes: {},
        schoolTopper: null 
    };

    let highestSchoolMarks = 0;

    for (let classNum = 1; classNum <= 12; classNum++) {
        school.classes[`Class ${classNum}`] = {};
        let highestClassMarks = 0;
        let classTopper = null;

        const numSections = faker.number.int({ min: 4, max: 10 });
        for (let section = 0; section < numSections; section++) {
            const sectionName = String.fromCharCode(65 + section);
            school.classes[`Class ${classNum}`][`Section ${sectionName}`] = {};
            let highestSectionMarks = 0;
            let sectionTopper = null;

            const numStudents = faker.number.int({ min: 10, max: 15 });
            for (let roll = 1; roll <= numStudents; roll++) {
                const student = {
                    name: faker.person.fullName(),
                    fathersName: faker.person.fullName(),
                    mothersName: faker.person.fullName(),
                    dob: faker.date.birthdate({ min: 6, max: 18, mode: 'age' }).toISOString().split('T')[0],
                    rollNumber: roll,
                    marks: {}
                };

        
                let studentSubjects = [];
                if (classNum >= 1 && classNum <= 2) {
                    studentSubjects = subjects['1-2'];
                } else if (classNum >= 3 && classNum <= 8) {
                    studentSubjects = subjects['3-8'];
                } else if (classNum > 8 && classNum <= 10) {
                    studentSubjects = subjects['8-10'];
                } else if (classNum >= 11 && classNum <= 12) {
                    const streams = Object.keys(subjects['11-12']);
                    const stream = streams[section % streams.length];
                    studentSubjects = subjects['11-12'][stream];
                    student.stream = stream.replace('_', ' ');
                }

                
                studentSubjects.forEach(subject => {
                    student.marks[subject] = faker.number.int({ min: 33, max: 100 });
                });

                
                const totalMarks = Object.values(student.marks).reduce((sum, mark) => sum + mark, 0);
                student.totalMarks = totalMarks;


                if (totalMarks > highestSectionMarks) {
                    highestSectionMarks = totalMarks;
                    sectionTopper = { ...student };
                }

            
                if (totalMarks > highestClassMarks) {
                    highestClassMarks = totalMarks;
                    classTopper = { ...student, section: sectionName };
                }

                
                if (totalMarks > highestSchoolMarks) {
                    highestSchoolMarks = totalMarks;
                    school.schoolTopper = { 
                        ...student, 
                        class: classNum, 
                        section: sectionName 
                    };
                }

                school.classes[`Class ${classNum}`][`Section ${sectionName}`][`Roll ${roll}`] = student;
            }

        
            school.classes[`Class ${classNum}`][`Section ${sectionName}`]['SectionTopper'] = sectionTopper;
        }

    
        school.classes[`Class ${classNum}`]['ClassTopper'] = classTopper;
    }

    return school;
}

const school = createSchool();

console.log(' SCHOOL TOPPER:', school.schoolTopper);

console.log('\n CLASS TOPPERS:');
Object.keys(school.classes).forEach(className => {
    console.log(`${className} Topper:`, school.classes[className].ClassTopper);
});

console.log(' SECTION TOPPERS:');
Object.keys(school.classes).forEach(className => {
    Object.keys(school.classes[className]).forEach(sectionName => {
        if (school.classes[className][sectionName].SectionTopper) {
            console.log(`${className}, ${sectionName} Topper:`, school.classes[className][sectionName].SectionTopper);
        }
    });
});


