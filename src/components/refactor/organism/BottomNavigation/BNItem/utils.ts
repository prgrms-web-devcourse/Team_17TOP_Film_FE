export const isMobile = () => {
  const device = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return device.test(navigator.userAgent);
};
