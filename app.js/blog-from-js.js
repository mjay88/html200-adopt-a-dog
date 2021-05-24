//i tried to mirror the existing html
function createBlogPost(header, image, content) {
    //create outer div (i need to refactor html because its fucking up
    //the css especially the media quries, to many contianers)
    const postContainer = document.createElement('div');
    //add applicable class
    postContainer.classList.add('main4');
    //create new div where content will go
    const post = document.createElement('div');
    //add applicable class
    post.classList.add('content');
    //create new div
    const innerPost = document.createElement('div');
    //create header for post
    const h2 = document.createElement('h2');
    //assign innerText to arguement;
    h2.innerText = header;
    //create new image element
    const newImg = document.createElement('img');
    //assign img src to parameter
    newImg.src = image;
    //assign newImg alt (probably wanna assign alt as variable or add
    //after createBlogPost function right)
    //newImg.alt = "a person handing a dog a treat";
    //create paragraph element
    const newContent = document.createElement('p');
    //assign innerText to parameter
    newContent.textContent = content; //textContent better than inner text
    //assign applicable section to variable
    const section = document.querySelector(".main");
    //append post inside postContainer
    postContainer.appendChild(post);
    //append newImg inside of post
    post.appendChild(newImg);
    //append innerPost to post after the image
    post.appendChild(innerPost);
    //append h2 inside of inner post
    innerPost.appendChild(h2);
    //append newContent to innerPost
    innerPost.appendChild(newContent);
    // appending new post to parent
    return section.appendChild(postContainer);

}

createBlogPost('Your Dogs Best Diet', 'https://images.unsplash.com/photo-1592468257342-8375cb556a69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80', `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsa nostrum nihil amet nesciunt ratione vel dolore dolorum odio esse, temporibus inventore! Nihil, ullam. Qui dolore sapiente nostrum totam nihil. Eum, consequatur
similique nostrum itaque, voluptate odio minima quasi eaque, excepturi necessitatibus deserunt perspiciatis sit hic ducimus temporibus dignissimos mollitia quaerat error ab possimus accusantium? Illo aliquid modi officia ipsam.
Dicta fugit reprehenderit ab. Recusandae quaerat, eius modi dolor ipsum distinctio illo dolorum quod unde ab! Dicta blanditiis at quo architecto perferendis necessitatibus velit qui, sunt nam magnam, quidem est!`);
//adjusting footer
const footer = document.querySelector('.footer');
footer.style.marginTop = "53rem";
//adding alt to new img, should I do this by adding another parameter to my function?
const main4Img = document.querySelector('.main4 img');
main4Img.alt = "a person handing a dog a treat";