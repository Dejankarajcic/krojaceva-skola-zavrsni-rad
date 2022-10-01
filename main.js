var products = $('#mainRow');
var femaleCol = $('.female-collection');
var maleCol = $('.male-collection');
var collections = $("[data-collections]");


collections.on('click', displayCollections);

display();



$('.back-to-top').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
})

window.onload = function(){
    collections.removeClass('active');
}

$(collections).on('click',function(){
    collections.removeClass('active');
    $(this).addClass('active');
})


function display(){
    $(products).html("");
    $.ajax({
        url : "shop.json",
        type : "GET",
        data : "json"
    }).done(function(res){
        for(var i = 0; i < res.length; i++){
            for(prop in res[i]){
                var text = ``;
                text += `<article class="product">    
                            <!-- Image Holder -->
                    <div class="product-img-holder">
                        <a href="#"><img src="images/${res[i].imgSrc}.jpg" alt="" class="img-fluid"></a>
                        <!-- Hover list -->
                        <ul class="hover-list">
                        <li><a class="shop-icon" href="#"><img src="images/shop-icon.png" alt=""></a></li>
                        <li><a class="view-icon" href="#"><img src="images/view-icon.png" alt=""></a></li>
                        <li><a class="like-icon" href="#"><img src="images/like-icon.png" alt=""></a></li>
                        </ul>
                        <!-- Hover list END -->
                    </div>
                        <!-- Image Holder END -->
                        <!-- Product Title -->
                        <div class="product-title">
                        <h3>${res[i].productTitle}<br>${res[i].model}</h3>
                        <span>${res[i].price} RSD</span>
                        </div>
                        <!-- Product Title END -->
                        <!-- Color Picker -->
                        <ul class="color-picker">
                        <li class="purple"><a href="#"></a></li>
                        <li class="green"><a href="#"></a></li>
                        <li class="red"><a href="#"></a></li>
                        </ul>
                        <!-- Color Picker END -->
                    </article>`  
                }
                $(products).append(text);
            }
    })
}

function displayCollections(e){
    $(products).html("");
    e.preventDefault();
    var col = $(this).attr('data-collections');
    $.ajax({
        url : "shop.json",
        type : "GET",
        data : "json"
    }).done(function(res){
        if(col === 'male' || col === 'female'){
            var colFilter = res.filter(function(el){
                return el.colection === col;
            })
            colFilter.forEach(function(e) {
                    var text = ``;
                    text += `<article class="product">    
                                <!-- Image Holder -->
                        <div class="product-img-holder">
                            <a href="#"><img src="images/${e.imgSrc}.jpg" alt="" class="img-fluid"></a>
                            <!-- Hover list -->
                            <ul class="hover-list">
                            <li><a class="shop-icon" href="#"><img src="images/shop-icon.png" alt=""></a></li>
                            <li><a class="view-icon" href="#"><img src="images/view-icon.png" alt=""></a></li>
                            <li><a class="like-icon" href="#"><img src="images/like-icon.png" alt=""></a></li>
                            </ul>
                            <!-- Hover list END -->
                        </div>
                            <!-- Image Holder END -->
                            <!-- Product Title -->
                            <div class="product-title">
                            <h3>${e.productTitle}<br>${e.model}</h3>
                            <span>${e.price} RSD</span>
                            </div>
                            <!-- Product Title END -->
                            <!-- Color Picker -->
                            <ul class="color-picker">
                            <li class="purple"><a href="#"></a></li>
                            <li class="green"><a href="#"></a></li>
                            <li class="red"><a href="#"></a></li>
                            </ul>
                            <!-- Color Picker END -->
                        </article>`;
                    $(products).append(text);
                })
            } else if(col === 'newCol' || col === 'popular' || col === 'action'){
                var colFilter = res.filter(function(el){
                    return el[col];
                })
                colFilter.forEach(function(e) {
                    var text = ``;
                    text += `<article class="product">    
                                <!-- Image Holder -->
                        <div class="product-img-holder">
                            <a href="#"><img src="images/${e.imgSrc}.jpg" alt="" class="img-fluid"></a>
                            <!-- Hover list -->
                            <ul class="hover-list">
                            <li><a class="shop-icon" href="#"><img src="images/shop-icon.png" alt=""></a></li>
                            <li><a class="view-icon" href="#"><img src="images/view-icon.png" alt=""></a></li>
                            <li><a class="like-icon" href="#"><img src="images/like-icon.png" alt=""></a></li>
                            </ul>
                            <!-- Hover list END -->
                        </div>
                            <!-- Image Holder END -->
                            <!-- Product Title -->
                            <div class="product-title">
                            <h3>${e.productTitle}<br>${e.model}</h3>
                            <span>${e.price} RSD</span>
                            </div>
                            <!-- Product Title END -->
                            <!-- Color Picker -->
                            <ul class="color-picker">
                            <li class="purple"><a href="#"></a></li>
                            <li class="green"><a href="#"></a></li>
                            <li class="red"><a href="#"></a></li>
                            </ul>
                            <!-- Color Picker END -->
                        </article>`;
                    $(products).append(text);
                })
            } 
        }
    )
}