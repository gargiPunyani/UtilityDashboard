import ContactForm from "./ContactForm/ContactForm";
import CustomizedTimeline from "./ContactTimeline/ContactTimeline";
import WebsiteMap from "./WebsiteMap/WebsiteMap";

const WebContact = () => {
  return (
    <div>
      <div className="text-center bg-white">
        <div
          className="webContactInner h-[30vh] md:h-[80vh] w-full bg-cover bg-center font-bold text-white text-4xl"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dixfg1bvv/image/upload/v1747373175/Company_Profil_1_f0zbxj.png')",
            objectFit: "cover",
          }}
        ></div>
        <div className=" ">
          <div className="max-w-screen-xl mx-auto"> 
            <div className="px-5  py-10">
              <h2>
                <p className="text-base md:text-2xl font-medium ">
                  We're Growing — So Can You
                </p>
                <p className="text-sm md:text-lg">
                  Find your purpose, make a difference...
                </p>
                <p className="text-sm md:text-lg">because</p>
                <p className="text-sm md:text-lg">"Success is a Shared Journey"</p>
              </h2>
            </div>
            <CustomizedTimeline />
          </div>
          <div className="contactForm bg-blue-100  ">
            <ContactForm />
          </div>
         <WebsiteMap/>
        </div>
      </div>
    </div>
  );
};

export default WebContact;
