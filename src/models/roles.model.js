const Permissions = require("./permissions.model")

const ROLES = [
  "ADMIN": [
  ...Permissions
  ],
  "MODO": [
    Permissions[1],
    Permissions[2]
    Permissions[3]
  ],
  "GAMEHOST": [
    Permissions[5],
    Permissions[4]
    Permissions[3]
  ],
  "JOUEUR": [
    Permissions[1],
  ],
]


export default ROLES
