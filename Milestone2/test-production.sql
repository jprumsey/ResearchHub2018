--Basic queries to present on web page

--Research Projects Page:

--(All Research Projects)
SELECT * FROM ProjectInfo LIMIT 10;

--(Research projects filtered by subject)
--NOTE: 'User Input/Dropdown menu' is a placeholder for the string that a user will input via either a search bar or drop down menu
SELECT * FROM ProjectSubject WHERE subject = 'User Input/Dropdown menu' LIMIT 10;

--(Research Projects sorted by number of open spots)
SELECT * FROM ProjectInfo WHERE num_spots > 0 ORDER BY num_spots DESC LIMIT 10;

--(Research Projects sorted by date posted, starting with most recent)
SELECT * FROM ProjectInfo ORDER BY date_posted DESC LIMIT 10;

--(Research projects ordered alphabetically ascending)
SELECT * FROM ProjectSubject ORDER BY subject ASC LIMIT 10;

--(Research projects ordered alphabetically descending)
SELECT * FROM ProjectSubject ORDER BY subject DESC LIMIT 10;
------------------------------------------------------------------------------------------------
--Project Leaders Page:

--(All project managers)
SELECT * FROM Manages LIMIT 10;

--(Project Managers of x department), currently a Placeholder: Environmental Engineering
SELECT * FROM LeadDept WHERE department = 'Environmental Engineering' LIMIT 10;

--(Project Managers sorted by name ascending)
SELECT * FROM Manages INNER JOIN Person ON research_lead_id = id ORDER BY name ASC LIMIT 10;

--(Project Managers sorted by name descending)
SELECT * FROM Manages INNER JOIN Person ON research_lead_id = id ORDER BY name DESC LIMIT 10;

--(Project Managers sorted by department)
SELECT * FROM (Manages INNER JOIN Person ON research_lead_id = Person.id)
INNER JOIN LeadDept ON research_lead_id = LeadDept.id ORDER BY department LIMIT 10;

-------------------------------------------------------------------------------------------------
--Students Page:

--(All students)
SELECT * FROM StudentInfo LIMIT 10;

--(Select students by major)
--SELECT TOP 10 * FROM StudentMajor WHERE major = 'User Input/Dropdown menu';

--(Select students by research interests)
SELECT * FROM StudentInfo WHERE research_interests = 'User Input/Dropdown menu' LIMIT 10;

--(Sort students alphabetically)
SELECT * FROM StudentInfo INNER JOIN Person ON StudentInfo.id = Person.id ORDER BY name ASC LIMIT 10;

--(Sort students by year)
SELECT * FROM StudentInfo INNER JOIN Person ON StudentInfo.id = Person.id ORDER BY year DESC LIMIT 10;
