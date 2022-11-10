export interface IUser {
  id: number,
  nom: string,
  prenom: string,
  email: string,
  adresse: string,
  password: string,
  createdAt: string,
  updatedAt: string,
  deleteAt: null | string
}

// sur un user: le data de l'user est un User
export interface ISingleUser {
  data: IUser
}

//sur la list users: data est un array de Users
export interface IDataUser {
  data: IUser[]
}
