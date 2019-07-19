#import modules
import bs4
from bs4 import BeautifulSoup
import numpy
import pandas as pd
import requests
#-------------------------------------------------------------------------------
#make_soup function
def make_soup(url):
    """
    function that returns a BeautifulSoup object given the url, assuming
    scraping involves html, lxml
    """
    #convert url to html
    html = requests.get(url)
    #return BeautifulSoup object from html file
    return BeautifulSoup(html.content, 'lxml')
#-------------------------------------------------------------------------------
#pull_only_text function
def pull_only_text(elem):
    """
    function that returns type generator of html text
    """
    #loop through nested elements
    for item in elem:
        #check if instance of string
        if isinstance(item, bs4.element.NavigableString):
            #yield text (NOTE: must use ''.join(pull_only_text(elem)) since
            #this is a generator)
            yield item
#-------------------------------------------------------------------------------
def scrape(url):
    """
    function to scrape an individual faculty member's website
    """
    #create BeautifulSoup object from html file
    soup = make_soup(url)

    ############################SECTION: SCRAPE INFO############################
    #scrape person info under <section id="individual-info"  role="region">
    info = soup.find("section", id="individual-info")
    #pull name and main title from webpage
    name_title = info.find("h2")
    #get name by pulling text then strip whitespace
    name = ''.join(pull_only_text(name_title)).strip()
    #pull title from <div>
    title = name_title.find("div", class_="display-title").string
    #pull professor's department (easy lookup with display)
    department = info.find("a", title="organization name").string

    ########################SECTION: SCRAPE CONTACT INFO########################
    #pull all listed contact info from webpage
    contact_info = info.find("ul", class_="contact_list")
    #get the span containing phone number
    phone_span = contact_info.find("span", class_="phone")
    #declare empty phone variable
    phone = ""
    #if phone != None/ phone number exists
    #TODO: optimize this process by defaulting phone = None?????????????
    if phone_span != None:
        #pull phone text from nest
        phone = ''.join(pull_only_text(phone_span)).strip()
    #otherwise set phone to None
    else:
        phone = '-'
    #get a element containing email info
    email_a = contact_info.find("a", title="email")
    #declare empty variable for email
    email = ""
    #if email exists
    if email_a != None:
        #pull email text from nest
        email = ''.join(pull_only_text(email_a)).strip()
    #otherwise set email to None
    else:
        email = '-'
    #pull website contained in li
    website_li = contact_info.find("li", class_="webpages")
    #placeholder for website
    website = ""
    #check if it exists
    if website_li != None:
        #find the website
        website = website_li.find("a").get("href")
    #if it doesn't exist
    else:
        #set website to none
        website = '-'

    #########################SECTION: RETURN DF OBJECT##########################
    return pd.DataFrame({'name':name, 'title':title, 'department':department,
        'phone':phone, 'email':email, 'website':website}, index=[0])
