import {
    motion,
    useAnimation,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion"
import React, { useEffect, useRef } from "react"
import {CardsCarousel} from "@/components/Carousel/CardsCarousel";
import Heading from "@/components/Heading/Heading";
import SparklingText from "@/components/SparklingText/SparklingText";

const Gallery = () => {
    const { scrollYProgress: completionProgress } = useScroll()

    const containerRef = useRef(null)

    const isInView = useInView(containerRef, { once: true })
    const mainControls = useAnimation()

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    })

    const paragraphOneValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"]
    )

    const paragraphTwoValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"]
    )

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])
    return (
        <div className="min-h-screen bg-black">
            <div className="flex flex-col gap-10 overflow-hidden justify-center">
            <SparklingText text="Showcase of Past Winners" className="my-4 text-4xl text-center font-bold"/>
            <CardsCarousel/>

        </div>
        </div>
    )
}

export default Gallery;