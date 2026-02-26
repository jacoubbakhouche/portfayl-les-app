import { motion } from 'framer-motion';

interface AnimatedProjectImageProps {
    src: string;
    alt: string;
}

export function AnimatedProjectImage({ src, alt }: AnimatedProjectImageProps) {
    return (
        <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
        />
    );
}
