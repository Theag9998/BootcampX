SELECT day, COUNT(*) AS total_assignments
FROM assignments
GROUP BY assignments.day
HAVING COUNT(*) >= 10
ORDER BY day;