// Counting Array Elements 
function count(array) {
    const countMap = {};
    array.forEach(element => {
      if (countMap[element]) {
        countMap[element] += 1;
      } else {
        countMap[element] = 1;
      }
    });
    return countMap;
  }
  
  const array = ['james', 'james', 'john'];
  const result = count(array);
  console.log(result);  // { 'james': 2, 'john': 1 }

// N-th fibonacci
function nthFibo(n) {
    if (n <= 0) {
      throw new Error("n must be a positive integer");
    }
    
    if (n === 1) {
      return 0;
    }
    
    if (n === 2) {
      return 1;
    }
    
    let fibo1 = 0;
    let fibo2 = 1;
    let fiboN = null;
    
    for (let i = 3; i <= n; i++) {
      fiboN = fibo1 + fibo2;
      fibo1 = fibo2;
      fibo2 = fiboN;
    }
    
    return fiboN;
  }
  
  console.log(nthFibo(4));  // 2
  
// 