import connect from "@/app/lib/db";
import ProjectEntity from "@/app/model/ProjectEntity";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const project = await ProjectEntity.findById(id);
        if (!project) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(project);
      } catch {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const project = await ProjectEntity.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!project) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json(project);
      } catch {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedProject = await ProjectEntity.deleteOne({ _id: id });
        if (!deletedProject) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}