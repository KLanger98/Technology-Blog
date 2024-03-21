
const saveComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value;
    const date_created = new Date();
    const blog_id = document.querySelector('#blog').getAttribute('data-blog');

    console.log(content, date_created, blog_id);

    if (content && blog_id && date_created) {
    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({content, date_created, blog_id}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace(`/blog/${blog_id}`);
    } else {
      alert('Failed to save comment.');
    }
  }
}

document.querySelector('#addComment').addEventListener('submit', saveComment);
