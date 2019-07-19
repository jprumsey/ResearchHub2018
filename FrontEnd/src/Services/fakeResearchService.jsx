import * as genresAPI from "./fakeGenreService";

const research = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Computational NeuroEngineering with BMIs",
    description: "The project: We are seeking two enthusiastic and hard-working undergraduates who are interested in gaining experience in basic neuroscience research.Are lab aims to understand how gonadal steroids and an Alzheimers-prone genotype interact to influence both acute and chronic recovery from mild traumatic brain injury (mTBI) in mice. We use a variety of behavioral, electrophysiological and protein analysis techniques to assess these interactions.One student will assist in the processing and analysis of large data sets collected using an automated rodent behavior system (IntelliCage). The analysis software is coded in R, and there will be opportunities to work with this software and create our own subroutines within it. The student will further assist with statistical analysis and data preparation and interpretation. A second student will assist in the processing and testing of brain tissue to measure changes in inflammatory and synaptic proteins following brain injury. The student will be trained to perform a variety of techniques to measure proteins including immunohistochemistry, western blot, and ELISAs. Why join this lab: Our lab uses both novel and established behavioral techniques to answer questions about neurophysiological effects of mild/concussive brain injury and aging. We have an intimate lab setting where students will work directly with Drs. Klein and Smith.",
    genre:{ _id: "5b21ca3eeb7f6fbccd47112", name: "NeuroScience" },
    Number: 2,
    App: 1,
    HourpWeek: "8-10"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471831",
    title: "Forensic Detective work ",
    description: "The project: We are seeking two enthusiastic and hard-working undergraduates who are interested in gaining experience in basic neuroscience research.Are lab aims to understand how gonadal steroids and an Alzheimers-prone genotype interact to influence both acute and chronic recovery from mild traumatic brain injury (mTBI) in mice. We use a variety of behavioral, electrophysiological and protein analysis techniques to assess these interactions.One student will assist in the processing and analysis of large data sets collected using an automated rodent behavior system (IntelliCage). The analysis software is coded in R, and there will be opportunities to work with this software and create our own subroutines within it. The student will further assist with statistical analysis and data preparation and interpretation. A second student will assist in the processing and testing of brain tissue to measure changes in inflammatory and synaptic proteins following brain injury. The student will be trained to perform a variety of techniques to measure proteins including immunohistochemistry, western blot, and ELISAs. Why join this lab: Our lab uses both novel and established behavioral techniques to answer questions about neurophysiological effects of mild/concussive brain injury and aging. We have an intimate lab setting where students will work directly with Drs. Klein and Smith.",
    genre:{ _id: "5b21ca3eeb7f6fbccd471880", name: "Math" },
    Number: 1,
    App: 12,
    HourpWeek: "6-10"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471832",
    title: "Glia Cell Epigenetics",
    description: "The project: We are seeking two enthusiastic and hard-working undergraduates who are interested in gaining experience in basic neuroscience research.Are lab aims to understand how gonadal steroids and an Alzheimers-prone genotype interact to influence both acute and chronic recovery from mild traumatic brain injury (mTBI) in mice. We use a variety of behavioral, electrophysiological and protein analysis techniques to assess these interactions.One student will assist in the processing and analysis of large data sets collected using an automated rodent behavior system (IntelliCage). The analysis software is coded in R, and there will be opportunities to work with this software and create our own subroutines within it. The student will further assist with statistical analysis and data preparation and interpretation. A second student will assist in the processing and testing of brain tissue to measure changes in inflammatory and synaptic proteins following brain injury. The student will be trained to perform a variety of techniques to measure proteins including immunohistochemistry, western blot, and ELISAs. Why join this lab: Our lab uses both novel and established behavioral techniques to answer questions about neurophysiological effects of mild/concussive brain injury and aging. We have an intimate lab setting where students will work directly with Drs. Klein and Smith.",
    genre:{ _id: "5b21ca3eeb7f6fbccd471850", name: "Biomedical Engineering" },
    Number: 2,
    App: 11,
    HourpWeek: "18"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471886",
    title: "Database ML Research",
    description: "The project: We are seeking two enthusiastic and hard-working undergraduates who are interested in gaining experience in basic neuroscience research.Are lab aims to understand how gonadal steroids and an Alzheimers-prone genotype interact to influence both acute and chronic recovery from mild traumatic brain injury (mTBI) in mice. We use a variety of behavioral, electrophysiological and protein analysis techniques to assess these interactions.One student will assist in the processing and analysis of large data sets collected using an automated rodent behavior system (IntelliCage). The analysis software is coded in R, and there will be opportunities to work with this software and create our own subroutines within it. The student will further assist with statistical analysis and data preparation and interpretation. A second student will assist in the processing and testing of brain tissue to measure changes in inflammatory and synaptic proteins following brain injury. The student will be trained to perform a variety of techniques to measure proteins including immunohistochemistry, western blot, and ELISAs. Why join this lab: Our lab uses both novel and established behavioral techniques to answer questions about neurophysiological effects of mild/concussive brain injury and aging. We have an intimate lab setting where students will work directly with Drs. Klein and Smith.",
    genre:{ _id: "5b21ca3eeb7f6fbccd471840", name: "Computer Science" },
    Number: 1,
    App: 12,
    HourpWeek: "4-10"
  },
  {
    _id: "5b21ca3eeb7f6fbccd4718967",
    title: "Oceanic Whales Study",
    description: "The project: We are seeking two enthusiastic and hard-working undergraduates who are interested in gaining experience in basic neuroscience research.Are lab aims to understand how gonadal steroids and an Alzheimers-prone genotype interact to influence both acute and chronic recovery from mild traumatic brain injury (mTBI) in mice. We use a variety of behavioral, electrophysiological and protein analysis techniques to assess these interactions.One student will assist in the processing and analysis of large data sets collected using an automated rodent behavior system (IntelliCage). The analysis software is coded in R, and there will be opportunities to work with this software and create our own subroutines within it. The student will further assist with statistical analysis and data preparation and interpretation. A second student will assist in the processing and testing of brain tissue to measure changes in inflammatory and synaptic proteins following brain injury. The student will be trained to perform a variety of techniques to measure proteins including immunohistochemistry, western blot, and ELISAs. Why join this lab: Our lab uses both novel and established behavioral techniques to answer questions about neurophysiological effects of mild/concussive brain injury and aging. We have an intimate lab setting where students will work directly with Drs. Klein and Smith.",
    genre:{ _id: "5b21ca3eeb7f6fbccd471830", name: "Ocean" },
    Number: 1,
    App: 23,
    HourpWeek: "12-20"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471804",
    title: "Big Cats Sahara Testing",
    description: "The project: We are seeking two enthusiastic and hard-working undergraduates who are interested in gaining experience in basic neuroscience research.Are lab aims to understand how gonadal steroids and an Alzheimers-prone genotype interact to influence both acute and chronic recovery from mild traumatic brain injury (mTBI) in mice. We use a variety of behavioral, electrophysiological and protein analysis techniques to assess these interactions.One student will assist in the processing and analysis of large data sets collected using an automated rodent behavior system (IntelliCage). The analysis software is coded in R, and there will be opportunities to work with this software and create our own subroutines within it. The student will further assist with statistical analysis and data preparation and interpretation. A second student will assist in the processing and testing of brain tissue to measure changes in inflammatory and synaptic proteins following brain injury. The student will be trained to perform a variety of techniques to measure proteins including immunohistochemistry, western blot, and ELISAs. Why join this lab: Our lab uses both novel and established behavioral techniques to answer questions about neurophysiological effects of mild/concussive brain injury and aging. We have an intimate lab setting where students will work directly with Drs. Klein and Smith.",
    genre:{ _id: "5b21ca3eeb7f6fbccd471820", name: "Anthropology" },
    Number: 3,
    App: 11,
    HourpWeek: "4"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471871",
    title: "Computational NeuroEngineering with BMIs",
    description: "The project: We are seeking two enthusiastic and hard-working undergraduates who are interested in gaining experience in basic neuroscience research.Are lab aims to understand how gonadal steroids and an Alzheimers-prone genotype interact to influence both acute and chronic recovery from mild traumatic brain injury (mTBI) in mice. We use a variety of behavioral, electrophysiological and protein analysis techniques to assess these interactions.One student will assist in the processing and analysis of large data sets collected using an automated rodent behavior system (IntelliCage). The analysis software is coded in R, and there will be opportunities to work with this software and create our own subroutines within it. The student will further assist with statistical analysis and data preparation and interpretation. A second student will assist in the processing and testing of brain tissue to measure changes in inflammatory and synaptic proteins following brain injury. The student will be trained to perform a variety of techniques to measure proteins including immunohistochemistry, western blot, and ELISAs. Why join this lab: Our lab uses both novel and established behavioral techniques to answer questions about neurophysiological effects of mild/concussive brain injury and aging. We have an intimate lab setting where students will work directly with Drs. Klein and Smith.",
    genre:{ _id: "5b21ca3eeb7f6fbccd471820", name: "NeuroScience" },
    Number: 2,
    App: 1,
    HourpWeek: "8-10"
  }
];

export function getResearch() {
  return research;
}

export function Research(id) {
  return research.find(m => m._id === id);
}

export function saveResearch(research) {
  let researchInDb = research.find(m => m._id === research._id) || {};
  researchInDb.name = research.name;
  researchInDb.genre = genresAPI.genres.find(g => g._id === research.genreId);
  researchInDb.numberInStock = research.numberInStock;
  researchInDb.dailyRentalRate = research.dailyRentalRate;

  if (!researchInDb._id) {
    researchInDb._id = Date.now();
    research.push(researchInDb);
  }

  return researchInDb;
}

export function deleteresearch(id) {
  let researchInDb = research.find(m => m._id === id);
  research.splice(research.indexOf(researchInDb), 1);
  return researchInDb;
}
