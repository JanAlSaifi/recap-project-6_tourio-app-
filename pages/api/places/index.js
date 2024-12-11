import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function HandleReadData(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();

    response.status(200).json(places);
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      await Place.create(placeData);
      response.status(201).json({ status: "Place created!" });
      return;
    } catch (error) {
      response.status(400).json({ status: "Place could not be created!" });
      return;
    }
  }
  response.status(405).json({ status: "error.message" });
}

// import { places } from "../../../lib/db";

// export default function handler(request, response) {
//   response.status(200).json(places);
//   return;
// }
