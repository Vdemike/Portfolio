import { motion } from "framer-motion";
import { styles } from "../styles";
import { button} from "../assets";
import { LogoCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5' style={{ zIndex: 1, position: "relative"}}>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div style={{ zIndex: 1, position: "relative"}}>
          <h1 className={`${styles.heroHeadText} text-white`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>
            Hi, I'm <span className='text-[#915EFF]'>Mike!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
            Together we create robust, user-friendly web-based  <br className='sm:block hidden' />
            solutions that meet the needs and expectations <br className='sm:block hidden' /> of customers.  I utilize a full-stack approach to ensure that<br className='sm:block hidden' /> every aspect of the user experience, from the interface<br className='sm:block hidden' /> to the backend functionality, is seamless and intuitive.
          </p>
          <div style={{ zIndex: 1, position: "relative", width:"200px"}}>
          <a href="/public/MikeIncourt.pdf" download title="Download Resume" className="flex items-center">
        <img src={button} alt='button' style={{ margin: "10px -10px", padding: "5px", height: "100px" }} />
        </a></div>
        </div>
        
      </div>
      <LogoCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
