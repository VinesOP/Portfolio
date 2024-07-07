import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const testimonialsData = [
  {
    name: "Amisha Bairagi",
    content: "Vinit Kumar has an incredible skill. He has a unique ability to bring creative ideas to life with his exceptional design skills. The logos, posters, and brochures he designed for us were not only visually stunning but also effectively communicated our message. Vinit's professionalism and attention to detail are truly commendable.",
  },
  {
    name: "Muskan Gupta",
    content: "Vinit's design work exceeded our expectations. His ability to understand our vision and translate it into beautiful, functional designs is unmatched. We were particularly impressed with his work on motion videos and AI editing. We highly recommend Vinit for any graphic design project.",
  },
  {
    name: "Ruchi Gautam",
    content: "Vinit Kumar is a talented designer who always delivers exceptional results. His creativity and technical skills are evident in every project he undertakes. We were delighted with the logos, posters, and brochures he created for us. Vinit is a pleasure to work with and we look forward to collaborating with him again.",
  },
  {
    name: "Shiwani Boipai",
    content: "Vinit's designs are not only visually appealing but also highly effective in conveying our brand's message. His attention to detail and dedication to his craft are evident in every piece of work he produces. We are extremely satisfied with the results and would recommend Vinit to anyone in need of high-quality graphic design.",
  },
];

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What clients <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider testimonials={testimonialsData} />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

