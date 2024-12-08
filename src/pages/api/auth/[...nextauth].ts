import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        fullname: { label: "Fullname", type: "text" },
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password, fullname } = credentials as {
          email: string;
          password: string;
          fullname: string;
        };

        const user = {
          id: "1",
          email: email,
          password: password,
          fullname: fullname,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user?.email;
        token.fullname = user?.fullname;
      }

      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }

      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);