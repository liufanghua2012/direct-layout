# direct-layout

Layout directly according to the position relationship between DOM elements, in a visually-oriented way. For example: 

[1] $('#div1').alignLeftTo('#div2', 'right'), will align left side of div1 to the right side of div2;
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
|              |                      |
|    div2      |         div1         | 
|_ _ _ _ _ _ _ |                      |
               |_ _ _ _ _ _ _ _ _ _ _ |

[2] $('#div1').alignTopTo('#div2', 'bottom'), will align top side of div1 to bottom side of div2.
________________
|              |
|    div2      | 
|______________|_______________
|                              |
|            div1              |
|______________________________|
