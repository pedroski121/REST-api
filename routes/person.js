import express from 'express'
import { postPerson, patchPerson, deletePerson, getPerson } from '../controllers/personController.js'
const router = express.Router()

router.get('/api/:user_id', getPerson)
router.post('/api', postPerson)
router.delete('/api/:user_id', deletePerson)
router.patch('/api/:user_id', patchPerson)

export {router as personRoutes}

/*
The endpoint can be /api/user_id for put and patch
Endpoint  /api for read
Endpoint can be /api/user_id for delete
*/
