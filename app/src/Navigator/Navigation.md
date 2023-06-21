# Navigation tree
`│, ─, ├, └`

MainNavigation
            │
            ├────── LoginRoute
            │               │
            │               ├────── LoadingNavigation
            │               │                  │
            │               │                  ├────── LoginStack
            │               │                  │               │
            │               │                  │               ├────── SignIn
            │               │                  │               │
            │               │                  │               │
            │               │                  │               └────── SignUp
            │               │                  │
            │               │                  │
            │               │                  │
            │               │                  └────── SignupOTPStack  
            │               │                                  │
            │               │                                  ├────── CodeVerification
            │               │                                  │
            │               │                                  │
            │               │                                  └────── SignUpStepFinal
            │               │                                                       ├────── Gender
            │               │                                                       │
            │               │                                                       │
            │               │                                                       ├────── Age
            │               │                                                       │
            │               │                                                       │
            │               │                                                       └────── CompleteProfile
            │               │
            │               └────── Terms
            │
            │
            │
            │
            │
            └────── HomeRoute
                            ├────── BottomNavigator
                            │                    │
                            │                    ├────── Home
                            │                    │
                            │                    ├────── Search
                            │                    │
                            │                    ├────── ....
                            │                    │
                            │                    ├────── Feed
                            │                    │
                            │                    └────── Account
                            │
                            │
                            │
                            └────── SettingNavigator
                                                 │
                                                 ├────── PaymentMenthods
                                                 │
                                                 ├────── PersonalInfo
                                                 │
                                                 ├────── ChangePassword
                                                 │
                                                 ├────── 
                                                 │
                                                 └────── 


