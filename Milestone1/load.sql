INSERT INTO Person VALUES				/* All people in the database, including students and project leads */
(000000001, 'Chan, Sam', 'sam.chan@duke.edu', '919-323-1234'),
(000000002, 'Smith, John', 'john.smith@duke.edu', '919-322-1634'),
(000000003, 'Simpson, Bart', 'bart.simpson@duke.edu', NULL),
(000000011, 'Johnson, Bob', 'bob.johnson@duke.edu', '919-111-1234'),
(000000012, 'Lee, Michael', 'mike.lee@duke.edu', '313-218-4221'),
(000000013, 'Jones, Benjamin', 'ben.jones@duke.edu', '917-228-4321');


INSERT INTO LeadInfo VALUES								/* Project leads */
(00000011, 'https://users.bme.duke.edu/~bobjohnson/'),
(00000012, NULL),
(00000013, 'https://stat.duke.edu/benjones/');

INSERT INTO LeadDept VALUES 			/* Project leads and depts (decomposed to put in BCNF because of non-key FD id -> website) */
(00000011, 'Electrical & Computer Engineering'),
(00000011, 'Biomedical Engineering'),		/* Project leads can be part of multiple departments */
(00000012, 'Chemistry'),
(00000013, 'Statistical Science');

INSERT INTO StudentInfo VALUES
(00000001, 'Molecular Biology, Genetics', 'https://resume.com'),
(00000002, 'Machine Learning', 'https://duke.edu/my_resume'),
(00000003, 'Greek Architecture', 'https://google.com/resume');

INSERT INTO StudentSubject VALUES /* Students can be interested in multiple research subjects */
(00000001, 'Biology'),
(00000002, 'Computer Science'),
(00000002, 'Statistics'),
(00000003, 'History'),
(00000003, 'Classics');

INSERT INTO StudentMajor VALUES /* Students can have two majors, which requires this table */
(00000001, 'Biology'),
(00000002, 'Computer Science'),
(00000002, 'Mathematics'),
(00000003, 'Classical Civilization'),
(00000003, 'History');

INSERT INTO ProjectInfo VALUES
(20000000, 'Lucine Research Project', 1, '2017-02-06 11:00:00', 'Working with a Ph. D student on this protein', 'Pipetting'),
(10000000, 'Medical Imaging for Cancer Diagnosis', 2, '2018-01-11 11:00:00','Using imaging to improve breast cancer diagnosis', 'Matlab'),
(30000000, 'Duke Parking Project', 3, '2018-02-07 12:00:00', 'Using duke parking data to find optimal parking locations', 'R, Data Analysis');

INSERT INTO ProjectSubject VALUES
(10000000, 'Biomedical Engineering'),
(10000000, 'Electrical Engineering'),
(10000000, 'Biology'),
(20000000, 'Chemistry'),
(20000000, 'Biochemistry'),
(30000000, 'Computer Science'),
(30000000, 'Statistics');

INSERT INTO Manages VALUES
(10000000, 00000011),
(20000000, 00000012),
(30000000, 00000013);









