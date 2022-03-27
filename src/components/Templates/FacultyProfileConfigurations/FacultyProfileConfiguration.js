export const FACULTY_PROFILE_CONFIG = {
  "3" : {
    "1" : {
      "step" : 1,
      "description" : "(any activity with unique relevance to the department during 01.04.2020 to 31.03.2021 only, such as organizing certificate course, international workshop, placement fair, exceptional academic achievement, etc.)",
      "fields": [
        {
          "name": "activity",
          "label": "Activity",
          "type": "text",
          "extras" : {
            "multiline" : true,
            "rows" : 8

          }
        },
      ]
    },
  },
    "4": {
      "1" : {
        "description" : "Research Papers in UGC/SCI/WEB of Science/ABDC listed/ peer reviewed journals:",
        "step" : 1,
        "fields": [
          {
            "name": "name_of_author",
            "label": "name_of_author",
            "type": "text",
          },
          {
            "name": "title_of_paper",
            "label": "title_of_paper",
            "type": "text",
          },
          {
            "name": "name_of_journal",
            "label": "name_of_journal",
            "type": "text",
          },
          {
            "name": "volume",
            "label": "volume",
            "type": "text",
          },
          {
            "name": "year_of_publication",
            "label": "year_of_publication",
            "type": "number",
          },
          {
            "name": "impact_factor",
            "label": "impact_factor",
            "type": "text",
          },
          {
            "name": "issn_no",
            "label": "issn_no",
            "type": "text",
          },
        ]
      },
      "2" : {
        "step" : 2,
        "description" : "Papers as chapters in book/periodicals, etc.",
        "fields": [
            {
            "name": "name_of_author",
            "label": "name_of_author",
            "type": "text",
            },
            {
            "name": "title_of_paper",
            "label": "title_of_paper",
            "type": "text",
            },
            {
            "name": "name_of_book",
            "label": "name_of_book",
            "type": "text",
            },
            {
            "name": "page_no",
            "label": "page_no",
            "type": "text",
            },
            {
            "name": "year_of_publication",
            "label": "year_of_publication",
            "type": "number",
            },

            {
            "name": "authored_or_edited_by",
            "label": "authored_or_edited_by",
            "type": "text",
            },
            {
            "name": "name_of_publisher",
            "label": "name_of_publisher",
            "type": "text",
            },
            {
            "name": "book_or_book_chapter",
            "label": "book_or_book_chapter",
            "type": "text",
            },
            {
            "name": "isbn_no",
            "label": "isbn_no",
            "type": "text",
            },
        ]
      },
      "3" : {
        "step" : 3,
        "description" : "Book{s} authored /edited",
        "fields": [
              {
            "name": "name_of_author",
            "label": "name_of_author",
            "type": "text",
            },
            {
            "name": "title_of_book",
            "label": "title_of_book",
            "type": "text",
            },
            {
            "name": "name_of_publisher",
            "label": "name_of_publisher",
            "type": "text",
            },
            {
            "name": "total_page_no",
            "label": "total_page_no",
            "type": "text",
            },
            {
            "name": "year_of_publication",
            "label": "year_of_publication",
            "type": "number",
            },
            {
            "name": "authored_or_edited_by",
            "label": "authored_or_edited_by",
            "type": "text",
            },
            {
            "name": "issn_no",
            "label": "issn_no",
            "type": "text",
            },
        ]
      },
      "4" : {
        "step" : 4,
        "description" : "Publication of journal/newsletter/magazine, etc. from the Department",
        "fields": [
          {
            "name": "name_of_journal",
            "label": "name_of_journal",
            "type": "text",
          },
          {
            "name": "published_by",
            "label": "published_by",
            "type": "text",
          },
          {
            "name": "frequency",
            "label": "frequency",
            "type": "select",
            "props" : {
                "options" : [
                    {id : 'ANNUAL', name : 'ANNUAL'},
                    {id : 'BIANNUAL', name : 'BI-ANNUAL'},
                    {id : 'QUARTERLY', name : 'QUARTERLY'}
                ]
              }
          },
          {
            "name": "founded_in",
            "label": "founded_in",
            "type": "text",
          },
          {
            "name": "name_of_chief_editor",
            "label": "name_of_chief_editor",
            "type": "text",
          },
          {
            "name": "is_ugc_approved",
            "label": "is_ugc_approved",
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
            "name": "isbn_no",
            "label": "isbn_no",
            "type": "text",
          },
        ]
      },
    },
    "5" : {
      "1" : {
        "step" : 1,
        "description" : "projects received {during 01.04.2020 to 31.03.2021}",
        "fields": [
          {
            "name": "type",
            "label": "type",
            "type": "select",
            "props" : {
              "options" : [
                  {id : 'NEW', name : 'NEW'},
                  {id : 'ONGOING', name : 'ONGOING'},
                  {id : 'COMPLETED', name : 'COMPLETED'}
              ]
            }
          },
          {
            "name" : "title_of_project",
            "label" : "title_of_project",
            "type" : "text"
          },
          {
            "name": "principle_investigator",
            "label": "principle_investigator",
            "type": "text",
          },
          {
            "name": "duration",
            "label": "duration",
            "type": "text",
          },
          {
            "name": "funding_agency",
            "label": "funding_agency",
            "type": "text",
          },
          {
            "name": "total_grant_sanctioned",
            "label": "total_grant_sanctioned",
            "type": "number",
          },
        ]
      },
    },
    "6" : {
      "1" : {
        "step" : 1,
        "description" : "{during 01.04.2020 to 31.03.2021}",
        "fields": [
          {
            "name": "name_of_consultant",
            "label": "name_of_consultant",
            "type": "text",
          },
          {
            "name": "name_of_consultancy_project",
            "label": "name_of_consultancy_project",
            "type": "text",
          },
          {
            "name": "consulting_agency",
            "label": "consulting_agency",
            "type": "text",
          },
          {
            "name": "amount",
            "label": "amount",
            "type": "number",
          },
        ]
      },
    },
    "7" : {
      "1" : {
        "step" : 1,
        "description" : "{during 01.04.2020 to 31.03.2021}",
        "fields": [
          {
            "name": "campus",
            "label": "campus",
            "type": "select",
            "props": {
              "field" : "campus"
            }
          },
          {
            "name": "department",
            "label": "department",
            "type": "select",
            "props": {
              "field" : "department"
            }
          },
          {
            "name": "level_of_participation",
            "label": "level_of_participation",
            "type": "text",
          },
          {
            "name": "title_of_paper",
            "label": "title_of_paper",
            "type": "text",
          },
          {
            "name": "conference_title",
            "label": "conference_title",
            "type": "text",
          },
          {
            "name": "date",
            "label": "date",
            "type": "date",
          },
          {
            "name": "organized_by",
            "label": "organized_by",
            "type": "text",
          },
        ]
      },
    },
    "8" : {
      "1" : {
        "step" : 1,
        "description" : "{during 01.04.2020 to 31.03.2021}",
        "fields": [
          {
            "name": "nature_of_event",
            "label": "nature_of_event",
            "type": "text",
          },
          {
            "name": "title_of_course",
            "label": "title_of_course",
            "type": "text",
          },
          {
            "name": "collaborating_agency",
            "label": "collaborating_agency",
            "type": "text",
          },
          {
            "name": "organized_by",
            "label": "organized_by",
            "type": "text",
          },
          {
            "name": "dates",
            "label": "dates",
            "type": "text",
          },
          {
            "name": "no_of_days",
            "label": "no_of_days",
            "type": "number",
          },
        ]
      },
    },
    "9" : {
      "1" : {
        "step" : 1,
        "description" : "{during 01.04.2020 to 31.03.2021}",
        "fields": [
          {
            "name": "nature_of_event",
            "label": "nature_of_event",
            "type": "text",
          },
          {
            "name": "title_of_conferences",
            "label": "title_of_conferences",
            "type": "text",
          },
          {
            "name": "collaborating_agency",
            "label": "collaborating_agency",
            "type": "text",
          },
          {
            "name": "organized_by",
            "label": "organized_by",
            "type": "text",
          },
          {
            "name": "dates",
            "label": "dates",
            "type": "text",
          },
          {
            "name": "total_participants",
            "label": "total_participants",
            "type": "number",
          },
        ]
      },
    },
    "10" : {
      "0" : {
        "step" : 1,
        "description" : "{from 01.04.2020 to 31.03.2021}",
        "fields": [
          {
            "name": "subject",
            "label": "subject",
            "type": "text",
          },
          {
            "name": "name_of_candidate",
            "label": "name_of_candidate",
            "type": "text",
          },
          {
            "name": "enrollment_no",
            "label": "enrollment_no",
            "type": "text",
          },
          {
            "name": "title",
            "label": "title",
            "type": "text",
          },
          {
            "name": "date_of_viva_voice",
            "label": "date_of_viva_voice",
            "type": "text",
          },
          {
            "name": "supervisor",
            "label": "supervisor",
            "type": "text",
          },
        ]
      },
    },
    "11" : {
      "0" : {
        "step" : 1,
        "description" : "{2020-21}",
        "fields": [
          {
            "name": "name_of_student_selected",
            "label": "name_of_student_selected",
            "type": "text",
          },
          {
            "name": "department",
            "label": "department",
            "type": "select",
            "props" : {
              "field" : "department"
            }
          },
          {
            "name": "exam_type",
            "label": "exam_type",
            "type": "text",
          },
          {
            "name": "registration_no",
            "label": "registration_no",
            "type": "text",
          },
        ]
      },
    },
    "12" : {
      "0" : {
        "step" : 1,
        "description" : "",
        "fields": [
          {
            "name": "name_of_faculty",
            "label": "name_of_faculty",
            "type": "text",
          },
          {
            "name": "name_of_institution_body",
            "label": "name_of_institution_body",
            "type": "text",
          },
          {
            "name": "status_of_work",
            "label": "status_of_work",
            "type": "text",
          },
          {
            "name": "remarks",
            "label": "remarks",
            "type": "text",
            "extras": {
              "multiline" : true,
              "rows" : 4,
            }
          },
        ]
      },
    },
    "13" : {
      "0" : {
        "step" : 1,
        "description" : ``,
        "fields": [
          {
            "name": "name_of_faculty",
            "label": "name_of_faculty",
            "type": "text",
          },
          {
            "name": "name_of_academic_body",
            "label": "name_of_academic_body",
            "type": "text",
          },
          {
            "name": "year",
            "label": "year",
            "type": "number",
          },
          {
            "name": "status_of_membership",
            "label": "status_of_membership",
            "type": "text",
          },
        ]
      },
    },
    "14" : {
      "0" : {
        "step" : 1,
        "description" : `{Member of any Task force; academic body, Scientific Advisory Committee; Special Invitee Expert, Women Association; Project Screening Committee,  Editor/Reviewer any journal/ scientific journal, Guest Reviewer
        Society member; Executive Member; Steering Committee; Advisor, Expert Member- Selection Committee, etc.}`,
        "fields": [
          {
            "name": "name_of_faculty",
            "label": "name_of_faculty",
            "type": "text",
          },
          {
            "name": "name_of_academic_body",
            "label": "name_of_academic_body",
            "type": "text",
          },
          {
            "name": "date_of_award",
            "label": "date_of_award",
            "type": "date",
          },
          {
            "name": "other_details",
            "label": "other_details",
            "type": "text",
            "extras": {
              "multiline" : true,
              "rows" : 4,
            }
          },
        ]
      },
    },
    "15" : {
      "0" : {
        "step" : 1,
        "description" : `{including awards and recognitions/ visiting fellowship, etc.}`,
        "fields": [
          {
            "name": "name_of_faculty",
            "label": "name_of_faculty",
            "type": "text",
          },
          {
            "name": "name_of_award",
            "label": "name_of_award",
            "type": "text",
          },
          {
            "name": "awarding_agency",
            "label": "awarding_agency",
            "type": "text",
          },
          {
            "name": "date_of_award",
            "label": "date_of_award",
            "type": "date",
          },
          {
            "name": "other_details",
            "label": "other_details",
            "type": "text",
            "extras": {
              "multiline" : true,
              "rows" : 4,
            }
          },
        ]
      },
    },
    "16" : {
      "0" : {
        "step" : 1,
        "description" : `{such as Science day, Hindi diwas, tourism day, Yoga day, sports day, engineer day, world environment day, musical/cultural events, tech fest, exhibitions in international/national/regional etc.}`,
        "fields": [
          {
            "name": "name_of_faculty",
            "label": "name_of_faculty",
            "type": "text",
          },
          {
            "name": "name_of_festival",
            "label": "name_of_festival",
            "type": "text",
          },
          {
            "name": "date",
            "label": "date",
            "type": "date",
          },
          {
            "name": "total_no_of_participants",
            "label": "total_no_of_participants",
            "type": "number",
          },
          {
            "name": "student_participation",
            "label": "student_participation",
            "type": "text",
          },
        ]
      },
    },
    "17" : {
      "0" : {
        "step" : 1,
        "description" : ``,
        "fields": [
          {
            "name": "name_of_faculty",
            "label": "name_of_faculty",
            "type": "text",
          },
          {
            "name": "name_of_academic_body",
            "label": "name_of_academic_body",
            "type": "text",
          },
          {
            "name": "year",
            "label": "year",
            "type": "number",
          },
          {
            "name": "status_of_membership",
            "label": "status_of_membership",
            "type": "text",
          },
        ]
      },
    },
    "18" : {
      "0" : {
        "step" : 1,
        "description" : ``,
        "fields": [
          {
            "name": "school",
            "label": "school",
            "type": "select",
            "props": {
              "field" : "programme"
            }
          },
          {
            "name": "dept",
            "label": "dept",
            "type": "select",
            "props": {
              "field" : "programme"
            }
          },
          {
            "name": "mou_signed_with",
            "label": "mou_signed_with",
            "type": "text",
          },
          {
            "name": "year",
            "label": "year",
            "type": "number",
          },
          {
            "name": "subject_areas_covered",
            "label": "subject_areas_covered",
            "type": "text",
            "extras": {
              "multiline" : true,
              "rows" : 3,
            }
          },
        ]
      },
    },
    "19" : {
      "0" : {
        "step" : 1,
        "description" : ``,
        "fields": [
          {
            "name": "activity",
            "label": "activity",
            "type": "select",
            "props": {
              "options" : [
                {id: 'PATENTS', name : 'PATENTS'},
                { id: 'SOCIAL SERVICES', name : 'SOCIAL SERVICES'},
                { id: 'INNOVATIVE PRACTICES', name : 'INNOVATIVE PRACTICES'},
                {id: 'COMMUNITY AWARENESS PROGRAMME',  name :'COMMUNITY AWARENESS PROGRAMME'},
                {id: 'FILM DEVELOPMENT',  name :'FILM DEVELOPMENT'},
                {id: 'SPECIAL SURVEY WORKS',  name :'SPECIAL SURVEY WORKS'},
                {id:'PROMOTION/ MENTORING OF STUDENTS',  name :'PROMOTION/ MENTORING OF STUDENTS'},
                {id:'DEVELOPING SKILL BASED COURSES',  name :'DEVELOPING SKILL BASED COURSES'},
                {id:'DEVELOPING ANY DOCUMENT IN REGIONAL LANGUAGE',  name :'DEVELOPING ANY DOCUMENT IN REGIONAL LANGUAGE'},
                {id:'DEPARTMENTAL CLUBS',  name :'DEPARTMENTAL CLUBS'},
                {id:'DEPARTMENTAL ALUMNI ASSOCIATION',  name :'DEPARTMENTAL ALUMNI ASSOCIATION'},
                {id:'ANY DEPARTMENTS-INDUSTRIAL OR ACADEMIA-INDUSTRIAL LINKAGES',  name :'ANY DEPARTMENTS-INDUSTRIAL OR ACADEMIA-INDUSTRIAL LINKAGES'},
                {id:'PARTICIPATION/ ORGANISATION OF NATIONALLY SPONSORED PROGRAMMES',  name :'PARTICIPATION/ ORGANISATION OF NATIONALLY SPONSORED PROGRAMMES'},
                {id:'ANY OTHER ACTIVITY',  name :'ANY OTHER ACTIVITY'},
              ]
            }
          },
          {
            "name": "details",
            "label": "details",
            "type": "text",
            "extras": {
              "multiline" : true,
              "rows" : 8,
            }
          },
        ]
      },
    },
    
  }