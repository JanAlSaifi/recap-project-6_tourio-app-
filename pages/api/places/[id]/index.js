//import { places } from "../../../../lib/db.js";
import dbConnect from "@/db/connect";
import Place from "@/db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  const place = await Place.findById(id);

  if (!place) {
    response.status(404).json({ status: "Not found" });
    return;
  }

  response.status(200).json(place);
  console.log("Place: ", place);
}
