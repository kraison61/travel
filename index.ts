import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

import cors from "cors";
import express from "express";
const prisma = new PrismaClient();

const app = express();

app.use(cors());

app.get(
  "/api/images",
  async function (req: Request, res: Response, next: NextFunction) {
    const imagesData = await prisma.image_uploads.findMany();
    res.json({ imagesData });
  }
);
app.get(
  "/api/images/:id",
  async function (req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const image = await prisma.service_names.findUnique({
      where: {
        id: parseInt(id),
      },
      // include:{
      //   image_uploads:true
      // }
    });
    res.json();
  }
);



// Services API
app.get(
  "/api/services",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const services = await prisma.services.findMany({
        include: {
          service_names: true,
        },
      });

      res.json({ services });
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

app.get(
  "/api/services/:id",
  async function (req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const service = await prisma.services.findUnique({
      where: {
        id: parseInt(id),
      },
      // include:{
      //   image_uploads:true
      // }
    });
    res.json();
  }
);

// Blog API
app.get(
  "/api/blogs",
  async function (req: Request, res: Response, next: NextFunction) {
    try {
      const blogs = await prisma.blogs.findMany({
        include: {
          service_names: true,
        },
      });

      res.json({ blogs });
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

app.get(
  "/api/blogs/:id",
  async function (req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const blog = await prisma.services.findUnique({
      where: {
        id: parseInt(id),
      },
      // include:{
      //   image_uploads:true
      // }
    });
    res.json();
  }
);

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 5000");
});
