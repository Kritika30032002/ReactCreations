document.addEventListener('DOMContentLoaded', function () {
    const blogList = document.getElementById('blog-list');
    const blogForm = document.getElementById('blog-form');

    // Simulated data for demonstration purposes
    let blogData = [
        { title: 'Exploring Paradise Island', content: 'Paradise Island is known for powder soft beaches and crystal clear, turquoise water, great for diving and snorkeling. Visitors can try their luck at the Atlantis Casino and dine “around the world” at celebrity chef restaurants. Spend the day at Aquaventure Water Park or swim with dolphins at Dolphin Cay.', imageUrl: 'https://media.istockphoto.com/id/690506986/es/foto/fondo-de-playa-para%C3%ADso.webp?b=1&s=170667a&w=0&k=20&c=VdyIjJWA3aZqX7E48hNL6qYndIkGg77fEuv9-Jgdwtg='},
        { title: 'City Lights: A Night in Metropolis', content: 'Lorem ipsum dolor sit amet...', imageUrl: 'https://img.freepik.com/premium-photo/mesmerizing-cityscape-night-with-countless-lights-illuminating-urban-landscape_523886-2456.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1699488000&semt=ais' },
        // Add more blog entries as needed
    ];

    function renderBlogList() {
        blogList.innerHTML = '';
        blogData.forEach(blog => {
            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');
            blogPost.innerHTML = `
                <h2>${blog.title}</h2>
                <img src="${blog.imageUrl}" alt="${blog.title}">
                <p>${blog.content}</p>
            `;
            blogList.appendChild(blogPost);
        });
    }

    function addBlog(event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const imageUrl = document.getElementById('image-url').value;

        // Validate the input (you can add more validation as needed)

        // Add the new blog to the data array
        blogData.push({ title, content, imageUrl });

        // Clear the form
        blogForm.reset();

        // Update the displayed blog list
        renderBlogList();
    }

    // Event listener for form submission
    blogForm.addEventListener('submit', addBlog);

    // Initial rendering of blog list
    renderBlogList();
});
