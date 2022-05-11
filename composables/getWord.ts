export const getWord = async () => {
  const word = await $fetch("/api/word");
  console.log(word);
  return word;
};
