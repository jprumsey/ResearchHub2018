CREATE TABLE Person
(id DECIMAL(8,0) NOT NULL PRIMARY KEY,
 name VARCHAR(64) NOT NULL,
 email VARCHAR(64) NOT NULL,
 phone VARCHAR(32));

CREATE TABLE Departments
(department VARCHAR(64) NOT NULL PRIMARY KEY);

-- Users uploading projects (i.e. professors, researchers, etc.), different from Scholar (see below)
CREATE TABLE LeadInfo
(id DECIMAL(8,0) NOT NULL PRIMARY KEY REFERENCES Person(id),
 website VARCHAR(64));

CREATE TABLE LeadDept
(id DECIMAL(8,0) NOT NULL REFERENCES LeadInfo(id),
 department VARCHAR(64) REFERENCES Departments(department),
 PRIMARY KEY(id, department));

CREATE TABLE StudentInfo
(id DECIMAL(8,0) NOT NULL PRIMARY KEY REFERENCES Person(id),
research_interests VARCHAR(128) NOT NULL,
resume VARCHAR(256) NOT NULL,
school VARCHAR(30) NOT NULL,
year INTEGER NOT NULL);

CREATE TABLE ProjectInfo
(pid DECIMAL(8,0) NOT NULL PRIMARY KEY,
 name VARCHAR(64),
 num_spots INTEGER NOT NULL,
 date_posted TIMESTAMP NOT NULL,
 description VARCHAR(512) NOT NULL,
 skills_description VARCHAR(256) NOT NULL);

 CREATE TABLE ProjectSubject
 (pid DECIMAL(8,0) NOT NULL REFERENCES ProjectInfo(pid),
  subject VARCHAR(64) NOT NULL,
  PRIMARY KEY(pid, subject));

 CREATE TABLE Manages
 (pid DECIMAL(8,0) NOT NULL PRIMARY KEY REFERENCES ProjectInfo(pid),
  research_lead_id  DECIMAL(8,0) NOT NULL REFERENCES LeadInfo(id));

--New table for list of all faculty at Duke. This is being scraped from scholars.duke.edu
  CREATE TABLE Scholars
  (name VARCHAR(64) NOT NULL, title VARCHAR(64) NOT NULL,
   department VARCHAR(64) REFERENCES Departments(department), phone VARCHAR(32)
   email VARCHAR(64), website VARCHAR(64), PRIMARY KEY(name, title));

CREATE FUNCTION TF_TimestampCheck() RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (SELECT * FROM ProjectInfo WHERE NEW.date_posted < date_posted)
    THEN RAISE EXCEPTION 'Posted date must be greater than or after current dates.';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER TimestampCheckProjects
  BEFORE INSERT OR UPDATE ON ProjectInfo
  FOR EACH ROW
  EXECUTE PROCEDURE TF_TimestampCheck();


-- Checks that a student is in Trinity or Pratt
CREATE FUNCTION TF_CollegeCheck() RETURNS TRIGGER AS $$
BEGIN
  IF(NEW.school != 'Trinity College' AND NEW.school != 'Pratt School of Engineering')
    THEN RAISE EXCEPTION 'Student must be part of Trinity College or Pratt School of Engineering';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER CollegeCheck
  BEFORE INSERT OR UPDATE ON StudentInfo
  FOR EACH ROW
  EXECUTE PROCEDURE TF_CollegeCheck();


-- Checks that a student is not a professor and vice versa
CREATE FUNCTION TF_StudentCheck() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.id IN(SELECT id FROM LeadInfo)
    THEN RAISE EXCEPTION 'Students cannot be professors';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER StudentCheck
  BEFORE INSERT OR UPDATE ON StudentInfo
  FOR EACH ROW
  EXECUTE PROCEDURE TF_StudentCheck();

CREATE FUNCTION TF_ProfCheck() RETURNS TRIGGER AS $$
BEGIN
  IF NEW.id IN(SELECT id FROM StudentInfo)
    THEN RAISE EXCEPTION 'Professors cannot be students';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER ProfCheck
  BEFORE INSERT OR UPDATE ON LeadInfo
  FOR EACH ROW
  EXECUTE PROCEDURE TF_ProfCheck();
