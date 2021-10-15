// ACTION TYPES

export const PREVIEW_PET = 'PREVIEW_PET';
export const ADOPT_PET = 'ADOPT_PET';
export const ADD_NEW_DOG = 'ADD_NEW_DOG';
export const ADD_NEW_CAT = 'ADD_NEW_CAT';
export const REMOVE_DOG = 'REMOVE_DOG';
export const REMOVE_CAT = 'REMOVE_CAT';

// ACTION CREATORS

export const previewPet = (pet) => {
  return {
    type: PREVIEW_PET,
    pet
  };
};

export const adoptPet = (pet) => {
  return {
    type: ADOPT_PET,
    pet
  };
};

export const addNewDog = (pet) => {
  return {
    type: ADD_NEW_DOG,
    dog: pet
  }
};

export const addNewCat = (pet) => {
  return {
    type: ADD_NEW_CAT,
    cat: pet
  };
};

export const removeDog = (pet) => {
  return {
    type: REMOVE_DOG,
    dogId: pet.id
  };
};

export const removeCat = (pet) => {
  return {
    type: REMOVE_CAT,
    catId: pet.id
  };
};
