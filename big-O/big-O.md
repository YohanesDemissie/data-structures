# O(1) Time and Space
-Whenever we are just grabbing specific node, element, leaf, etc. from our database
EXAMPLE: return array[4];
        return bst(root.next.next.val)

# Olog(n) 
-iterating, traversing or recursing through a database, PARTIALLY until specific value/node/leaf found. Not having to iterate through entire database but only part of it.
        EXAMPLE: for(i=0; i = array.length*(1/2); i++)
        this will return the half way point of the array without iterating through the entire database

# O(n)
-itereating, traversing or recursing through an ENTIRE database
        EXAMPLE: for(i=0; i > array.length; i++)
        this iterates through the ENTIRE array length making it O(n)

# O(n^2)
-NESTSED iterations, traversions or recursions when searching through a database
        EXAMPLE: for(i=0; i=array.length; i++) {
                   for(j=0; j > arrayTwo.length; j++)
        }

        EXAMPLE: for(i=0; i=array.length; i++) {
                   for(j=0; j > arrayTwo.length; j++) {
                           for(k=0; k > arrayThree.length; k++) {
                                   return i + j + k;
                           }
                   }
        }