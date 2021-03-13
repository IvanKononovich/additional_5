module.exports = function check(originStr, bracketsConfig) {
  let end = false;
  let str = originStr
  
  while(!end) {
    // We are looking for brackets that can be closed for sure and remove them
    const findedBrackets = bracketsConfig.some(config => {
      let oldString = str
      str = str.replace(`${config[0]}${config[1]}`, '')
      return oldString !== str
    });

    // Stop the loop if nothing has been removed
    end = !findedBrackets
  }

  // If the str is empty, then all brackets were closed correctly
  return !Boolean(str.length)
}
