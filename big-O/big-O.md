# O(1) Time and Space
-Whenever we are just grabbing specific node, element, leaf, etc. from our database
EXAMPLE: return array[4];
        return bst(root.next.next.val)

# Olog(n) 
-iterating, traversing or recursing through a database(more specifically a binary search tree), PARTIALLY until specific value/node/leaf found, in a calculative manner, not having to iterate through entire database but only part of it. Similar to machine learning or BST
        EXAMPLE: Binary search tree searching for a node, eleminating options by comparing each node to desginated value and moving left or right accordingly saving time and space
        ******IMPORTANT NOTE:
                BST TIME: is Ologn
                BST SPACE: is O(1)

# O(n)
-itereating, traversing or recursing through an ENTIRE database
        EXAMPLE: for(i=0; i > array.length; i++)
        this iterates through the ENTIRE array length making it O(n)
        IMPORTANT NOTE: Binary SEARCH tree will never be O(n) because it never iterates through entire database

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