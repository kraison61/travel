import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
const prisma = new PrismaClient();
const bodyParser = require("body-parser");
const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Helper Function for error handling
const handleError = (res: Response, error: unknown, entityName: string) => {
  console.error(error);
  if (error instanceof Error) {
    res.status(500).json({
      error: `Error processing ${entityName}`,
      details: error.message,
    });
  } else {
    res.status(500).json({ error: `Error processing ${entityName}` });
  }
};

//Type definitions for request bodies
interface CreateServiceInput {
  service_id: number;
  kw_title: string;
  kw_des: string;
  kw_h1: string;
  kw_top1: string;
  kw_top2: string;
  kw_con1: string;
  kw_con2: string;
  kw_img1?: string | null;
  kw_img2?: string | null;
  topalt?: string | null;
  bottomalt?: string | null;
}
interface CreateBlogInput {
  title: string;
  description: string;
  content: string;
  image: string;
  servicename_id: number;
}
interface CreateServiceNameInput {
  service_id: number;
  name: string;
  description: string;
  image: string;
}

//Test API
app.post("/api/test", (req, res) => {
  console.log(req.body.name);
  res.json("Hello Test API");
});

// Service Names CRUD API
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
      // include: {
      //   image_uploads: true,
      // },
    });
    res.json({ service });
  }
);

app.post(
  "/services",
  async (req: Request<{}, {}, CreateServiceInput>, res: Response) => {
    try {
      const newService = await prisma.services.create({
        data: req.body,
        include: { service_names: true },
      });
      res.status(201).json(newService);
    } catch (error) {
      handleError(res, error, "service creation");
    }
  }
);

//Image Upload CRUD

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
      include: {
        image_uploads: true,
      },
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

app.post(
  "/api/blogs",
  async (req: Request<{}, {}, CreateBlogInput>, res: Response) => {
    const { title, description, content, image, servicename_id } = req.body;
    try {
      const newBlog = await prisma.blogs.create({
        data: {
          title,
          description,
          content,
          image,
          servicename_id,
        },
        include: { service_names: true },
      });
    } catch (error) {
      // Handle error
      handleError(res, error, "blog Creattion");
    }
  }
);

app.post("/api/blogs", async (req: Request, res: Response) => {});

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 5000");
});
