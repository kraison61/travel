import { Request, Response, NextFunction } from "express";
import {PrismaClient} from '@prisma/client'

import cors from 'cors';
import express from 'express';
const prisma = new PrismaClient()

const app = express();

app.use(cors());




app.get('/api/images', async function (req: Request, res: Response, next: NextFunction) {
  const images = await prisma.image_uploads.findMany()
  res.json({ images:images });
});
app.get('/api/images/:id', async function (req: Request, res: Response, next: NextFunction) {
  
  const id = req.params.id
  const image = await prisma.service_names.findUnique({
    where: {
      id: parseInt(id)
    },
    // include:{
    //   image_uploads:true
    // }
  })
console.log(image)
  res.json();
});

// Services API 
app.get('/api/services', async function (req: Request, res: Response, next: NextFunction) {
  try {
    const services = await prisma.services.findMany()
  res.json({services});
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  
});


app.get('/api/services/:id', async function (req: Request, res: Response, next: NextFunction) {
  const id = req.params.id
  const service = await prisma.services.findUnique({
    where: {
      id: parseInt(id)
    },
    // include:{
    //   image_uploads:true
    // }
  })
console.log(service)
  res.json();
});


app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000');
});




// console.log("test")