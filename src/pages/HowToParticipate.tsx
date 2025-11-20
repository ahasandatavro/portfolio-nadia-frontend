import React from "react";
import { motion } from "framer-motion";
import EarthGif from "../assets/gifs/Earth.gif"
import MarsGif from "../assets/gifs/Mars.gif"
import JupitorGif from "../assets/gifs/Jupitor.gif"
const HowToParticipate = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* How to Participate Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }} // Animation will trigger every time it comes into view
                transition={{ duration: 1 }}
                className="py-20"
            >
                <div className="w-11/12 mx-auto text-center">
                    {/*<Heading>*/}
                    {/*    How to Participate*/}
                    {/*</Heading>*/}
                    <div className="flex flex-col md:flex-row justify-between">
                        {/* Step 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }} // Trigger every time this comes into view
                            transition={{ delay: 0.3 }}
                            className="mb-8 md:mb-0 text-center flex flex-col justify-center w-[30%] bg-slate-900 bg-opacity-60 z-10 p-5 rounded-2xl mx-4 shadow-lg shadow-indigo-800"
                        >
                            <img src={EarthGif} alt="Example GIF" className="w-20 h-auto rounded-lg shadow-lg mb-1" />

                            <div className="flex">
                            <span className="text-2xl text-start font-bold">Capture Your Photo</span>
                            </div>
                            <p className="text-sm text-start mt-3 leading-7">
                                Use any iPhone or device to shoot the night sky and capture the breathtaking beauty of the cosmos. Explore constellations, galaxies, and celestial events through your lens. With the right timing and creativity, turn ordinary nightscapes into extraordinary masterpieces. Let your photography reveal the wonders of the universe like never before.</p>
                        </motion.div>
                        {/* Step 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }} // Trigger every time this comes into view
                            transition={{ delay: 0.6 }}
                            className="mb-8 md:mb-0 text-center w-[30%] flex flex-col justify-center bg-slate-900 bg-opacity-60 z-10 p-5 rounded-2xl mx-4 shadow-lg shadow-indigo-800"
                        >
                            <img src={MarsGif} alt="Example GIF" className="w-20 h-auto rounded-lg shadow-lg mb-1" />
                            <div className="flex">
                                <span className="text-2xl text-left font-bold">Edit and Enhance</span>
                            </div>
                            <p className="text-sm text-start mt-3 leading-7">Adjust brightness, contrast, and colors to highlight celestial details like stars, constellations, and galaxies. Use advanced editing tools to refine textures, reduce noise, and create a professional finish. Transform your raw captures into stunning visual stories that showcase the beauty of the cosmos.</p>
                        </motion.div>
                        {/* Step 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }} // Trigger every time this comes into view
                            transition={{ delay: 0.9 }}
                            className="text-center w-[30%] bg-slate-900 flex flex-col justify-center bg-opacity-60 z-10 p-5 rounded-2xl mx-4 shadow-lg shadow-indigo-800"
                        >
                            <img src={JupitorGif} alt="Example GIF" className="w-20 h-auto rounded-lg shadow-lg mb-1" />
                            <div className="flex">
                                <span className="text-2xl text-left font-bold">Submit Your Photo</span>
                            </div>
                            <p className="text-sm text-start mt-3 leading-7">
                                Upload your photo using the form provided and take the first step towards showcasing your astrophotography talent. Simply follow the easy submission process to share your best night sky captures with us. Ensure your details are complete, and your image meets the requirements to qualify for the contest. Let your work shine and inspire others with the beauty of the cosmos!</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HowToParticipate;
