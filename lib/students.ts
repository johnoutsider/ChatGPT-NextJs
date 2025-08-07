import fs from 'fs';
import path from 'path';

import { Student } from '@/types/student';

const dataFile = path.join(process.cwd(), 'data', 'students.json');

export function getStudents(): Student[] {
  const data = fs.readFileSync(dataFile, 'utf8');
  return JSON.parse(data) as Student[];
}

export function getStudentById(id: string): Student | undefined {
  const students = getStudents();
  return students.find(s => s.id === id);
}
