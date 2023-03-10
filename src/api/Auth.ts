import User from "../types/User"

export default class Auth {
    static async checkPassword(id: string, passwordRaw: string): Promise<boolean> {
        // Check password

        return true
    }

    static async login(id: string, passwordRaw: string): Promise<User | null> {
        // Attempt login and return User if successful

        return null
    }

    static async logout(id: string): Promise<void> {
        // Let server know use has logged out
    }

    static async changePassword(id: string, passwordRaw: string, newPasswordRaw: string): Promise<boolean> {
        // Change password

        return true
    }
}
