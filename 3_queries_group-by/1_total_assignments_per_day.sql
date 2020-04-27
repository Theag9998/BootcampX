SELECT day, COUNT(id) AS total_assignments
FROM assignments
GROUP BY assignments.day
ORDER BY day;