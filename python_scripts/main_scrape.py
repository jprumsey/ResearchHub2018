#import modules
from faculty_scrape import *
from sqlalchemy import create_engine
from xml_parse import *
#-------------------------------------------------------------------------------
#make DataFrame
faculty_data = pd.DataFrame(columns=['name', 'title', 'department', 'phone',
                                                            'email', 'website'])
#parse XML file and save links to faculty_list
faculty_list = parse('listrdf.rdf')

#loop through faculty sites
for site in faculty_list[:6000]:
    #scrape data and concat with faculty_data
    faculty_data = pd.concat([faculty_data, scrape(site)], ignore_index=True)

#create postgresql engine
engine = create_engine(
    'postgresql://samchan:dbpasswd@localhost/researchhub',
                                                            pool_pre_ping=True)

#export DataFrame to SQL Database
faculty_data.to_sql('scholars', con=engine, if_exists="append", index=False)

print("success")
