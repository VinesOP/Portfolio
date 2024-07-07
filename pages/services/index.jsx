import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [
  {
    title: "Logo Design",
    description:
      "Creating unique and memorable logos tailored to your brand's identity. Experience with various themes including Apple, Rhino, Dinosaur, and Ice Cream logos.",
  },
  {
    title: "Poster Design",
    description:
      "Designing eye-catching posters for announcements and events. Experience includes creating official culfest brochure and posters for Faces at NIT Jamshedpur.",
  },
  {
    title: "Brochure Design",
    description:
      "Crafting informative and visually appealing brochures that effectively communicate your message. Notable work includes the official culfest brochure for Faces.",
  },
  {
    title: "Motion Videos",
    description:
      "Producing engaging motion videos that captivate your audience and convey your message dynamically.",
  },
  {
    title: "AI Editing",
    description:
      "Utilizing advanced AI tools for editing and enhancing images and videos, delivering high-quality results.",
  },
  {
    title: "Graphic Design",
    description:
      "Providing a wide range of graphic design services including book covers, posters, and more. Proficient in Photoshop, Canva, and other design tools.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I offer a range of graphic design services to bring your ideas to life. Whether you need a striking logo, an engaging poster, or a dynamic motion video, I have the skills and experience to deliver exceptional results.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider services={serviceData} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

