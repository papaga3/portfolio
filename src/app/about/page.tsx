const AboutPage = () => {

    const educationExp = [
        { 
            time: "2016 - 2021",
            degree: "Bachelor of Engineering in Information Technology",
            school: "VAMK",
            desc: "During my school year, I"
        }
    ];

    const workExp = [
        {
            time: "",
            workplace: "",
            desc: "",
        }
    ];

    return(
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center"> About Me </h1>
            </div>

            <div>
                <h3 className="text-xl font-bold"> Work Experience </h3>
            </div>

            <div>
                <h3 className="text-xl font-bold"> Education </h3>
                {
                    educationExp.map((item, index) => {
                        return (
                            <div key={`eduExp-${index}`}>
                                <div className="font-bold"> {item.time} - {item.degree} - {item.school} </div>
                                <div className="block">
                                    {item.desc}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default AboutPage;