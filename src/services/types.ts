export type LoginOktaRequest = {
    username: string;
    password: string;
    options?: {
        multiOptionalFactorEnroll: boolean;
        warnBeforePasswordExpired: boolean;
    };
    context: {
        deviceToken: string;
    };
};

