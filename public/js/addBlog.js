
const saveBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value;
    const content = document.querySelector('#blog-content').value;
    const date_created = new Date();

    if (title && content) {
    const response = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify({ title, content, date_created}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/dashboard');
    } else {
      alert('Failed to save blog.');
    }
  }
}

document.querySelector('#addBlog').addEventListener('submit', saveBlog);
