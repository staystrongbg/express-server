import { Books } from '../types/books';

type Action = {
  type: string;
  payload: any[];
};
type State = {
  state: Books[];
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'update':
      return { ...state, books: action.payload };
    default:
      throw new Error(`Uknown action type: ${action.type}`);
  }
};
export default reducer;
