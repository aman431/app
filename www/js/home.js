window.onscroll = function(){
    myfunction();
}
var header = document.getElementById('main1');
var sticky = header.offsetTop;

function myfunction()
{
    if(window.pageYOffset > sticky)
    {
        header.classList.add("sticky");
    }
    else
    {
        header.classList.remove("sticky");
    }
}


