import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import { getStudentById, getStudents } from '@/lib/students';
import { Student } from '@/types/student';

interface StudentPageProps {
  student: Student;
}

export default function StudentPage({ student }: StudentPageProps) {
  return (
    <div>
      <h1>{student.name}</h1>
      <p>Age: {student.age}</p>
      <p>Major: {student.major}</p>
      <p>
        <Link href="/students">Back to list</Link>
      </p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const students = getStudents();
  const paths = students.map(student => ({ params: { id: student.id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StudentPageProps> = async ({ params }) => {
  const id = params?.id as string;
  const student = getStudentById(id);

  if (!student) {
    return { notFound: true };
  }

  return {
    props: {
      student,
    },
  };
};
