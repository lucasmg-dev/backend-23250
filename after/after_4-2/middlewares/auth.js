const isAdmin = (req, res, next) => {
  if (req.user.is_admin) next();
  res.json({
    error:
      "Esta opereacion solo se puede ejecutar con permisos de administrador",
  });
};

module.exports = {
  isAdmin,
};
