import { useEffect, useState } from 'react';

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetch('/api/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Student Database</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
