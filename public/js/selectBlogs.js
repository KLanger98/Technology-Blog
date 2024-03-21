

const selectBlog = (event) => {
    let id;
    if(!event.target.classList.contains('blogCard')){
        id = event.target.closest('.blogCard').id
    } else{
        id = event.target.id;
    }

    window.location.assign(`/blog/${id}`)
}