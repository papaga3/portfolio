import Image from "next/image";
import DogImage from "/public/dog.jpg";
import Link from "next/link";

const Home = () => {
  return(
    <div>
      <div className="absolute -z-10 inset-0">
        <Image 
          src={DogImage} 
          alt="A Dog Image"
          fill 
          style={{ objectFit: "cover" }}/>
      </div>
      <div> Home page </div>
      Source: <Link href="https://www.freepik.com/"> Freepik </Link>
    </div>
  );
}

export default Home;