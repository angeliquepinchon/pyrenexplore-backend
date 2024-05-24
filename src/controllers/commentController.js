const commentController = {
  createComment: (req, res, next) => {
    res.send(`création d'un commentaire en methode ${req.method}`);
  },
  updateComment: (req, res, next) => {
    res.send(`mise à jour d'un commentaire en methode ${req.method}`);
  },
  deleteComment: (req, res, next) => {
    res.send(`suppression d'un commentaire en methode ${req.method}`);
  },
};

export { commentController };
