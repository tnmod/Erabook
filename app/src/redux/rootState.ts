import { DialogType } from "./dialogState";
import { NavigatorState } from "./navigatorState";
import { OTPCode } from "./otpCodeState";
import { UserState } from "./userState";



interface RootState {
  user: UserState;
  dialog: DialogType;
  navigator: NavigatorState,
  otpcode: OTPCode,
}

export type { RootState };