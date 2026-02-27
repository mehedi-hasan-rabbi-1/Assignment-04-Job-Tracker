1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :

getElementById: It targets a unique ID. Since IDs should be unique on a page, it only ever returns one specific element. It is the most efficient method.

getElementsByClassName: This looks for all elements with a specific class. It returns a "live" collection, meaning if you add more elements with that class later via code, the collection updates automatically.

querySelector / querySelectorAll: These are the most versatile because they use CSS syntax (e.g., #id, .class, or div > p). querySelector gives you the first match it finds, while querySelectorAll gives you everything that matches.



2. How do you create and insert a new element into the DOM?
ans :

To create and insert a new element into the HTML document (DOM), you generally follow a three-step process: Create, Configure, and Append.

The 3-Step Process
Create the Element: Use document.createElement('tagName') to build the element in memory.

Add Content/Attributes: Use properties like textContent, innerHTML, or setAttribute() to give the element data or styling.

Insert into the DOM: Use methods like appendChild() or prepend() to attach it to an existing parent element.



3. What is Event Bubbling? And how does it work?
ans :

Event Bubbling is a way of propagating events in the HTML DOM. When an event (like a click) happens on an element, it first runs the handlers on that specific element, then on its parent, and then all the way up to other ancestors.

 how d it work?

Think of it like a bubble rising from the bottom of a pool to the surface.

Trigger: You click a button inside a <div>.

Execution: The click event fires on the button first.

Propagation: The event then "bubbles up" to the div, then to the body, and finally to the document object


4. What is Event Delegation in JavaScript? Why is it useful?
Ans :

Event Delegation is a design pattern in JavaScript used to manage events efficiently. Instead of adding an event listener to every single child element, you add one single listener to their parent element.

it is useful for

Memory Efficiency: If you have a list of 1,000 items, adding 1,000 listeners would slow down the browser. One listener on the parent uses much less memory.

Dynamic Elements: If you add new items to a list via JavaScript after the page has loaded, they will automatically have the click functionality because the parent is already listening.

Cleaner Code: You don't have to write loops to attach listeners to multiple elements.





5. What is the difference between preventDefault() and stopPropagation() methods?

ans :

preventDefault(): This tells the browser, "Don't do what you usually do." For example, when you click a <form> submit button, the browser's default is to refresh the page. Using preventDefault() stops that refresh so you can handle the data with JavaScript.

stopPropagation(): This tells the DOM, "Don't tell my parents about this event." It prevents the event from bubbling up to ancestor elements. If you have a button inside a div and both have click listeners, stopPropagation() ensures only the button's function runs.