const updateBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector();
    const content = document.querySelector();

    if (title && content) {
    const response = await fetch(`/api/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/user/posts');
    } else {
      alert('Failed to update blog.');
    }
  }
}

document.querySelector('#updateBlog').addEventListener('#submit', updateBlog)