module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('is not Array');
  } else {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'string') {
        if ((/^--/).test(arr[i])) {
          let direct = arr[i].split('-')[3];
          let action = arr[i].split('-')[2];

          if (i > 0 && i < arr.length - 1) {

            if (direct == 'next' && !(/^--/).test(arr[i + 1])) {
              if (action == 'double') {
                newArr.push(arr[i + 1]);
              } else {
                i++;
              }
            } else if (action == 'double' && !(/^--/).test(arr[i - 1])) {
              newArr.push(arr[i - 1]);
            } else if (!(/^--/).test(arr[i - 1])){
              newArr.pop();
            }

          }

        }
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
};
