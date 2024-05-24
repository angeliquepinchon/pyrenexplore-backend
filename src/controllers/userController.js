const userController = {
  getAllUsers: (req, res, next) => {
    res.send(`liste des utilisateurs en méthode ${req.method}`);
  },
  getOneUser: (req, res, next) => {
    res.send(`détail d'un utilisateur en méthode ${req.method}`);
  },
  createUser: (req, res, next) => {
    res.send(`creation d'un utilisateur toké en méthode ${req.method}`);
  },
  updateUser: (req, res, next) => {
    res.send(`mise à jour d'un utilisateur en méthode ${req.method}`);
  },
  deleteUser: (req, res, next) => {
    res.send(`suppression d'un utilisateur en méthode ${req.method}`);
  },

  getAllDiscoveries: (req, res, next) => {
    res.send(
      `récupération des découverte d'un utilisateur en méthode ${req.method}`
    );
  },
  getOneDiscoveries: (req, res, next) => {
    res.send(
      `détail d'une découverte d'un utilisateur en méthode ${req.method}`
    );
  },
  createDiscoveries: (req, res, next) => {
    res.send(
      `création d'une decouverte par un utilisateur en méthode ${req.method}`
    );
  },
  updateDiscoveries: (req, res, next) => {
    res.send(
      `mise à jour d'une decouverte par un utilisateur en méthode ${req.method}`
    );
  },
  deleteDiscoveries: (req, res, next) => {
    res.send(
      `suppression d'une decouverte par un utilisateur en méthode ${req.method}`
    );
  },
  getAllProjects: (req, res, next) => {
    res.send(
      `récupération de tous les projets d'un utilisateur en méthode ${req.method}`
    );
  },
};

export { userController };
