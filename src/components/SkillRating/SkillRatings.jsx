const skills = [
  { name: "HTML", rating: 4 },
  { name: "CSS", rating: 3 },
  { name: "JavaScript", rating: 5 },
  { name: "React", rating: 4 },
  { name: "Node.js", rating: 3 },
];

const SkillRatings = () => {
  return (
    <div className="flex-col  m-10 mt-4 space-y-6 md:gap-10">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center  justify-center  md:text-2xl text-[1rem]">
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
