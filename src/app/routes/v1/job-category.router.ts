import * as jobCategoryHandler from '../../handlers/job-category.handler';

import {
  createCategory,
  updateCategory,
} from '../../validation/job-category.validation';

import { Router } from 'express';
import { createValidator } from 'express-joi-validation';

const validator = createValidator();
const router = Router();

router.post('/', validator.body(createCategory), jobCategoryHandler.createOne);
router.get('/', jobCategoryHandler.findAll);
router.get('/id/:id', jobCategoryHandler.findOneById);
router.get('/:slug', jobCategoryHandler.findOneBySlug);
router.put(
  '/:id',
  validator.body(updateCategory),
  jobCategoryHandler.updateOne
);
router.delete('/:id', jobCategoryHandler.deleteOne);
export default router;
