function mergeSort ( arr ) {  
    if ( arr.length <= 1 ) {  
        return arr;
    } 
    
    let middle = Math.floor( arr.length / 2 )
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort( arr.slice( middle ) )
    
    result = merge( left, right ); 
    console.log(result)
    return result
}

function merge ( left, right ) {  
    let result = []
    
    let leftIndex = 0
    let rightIndex = 0 
    
    while ( leftIndex < left.length && rightIndex < right.length ) {  
        if ( left[ leftIndex ] < right[ rightIndex ] ) {
            result.push( left[ leftIndex ] )
            left++
        } else {  
            result.push( right[ rightIndex ] )
            rightIndex++
        }
    }
    
    while (leftIndex < left.length) {  
        result.push( left[ leftIndex ] )
        leftIndex++ 
    } 
    while (rightIndex < left.length) {  
        result.push( right[ rightIndex ] )
        rightIndex++ 
    } 
    
    return result
}

mergeSort([1, 4, 6, 8, 9, 0, 2 , 3, 8 ])
