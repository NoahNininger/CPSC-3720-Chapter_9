function manipulate()
{
 // 1. Select the element with the class output.
    const outputElement = document.querySelector('.output');

 /* 2. Create another JavaScript object called mainList and select only
       the ul tag that is within the output element. */
    const mainList = outputElement.querySelector('ul');
    mainList.id = 'mainList';       // Update the ID of that ul tag to mainList.

 // 3. Search for the tagName of each div
    const tagNames = outputElement.getElementsByTagName('div');
    const tagArray = Array.from(tagNames).map(div => div.tagName);
    console.log(tagArray);  // output them into the console as an array.

 /* 4. Using a for loop, set the ID of each of the div tags to id with a
       numeric value of the order they appear within output.
       Still within the loop, alternate the color of the contents of each
       element in output to be red or blue. */
    for (let i = 0; i < tagNames.length; i++)
    {
        tagNames[i].id = `id${i + 1}`;

        if (i % 2 == 0)
            { tagNames[i].style.color = 'red'; }
        else 
            { tagNames[i].style.color = 'blue'; }
    }
}