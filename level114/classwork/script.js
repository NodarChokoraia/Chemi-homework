let nums = [1,2,3,4,5]
nums.forEach((num,i) => {
    nums[i] = num **2
    console.log(nums[i]);
    
});





let prices = [10, 20, 30];
console.log(prices.reduce((t,n)=> t + n ),0);

const nums1 = [10, 5, 2, 7, 19, 203];
console.log(nums1.reduceRight((t,n)=> t - n ),0);