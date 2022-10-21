1. Line 9 will print the value of the variable i which is 3. The value is 3 because the for loop runs three times since prices is a list that contains three elements. Therefore, the value of variable i is 3. 
2. Line 13 will print the value of discountedPrice which is 150. The value is 150 because the for loop will run three times since prices is a list that contains three elements and the third element of the list is 300. Then, the discountedPrice will be calculated by multiplying the prices[i] by (1 - discount). In this case, the prices[3]= 300 and the discount is 0.5. So, we get the discountedPrice is 300 * 0.5 = 150. Therefore, the discountedPrice is 150. 
3. Line 14 will print the value of finalPrice which is 150. The value is 150 because the for loop will run three times since prices is a list that contains three elements and the third element of the list is 300. Then, the discountedPrice will be calculated by multiplying the prices[i] by (1 - discount). In this case, the prices[3]= 300 and the discount is 0.5. So, we get the discountedPrice is 300 * 0.5 = 150. Then, this value will be passed to Math.round that will round it to the nearest integer. In this case, finalPrice is equal to Math.round(150*100)/100 = 150. Therefore, the finalPrice will remain be 150. 
4. The function will return a list of three elements which is ([50, 100, 150]). This is because the discounted is a list of three element that is calculated from passing two argument which are prices and discount. Then, the function will compute these two argument and calculate each element in the list and multiplying it by 0.5 such that the first element is 100 * 0.5 = 50, the second element is 200 * 0.5 = 40, and the last element is 300 * 0.5 = 150. Therefore, it will return the list of three elements which is ([50, 100, 150])
5. The code causes an error. The use of let keyword means that the i variable can only be accessed within the block it is defined in. In this case, the variable i can only be accessed within the if statement. Therefore, the code causes an error. 
6. The code causes an error. The use of let keyword means that the discountedPrice variable can only be accessed within the block it is defined in. In this case, the variable discountedPrice can only be accessed within the if statement. Therefore, the code causes an error. 
7. Line 14 will print the finalPrice which is 150 because when we use the let keyword, the variable finalPrice is within the block it is defined in. In this case, the variable finalPrice can be accessed within the function. Therefore, the finalPrice is 150. 
8. This function will return the discounted which is a list of three elements ([50, 100, 150]) because when we use the let keyword, the variable discounted is within the block it is defined in. In this case, the variable discounted can be accessed within the function. Therefore, the function will return the list of three element ([50, 100, 150]). 
9. The code causes an error. The use of let keyword means that the i variable can only be accessed within the block it is defined in. In this case, the variable i can only be accessed within the if statement. Therefore, the code causes an error. 
10. Line 12 will return 3 because when the const keyword gives it variable the same scope as the let keyword. However, the const keyword prevents a variiable from being reassigned after it is assigned. In this case, the variable length is within the function so it can be accessed and the code does not reassign the value of it. Therefore, the length is 3. 
11. The function will return the discounted which is a list of three elements ([50, 100, 150]) because when we use the conts keyword, it gives the variable the same scope as the let keyword. The variable discounted is within the block it is defined in. In this case, the variable discounted can be accessed within the function and the const variable here is an array so the elements inside it can be updated. Therefore, the function will return the list of three element ([50, 100, 150]). 
12. a) student.name or student["name"]
    b) student["Grad Year"]
    c) student.greeting()
    d) student["Favorite Teacher"].name
    e) student.courseLoad[0]
13. a) '32', because when a string is added to a number, it will convert the number to a string before concatenation. 
    b) 1, because when a string is subtracted by a number, it will convert the string to a number. 
    c) 3, because null maps to zero so three plus zero is three.
    d) '3null', because when null is added to a string, it will convert null to a string before concatenation. 
    e) 4, because true maps to one and we add it with three, so the result is three plus one is four.
    f) 0, because false maps to zero and null also maps to zero, so the result is zero plus zero is zero. 
    g) '3undefined', because when undefined is added to a string, it will convert undefined to a string before concatenation. 
    h) Nan/undefined because when a string is subtracted by undefined, it will convert the string to a number and undefined maps to Nan so the result is Nan. 
14. a) true, because string '2' becomes a number.
    b) false, because string '2' and string '12' become numbers.
    c) true, because string '2' becomes a number 2.
    d) false, because it uses a strict equality operator === that checks the equality without type conversion. 
    e) false, because true becomes 1 and it does not equal to 2.
    f) true, because Boolean(2) becomes true since the value of the Boolean is not 0, an empty string, null, undefined, and NaN, so true is equal to true is true. 
15. == checks the equality with type conversion and === is a strict equality operator that compares the values without type conversion. 
16. /expose/javascript/part2-question16.js
17. If the function above is called with the parameters modifyArray([1, 2, 3], doSomething), it will pass two arguments which are the list of three elements and a doSomething function to modifyArray function. The for loop will run array.length time in this case it will run three times because there are three elements in the list and every time it loops it will first modify each element in the list such that the doSomething function will be passed each item in the array and multiply it by two and finally each value will be pushed to the newArr. Therefore, the new list will be [2, 4, 6]. 
18. /expose/javascript/part2-question18.js
19. 1, 4, 3, 2

    