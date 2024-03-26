var addTwoPromises = async function (promise1, promise2) {
    const [num1, num2] = await Promise.all([promise1, promise2])
   console.log(num1+num2)
};
addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20)),new Promise(resolve => setTimeout(() => resolve(5), 60)))