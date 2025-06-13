import React from "react";

const spotlightStudents = [
  {
    name: "Prema Chowdhury",
    image: "https://i.ibb.co/bjfz1Dv4/student1.jpg",
    description: "A passionate tech blogger and full-stack enthusiast.",
  },
  {
    name: "Shantona Rahman",
    image: "https://i.ibb.co/Qjn8Lb78/student2.jpg",
    description: "Loves to write about AI and Data Science trends.",
  },
  {
    name: "Sumaiya Shrabon",
    image: "https://i.ibb.co/Pz4MMyKD/student3.webp",
    description: "Enjoys exploring UI/UX design and writing clean frontend code.",
  },
];

const StudentSpotlight = () => {
  return (
    <div className="mt-16 mb-20 max-w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">🎓 Student Spotlight</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {spotlightStudents.map((student, idx) => (
          <div
            key={idx}
            className="bg-base-200 shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500"
            />
            <h3 className="text-xl font-semibold">{student.name}</h3>
            <p className="text-gray-600 mt-2">{student.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSpotlight;
