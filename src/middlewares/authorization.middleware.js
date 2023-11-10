const Authorization = (...allowedRoles) => {
  return (req, res, next) => {
    if(!req?.roles) {
      return res.status(401);
    } else {
      const rolesArray = [...allowedRoles];
      const result = req.roles.map((role) => rolesArray.include(role)).find(val => val === true);

      if(!result) {
        // si le status n'est pas auth envoie d'un err 
        return res.status(401)
      } else {
        // si il a la perm acces vers la page
        next()
      }
    }
  }
}
