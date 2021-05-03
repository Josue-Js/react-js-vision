

export const TitleAnimation = {
    
    start: {
        opacity: [0, 1],
        translateY: [-50, 0],
        transition: {
            duration: 0.8,
            ease: "easeInOut"
        }

    }

}

export  const ListAnimation = {
    open: {
        height: '100%',
        bottom: 0,                
    },

    close: {
        bottom: -190,
        height: 'fit-content',
    }
}

export const ArrowUpAnimation = {
    open: {
        rotate: 180
    },
    close: {
        rotate: 0
    }
}


export const  IFrameAnimation = {
    start: {
      width: '100%',
      height: '100%',
      opacity: [0, 1],
      transition: { 
        duration: 0.5, 
        delay: 0.8, 
      }
    },
    exit: {
      width: 0,
      height: 0,
      opacity: 0.2,
      transition: { 
        duration: 0.47, 
        ease: "easeIn" 
      }
    }
  }