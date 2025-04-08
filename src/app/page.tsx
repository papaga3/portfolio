import Image from "next/image";
import DogImage from "/public/dog.jpg";
import Link from "next/link";

const Home = () => {

  const skills = ["ReactJS", "JavaSpring", "SQL", "SPARQL", "C#"];
  const langSkills = [
    {name: "English", level: "C1"},
    {name: "Finnish", level: "B1"},
    {name: "Vietnamese", level: "Native"}
  ];

  return(
    <div>
      <div>
        <h1> Hello and Welcome </h1>
      </div>

      <div>
        <p> My name is Quoc Huy, Nguyen. I am a software developer from Vaasa, Finland. I graduated from VAMK in 2021. 
            I have experiences working as a web developer using ReactJS. I am also familiar with JavaSpring as backend technology
            I am open for a web developer or fullstack developer position.
        </p>
      </div>

      <div>
          <h2> Here is a list of my skills </h2>
      </div>

      <div>
        <h2> Contact Information </h2>
      </div>
    </div>
  );
}

export default Home;