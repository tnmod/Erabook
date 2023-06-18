import { DialogType } from "./dialogState";
import { UserType } from "./userState";

interface UserState {
  currentUser: UserType;
}

interface RootState {
  user: UserState;
  dialog: DialogType;
}

export type { RootState, UserState };