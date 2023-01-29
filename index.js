const posts = [
    {
        id: 0,
        title: "7 practical CSS tips",
        summary: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
        src: "Img1.jpg"
    },
    {
        id: 1,
        title: "5 practical HTML tips",
        summary: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        src: "Img2.jpg"
    },
    {
        id: 2,
        title: "10 practical JS tips",
        summary: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        src: "Img3.jpg"
    }
];

let article = `<div class="m-5 d-flex justify-content-between">

    <div call="me-5">
        <div class="d-flex" >
            <p class="mb-5 me-3" >Authors name </p>
            <p class="mb-5 me-3" style="opacity:0.5"> in </p>
            <p class="mb-5 me-3" topic> Topic Name </p>
            <p class="mb-5 me-3" style="opacity:0.5"> · 7 July</p>
        </div>
        
        <a href="article.html" class="link"> <p class="h4 text-dark mb-5" id="title"></p></a>
        <p id="summary"></p>

        <div class="d-flex ">
            <button class="but">Java Script</button>
            <p class="mt-5 mb-5 p-2 me-3" style="opacity:0.5"> 12 min read </p>
            <p class="mt-5 mb-5 p-2" style="opacity:0.5">· Selected for you </p>
            
            <div class="d-flex cubes">
                <div class="cube1">cube</div>
                <div class="cube1">cube</div>
                <div class="cube1">cube</div>
            </div>
           
        </div>
        
        
    </div>
    <img class="w-25 h-30" src="" alt="img_source"/>
    
</div>
    
    <div class="m-5 line">line</div>
    
`;

const articles = document.getElementById("articles");

function getPostFropAPI(){
   
    //   fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(function(promise){
    //     return promise.json()
    //   })
    //   .then(function(data){
    //     data.splice(0,3).forEach(post=>{
    //         let newPost = article.replace('id="title">', `id="title">${post.title}`);
    //         newPost = newPost.replace('id="summary">', `id="summary">${post.summary}`);
    //         newPost = newPost.replace('src=""', `src="${post.src}"`);

    //         articles.innerHTML +=  newPost;

    //     });
    // });
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify(posts.forEach(post=>{
            let newPost = article.replace('id="title">', `id="title">${post.title}`);
            newPost = newPost.replace('id="summary">', `id="summary">${post.summary}`);
            newPost = newPost.replace('src=""', `src="${post.src}"`);
    
            articles.innerHTML +=  newPost;
    
            })),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(response => response.json()) 
        .then(json => console.log(json))
        .catch(err => console.log(err));
      
}
getPostFropAPI();

// posts.forEach((post) => {
//     let newPost = article.replace('id="title">', `id="title">${post.title}`);
//     newPost = newPost.replace('id="summary">', `id="summary">${post.summary}`);
//     newPost = newPost.replace('src=""', `src="${post.src}"`);

//     articles.innerHTML +=  newPost;
// });