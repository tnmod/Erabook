interface UserType {
    _id: string;
    email: string;
    username: string;
    password: string;
}
interface UserState {
    currentUser: UserType;
}
export type { UserState, UserType };