import connect from "@/app/lib/db";
import ProjectEntity from "@/app/model/ProjectEntity";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
  ) {
    const { method } = req;
  
    await connect();
  
    switch (method) {
      case "GET":
        try {
          const projects = await ProjectEntity.find({}); /* find all the data in our database */
          res.status(200).json(projects);
        } catch {
          res.status(400).json({ success: false });
        }
        break;
      case "POST":
        try {
          const project = await ProjectEntity.create(
            req.body,
          ); /* create a new model in the database */
          res.status(201).json({ success: true, data: project });
        } catch {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }

  