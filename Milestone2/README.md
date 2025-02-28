https://gitlab.oit.duke.edu/researchhub/researchhub2018/tree/master

Regarding the Production Dataset:

We are currently in the process of scraping data to populate our database from "https://scholars.duke.edu/people" using python. The python_scripts folder contains the code we have written to complete this task. faculty_scrape.py  scrapes each individual professor's information from their page on the website; this script is complete and functioning, though has a few inefficiencies that need to be ironed out. faculty_list_scrape.py will scrape the URLs of each professor's respective page so that we can run faculty_scrape.py on multiple pages. However, the elements nested within a <ul> on the webpage are hidden, and we thus need to implement PhantomJS to access the urls contained within the <ul>. From there, we will format the scraped data in a pandas DataFrame and import it into our SQL database.

We are still in the process of completing faculty_list_scrape.py and have not converted any data into a pandas DataFrame this scraped data will go into the Scholar table, which will be a static list of faculty members. Students will be able to browse this list and contact professors who may not have projects posted.

For now, our production database is populated with random data generated by mockaroo.com. This is so we can test our current queries on a large database without yet obtaining real data. We also expect data for students and projects to be inputted by user, so there is currently no real-world data for this.
