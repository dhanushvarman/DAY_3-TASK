let resume = {
    //nested ojects
    personal_details: {
      name: "Dhanushvarman J",
      age: 21,
      qualification: "B.E",
      email: "dhanuxxx@gmail.com",
      phoneNo: 9842495419,
    },
    technical_skills: {
      programming_languages_known: "python, JavaScript, C, C++",
      web_technologies: "HTML, CSS",
    },
    education: {
      B_E: {
        specialization: "Civil Engineering",
        Aggregate: 79.98,
      },
      HSC: {
        specialization: "CS",
        Aggregate: 94.08,
      },
      SSLC: {
        specialization: "General",
        Aggregate: 93.04,
      },
    },
  };
  //to print B.E details in Education .
  console.log(resume.education.B_E);