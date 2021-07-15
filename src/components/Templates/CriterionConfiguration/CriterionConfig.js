export const CRITERION_CONFIG = {
  "1": {
    "11" : {
      "description" : "Programme for which syllabus revision was carried out during the acedemic year",
      "step" : 1,
      "fields": [
        {
          "name": "programme",
          "label": "Name Of Programme",
          "type": "select",
          "props": {
            "field" : "programme"
          }
        },
        {
          "name": "date_of_revision",
          "label": "Date Of Revision",
          "type": "date",
        },
      ]
    },
    "12" : {
      "step" : 2,
      "description" : "Programmes/Course focused on Employability/ enterpreneurship / skill development during acedemic year",
      "fields": [
        {
          "name": "programme",
          "label": "Programme",
          "type": "select",
          "props": {
            "field" : "programme"
          }
        },
        {
          "name": "date_of_revision",
          "label": "Date Of Revision",
          "type": "date",
        },
      ]
    },
    "21" : {
      "step" : 3,
      "description" : "New programmes / courses introduced during the acedemic year",
      "fields": [
        {
          "name": "programme",
          "label": "Name Of Programme",
          "type": "select",
          "props": {
            "field" : "programme"
          }
        },
        {
          "name": "date_of_introduction",
          "label": "Date Of Introduction",
          "type": "date",
        },
      ]
    },
    "31" : {
      "step" : 4,
      "description" : "Fields Projects/ Internships under taken during the year",
      "fields": [
        {
          "name": "value_added_courses",
          "label": "Value Added Courses",
          "type": "text",
        },
        {
          "name": "date_of_introduction",
          "label": "Date Of Introduction",
          "type": "date",
        },
        {
          "name": "student_enrolled",
          "label": "No Of Students Enrolled",
          "type": "number",
        },
      ]
    },
    "32" : {
      "step" : 5,
      "description" : "Value Added courses imparting transferable and life skills offered during the year",
      "fields": [
        {
          "name": "project_title",
          "label": "Project Title",
          "type": "text",
        },
        {
          "name": "student",
          "label": "Name of Students Enrolled For Internships/ Projects",
          "type": "text",
          "extras": {
            "multiline" : true,
            "rows" : "4"
          }
        },
      ]
    },
    "41" : {
      "step" : 5,
      "description" : "whether structured feedback recieved from all the stakeholders",
      "fields": [
        {
          "name": "from_students",
          "label": "From Students",
          "type": "checkbox",
          "yesNoField" : true, 
          "options" : [
            {
              "label" : "Yes",
              "value" : true
            },
            {
              "label" : "No",
              "value" : false
            }
          ]
        },
        {
          "name": "from_teachers",
          "label": "From Teachers",
          "type": "checkbox",
          "yesNoField" : true, 
          "options" : [
            {
              "label" : "Yes",
              "value" : true
            },
            {
              "label" : "No",
              "value" : false
            }
          ]
        },
        {
          "name": "from_employers",
          "label": "From Employers",
          "type": "checkbox",
          "yesNoField" : true, 
          "options" : [
            {
              "label" : "Yes",
              "value" : true
            },
            {
              "label" : "No",
              "value" : false
            }
          ]
        },
        {
          "name": "from_alumni",
          "label": "From Alumni",
          "type": "checkbox",
          "yesNoField" : true, 
          "options" : [
            {
              "label" : "Yes",
              "value" : true
            },
            {
              "label" : "No",
              "value" : false
            }
          ]
        },
        {
          "name": "from_parents",
          "label": "From Parents",
          "type": "checkbox",
          "yesNoField" : true, 
          "options" : [
            {
              "label" : "Yes",
              "value" : true
            },
            {
              "label" : "No",
              "value" : false
            }
          ]
        },
      ]
    },
    "42" : {
      "step" : 6,
      "description" : "How Feedback Obtained is being analyzed and utilized for overall development of the department",
      "fields": [
        {
          "name": "feedback",
          "label": "Feedback",
          "type": "text",
          "extras": {
            "multiline" : true,
            "rows" : 4,
          }
        },
      ]
    },
  },
  "2" : {
    "11" : {
      "step" : 1,
      "description" : "Demand Ratio During The Year",
      "fields": [
          {
          "name": "programme",
          "label": "Name Of Programme",
          "type": "select",
          "props" : {
            "field" : "programme"
          }
        },
        {
          "name" : "seats",
          "label" : "No Of Seats Available",
          "type" : "number"
        },
        {
          "name" : "applications_received",
          "label" : "No Of Apppications recieved",
          "type" : "number"
        },
        {
          "name" : "students_enrolled",
          "label" : "Students Enrolled",
          "type" : "number"
        },
      ]
    },
    "21" : {
      "step" : 2,
      "description" : "Student- Full Time teacher ratio (Current Year data)",
      "fields": [
          {
          "name": "year",
          "label": "Year",
          "type": "number",
        },
        {
          "name" : "students_enrolled_ug",
          "label" : "No Of Students Enrolled (UG)",
          "type" : "number"
        },
        {
          "name" : "students_enrolled_pg",
          "label" : "No Of Students Enrolled (PG)",
          "type" : "number"
        },
        {
          "name" : "teachers_full_time_ug",
          "label" : "Full Time Teachers available in the department [only UG courses]",
          "type" : "number"
        },
        {
          "name" : "teachers_full_time_pg",
          "label" : "Full Time Teachers available in the department [only PG courses]",
          "type" : "number"
        },
        {
          "name" : "teachers_full_time_both",
          "label" : "Number Of Teachers Teaching both UG and PG Courses",
          "type" : "number"
        }
      ]
    },
    "31" : {
      "step" : 3,
      "description" : "Percentage of teachers using ICT for effective teaching with Learning Management Systems (LMS), E-learning resources etc. (current year data)",
      "fields": [
          {
          "name": "teachers_on_roll",
          "label": "No Of Teachers on roll",
          "type": "number",
        },
        {
          "name" : "teachers_using_ict",
          "label" : "No Of teacher using ICT(LMS Portal, e-resources)",
          "type" : "number"
        },
        {
          "name" : "ict_tools_info",
          "label" : "ICT tools and resources available",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        },
        {
          "name" : "ict_enabled_classrooms",
          "label" : "No of ICT enabled classrooms",
          "type" : "number"
        },
        {
          "name" : "smart_classrooms",
          "label" : "No of smart classrooms",
          "type" : "number"
        },
        {
          "name" : "e_resources_used",
          "label" : "E-resources and techniques used",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        }
      ]
    },
    "32" : {
      "step" : 4,
      "description" : "Students mentoring system available in the department? Give details. (maximum 500 words) ",
      "fields": [
          {
          "name": "student_mentoring_systems_info",
          "label": "Students mentoring system Details",
          "type": "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        }
      ]
    },
    "33" : {
      "step" : 5,
      "description" : " ",
      "fields": [
          {
          "name": "students_enrolled_in_dept",
          "label": "Number of students enrolled in the department",
          "type": "number",
        },
        {
          "name": "no_of_full_time_teachers",
          "label": "Number of Full time teachers",
          "type": "number",
        },
        {
          "name": "mentor_mentee_ratio",
          "label": "Mentor : Mentee Ratio",
          "type": "number",
        }
      ]
    }, 
    "41" : {
      "step" : 6,
      "description" : "Number of full time teachers appointed during the year",
      "fields": [
          {
          "name": "no_of_sanctioned_positions",
          "label": "Number of sanctioned positions",
          "type": "number",
        },
        {
          "name": "no_position_filled",
          "label": "No of positions filled",
          "type": "number",
        },
        {
          "name": "vacant_positions",
          "label": "vacant positions",
          "type": "number",
        },
        {
          "name": "position_filled_in_current_year",
          "label": "Position filled in current year",
          "type": "number",
        },
        {
          "name": "no_of_faculty_with_phd",
          "label": "no of faculty with PHD",
          "type": "number",
        }
      ]
    },
    "42" : {
      "step" : 6,
      "description" : `Honours and recognitions received by teachers
      (received awards, recognition, fellowships at State, National, International level from Government,
      recognised hodies during the year)`,
      "fields": [
          {
          "name": "year_of_award",
          "label": "year of award",
          "type": "number",
        },
        {
          "name": "name_of_full_time_teacher",
          "label": `Name of full time teachers receiving awards from state level, national level, international level`,
          "type": "number",
        },
        {
          "name": "designation",
          "label": "designation",
          "type": "text",
        },
        {
          "name": "name_of_award",
          "label": `Name of the award,fellowship, received from Government or recognized bodies`,
          "type": "text",
        }
      ]
    },
    "61" : {
      "step" : 7,
      "description" : `Program outcomes (PO), program specific outcomes (PS0) and course outcomes (CO)
      for all programs offered by the department are stated and displayed in website of the institution
      (to provide the weblink)
      (Enclose list of PO, PSO & CO for all programs duly approved by the BoS if not submítted carlicr
      as Annexure 4)`,
      "fields": [
          {
          "name": "link",
          "label": "Web Link",
          "type": "text",
        },
      ]
    }, 
  },
  "3" : {
    "11" : {
      "step" : 1,
      "description" : "Teachers awarded National/International fellowship for advanced studies/ research during the year",
      "fields": [
          {
          "name": "type",
          "label": "Type Of Award",
          "type": "checkbox",
          "options" :[
            {
              "label" : "International",
              "value" : "International"
            },
            {
              "label" : "National",
              "value" : "National"
            }
          ]
        },
        {
          "name": "name_of_teacher",
          "label": "Name of teacher awarded the fellowship",
          "type": "text",
        },
        {
          "name": "date_of_award",
          "label": "Date Of Award",
          "type": "date",
        },
        {
          "name": "name_of_award",
          "label": "Name of award",
          "type": "text",
        },
        {
          "name": "agency",
          "label": "Agency",
          "type": "text",
        },
      ]
    }, 
    "12" : {
      "step" : 2,
      "description" : `Number of JRFs, SRFs, Post Doctoral Fellows, Research Associates and other fellows in the
      department enrolled during the year`,
      "fields": [
        {
          "name": "name_of_research_fellowship",
          "label":"name of research fellowship",
          "type" : "text"
        },
        {
          "name": "duration_of_fellowship",
          "label":"Duration of fellowship",
          "type" : "text"
        },
        {
          "name": "funding_agency",
          "label":"funding agency",
          "type" : "text"
        },
      ]
    },
    "21" : {
      "step" : 3,
      "description" : `Research funds sanctíoned and received from various agencies, industry and other organisations
      (Attach copy of sanction letter(s) as Annexure 6)`,
      "fields": [
        {
          "name": "type",
          "label": "nature of award",
          "type": "checkbox",
          "options" :[
            {
              "label" : "Major Project",
              "value" : "Major Project"
            },
            {
              "label" : "Major Project",
              "value" : "Major Project"
            },
            {
              "label" : "International Project",
              "value" : "International Project"
            },
            {
              "label" : "Interdisciplinary Project",
              "value" : "Interdisciplinary Project"
            },
            {
              "label" : "Industry Sponsored Project",
              "value" : "Industry Sponsored Project"
            },
            {
              "label" : "Student Research Project",
              "value" : "Student Research Project"
            },
            {
              "label" : "Other",
              "value" : "Other"
            }
          ]
        },
        {
          "name" : "name_of_project",
          "label" : "Name of project",
          "type" : "text"
        },
        {
          "name" : "name_of_agency",
          "label" : "Name of agency",
          "type" : "text"
        },
        {
          "name" : "total_grant",
          "label" : "Total Grant",
          "type" : "number"
        },
        {
          "name" : "amount_received",
          "label" : "Amount received",
          "type" : "number"
        },
        {
          "name" : "duration",
          "label" : "Duration",
          "type" : "text"
        },
      ]
    },
    "31" : {
      "step": 4,
      "description" : `Workshops/Seminars Conducted on Intellectual Property Rights (IPR) and Industry-Academia
      Innovative practices during the year`,
      "fields" : [
        {
          "name" : "title_of_seminar",
          "label" : "Title of seminar",
          "type" : "text"
        },
        {
          "name" : "organised_by",
          "label" : "organised by",
          "type" : "text"
        },
        {
          "name" : "date",
          "label" : "Date",
          "type" : "date"
        }
      ]
    },
    "32" : {
      "step" : 5,
      "description" : `2 Awards for Innovation won by Institution/Teachers/Research scholars/Students during the year
      (Enclose copy of Certificate as Annexure 7)`,
      "fields" : [
        {
          "name" : "title_of_innovation",
          "label" : "title of innovation",
          "type" : "text"
        },
        {
          "name" : "name_of_awardee",
          "label" : "name of awardee",
          "type" : "text"
        },
        {
          "name" : "awarding_agency",
          "label" : "awarding agency",
          "type" : "text"
        },
        {
          "name" : "date",
          "label" : "Date of award",
          "type" : "date"
        },
        {
          "name" : "category",
          "label" : "category",
          "type" : "text"
        },
      ]
    },
    "33" : {
      "step" : 6,
      "description" : `No. of Incubation centre created, start-ups incubated on campus during the year`,
      "fields" : [
        {
          "name" : "incubation_center",
          "label" : "incubation center",
          "type" : "text"
        },
        {
          "name" : "name",
          "label" : "name",
          "type" : "text"
        },
        {
          "name" : "sponsored_by",
          "label" : "sponsored by",
          "type" : "text"
        },
        {
          "name" : "name_of_startup",
          "label" : "name of the startup",
          "type" : "text"
        },
        {
          "name" : "nature_of_startup",
          "label" : "nature of startup",
          "type" : "text"
        },
        {
          "name" : "date_of_commencement",
          "label" : "date of commencement",
          "type" : "date"
        },
      ]
    },
    "41" : {
      "step" : 7,
      "description" : `Ph. Ds awarded during the year (Enclose list of Ph. Ds awarded [Title. Name of the scholar
        Name of the supervisor as Annexure 8) `,
      "fields" : [
        {
          "name" : "dept",
          "label" : "Name Of Department",
          "type" : "select",
          "props" : {
            "field" : "dept"
          }
        },
        {
          "name" : "no_of_phd_awards",
          "label" : "no of phd awards",
          "type" : "text"
        }
      ]
    },
    "42" : {
      "step" : 8,
      "description" : `2 Research Publications in the Journals notified on UGC website during the year.
      Provide list of all Research Publications in Journals mentioning the UGC List of Journal
      Number. (Name of authors, Title of Paper, Title of the Journal, Volume, Issue, Page Number,
      ISSN as Annexure 9)`,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" :[
            {
              "label" : "International",
              "value" : "International"
            },
            {
              "label" : "National",
              "value" : "National"
            }
          ]
        },
        {
          "name" : "no_of_publication",
          "label" : "no of publication",
          "type" : "number"
        },
        {
          "name" : "avg_impact_factor",
          "label" : "avg impact factor",
          "type" : "text"
        }
      ]
    },
    "43" : {
      "step" : 9,
      "description" : `BOOkS and Chapters in edited Volumes/Books published, and Conference papers in National/International Proceedings by Teachers during the year`,
      "fields" : [
        {
          "name" : "no_of_publication",
          "label" : "no of publication",
          "type" : "number",
        },
      ]
    },
    "44" : {
      "step" : 10,
      "description" : `Patents published/awarded during the year (Provide copy of Certificate as Annexure 11) `,
      "fields" : [
        {
          "name" : "patent_status",
          "label" : "patent status",
          "type" : "checkbox",
          "options" :[
            {
              "label" : "Published",
              "value" : "Published"
            },
            {
              "label" : "Filed",
              "value" : "Filed"
            }
          ]
        },
        {
          "name" : "patent_no",
          "label" : "patent no",
          "type" : "number",
        },
        {
          "name" : "date_of_award",
          "label" : "date of award",
          "type" : "date",
        },
      ]
    },
    "45" : {
      "step" : 11,
      "description" : `Bibliometrics of the publications during the last Academic year based on average citation index in
      Scopus/ Web of Science or PubMed/ Indian Citation Index`,
      "fields" : [
        {
          "name" : "title_of_paper",
          "label" : "title of paper",
          "type" : "text",
        },
        {
          "name" : "name_of_author",
          "label" : "name of author(s)",
          "type" : "text",
        },
        {
          "name" : "title_of_journal",
          "label" : "title of journal",
          "type" : "text",
        },
        {
          "name" : "citation_index",
          "label" : "citation index",
          "type" : "text",
        },
        {
          "name" : "institution_affiliation",
          "label" : "institution affiliation as mentioned in the publication",
          "type" : "text",
        },
        {
          "name" : "no_of_citations",
          "label" : "no of citations excluding self citations",
          "type" : "number",
        },
      ]
    },
    "46" : {
      "step" : 12,
      "description" : ` h-Index of the Institutional Publications during the year. (based on Scopus/ Web of science). `,
      "fields" : [
        {
          "name" : "title_of_paper",
          "label" : "title of paper",
          "type" : "text",
        },
        {
          "name" : "name_of_author",
          "label" : "name of author(s)",
          "type" : "text",
        },
        {
          "name" : "title_of_journal",
          "label" : "title of journal",
          "type" : "text",
        },
        {
          "name" : "h_index",
          "label" : "h index",
          "type" : "text",
        },
        {
          "name" : "volume_issue",
          "label" : "Volume,Issue, Page Number",
          "type" : "text",
        },
        {
          "name" : "institution_affiliation",
          "label" : "institution affiliation as mentioned in the publication",
          "type" : "text",
        },
        {
          "name" : "no_of_citations",
          "label" : "no of citations excluding self citations",
          "type" : "number",
        },
      ]
    },
    "47" : {
      "step" : 13,
      "description" : `Faculty participation in Seminars/Conferences and Symposia during the year:
      Attach a list of including Name of the teacher, Name of event, Date(s), Organizers, Venue;
      if presented a paper then Title of Paper; Title of Keynote address; Chaired a session; Resource Person
      as Annexure 12) `,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" :[
            {
              "label" : "Attended Seminars",
              "value" : "Attended Seminars"
            },
            {
              "label" : "Presented Papers",
              "value" : "Presented Papers"
            },
            {
              "label" : "Resource Persons",
              "value" : "Resource Persons"
            }
          ]
        },
        {
          "name" : "internation_level",
          "label" : "international level",
          "type" : "number",
        },
        {
          "name" : "national_level",
          "label" : "national level",
          "type" : "number",
        },
        {
          "name" : "state_level",
          "label" : "state level",
          "type" : "number",
        },
        {
          "name" : "local_level",
          "label" : "local level",
          "type" : "number",
        },
      ]
    },
    "51" : {
      "step" : 14,
      "description" : `Revenue generated from Consultancyduring the year (Attach supportive document as 
        Annexure 13) `,
      "fields" : [
        {
          "name" : "name_of_consultant",
          "label" : "name of consultant",
          "type" : "text",
        },
        {
          "name" : "name_of_project",
          "label" : "name of project",
          "type" : "text",
        },
        {
          "name" : "agency",
          "label" : "agency",
          "type" : "text",
        },
        {
          "name" : "revenue_in_rupees",
          "label" : "revenue in rupees",
          "type" : "number",
        },
        {
          "name" : "state_level",
          "label" : "state level",
          "type" : "number",
        },
      ]
    },
    "52" : {
      "step" : 15,
      "description" : `Revenue generated from Consultancyduring the year (Attach supportive document as 
        Annexure 13) `,
      "fields" : [
        {
          "name" : "name_of_consultant",
          "label" : "name of consultant",
          "type" : "text",
        },
        {
          "name" : "title_of_programme",
          "label" : "title of programme",
          "type" : "text",
        },
        {
          "name" : "agency",
          "label" : "agency",
          "type" : "text",
        },
        {
          "name" : "revenue_in_rupees",
          "label" : "revenue in rupees",
          "type" : "number",
        },
        {
          "name" : "no_of_trainees",
          "label" : "no of trainees",
          "type" : "number",
        },
      ]
    },
    "61" : {
      "step" : 16,
      "description" : `Number of extension and outreach programmes conducted in collaboration with industry, communty
      and Non-Gove nment Organisations through NSS/NCC/Red cross/Youth Red Cross (YRC) etc., during the
      year (Attach copy of Attendance of participants as Annexure 14) `,
      "fields" : [
        {
          "name" : "name_of_activity",
          "label" : "title of activity",
          "type" : "text",
        },
        {
          "name" : "organising_agency",
          "label" : "Organasing agency",
          "type" : "text",
        },
        {
          "name" : "no_of_teachers",
          "label" : "no of teachers coordinated",
          "type" : "number",
        },
        {
          "name" : "no_of_students",
          "label" : "Number of students participants",
          "type" : "number",
        },
        {
          "name" : "date_of_event",
          "label" : "date of event",
          "type" : "date",
        },
      ]
    },
    "62" : {
      "step" : 17,
      "description" : `Awards and recognition received for extension activities from Government and other
      recognized bodies during the year (Attach copy of Certificate as Annexure 15) `,
      "fields" : [
        {
          "name" : "name_of_activity",
          "label" : "name of activity",
          "type" : "text",
        },
        {
          "name" : "award_name",
          "label" : "award/ recognition",
          "type" : "text",
        },
        {
          "name" : "awarding_bodies",
          "label" : "awarding bodies",
          "type" : "text",
        },
        {
          "name" : "no_of_students",
          "label" : "no of students benefited",
          "type" : "number",
        },
      ]
    },
    "63" : {
      "step" : 18,
      "description" : `Students participating in extension activities with Government Organisations, Non-Government
      Organisations and programmes such as Swachh Bharat, Aids Awareness, Gender Issue, etc. during
      the year (Attach copy of Attendance of participants as Annexure 16) `,
      "fields" : [
        {
          "name" : "name_of_scheme",
          "label" : "name of scheme",
          "type" : "text",
        },
        {
          "name" : "name_of_activity",
          "label" : "name of activity",
          "type" : "text",
        },
        {
          "name" : "agency",
          "label" : "Organasing agency",
          "type" : "text",
        },
        {
          "name" : "no_of_teachers",
          "label" : "no of teachers coordinated",
          "type" : "number",
        },
        {
          "name" : "no_of_students",
          "label" : "Number of students participants",
          "type" : "number",
        },
      ]
    },
    "71" : {
      "step" : 19,
      "description" : `Number of Collaborative activities for research, faculty exchange, student exchange during the
      year (Attach copy of Agreement/ MoU as Annexure 17) `,
      "fields" : [
        {
          "name" : "nature_of_activity",
          "label" : "nature of activity",
          "type" : "text",
        },
        {
          "name" : "participant",
          "label" : "participant",
          "type" : "text",
        },
        {
          "name" : "source_of_financial_support",
          "label" : "source of financial support",
          "type" : "text",
        },
        {
          "name" : "duration",
          "label" : "duration",
          "type" : "text",
        },
      ]
    },
    "72" : {
      "step" : 19,
      "description" : `Linkages with institutions/industries for internship, on-the-job training, project work, sharing of
      research facilities etc. during the year (Attach copy of Agreement/ MoU as Annexure 18)`,
      "fields" : [
        {
          "name" : "nature_of_linkage",
          "label" : "nature of linkage",
          "type" : "text",
        },
        {
          "name" : "name_of_linkage",
          "label" : "name of linkage",
          "type" : "text",
        },
        {
          "name" : "institution",
          "label" : "institution",
          "type" : "text",
        },
        {
          "name" : "duration",
          "label" : "duration",
          "type" : "text",
        },
        {
          "name" : "participant",
          "label" : "participant",
          "type" : "text",
        }
      ]
    },
    "73" : {
      "step" : 19,
      "description" : `MoUs signed with institutions of national, international importance, other universities,
      industries, corporate houses etc. during the year (Attach copy of MoU as Annexure 19)`,
      "fields" : [
        {
          "name" : "organisation",
          "label" : "organisation",
          "type" : "text",
        },
        {
          "name" : "date_of_mou",
          "label" : "date of MOU Signed",
          "type" : "date",
        },
        {
          "name" : "purpose",
          "label" : "purpose",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        },
        {
          "name" : "no_of_students_teachers_participated",
          "label" : "no of students teachers participated",
          "type" : "number",
        },
      ]
    }
  },
  "4" : {
    "12" : {
      "step" : 1,
      "description" :`Details of augmentation in infrastructure facilities during the year (Do not add common
        facility like shared class rooms e.g. ACL Building )`,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" :[
            {
              "label" : "Classrooms",
              "value" : "Classrooms"
            },
            {
              "label" : "Laboratories",
              "value" : "Laboratories"
            },
            {
              "label" : "Seminar Halls",
              "value" : "Seminar Halls"
            },
            {
              "label" : "Classrooms with LCD",
              "value" : "Classrooms with LCD"
            },
            {
              "label" : "Classrooms with Wi-Fi/LAN",
              "value" : "Classrooms with Wi-Fi/LAN"
            },
            {
              "label" : "Video Center",
              "value" : "Video Center"
            },
            {
              "label" : "seminar Halls With ICT",
              "value" : "seminar Halls With ICT"
            },
            {
              "label" : "No Of Important Equipment Purchased",
              "value" : "No Of Important Equipment Purchased"
            },
            {
              "label" : "Value Of Equipment Purchased",
              "value" : "Value Of Equipment Purchased"
            },
            {
              "label" : "Others",
              "value" : "Others"
            }
          ]
        },
        {
          "name" : "existing",
          "label" : "existing",
          "type" : "text",
        },
        {
          "name" : "newly_added",
          "label" : "newly added",
          "type" : "text",
        },
      ]
    },
    "22" : {
      "step" : 2,
      "description" :`E-content developed by teachers such as: e-PG-Pathshala, CEC (under e-PG-Pathshala CEC
        (Under Graduate) SWAYAM other MOOCs platform NPTEL/NMEICT/any other Government
        initiatives & institutional (Learning Management System (LMS) etc. `,
      "fields" : [
        {
          "name" : "name_of_teacher",
          "label" : "name of teacher",
          "type" : "text",
        },
        {
          "name" : "name_of_module",
          "label" : "name of module",
          "type" : "text",
        },
        {
          "name" : "platform_link",
          "label" : "Platform on which module is developed",
          "type" : "text",
        },
        {
          "name" : "date_of_launch",
          "label" : "date of launching e-content",
          "type" : "text",
        },
      ]
    },
    "31" : {
      "step" : 3,
      "description" :`Technology Upgradation (overall)`,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" : [
            {
              "value" : "Existing",
              "label" : "Existing"
            },
            {
              "value" : "Added",
              "label" : "Added"
            }
          ]
        },
        {
          "name" : "total_computers",
          "label" : "total computers",
          "type" : "number",
        },
        {
          "name" : "computer_labs",
          "label" : "computer labs",
          "type" : "number",
        },
        {
          "name" : "internet",
          "label" : "internet",
          "type" : "number",
        },
        {
          "name" : "browsing_centers",
          "label" : "browsing centers",
          "type" : "number",
        },
        {
          "name" : "office",
          "label" : "office",
          "type" : "number",
        },
        {
          "name" : "dept",
          "label" : "dept.",
          "type" : "number",
        },
        {
          "name" : "bandwidth",
          "label" : "available bandwidth [MGBPS]",
          "type" : "text",
        },
        {
          "name" : "others",
          "label" : "others",
          "type" : "number",
        },
      ]
    },
    "32" : {
      "step" : 4,
      "description" :`Bandwidth available of internet connection in the Institution (Leased Line)`,
      "fields" : [
        {
          "name" : "leased_line",
          "label" : "MBPS/GBPS",
          "type" : "text",
        },
      ]
    },
    "33" : {
      "step" : 5,
      "description" :`Facility for e-content`,
      "fields" : [
        {
          "name" : "name_of_e_content_facility",
          "label" : "name of e content facility",
          "type" : "text",
        },
        {
          "name" : "link",
          "label" : "Provide the link of the videos and media centre and recording facility",
          "type" : "text",
        },
      ]
    }
  },
  "5" : {
    "11" : {
      "step" : 1,
      "description" :`Scholarships and Financial Support`,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" : [
            {
              "value" : "Financial Support From Institutions",
              "label" : "Financial Support From Institutions"
            },
            {
              "value" : "Financial Support From Others [National]",
              "label" : "Financial Support From Others [National]"
            },
            {
              "value" : "Financial Support From Others [International]",
              "label" : "Financial Support From Others [International]"
            },

          ]
        },
        {
          "name" : "name_of_scheme",
          "label" : "name of scheme",
          "type" : "text"
        },
        {
          "name" : "number_of_students",
          "label" : "number of students",
          "type" : "number",
        },
        {
          "name" : "amount_in_rupees",
          "label" : "amount in rupees",
          "type" : "number",
        },
      ]
    },
    "12" : {
      "step" : 2,
      "description" :`Number of capability enhancement and development schemes such as Soft skill development,
      Remedial coaching, Language lab, Bridge courses, Yoga, Meditation, Personal Counselling and
      Mentoring etc., (Attach the List of Students enrolled as Annexure 20)`,
      "fields" : [
        {
          "name" : "name_of_capacity_enhancing_scheme",
          "label" : "name of capacity enhancing scheme",
          "type" : "text"
        },
        {
          "name" : "no_of_students",
          "label" : "no of students",
          "type" : "number",
        },
        {
          "name" : "agencies_involved",
          "label" : "agencies involved",
          "type" : "text",
        },
        {
          "name" : "date_of_implementation",
          "label" : "date of implementation",
          "type" : "date",
        },
      ]
    },
    "13" : {
      "step" : 3,
      "description" :`Students benefited by guidance for competitive examinations and career counselling offered by
      the institution during the year`,
      "fields" : [
        {
          "name" : "year",
          "label" : "year",
          "type" : "number"
        },
        {
          "name" : "name_of_scheme",
          "label" : "name of scheme",
          "type" : "text",
        },
        {
          "name" : "ben_by_competitive_exams",
          "label" : "no of students benefited by guidance for competitive exams",
          "type" : "text",
        },
        {
          "name" : "ben_by_career_counselling",
          "label" : "no of students benefited by guidance for carrer counselling activities",
          "type" : "text",
        },
        {
          "name" : "passed_in_competitive_exams",
          "label" : "no of students passed in competitive exams",
          "type" : "text",
        },        {
          "name" : "students_placed",
          "label" : "no of students placed",
          "type" : "text",
        },
      ]
    },
    "14" : {
      "step" : 4,
      "description" :`Institutional mechanism for transparency, timely redressal of student grievances, Prevention of
      sexual harassment and ragging cases during the year`,
      "fields" : [
        {
          "name" : "grievances_received",
          "label" : "total grievances received",
          "type" : "number"
        },
        {
          "name" : "grievances_redressed",
          "label" : "no of grievances redressed",
          "type" : "number",
        },
        {
          "name" : "avg_grievance_days",
          "label" : "average number of days for grievance redresed",
          "type" : "number",
        },
      ]
    },
    "21" : {
      "step" : 5,
      "description" :`Details of campus placement during the placed as Annexure 21) year (Attach the list of participating students and students `,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" : [
            {
              "value" : "On Campus",
              "label" : "On Campus"
            },
            {
              "value" : "On Campus",
              "label" : "Off Campus"
            }
          ]
        },
        {
          "name" : "name_of_organization",
          "label" : "name of organization visited",
          "type" : "text",
        },
        {
          "name" : "students_participated",
          "label" : "no of students participated",
          "type" : "number",
        },
        {
          "name" : "students_placed",
          "label" : "no of students placed",
          "type" : "number",
        },
      ]
    },
    "22" : {
      "step" : 6,
      "description" :`Student progression to higher education in percentage during the year`,
      "fields" : [
        {
          "name" : "year",
          "label" : "year",
          "type" : "number",
        },
        {
          "name" : "students_enrolled_higher_education",
          "label" : "no of students enrolling in higher education",
          "type" : "number",
        },
        {
          "name" : "programme",
          "label" : "programme graduated from",
          "type" : "select",
          "extras" : {
            "field" : "programme"
          }
        },
        {
          "name" : "name_of_institute",
          "label" : "name of institute joined",
          "type" : "text",
        },
        {
          "name" : "name_of_programme",
          "label" : "name of programme admitted to",
          "type" : "text",
        },
      ]
    },
    "23" : {
      "step" : 7,
      "description" :`Student progression to higher education in percentage during the year`,
      "fields" : [
        {
          "name" : "type",
          "label" : "Item",
          "type" : "checkbox",
          "options" : [
            {
              "value" :"NET",
              "label" : "NET"
            },
            {
              "value" :"SET",
              "label" : "SET"
            },
            {
              "value" :"SLET",
              "label" : "SLET"
            },
            {
              "value" :"GATE",
              "label" : "GATE"
            },
            {
              "value" :"GMAT",
              "label" : "GMAT"
            },
            {
              "value" :"CAT",
              "label" : "CAT"
            },
            {
              "value" :"GRE",
              "label" : "GRE"
            },
            {
              "value" :"TOFEL",
              "label" : "TOFEL"
            },
            {
              "value" :"Civil Services",
              "label" : "Civil Services"
            },
            {
              "value" :"State Government Services",
              "label" : "State Government Services"
            },
            {
              "value" :"Any Other",
              "label" : "Any Other"
            },
          ]
        },
        {
          "name" : "no_of_students_selected",
          "label" : "no of students selected/ qualifying",
          "type" : "number",
        },
        {
          "name" : "roll_no",
          "label" : "registeration number/ roll number for the exam",
          "type" : "text",
        },
      ]
    },
    "24" : {
      "step" : 8,
      "description" :`Student progression to higher education in percentage during the year`,
      "fields" : [
        {
          "name" : "activity",
          "label" : "activity",
          "type" : "text",
        },
        {
          "name" : "level",
          "label" : "level",
          "type" : "text",
        },
        {
          "name" : "participants",
          "label" : "participants",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        },
      ]
    },
    "31" : {
      "step" : 9,
      "description" :`Number of awards/medals for outstanding performance in sports/cultural activities at
      national/international level (award for a team event should be counted as one) Attach copy of certificates
      as Annexure 22)`,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" : [
            {
              "value" : "National",
              "label" : "National"
            },
            {
              "value" : "International",
              "label" : "International"
            }
          ]
        },
        {
          "name" : "year",
          "label" : "year",
          "type" : "text",
        },
        {
          "name" : "name_of_award",
          "label" : "name of award/ medal",
          "type" : "text",
        },
        {
          "name" : "sports",
          "label" : "sports",
          "type" : "text",
        },
        {
          "name" : "cultural",
          "label" : "cultural",
          "type" : "text",
        },
        {
          "name" : "student_id",
          "label" : "student id",
          "type" : "text",
        },
        {
          "name" : "name_of_student",
          "label" : "name of student",
          "type" : "text",
        },
      ]
    },
    "41" : {
      "step" : 10,
      "description" :`Whether the department has registered Alumni Association? Yes/No, if yes give details (maximum
        500 words): `,
      "fields" : [
        {
          "name" : "whether_registered_alumni",
          "label" : "Details",
          "type" : "text",
          "extras" : {
            "multiline" :true,
            "rows" :4
          }
        },
      ]
    },
    "42" : {
      "step" : 11,
      "description" :`No. of registered Alumni`,
      "fields" : [
        {
          "name" : "no_of_alumni_registered",
          "label" : "No Of Registered Alumni",
          "type" : "number",
        },
      ]
    },
    "43" : {
      "step" : 12,
      "description" :`Alumni contribution during the year (in Rupees)`,
      "fields" : [
        {
          "name" : "alumni_contribution",
          "label" : "`Alumni contribution during the year (in Rupees)",
          "type" : "number",
        },
      ]
    },
    "44" : {
      "step" : 13,
      "description" :`Meetings/activities organized by Alumni Association`,
      "fields" : [
        {
          "name" : "meetings_organized_by_alums",
          "label" : "Meetings/activities organized by Alumni Association",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        },
      ]
    },
  },
  "6" : {
    "21" : {
      "step" : 1,
      "description" :`quality improvement strategies adopted by the department for each of the following (with in 100
        words each): `,
      "fields" : [
        {
          "name" : "type",
          "label" : "type",
          "type" : "checkbox",
          "options" : [
            {
              "value" : "Curriculum Development",
              "label" : "Curriculum Development"
            },
            {
              "value" : "Teaching & Learning",
              "label" : "Teaching & Learning"
            },
            {
              "value" : "Examination & Evaluation",
              "label" : "Examination & Evaluation"
            },
            {
              "value" : "Research & Development",
              "label" : "Research & Development"
            },
            {
              "value" : "Library, ICT & Physical Infrastructure",
              "label" : "Library, ICT & Physical Infrastructure"
            },
            {
              "value" : "Human Resource Management",
              "label" : "Human Resource Management"
            },
            {
              "value" : "Industry Interaction/ Collaboration",
              "label" : "Industry Interaction/ Collaboration"
            },
            {
              "value" : "Admission Of Students",
              "label" : "Admission Of Students"
            },
          ]
        },
        {
          "name" : "strategy",
          "label" : "strategy",
          "type" : "text",
          "extras" : {
            "multiline" :true,
            "rows" : 4
          }
        },
      ]
    },
    "31" : {
      "step" : 2,
      "description" :`Teachers provided with financial support to attend conferences/ workshops and towards membership fee of professional bodies during the year`,
      "fields" : [
        {
          "name" : "year",
          "label" : "year",
          "type" : "number",
        },
        {
          "name" : "name_of_teacher",
          "label" : "name of teacher",
          "type" : "text",
        },
        {
          "name" : "name_of_conference",
          "label" : "name of conference/ workshop attended for which financial support provided",
          "type" : "text",
        },
        {
          "name" : "name_of_professional_body",
          "label" : "name of professional body for which membership fee is provided",
          "type" : "text",
        },
        {
          "name" : "amount",
          "label" : "amount of support",
          "type" : "number",
        },
      ]
    },
    "32" : {
      "step" : 3,
      "description" :`Number of professional development / administrative training programmes organized by the department for teaching and non teaching staff during the year`,
      "fields" : [
        {
          "name" : "year",
          "label" : "year",
          "type" : "number",
        },
        {
          "name" : "title_of_programme",
          "label" : "title of professional development programme organized for teaching staff",
          "type" : "text",
        },
        {
          "name" : "title_of_admin_training_programme",
          "label" : "title of administrative training programme organised for non-teching staff",
          "type" : "text",
        },
        {
          "name" : "date_to",
          "label" : "Date To",
          "type" : "date",
        },
        {
          "name" : "date_from",
          "label" : "date from",
          "type" : "date",
        },
        {
          "name" : "no_of_participant_teaching",
          "label" : "no of participant (teaching staff)",
          "type" : "number",
        },
        {
          "name" : "no_of_participant_non_teaching",
          "label" : "no of participant non teaching staff",
          "type" : "number",
        },
      ]
    },
    "33" : {
      "step" : 4,
      "description" :`No. of teachers attending professional development programmes, viz., Orientation Programme, Refresher Course, Short Term Course, Faculty Development Programmes during the year (attach copy of certificate as Annexure 23)`,
      "fields" : [
        {
          "name" : "title_of_programme",
          "label" : "title of professional development programme",
          "type" : "text",
        },
        {
          "name" : "date_to",
          "label" : "Date To",
          "type" : "date",
        },
        {
          "name" : "date_from",
          "label" : "date from",
          "type" : "date",
        },
        {
          "name" : "no_of_participant_teaching",
          "label" : "no of participant (teaching staff)",
          "type" : "number",
        },
      ]
    },
  },
  "7" : {
    "11" : {
      "step" : 1,
      "description" :`No. of teachers attending professional development programmes, viz., Orientation Programme, Refresher Course, Short Term Course, Faculty Development Programmes during the year (attach copy of certificate as Annexure 23)`,
      "fields" : [
        {
          "name" : "title_of_programme",
          "label" : "title of professional development programme",
          "type" : "text",
        },
        {
          "name" : "date_to",
          "label" : "Date To",
          "type" : "date",
        },
        {
          "name" : "date_from",
          "label" : "date from",
          "type" : "date",
        },
        {
          "name" : "no_of_participant_male",
          "label" : "no of participant (Male)",
          "type" : "number",
        },
        {
          "name" : "no_of_participant_female",
          "label" : "no of participant (Female)",
          "type" : "number",
        },
      ]
    },
    "12" : {
      "step" : 2,
      "description" :`2 Environmental Consciousness and Sustainability/Alternate Energy initiatives such as `,
      "fields" : [
        {
          "name" : "env_initiatives",
          "label" : "2 Environmental Consciousness and Sustainability/Alternate Energy initiatives",
          "type" : "text",
          "extras" :{
            "multiline" : true,
            "rows" : 4
          }
        },
        {
          "name" : "date_to",
          "label" : "Date To",
          "type" : "date",
        },
        {
          "name" : "date_from",
          "label" : "date from",
          "type" : "date",
        },
        {
          "name" : "no_of_participant_male",
          "label" : "no of participant (Male)",
          "type" : "number",
        },
        {
          "name" : "no_of_participant_female",
          "label" : "no of participant (Female)",
          "type" : "number",
        },
      ]
    },
    "14" : {
      "step" : 3,
      "description" :`Inclusion and Situatedness (Attach attendance of participants as Annexure 25`,
      "fields" : [
        {
          "name" : "year",
          "label" : "year",
          "type" : "number",
        },
        {
          "name" : "no_of_initiatives",
          "label" : "no of initiatives to address  locational advantage and disadvantage",
          "type" : "number",
        },
        {
          "name" : "no_of_initiatives_taken",
          "label" : "no of initiatives taken to engage with and contribute to local community",
          "type" : "number",
        },
        {
          "name" : "issues_addressed",
          "label" : "issues addressed",
          "type" : "text",
          "extras" : {
            "multiline" :true,
            "rows" : 4
          }
        },
        {
          "name" : "date_to",
          "label" : "Date To",
          "type" : "date",
        },
        {
          "name" : "date_from",
          "label" : "date from",
          "type" : "date",
        },
        {
          "name" : "no_of_participant_students",
          "label" : "no of participant (Students)",
          "type" : "number",
        },
        {
          "name" : "no_of_participant_staff",
          "label" : "no of participant (Staff)",
          "type" : "number",
        },
      ]
    },
    "16" : {
      "step" : 4,
      "description" :`Activities conducted for promotion of universal Values and Ethics`,
      "fields" : [
        {
          "name" : "activity",
          "label" : "activity",
          "type" : "text",
        },
        {
          "name" : "date_to",
          "label" : "Date To",
          "type" : "date",
        },
        {
          "name" : "date_from",
          "label" : "date from",
          "type" : "date",
        },
        {
          "name" : "no_of_participant",
          "label" : "no of participant",
          "type" : "number",
        },
      ]
    },
    "17" : {
      "step" : 5,
      "description" :`Initiatives taken by the department to make the campus eco-friendly `,
      "fields" : [
        {
          "name" : "eco_initiatives",
          "label" : "Initiatives taken by the department to make the campus eco-friendly ",
          "type" : "text",
          "extras" : {
            "multiline" :true,
            "rows" : 4
          }
        },
      ]
    },
    "21" : {
      "step" : 6,
      "description" :`Describe at least two departmental best practices
      (Title of the Practice, Objectives of the Practice, The Context, The Practice, Evidence of Success,
      Problems encountered & Resources required, Any other information)`,
      "fields" : [
        {
          "name" : "best_practices",
          "label" : "best practices",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        },
      ]
    },
    "31" : {
      "step" : 7,
      "description" :`Provide the details of the performance of the department in one area distinctive to its vision, priority and
      thrust (Attach any supportive document(s) as Annexure 26) `,
      "fields" : [
        {
          "name" : "performance",
          "label" : "performance",
          "type" : "text",
          "extras" : {
            "multiline" :true,
            "rows" : 4
          }
        },
      ]
    },
    "41" : {
      "step" : 8,
      "description" :` Special Status conferred by Central/ State GovernmentUGCICSIR/DST/DBT/ICMR/TEQIP/World Bank/CPE of UGC etc. (Attach copy of sanction letter
        as Annexure 27)`,
      "fields" : [
        {
          "name" : "institution_dept_fac",
          "label" : "institution/Dept faculty",
          "type" : "text",
        },
        {
          "name" : "scheme",
          "label" : "scheme",
          "type" : "text",
        },
        {
          "name" : "funding_agency",
          "label" : "funding_agency",
          "type" : "text",
        },
        {
          "name" : "year_of_award",
          "label" : "year_of_award",
          "type" : "number",
        },
        {
          "name" : "amount",
          "label" : "amount",
          "type" : "number",
        },
      ]
    },
    "81" : {
      "step" : 9,
      "description" :`Action Taken on the Plan for last year:`,
      "fields" : [
        {
          "name" : "action_taken_on_last_year",
          "label" : "Action Taken on Last Year",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        },
      ]
    },
    "91" : {
      "step" : 10,
      "description" :`. Future Plans of action for next academic year (500 words) `,
      "fields" : [
        {
          "name" : "future_plan",
          "label" : "Future Plan",
          "type" : "text",
          "extras" : {
            "multiline" : true,
            "rows" : 4
          }
        },
      ]
    },
  }
}
