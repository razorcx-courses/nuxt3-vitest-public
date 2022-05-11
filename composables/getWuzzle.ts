export const getWuzzle = async () => {
  const wuzzle = await $fetch("/api/wuzzle");
  console.log(wuzzle);
  return wuzzle;
};
