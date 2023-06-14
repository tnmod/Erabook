import { UserType } from "./userState";

interface UserState {
    currentUser: UserType;
    
  }
  
  interface RootState {
    user: UserState;
    
  }
  
  export type { RootState, UserState };