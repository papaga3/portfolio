import Link from "next/link";
import { Button } from "@mui/joy";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
         <h1 className="text-4xl font-bold text-center"> Hello and Welcome </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="m-4 text-justify">
          <p> My name is Quoc Huy, Nguyen. I am a software developer from Vaasa, Finland. I graduated from VAMK in 2021. 
              I have experiences working as a web developer using ReactJS. I am also familiar with JavaSpring and .NET framework.
              I created this website as a place for me to document some of my personal projects.
          </p>
        </div>

        <div className="m-4">
            <h3 className="text-xl font-bold"> My most familiar technology </h3>
            { skills.map((item, index) => 
                <div key={`skill-${index}`} className="inline-block m-2 bg-pink-300 border rounded-sm text-center text-neutral-900 w-80 md:w-24"> {item} </div>) 
            }
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center"> Bio Links </h2>
        <div className="flex justify-center">
          <div className="m-4 text-xl">
              <a href="https://github.com/papaga3/"> <GitHubIcon fontSize="large"/> </a>
          </div>
          <div className="m-4 text-xl">
              <a href="https://www.linkedin.com/in/quoc-huy-nguyen-861a42176/"> <LinkedInIcon fontSize="large" /> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;