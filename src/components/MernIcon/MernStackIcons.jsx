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
    <div className="flex flex-wrap items-center justify-center gap-16 mt-16 text-center p-auto">
      <div className="icon-item flex items-center">
        <FaHtml5 className=" text-4xl  lg:text-5xl text-orange-500" />
        <span className="mt-2 text-xl">HTML5</span>
      </div>

      <div className="icon-item flex items-center lg:translate-y-16">
        <FaCss3 className=" text-4xl  lg:text-5xl text-blue-500" />
        <span className="mt-2 text-xl">CSS3</span>
      </div>

      <div className="icon-item flex items-center">
        <FaJs className=" text-4xl  lg:text-5xl  text-yellow-500" />
        <span className="mt-2 text-xl">JavaScript</span>
      </div>

      <div className="icon-item flex items-center lg:translate-y-16">
        <FaBootstrap className=" text-4xl  lg:text-5xl text-purple-500" />
        <span className="mt-2 text-xl">Bootstrap</span>
      </div>

      <div className="icon-item flex items-center">
        <FaJava className=" text-4xl  lg:text-5xl text-blue-500" />
        <span className="mt-2 text-xl">Java</span>
      </div>

      <div className="icon-item flex items-center lg:translate-y-16">
        <FaDatabase className=" text-4xl  lg:text-5xl text-green-500" />
        <span className="mt-2 text-xl">MongoDB</span>
      </div>

      <div className="icon-item flex items-center">
        <FaServer className=" text-4xl  lg:text-5xl text-gray-500" />
        <span className="mt-2 text-xl">Express.js</span>
      </div>

      <div className="icon-item flex items-center lg:translate-y-16">
        <FaReact className=" text-4xl  lg:text-5xl text-blue-500" />
        <span className="mt-2 text-xl">React</span>
      </div>

      <div className="icon-item flex items-center">
        <FaNodeJs className="text-4xl   lg:text-5xlflex  items-center  text-green-500" />
        <span className="mt-2 text-xl">Node.js</span>
      </div>
    </div>
  );
};

export default MernStackIcons;
