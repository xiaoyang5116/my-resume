export const headerVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const getMenuStyles = (menuOpened: boolean) => {
  if (document.documentElement.clientWidth <= 768) {
    return { right: menuOpened ? "0" : "-100%" };
  }
};
