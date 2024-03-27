function insertionSort( nums ) {  
    for ( let i = 1; i < nums.length; i++ ) {  
        let j = i - 1 
        
        while (j >= 0 && nums[j] > nums[j + 1]) {  
            let tmp = nums[ j + 1 ]
            nums[ j + 1 ] = nums[ j ]
            
            nums[ j ] = tmp
            j--
        }
    }
    console.log(nums)
    return nums
}



let nums = [ 4, 5, 5, 7, 8 ]
insertionSort(nums)
