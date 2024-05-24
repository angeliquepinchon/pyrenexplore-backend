const articleController = {
  getAllArticles: (req, res, next) => {
    res.send(`liste des articles en méthode ${req.method}`);
  },
  getOneArticle: (req, res, next) => {
    res.send(`detail d'un article en méthode ${req.method}`);
  },
  getAllComments: (req, res, next) => {
    res.send(`liste des commentaires d'un articles en méthode ${req.method}`);
  },
  createArticles: (req, res, next) => {
    res.send(`création d'un article en méthode ${req.method}`);
  },
  updateArticles: (req, res, next) => {
    res.send(`mise à jour d'un article en méthode ${req.method}`);
  },
  deleteArticles: (req, res, next) => {
    res.send(`suppression d'un article en méthode ${req.method}`);
  },
};

export { articleController };
