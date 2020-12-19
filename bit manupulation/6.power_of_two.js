let num = 17;

console.log((num & (num - 1)) == 0);

// If we subtract a power of 2 numbers by 1 then all unset bits after the only set bit become set; and the set bit becomes unset.
// For example for 4 ( 100) and 16(10000), we get the following after subtracting 1
// 3 –> 011
// 15 –> 01111

// geeksforgeeks.org/program-to-find-whether-a-no-is-power-of-two/  
