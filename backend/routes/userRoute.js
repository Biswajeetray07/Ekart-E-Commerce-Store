import express from 'express'
import { register, verify, reverify } from '../controllers/userController.js'
const router = express.Router()
router.post('/register', register)
router.post('/verify', verify)
router.post('/reverify', reverify)


export default router