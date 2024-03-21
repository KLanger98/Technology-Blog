const deleteBlog = async () =>{
    let id = document.querySelector('#blog').getAttribute('data-blog');

    console.log(id)

    fetch()
    if(id){
        const response = await fetch('/api/blog/', {
            method: 'DELETE',
            body: JSON.stringify({id}),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok){
            window.location.replace('/dashboard')
        } else{
            alert('Failed to Delete.')
        }
    }
}

const editBlog = () => {
    const blogCard = document.querySelector('#singleBlog');

    const blogHeader = document.querySelector('#blogHeading').innerText;
    const blogContents = document.querySelector('#blogContent').innerText;

    while(blogCard.firstChild){
        blogCard.removeChild(blogCard.firstChild);
    }
    let updateForm = document.createElement('form');

    let headingHeader = document.createElement('h3')
    headingHeader.innerText = "Title";
    let headingInput = document.createElement('input')
    headingInput.id = 'blogTitle';
    headingInput.value = blogHeader;

    let contentHeader = document.createElement('h3')
    contentHeader.innerText = "Blog Content";
    let contentInput = document.createElement('input')
    contentInput.id = 'blogContent';
    contentInput.value = blogContents;

    let submitBtn = document.createElement('button');
    submitBtn.innerText = 'Update';
    submitBtn.addEventListener('click', updateBlog);

    updateForm.append(headingHeader, headingInput, contentHeader, contentInput, submitBtn);
    blogCard.append(updateForm);

}

const updateBlog = async () =>{
    let id = document.querySelector('#blog').getAttribute('data-blog');
    const content = document.querySelector('#blogContent').value;
    const title = document.querySelector('#blogTitle').value;

    if(id && content && title){
        const response = await fetch(`/api/blog/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify({content, title}),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok){
            window.location.replace(`/blog/${id}`);
        } else{
            alert('Failed to Update.')
        }
    }
}