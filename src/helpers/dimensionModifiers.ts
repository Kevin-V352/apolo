export const lockDimensions = () => {
  const viewheight = window.innerHeight;
  const viewwidth = window.innerWidth;
  const viewport = document.querySelector('meta[name=viewport]');
  viewport!.setAttribute('content', `height=${viewheight}px, width=${viewwidth}px, initial-scale=1`);
};

export const unlockDimensions = () => {
  setTimeout(() => {
    const viewport = document.querySelector('meta[name=viewport]');
    viewport!.setAttribute('content', 'height=device-height, width=device-width, initial-scale=1');
  }, 200);
};
