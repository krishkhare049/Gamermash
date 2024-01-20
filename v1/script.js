
// Lets write js-

// For search bar-
function searchFilter(){
    let searchinp = document.getElementById('search').value;
    searchinp = searchinp.toLowerCase();
    let searchitems = document.getElementsByClassName('searchitems');

    for(i = 0; i < searchitems.length; i++){
        if(!searchitems[i].innerHTML.toLowerCase().includes(searchinp)){
            searchitems[i].style.display = 'none';
        }
        else{
            searchitems[i].style.display = 'block';
        }
    }
}

function displayList(){
    let searchli = document.getElementById('searchli');
    searchli.style.display = 'block'
}

function hideList(){
    let searchli = document.getElementById('searchli');
    let searchinp = document.getElementById('search').value;
    searchli.style.display = 'none';
    // searchinp = '' how to clear search after clicking on body.
}

// loader-
    window.addEventListener('load', function(){
    let loader = document.getElementById('loader');
    let loaderimg = document.getElementById('loaderimg');
        loader.id += 'hidden';
        loaderimg.style.height = '0px';
        loaderimg.style.width = '0px';
    });


