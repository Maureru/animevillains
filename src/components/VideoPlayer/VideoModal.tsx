import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

interface VideoModalProps {
  videoUrl: string;

  toogleModal: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, toogleModal }) => {
  const videoModalAnimation = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'ease',
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'ease',
      },
    },
  };

  const ref = useRef<HTMLDivElement>(null);

  const closeVideoOnOutsideClick = (e: MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      toogleModal();
    }
  };

  useEffect(() => {
    addEventListener('mousedown', closeVideoOnOutsideClick);

    return () => removeEventListener('mousedown', closeVideoOnOutsideClick);
  }, []);

  return (
    <div className="fixed z-50 h-full w-full flex justify-center items-center top-0 left-0 bg-black/80">
      <motion.div
        ref={ref}
        variants={videoModalAnimation}
        initial="initial"
        animate="animate"
        exit="initial"
        className="relative"
      >
        <div
          onClick={toogleModal}
          className="absolute -top-8 right-0 cursor-pointer"
        >
          <IoMdClose className="text-white text-3xl" />
        </div>
        <div className=" rounded-md overflow-hidden ">
          <ReactPlayer url={videoUrl} />
        </div>
      </motion.div>
    </div>
  );
};
export default VideoModal;
