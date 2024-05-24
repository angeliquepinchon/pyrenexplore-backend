const projectController = {
  getAllProjects: (req, res, next) => {
    res.send(`liste des projets en méthode ${req.method}`);
  },
  getOneProject: (req, res, next) => {
    res.send(`Récupération d'un projet en methode ${req.method}`);
  },
  createProject: (req, res, next) => {
    res.send(`création d'un projet en methode ${req.method}`);
  },
  updateProject: (req, res, next) => {
    res.send(`mise à jour d'un projet en methode ${req.method}`);
  },
  deleteProject: (req, res, next) => {
    res.send(`suppression d'un projet en methode ${req.method}`);
  },
};

export { projectController };
