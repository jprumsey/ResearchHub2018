export const genres = [
  { _id: "5b21ca3eeb7f6fbccd47112", name: "NeuroScience" },
  { _id: "5b21ca3eeb7f6fbccd471880", name: "Math" },
  { _id: "5b21ca3eeb7f6fbccd471850", name: "Biomedical Engineering" },
  { _id: "5b21ca3eeb7f6fbccd471840", name: "Computer Science" },
  { _id: "5b21ca3eeb7f6fbccd471830", name: "Ocean" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Anthropology" },
];

export function getGenres() {
  return genres.filter(g => g);
}
