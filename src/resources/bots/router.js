import { Router }  from 'express'
import controller from './controller'

export default Router({ mergeParams: true }).get('/', controller.list)