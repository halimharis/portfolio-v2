// src/components/Skills.tsx
import { skills } from "../constants";

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full">
              <div
                className="h-full bg-blue-500 rounded-full"
                style={{ width: skill.level }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
