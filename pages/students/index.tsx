import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getStudents } from '@/lib/students';
import { Student } from '@/types/student';

interface StudentsPageProps {
  students: Student[];
}

export default function StudentsPage({ students }: StudentsPageProps) {
  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<StudentsPageProps> = async () => {
  const students = getStudents();
  return {
    props: {
      students,
    },
  };
};
