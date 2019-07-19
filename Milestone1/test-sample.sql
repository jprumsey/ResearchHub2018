--Basic queries to present on web page

--Research Projects Page: 

--(All Research Projects)
SELECT * FROM ProjectInfo;

--(Research projects filtered by subject)
--NOTE: 'User Input/Dropdown menu' is a placeholder for the string that a user will input via either a search bar or drop down menu
SELECT * FROM ProjectSubject WHERE subject = 'User Input/Dropdown menu';

--(Research Projects sorted by number of open spots)
SELECT * FROM ProjectInfo WHERE num_spots > 0 ORDER BY num_spots DESC; 

--(Research Projects sorted by date posted, starting with most recent)
SELECT * FROM ProjectInfo ORDER BY date_posted DESC; 
------------------------------------------------------------------------------------------------
--Project Leaders Page:

--(All project managers)
SELECT * FROM Manages;

--(Project Managers of x department)
SELECT * FROM LeadDept WHERE department = 'User Input/Dropdown menu'; 

--(Project Managers sorted by name)
SELECT * FROM Manages INNER JOIN Person ON research_lead_id = id ORDER BY name ASC;

-------------------------------------------------------------------------------------------------
--Students Page:

--(All students)
SELECT * FROM StudentInfo; 

--(Select students by major)
SELECT * FROM StudentMajor WHERE major = 'User Input/Dropdown menu'; 

--(Select students by research interests)
SELECT * FROM StudentInfo WHERE research_interests = 'User Input/Dropdown menu';

--(Sort students alphabetically)
SELECT * FROM StudentInfo INNER JOIN Person ON StudentInfo.id = Person.id ORDER BY name ASC; 
