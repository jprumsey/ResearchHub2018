#import modules
import requests
import xml.etree.ElementTree as ET
#-------------------------------------------------------------------------------
def parse(file):
    """
    function that parses an xml file and returns a list of links to faculty pages
    """
    #create tree object
    tree = ET.parse(file)
     # get root element
    root = tree.getroot()
    # create empty list for links
    scholar_links = []
    #loop through children
    for child in root:
        #add link to faculty website to scholar_links
        scholar_links.append(child.attrib.get('{http://www.w3.org/1999/02/22-rdf-syntax-ns#}about'))
    #return
    return scholar_links
