// import { request } from 'express'
import { v4 } from 'uuid'
// import * as Yup from 'yup'
import User from '../models/User'

// class UserController {
//   async store(request, response) {
//     const schema = Yup.object().shape({
//       name: Yup.string().required(),
//       email: Yup.string().email().required(),
//       password: Yup.string().required().min(8),
//       asmin: Yup.boolean(),
//     })

//     if (!(await schema.isValid(request.body))) {
//       return response
//         .status(400)
//         .json({ error: 'Make sure your password or email are correct' })
//     }

//     try {
//       await schema.validateSync(request.body, { abortEarly: false })
//     } catch (err) {
//       return response.status(400).json({ error: err.errors })
//     }

//     const { name, email, password, admin } = request.body

class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    })

    return response.status(201).json({ id: user.id, name, email, admin })
  }
}

export default new UserController()
