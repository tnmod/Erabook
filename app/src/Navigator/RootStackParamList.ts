
type LoginStackParamList = {
    SignIn: undefined;
    SignUp: { email: string, randomNumbers: number[] };
};

type CodeVerificationParamList = {
    CodeVerification: undefined;
};

export type { LoginStackParamList, CodeVerificationParamList } 