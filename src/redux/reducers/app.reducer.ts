import {createTypeReducer} from '../type-redux';
import * as AppActions from '../actions/app.action';
import { SnackBarType } from '../../constants/interface';

export interface ISnackBarState {
  show: boolean,
  message: string,
  messageType: SnackBarType,
}

export type State = {
  snackBar: ISnackBarState,
}

export const initialState : State = {
    snackBar: {
      show:false,
      message:'',
      messageType:undefined,
    }
}

export const showSnackBarReducer = AppActions.showSnackBar.reducer<State>(
  (state, action) => ({
    snackBar: {
      show:true,
      message: action.payload.message,
      messageType: action.payload.type,
    },
  })
)

export const resetSnackBarReducer = AppActions.resetSnackBar.reducer<State> (
  (state, action) => ({
    snackBar: {
      show: false,
      message: '',
      messageType: undefined,
    },
  }),
);

export const reducer = createTypeReducer(
  initialState,
  showSnackBarReducer,
  resetSnackBarReducer,
);
