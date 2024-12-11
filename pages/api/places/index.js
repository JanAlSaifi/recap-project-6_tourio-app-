import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function HandleReadData(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();

    response.status(200).json(places);
  }
}

// import { places } from "../../../lib/db";

// export default function handler(request, response) {
//   response.status(200).json(places);
//   return;
// }
