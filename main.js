
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

        const centerX = window.innerWidth / 2;

        // Check if the cursor is on the left or right half of the screen
        if (x < centerX) {
            // Cursor is on the left half, so flip the follower horizontally
            follower.style.transform = 'scaleX(-1)';
        } else {
            // Cursor is on the right half, reset the transformation
            follower.style.transform = 'none';
        }

        follower.style.left = x + 'px';
        follower.style.top = y + 'px';
    // })
    }, 150);
})
