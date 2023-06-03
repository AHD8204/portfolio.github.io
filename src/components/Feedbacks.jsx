import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { testimonials } from "../constants"
import { backend } from "../assets"
import { Tilt } from "react-tilt"


const FeedbackCard = ({ index, image, testimonial }) => (
  <motion.div 
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=" bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"

    >
    
    <div className="mt-1">
      <div className="flex justify-center items-center"> {/* Menggunakan tata letak flex dan mengatur penyejajaran (justify) dan penempatan (items) menjadi 'center' */}
        <img 
          src={image} 
          className="w-full h-fit rounded-2xl object-cover"
        />
      </div>
    </div>
    </Tilt>
  </motion.div>
);


const Feedbacks = () => {
  return (
    <div className=" mt-12 bg-black-100 rounded-[20px] justify-center items-center">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>This is</p>
          <h2 className={styles.sectionHeadText}>My Gallery</h2>

        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map ((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index ={index}
            {...testimonial}
          />
        ))}

      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");