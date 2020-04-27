SELECT students.name AS student_name, 
cohorts.name AS cohort_name,
cohorts.start_date AS cohorts_start_date,
students.start_date AS students_start_date
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.start_date != students.start_date
ORDER BY cohorts_start_date;