import { SnackBarType } from "../../constants/interface";
import {createTypeAction} from '../type-redux';


export const showSnackBar = createTypeAction<
  {
    message : string;
    type: SnackBarType
  },
  {
    message : string;
    type: SnackBarType
  }

>('SHOW_SNACK_BAR',({message, type})=>{
    return {message, type};
});


export const resetSnackBar = createTypeAction('RESET_SNACK_BAR',() => {
  return false;
})

