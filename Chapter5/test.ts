
interface UserInterface {
    email: string;
    token: string;
    resetPassword: () => boolean;
}
const User : UserInterface = {
    email: 'user@corp.org',
    token: 'alphamaleUser',
    resetPassword(): boolean { return true }
}


