export const shuffleArray = (array) => {
  return [...array].sort(() => 0.5 - Math.random());
};

export const getUniqueItemsFromArray = (array, numberOfItems) => {
  const newArray = [];
  const takenIndices = [];
  while (newArray.length < numberOfItems) {
    const randomIndex = Math.floor(Math.random() * numberOfItems);
    if (!takenIndices.includes(randomIndex)) {
      newArray.push(array[randomIndex]);
      takenIndices.push(randomIndex);
    }
  }
  return newArray;
};
