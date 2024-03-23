## Arrays:

Arrays are categorized as static or dynamic.

They store items sequentially in memory. On a 32-bit system, each number typically occupies 4 bytes, while on a 64-bit system, it's 8 bytes.

**Dynamic arrays**, common in languages like JavaScript, may seem efficient but exhibit complexities. Adding an element often entails creating a new array, doubling its size, copying existing elements, and appending the new one.

In contrast, **static arrays**, seen in languages like C, have fixed sizes determined at initialization.

Understanding array efficiency in terms of Big O notation involves recognizing the memory allocation process. Initializing an array takes O(n) time as each item is stored in memory. Expanding an array due to additional items requires copying it to a new location, introducing further time complexity.
