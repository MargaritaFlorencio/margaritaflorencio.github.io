function equalCardHeight(){
    var maxHeight = 0;
    var items = $('.carousel-item');

    for (var i = 0; i < items.length; i++){
        itemHeight = $(items[i]).height();
        if (maxHeight < itemHeight){
            maxHeight = itemHeight;
        }
    }

    for (var i = 0; i < items.length; i++){
        $(items[i]).height(maxHeight);
    }

}

equalCardHeight()
