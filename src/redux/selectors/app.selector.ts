import { RootState } from '../configure-store';

export const sGetSnackBar = (rootState: RootState) =>
  rootState.appState.snackBar;