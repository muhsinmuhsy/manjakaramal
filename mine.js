document.addEventListener('DOMContentLoaded', function () {
    // Show the default page ('home')
    showPage('home');
});

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(function (page) {
        page.style.display = 'none';
    });

    // Remove the 'active' class from all menu items
    document.querySelectorAll('.menu-item').forEach(function (menuItem) {
        menuItem.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';

    // Add the 'active' class to the clicked menu item
    document.querySelector(`[onclick="showPage('${pageId}')"]`).classList.add('active');
}