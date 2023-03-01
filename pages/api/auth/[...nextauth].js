import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
// import connectMongo from "../../../database/conn";
// import Users from "../../../model/Schema";
// import { compare } from "bcryptjs";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   async authorize(credentials, req) {
    //     connectMongo().catch((error) => {
    //       error: "connection failed...";
    //     });

    //     const result = await Users.findOne({ email: credentials.email });
    //     if (!result) {
    //       throw new Error("No user found please signup to continue");
    //     }

    //     const checkPassword = await compare(
    //       credentials.password,
    //       result.password
    //     );

    //     if (!checkPassword || result.email != credentials.email){
    //        throw new Error("Usename or password does not match");
    //     }

    //     return result;
    //   },
    // }),
  ],
  secret: "Wx+0W5odHBiXvDnMmQMhywj/9+G8BPXVTtAftmUzlaM=",
  // ...add more providers here
};

export default NextAuth(authOptions);
