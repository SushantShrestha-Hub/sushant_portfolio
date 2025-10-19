import express from "express";
import Project from "../models/Project";

const router = express.Router();

//get all projects
router.get("/", async (req, res) =>{
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {

        res.status(500).json({message: error.message});
    }
});

// post new projects
router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;