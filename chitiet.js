$(document).ready(function() {
    function setupThumbnailHover(mainImageId, thumbnailClass) {
        var $mainImage = $('#' + mainImageId);
        var originalSrc = $mainImage.attr('src'); // Lưu lại hình ảnh ban đầu
        $('.' + thumbnailClass).hover(
            function() {
                $mainImage.attr('src', $(this).attr('src')); // Thay đổi hình ảnh chính khi hover
            },
            function() {
                $mainImage.attr('src', originalSrc); // Trả lại hình ảnh ban đầu khi không hover
            }
        );
    }
    setupThumbnailHover('main-image', 'thumbnail');
});
