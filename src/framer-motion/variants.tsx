export const sectionVariants = ({
  from,
}: {
  from: "left" | "right" | "top" | "bottom";
}) => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -200 : from === "right" ? 200 : 0,
    y: from === "bottom" ? 200 : from === "top" ? -200 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.2,
    },
  },
});

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 500,
      type: "spring",
    },
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    x: -1000,
    y: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.01,
      stiffness: 80,
      mass: 0.7,
    },
  },
};

export const rightSideVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.01,
      type: "spring",
      stiffness: 80,
      mass: 0.3,
    },
  },
};

export const leftSideVariants = {
  open: (height: number = 5000) => ({
    clipPath: `circle(${height * 2 + 500}px at -40px -40px)`,
    transition: {
      type: "spring",
      stiffness: 80,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at -40px -40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const zoomVariants = {
  scaleup: {
    scale: 1.2,
  },
  scaledown: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 1.9,
    },
  },
};
