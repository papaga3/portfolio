import Link from "next/link";
import { Button } from "@mui/joy";

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
              I have experiences working as a web developer using ReactJS. I am familiar with JavaSpring and .NET framework.
          </p>
          <Button>
            <Link href="/about"> About me </Link>
          </Button>
        </div>

        <div className="border m-4">
            <h2> Here is a list of my skills </h2>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center"> Contact Information </h2>
      </div>
    </div>
  );
}

export default Home;