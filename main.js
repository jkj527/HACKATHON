
document.addEventListener('mousemove', (e) => {
    // get a reference to the following image and doc body
    const follower = document.getElementById('follower');
    document.body.appendChild(follower);

    // add slight delay before updating the cat's position
    setTimeout(() => {
        // document.addEventListener('mousemove', (e) => {
        // get the current cursor position
        const x = e.clientX;
        const y = e.clientY;

        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
    // })
    }, 150);
})
