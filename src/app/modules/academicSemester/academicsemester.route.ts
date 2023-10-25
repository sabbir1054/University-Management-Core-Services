import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterZodValidation } from './academicSemester.validation';

const router = express.Router();
router.get('/', AcademicSemesterController.getAllData);
router.post(
  '/',
  validateRequest(AcademicSemesterZodValidation.crateSemesterValidation),
  AcademicSemesterController.insertToDB
);

export const AcademicSemesterRoutes = router;
