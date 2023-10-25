import { AcademicSemester } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (
  academicSemesterData: AcademicSemester
): Promise<AcademicSemester> => {
  const result = await prisma.academicSemester.create({
    data: academicSemesterData,
  });
  return result;
};

const getAllData = async () => {
  const result = await prisma.academicSemester.findMany({});
  return result;
};

export const AcademicSemesterServices = {
  insertIntoDB,
  getAllData,
};
