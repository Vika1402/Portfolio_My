const skills = [
  { name: "HTML", rating: 4 },
  { name: "CSS", rating: 3 },
  { name: "JavaScript", rating: 5 },
  { name: "React", rating: 4 },
  { name: "Node.js", rating: 3 },
];

const SkillRatings = () => {
  return (
    <div className="flex flex-col justify-center w-full gap-10 m-10 mt-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-[20px] text-2xl">
          <span className="text-yellow-500">{skill.name}</span>
          <div className="space-x-6 rating">
            {Array.from({ length: 5 }, (_, i) => (
              <input
                key={i}
                type="radio"
                name={`rating-${index}`}
                className="mask mask-star"
                defaultChecked={i < skill.rating}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillRatings;
