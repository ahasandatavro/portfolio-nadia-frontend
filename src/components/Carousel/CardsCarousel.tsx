import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';
import {motion} from "framer-motion";
import {carouselData} from "../../MockData/mockdata"
interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({ image, title, category }: CardProps) {
    return (
        <motion.div
            whileTap={{ scale: 0.9 }}
            whileHover={{
                scale: 1.1,
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700"
        >
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                <div>
                    Read article
                </div>
            </Button>
        </Paper>
            <div className="intersect-visible">
                This element is visible in the viewport.
            </div>
        </motion.div>
    );
}



export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = carouselData.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <div className="px-40 mx-20">
        <Carousel
            slideSize={{ base: '100%', sm: '50%' }}
            slideGap={{ base: 2, sm: 'xl' }}
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
        </div>
    );
}