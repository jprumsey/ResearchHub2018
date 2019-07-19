CREATE TABLE Person
(id DECIMAL(8,0) NOT NULL PRIMARY KEY,
 name VARCHAR(64) NOT NULL,
 email VARCHAR(64) NOT NULL,
 phone VARCHAR(32));

CREATE TABLE LeadInfo
(id DECIMAL(8,0) NOT NULL PRIMARY KEY REFERENCES Person(id),
 website VARCHAR(64));

CREATE TABLE LeadDept
(id DECIMAL(8,0) NOT NULL REFERENCES Person(id),
 department VARCHAR(64),
 PRIMARY KEY(id, department));

CREATE TABLE StudentInfo
(id DECIMAL(8,0) NOT NULL PRIMARY KEY REFERENCES Person(id),
research_interests VARCHAR(128) NOT NULL,
resume VARCHAR(256) NOT NULL);

CREATE TABLE StudentSubject
(id DECIMAL(8,0) NOT NULL REFERENCES Person(id),
 subject VARCHAR(64)  NOT NULL,
 PRIMARY KEY(id, subject));

CREATE TABLE StudentMajor
(id DECIMAL(8,0) NOT NULL REFERENCES Person(id),
 major VARCHAR(64) NOT NULL,
 PRIMARY KEY(id, major));

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
