
**Cut Me**
==========
	Easy JQuery plugin for modify a long text blocks.
***

*Working*
-------
Plugin cut your long text and add some symbols (for your choise), to the end. You can click to that symbols and you see a whole text. 
Also, if you want, you can add the symbol "(Read more)",  and than url (to the page), where you can read more information about...

*How to use?*
-------
Plugin works with the dom of your html like this: 

     $( document ).ready(function() {
            $("#someContainer").cutMe({
                size: 12,
                cutEnd: "(read more)",
                url: "http://tsn.ua"
            });
     });
 There is a possibility to change all input values (size, cutEnd, url).
 
 - **size:** How long is your text might be? (default: 230 symbols);
 - **cutEnd:** It's what plugin adds to the end of cutting text.  (default: "...");   To see read more information write this param: cutEnd: "(Read more)", it's not case sensative.
 - **url:** "(Read more)" link (default: "http://google.com.ua")

Important
---------
You need have JQuery lib.

Copyright
---------
Taras Dzhulai  (c) 2015, Lviv