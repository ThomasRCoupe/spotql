export const getCurrentDateAfterSeconds = (seconds: number) => {
  const currentDate = new Date();
  currentDate.setSeconds(currentDate.getSeconds() + seconds);

  return currentDate;
};
