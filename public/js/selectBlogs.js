
let blogs = document.querySelectorAll(".blogCard");

blogs.forEach((blog) => {
    blog.addEventListener('click', (event) => {
        let id = event.target.id
        console.log(id)
        window.location.assign(`/blog/${id}`);
    });
})