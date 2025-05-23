import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const WebsiteMap = () => {
  return (
    <div className="websiteMapOuter">
      <div className="webMapInner px-16 py-10 ">
        <div className="pb-10">
          <div className="text-xl md:text-3xl font-bold md:leading-[4.5rem] ">
            <h2>Visit Our Office</h2>
          </div>
          <div className="text-xs md:text-base text-gray-400">
            <p>
              Schedule a visit to meet our team and explore how we can help{" "}
              <br />
              you achieve your goals.
            </p>
          </div>
          {/* <div className="mt-5 ">
              <Link to={"https://maps.app.goo.gl/T6yuRDxfTg4Uepwu5"}>
                <button className="bg-blue-700 text-white px-5 py-3 text-base rounded-md outline-none ">
                    <FontAwesomeIcon icon={faLocationDot} className="mr-2"/>
                  View on map
                </button>
              </Link>
            </div> */}
        </div>
        <div className="webMap items-center ">
         <div className="relative h-[35vh]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.6525224871666!2d77.40831987495238!3d28.51280178950872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9fcbe0273a1%3A0xd8ed754838e2f8a4!2sBhutani%20Alphathum!5e1!3m2!1sen!2sin!4v1747723976123!5m2!1sen!2sin"
    style={{
      position: "",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: 0,
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>
    </div>
  );
};

export default WebsiteMap;
