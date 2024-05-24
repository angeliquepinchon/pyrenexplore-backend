/**
 * @description Builds filters based on query parameters for species search.
 * @param {Object} queryParams - Query parameters for filtering species.
 * @param {string} queryParams.type - Type of species (MAMMIFERE, OISEAU...).
 * @param {string} queryParams.category - Category of species (animale, végétale).
 * @returns {Object} - Filters object to be applied for species search.
 */
const buildFilters = (queryParams) => {
  const typeSpeciesQuery = queryParams.type;
  const categorySpeciesQuery = queryParams.category;
  const typeSpecies = [
    "MAMMIFERE",
    "OISEAU",
    "INSECT",
    "POISSON",
    "CRUSTACE",
    "MOLLUSQUE",
    "VERS",
    "REPTILE",
    "AMPHIBIEN",
  ];
  const categorySpecies = ["animale", "végétale"];
  // initialize filters object
  const filters = {};

  // Validate and set type filter
  if (typeSpeciesQuery && typeSpecies.includes(typeSpeciesQuery)) {
    filters.type = typeSpeciesQuery;
  } else if (typeSpeciesQuery) {
    return { error: "ce type d'espèce est invalide" };
  }

  // Validate and set category filter
  if (categorySpeciesQuery && categorySpecies.includes(categorySpeciesQuery)) {
    filters.category = categorySpeciesQuery;
  } else if (categorySpeciesQuery) {
    return { error: "ce type de catégory est invalide" };
  }

  return filters;
};

export { buildFilters };
