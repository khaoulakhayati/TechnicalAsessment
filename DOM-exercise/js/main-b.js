

// Step 1: Create the HTML content for the new <article> element
const newArticleHTML = `
    <article>
        <header>
            <h2>Another Article header</h2>
        </header>
        <figure>
            <img src="http://placekitten.com/320/160" alt="title">
            <figcaption>Another Caption</figcaption>
        </figure>
        <p>Here is some more text. Here is some more text. Here is some more text. Here is some more text.</p>
    </article>
`;

// Step 2: Select the <main> element
const mainElement = document.querySelector("main");

// Step 3: Insert the new <article> element after the last child of <main>
mainElement.insertAdjacentHTML("beforeend", newArticleHTML);
