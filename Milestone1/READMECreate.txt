How to create and load the sample database:

Run these commands:

dropdb researchhub
createdb researchhub
psql sampledb -af create.sql
psql sampledb -af load.sql
psql sampledb -af testquery.sql > testquery.out
