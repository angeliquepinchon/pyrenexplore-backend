import { PrismaClient } from "@prisma/client";
import { errorHandler } from "../middelware/errorHandlerMiddleware.js";
import { buildFilters } from "../middelware/filterMiddleware.js";

const prisma = new PrismaClient();

const speciesController = {
  getAllSpecies: async (req, res, next) => {
    try {
      const filters = buildFilters(req.query);
      const species = await prisma.species.findMany({
        where: filters,
      });
      res.json(species);
    } catch (error) {
      errorHandler(error, res);
    }
  },
  getOneSpecies: async ({ params: { id } }, res, next) => {
    try {
      const species = await prisma.species.findUnique({
        where: {
          id: Number(id),
        },
      });
      if (!species) {
        return res.status(404).json({ erreur: "ressource introuvable" });
      }
      res.json(species);
    } catch (error) {
      errorHandler(error, req, res, next);
    }
  },
  createSpecies: async (req, res, next) => {
    try {
      const newSpecies = await prisma.species.create({
        data: req.body,
      });
      res.status(201).json(newSpecies);
    } catch (error) {
      errorHandler(error, req, res, next);
    }
  },
  updateSpecies: async ({ params: { id }, body }, res, next) => {
    try {
      const updatedSpecies = await prisma.species.update({
        where: {
          id: Number(id),
        },
        data: body,
      });
      if (!updatedSpecies) {
        return res.status(404).json({ erreur: "ressource introuvable" });
      }
      res.json(updatedSpecies);
    } catch (error) {
      errorHandler(error, req, res, next);
    }
  },
  deleteSpecies: async ({ params: { id } }, res, next) => {
    try {
      const deletedSpecies = await prisma.species.delete({
        where: {
          id: Number(id),
        },
      });
      if (!deletedSpecies) {
        return res.status(404).json({ erreur: "ressource introuvable" });
      }
      res.status(204).json();
    } catch (error) {
      errorHandler(error, req, res, next);
    }
  },
};

export { speciesController };
