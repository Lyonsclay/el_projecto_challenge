# Requirements

## How would you change the format of all the phone numbers in 10,000 static html web pages? There are multiple possible ways.. Explain pro’s AND con’s of the method you pick? What are the alternate options you are aware of?

I would create a script that loaded the html files one by one, searched and replaced the old phone format with the new one, and then wrote the file to a new folder. I believe this is the safest way for a one off situation even though it will be slow.

If you were using a templating language you could change the phone formatting method. This would be much quicker and easier, and probably the right way if there were more foreseeable changes to the format.  

Another way, would be to use javascript to dynamically change the way the format was displayed, but that can get messy!

# Functional Design

##  How can you reduce the user’s perception of waiting when some functions take a lot of time?

In order to decrease a user's perception of waiting when some functions take a lot of time you need to give them an indication that something is happening. Most commonly, animation is used in some way to indicate activity; typically you have a series of small rotating circles or something like that.

Even better is to have a progress bar or some other measure of how much of a process has occurred and how much is left.

It can be helpful to add an element of surprise or uniqueness to the UX so a creative message about waiting or an unexpected or unusual animation can diminish a user's boredom when waiting for something to happen. 

Ultimately though, long wait times are bad:(

## Can you name different measures to guarantee correctness of data entry?

Strictly typed languages require all inputs to be of a known type. However, this might be a broad category of type like string which could allow something like SQL injection or malicious code coming from HTML. In those cases you will probably rely on defensive measures built into your framework that might forbid certain characters or require closing tags or parenthesis to end a statement. If you aren't using a framework or have requirements of specific formatting you might craft your own checks with regex or some type of syntax parsing. 

# Technical Design

##  In the language of your choice, write a script to handle a csv file manipulation, and remove invalid lines (bad formatting, etc) and then display and only output the 4th column. Try to make it as efficient as possible in the time allowed. Assume you could have a huge csv file.

https://github.com/Lyonsclay/file_manipulation

##  In the following image, what color will be applied to the text?

[red](http://htmlpreview.github.io/?https://github.com/Lyonsclay/el_projecto_challenge/blob/master/algorithms/text_color.html
)
##  Use any language or program you are aware of to duplicate a field from a json file programmatically.

https://github.com/Lyonsclay/el_projecto_challenge/tree/master/functional_design/duplicate_field

# Construction/Debugging

##  Apart from the IDE, which other favorite tools do you use that you think are essential to you? (also tell us your favorite IDE)

Babel is critical for transpiling ES6 code into regular JS. Tern/ JSlint are crucial to showing errors right in my editor. Flycheck gives me a nice interface to see the errors. 
I use Emacs, specifically Spacemacs, and there is a lot of tooling baked in that is extremely useful. Helm/Ag searches and replaces can be extremely helpful; Let say you want to change a component name from Ship to Boat and this component is included in many files. 

# Algorithms
  
##  What is your opinion of “ P versus NP”

It’s easy to know if you like a beer, but very difficult/impossible to brew a beer to that exact taste.

##  Let's say you have a list of N+1 integers between 1 and N. You know there's at least one duplicate, but there might be more. For example, if N=3, your list might be 3, 1, 1, 3 or it might be 1, 3, 2, 2. Print out a number that appears in the list more than once. (That is, in the first example, you can print '1' or '3' -- you don't have to print both.)

https://github.com/Lyonsclay/el_projecto_challenge/blob/master/algorithms/first_duplicate.js

##  How do you find out if a number is a power of 2? And how do you know if it is an odd number?

`function isPowerOfTwo(n) { return (Math.log2(n) % 1 === 0) }`

`function isOdd(n) { return (n % 2 === 1) }`

##  Can you give an example of a recursive solution that you created?

https://github.com/Lyonsclay/el_projecto_challenge/blob/master/algorithms/recursion.ex

