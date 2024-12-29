import {
  FaDatabase,
  FaNodeJs,
  FaReact,
  FaServer,
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";

const MernStackIcons = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-20 mt-16 text-center">
      <div className="icon-item">
        <FaHtml5 className="text-orange-500 text-5xl" />
        <span className="mt-2 text-xl">HTML5</span>
      </div>

      <div className="icon-item  lg:translate-y-16">
        <FaCss3 className="text-blue-500 text-5xl" />
        <span className="mt-2 text-xl">CSS3</span>
      </div>

      <div className="icon-item">
        <FaJs className="text-yellow-500 text-5xl" />
        <span className="mt-2 text-xl">JavaScript</span>
      </div>

      <div className="icon-item lg:translate-y-16">
        <FaBootstrap className="text-purple-500 text-5xl" />
        <span className="mt-2 text-xl">Bootstrap</span>
      </div>

      <div className="icon-item">
        <FaJava className="text-blue-500 text-5xl" />
        <span className="mt-2 text-xl">Java</span>
      </div>

      <div className="icon-item lg:translate-y-16">
        <FaDatabase className="text-green-500 text-5xl" />
        <span className="mt-2 text-xl">MongoDB</span>
      </div>

      <div className="icon-item">
        <FaServer className="text-gray-500 text-5xl" />
        <span className="mt-2 text-xl">Express.js</span>
      </div>

      <div className="icon-item lg:translate-y-16">
        <FaReact className="text-blue-500 text-5xl" />
        <span className="mt-2 text-xl">React</span>
      </div>

      <div className="icon-item">
        <FaNodeJs className="text-green-500 text-5xl" />
        <span className="mt-2 text-xl">Node.js</span>
      </div>
    </div>
  );
};

export default MernStackIcons;
