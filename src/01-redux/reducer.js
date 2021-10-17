import {
  PREVIEW_PET,
  ADOPT_PET,
  ADD_NEW_DOG,
  ADD_NEW_CAT,
  REMOVE_DOG,
  REMOVE_CAT
} from './action-creators';

const initialState = {
  dogs: [],
  cats: [],
  petToPreview: {},
  petToAdopt: {}
};

// Remember that reducers take in two parameters:
//  1. The (previous) state. When we use 'createStore', the previous state is undefined,
//     so, the reducer is initially invoked with undefined as the first argument.
//     This means that if we set a default parameter value, we can use that as our initial return value
//
//  2. The action object, which we get whenever we use `store.dispatch`
export default function(state = initialState, action) {
  switch (action.type) {
    case PREVIEW_PET:
      return {...state, petToPreview: action.pet}
    case ADOPT_PET:
      return {...state, petToAdopt: action.pet}
    case ADD_NEW_DOG:
      return {...state, dogs: [...state.dogs, action.dog]}
    case ADD_NEW_CAT:
      return { ...state, cats: [...state.cats, action.cat] };
    case REMOVE_DOG:
      return {...state, dogs: state.dogs.filter(dog => dog.id !== action.dogId)}
    case REMOVE_CAT:
      return {...state, cats: state.cats.filter(cat => cat.id !== action.catId)}
    default:
      return state;
  }

}
