const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const text = `
SELECT DISTINCT teachers.name AS teachers, cohorts.name AS cohort 
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1 
ORDER BY teachers.name;
`
const cohortName = process.argv[2];
// Store all potentially malicious values in an array. 
const values = [`%${cohortName}%`];

pool.query(text, values)
.then(res => {
	res.rows.forEach(user => {
		console.log(`${user.cohort}: ${user.teachers}`);
	});
  
}).catch(err => console.error('query error', err.stack));
