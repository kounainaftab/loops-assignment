/************************Loops ********************************************************************
 
----------------------While Loop -----------------------------------------------

Definition:

A while loop is a control flow statement that respectedly executes a block of code as long as a
  specified condition is true.
    
Example:
 
While you're driving, you continue to follow the road signs
until you reach your destination.

--------Syntax-------------------

   while (conditions) {

}


__________________Example_____________________  */
var i = 6;
while (i > 10) {
    console.log(i);
    i++;
}
/*****************do-while loop*****************

    Definition:
A do-while loop is a control flow statement that executes a block of code at least once, and then
repeatedly executes the block as long as a specified condition is true.

      Example :

You keep studying until you understand the topic,
and then continue practicing problems afterwards.
 
------------------Syntax-------------------------

 do {
 While ( condition );

 ____________________Example______________________*/
/*
let a=5
do{
   console.log(a)
   a++
}
while (a<10);   // false



/*************************for loop*********************

   Definition:

A for loop is a control flow staatement that goes through a list of things or steps,executing
a block of code for each item in the list.

Example :

When you're grocery shopping,you use a for loop to go through your shopping list.Each step of the loop
represents selecting an item from the list and putting it into your shopping cart until you've completed
the list.

________________________syntax_______________________

for(initialization; condition; increment/decrement){

}

__________________Example________________________*/

for (let i=0 ; i<10 ; i++){
    console.log(i)
}

