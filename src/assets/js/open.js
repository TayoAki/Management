jQuery(document).ready(function() {
    // get the #section from the URL
    var hash = window.location.hash; 
    // open accordion
    jQuery(hash).slideDown(300).addClass('open'); 
    // set title to active 
    jQuery(hash).prev('.accordion-section-title').addClass('active');
    /* ... the rest of your code here */
});