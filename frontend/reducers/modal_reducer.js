import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';

const defaultState = {
  show: false
};



const ModalReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, { show: true });
    case HIDE_MODAL:
      return { show: false };
    default:
      return state;
  }

};

export default ModalReducer;
