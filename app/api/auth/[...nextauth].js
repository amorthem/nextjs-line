import NextAuth from "next-auth"
import LineProvider from "next-auth/providers/line";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        LineProvider({
            clientId: process.env.LINE_CLIENT_ID,
            clientSecret: process.env.LINE_CLIENT_SECRET
        })
    ],
}

export default NextAuth(authOptions)