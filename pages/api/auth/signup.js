// import connectMongo from "../../../database/conn";
// import Users from "../../../model/Schema";
// import { hash } from "bcryptjs";

// export default async function handler(req, res) {
//   connectMongo().catch((error) => res.json({ error: "Connection Failed.." }));

//   if (req.method === "POST") {
//     console.log(req.body)
//     if (!req.body) {
//       res.status(404).json({ error: "Dont have form data..." });
//     }

//     const { username, email, password } = req.body;

//     const checkexisting = await Users.findOne({ email });
//     if (checkexisting)
//       return res.status(422).json({ message: "Users already exists..." });

//     Users.create(
//       { username, email, password: await hash(password, 12) },
//       function (err, data) {
//         if (err) return res.status(404).json({ err: "gashgxchg" });
//         res.status(201).json({ status: true, user: data });
//       }
//     );
//   } else {
//     res
//       .status(500)
//       .json({ message: "HTTP method not accepted only POST accepted" });
//   }
// }
