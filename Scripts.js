console.log
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("a").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "");
    });
});
</script>
