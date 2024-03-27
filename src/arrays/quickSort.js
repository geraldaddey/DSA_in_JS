function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr
    }

    let pivotIndex = partition(arr, start, end) 

    quickSort(arr, start, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, end)

    return arr
}


function partition ( arr, start, end ) {  
    const pivotValue = arr[ end ]
    let pivotIndex = start 
    
    for ( let i = start; i < end; i++ ){
        
        if ( arr[ i ] < pivotValue ) {  
            let temp = arr[ i ]
            arr[ i ] = arr[ pivotIndex ] 
            arr[ pivotIndex ] = temp
            
            pivotIndex++
        }
        
    }
    
    let temp = arr[ pivotIndex ]
    arr[ pivotIndex ] = arr[ end ]
    arr[ end ] = temp 
    
    return pivotIndex
}

quickSort([10,6,8,5,7,3,4])
