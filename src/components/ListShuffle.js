const listShuffle = (list) => {
    let newList = [];
    let length = list.length;
    let reducedList = [...list];
    for (let i=0; i < length; i++) {
        let randomNumber = randomNumberInRange(reducedList.length);
        newList.push(reducedList[randomNumber]);
        [reducedList[reducedList.length -1],  reducedList[randomNumber]] = [reducedList[randomNumber], reducedList[reducedList.length -1]];
        reducedList.pop();
    }
    return newList;
};

const randomNumberInRange = (range) => {
    return Math.floor(Math.random() * (range));
};

export default  listShuffle;