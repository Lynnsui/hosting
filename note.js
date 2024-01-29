function submitPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() !== '') {
        const postContainer = document.getElementById('posts-container');
        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.textContent = postContent;
        postContainer.appendChild(newPost);
        document.getElementById('post-content').value = '';
    } else {
        alert('Tulis sesuatu sebelum mengirim!');
    }
}