
function next() {
    let a = document.getElementById("firstimg");
    let b = document.getElementById("lastimg");
    a.style.display = "none";
    b.style.display = "inline-block";

    let c = document.getElementsByClassName("arrows")[0];
    c = c.getElementsByTagName("button")[0];
    console.log(c.textContent);
    c.style.display = "inline-block";
    c.style.disabled = false;
   
}

function prev() {
    let a = document.getElementById("firstimg");
    let b = document.getElementById("lastimg");
    a.style.display = "inline-block";
    b.style.display = "none";
    
    let c = document.getElementsByClassName("arrows")[0];
    c = c.getElementsByTagName("button")[0];
    console.log(c.textContent);
    
    c.style.disabled = true;
    
}

//#region rec_prod_slides
let slideIndex = 0;
let slideIndex_2 = 0;
function plus_slides(n, boolean, f_or_s) {
    if (!f_or_s) {
        edit_slides((slideIndex_2 += n), boolean, f_or_s);
    }
    else {
        edit_slides((slideIndex += n), boolean, f_or_s);
    }
}

function edit_slides(n, boolean, f_or_s) {
    let slides;
    let temp = f_or_s == false ? slideIndex_2 : slideIndex;
    if (!f_or_s)
        slides = document.querySelectorAll(".store_series a");
    else
        slides = document.getElementsByClassName("rec_prod_grid");
    if (n >= 1) {
        let a;
        if (!f_or_s) {
            a = document.getElementsByClassName("arrows")[0].getElementsByTagName("button")[0];
            a.style.display = "block";
        }
        else {
            a = document.getElementsByClassName("arrows_2")[0].getElementsByTagName("button")[0];
            a.style.display = "block";
        }
    }
    if (boolean) {
        
        if (window.innerWidth <= 715) {
            if (temp + 3 >= slides.length) {
                let a;
                if (!f_or_s) {
                    a = document.getElementsByClassName("arrows")[0].getElementsByTagName("button")[1];
                    a.style.display = "none";
                }
                else {
                    a = document.getElementsByClassName("arrows_2")[0].getElementsByTagName("button")[1];
                    a.style.display = "none";
                }
            }
            else {
                let a;
                if (!f_or_s) {
                    a = document.getElementsByClassName("arrows")[0].getElementsByTagName("button")[1];
                    a.style.display = "block";
                }
                else {
                    a = document.getElementsByClassName("arrows_2")[0].getElementsByTagName("button")[1];
                    a.style.display = "block";
                }
            } 
            slides[(temp + 4) - 5].style.display = "none";
            slides[temp + 3].style.display = "block";
        }
        else if (window.innerWidth <= 1000 && window.innerWidth > 716) {
            if (temp + 4 >= slides.length) {
                let a;
                if (!f_or_s) {
                    a = document.getElementsByClassName("arrows")[0].getElementsByTagName("button")[1];
                    a.style.display = "none";
                }
                else {
                    a = document.getElementsByClassName("arrows_2")[0].getElementsByTagName("button")[1];
                    a.style.display = "none";
                }
            }
           
            slides[(temp + 4) - 5].style.display = "none";
            slides[temp + 3].style.display = "block";
        }
        else {
            if (temp + 5 >= slides.length) {
                let a;
                if (!f_or_s) {
                    a = document.getElementsByClassName("arrows")[0].getElementsByTagName("button")[1];
                    a.style.display = "none";
                }
                else {
                    a = document.getElementsByClassName("arrows_2")[0].getElementsByTagName("button")[1];
                    a.style.display = "none";
                }
            }
            console.log(temp);
            slides[(temp + 4) - 5].style.display = "none";
            slides[temp + 4].style.display = "block";
        }
        
    }

    if (!boolean) {
        if (temp == 0) {
            let a = document.getElementsByClassName("arrows_2")[0].getElementsByTagName("button")[0];
            a.style.display = "none";
        }
        slides[temp].style.display = "block";
        console.log(temp);
        if (window.innerWidth <= 715) {
            slides[slideIndex + 4].style.display = "none";
        }
        else if (window.innerWidth <= 1000 && window.innerWidth > 716) {
            slides[temp + 4].style.display = "none";
        }
        else {
            slides[temp + 5].style.display = "none";
            console.log(slides[slideIndex + 4]);
        }
    }
}

let currentwidth = window.innerWidth;
let count_buttons = 9;
window.addEventListener("resize", function () {
    
    let temp = this.document.getElementsByClassName("irl-images")[0];
    
    temp = temp.getElementsByTagName("button");
    if (currentwidth >= window.innerWidth + 165) {
        currentwidth = window.innerWidth;
        temp[count_buttons].style.display = "none";
        count_buttons--;

    }
    else if (currentwidth <= window.innerWidth - 155) {
        currentwidth = window.innerWidth;
        temp[count_buttons].style.display = "block";
        count_buttons++;

    }
    
});
//#endregion
//#region shop_store

let index = 0;

function check_index(i) {
    index = (parseInt(index));
    changeslide(index += i);
}

function changeslide(i) {
    let b = document.getElementsByClassName("irl-images")[0].getElementsByTagName("button");
    if (i < 0) {
        document.getElementsByClassName("irl-gallery")[0].querySelector("button").style.disabled = true;
    }
    else if (i == 0) {
        for (let j = 0; j < b.length; j++) {
            if (j < count_buttons) {
                b[j].style.display = "inline-block";
                continue;
            }
            b[j].style.display = "none";
        }
        
    }
    else {
        console.log(count_buttons);
        let count = count_buttons * i;
        if (count > b.length - count_buttons - 1) {
            count = b.length - count_buttons - 1;
        }
        for (let j = 0; j < b.length; j++) {
            if (j==count) {
                let temp = 0;
                while (temp < count_buttons) {
                    b[j].style.display = "inline-block"; 
                    temp++;
                    j++;
                }
                continue;
            }
            b[j].style.display = "none";
        }
    }

}


//#endregion





//#region goods_click
let buttons = (document.getElementsByClassName("irl-images")[0]).getElementsByTagName("button");
let imgs = (document.getElementsByClassName("irl-images")[0]).getElementsByTagName("img");

let overlay_index = 0;

for (let b = 0; b < buttons.length; b++) {
    buttons[b].addEventListener("click", handler);
    buttons[b].setAttribute('id', `button_${b + 1}`);
    imgs[b].setAttribute('id', `img_${b + 1}`);
}
function handler(e, myid, slide) {
    let ov = document.getElementsByClassName("overlay")[0];
    ov.style.display = "block";
    ov.getElementsByTagName("div")[0].style.display = "inline-block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    let str;
    if (e != undefined)
         str = e.target.id.replace(/\D/g, "");
    if (slide) {
        str = myid;
    }
    let a = document.getElementById(`img_${str}`);
    let img = ov.getElementsByTagName("img")[0];
    img.src = a.src;
    ov = document.getElementsByClassName("overlay-info")[0];
    ov.style.height = img.height + 'px';
    overlay_index = str;
    slide = false;
}
let a = document.getElementsByClassName("overlay")[0];
function e (e) {
    document.getElementsByClassName("overlay")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
};
function addEvent(boolean) {
    if (boolean) {
        a.addEventListener("click", e);
    }
    else {
        a.removeEventListener("click", e);
    }
}
addEvent(true);
function overlay_slides(n, boolean) {
    overlay_index = (parseInt(overlay_index));
    addEvent(false);
    overlay_slides_edit(overlay_index += n, boolean);
}

function overlay_slides_edit(n, boolean) {
    if (boolean) {
        handler(undefined, overlay_index, true);
        setTimeout(() => addEvent(true), 500);
    }

}




//#endregion


//#region scroll

let myb = document.getElementsByClassName("scroll-top")[0];
myb.addEventListener("click", topf);
window.onscroll = function () { scrollf(); }

function scrollf() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        myb.style.display = "block";
    }
    else {
        myb.style.display = "none";
    }
}

function topf() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//#endregion




//#region overlay-categories

let links = (document.getElementsByClassName("navlist")[0]).getElementsByTagName("a");

links[0].addEventListener("mousemove", () => {
    if (links[0].matches(':hover')) { get_div(0); }
});
links[4].addEventListener("mousemove", () => {
    if (links[4].matches(':hover')) { get_div(1); }
});
links[5].addEventListener("mousemove", () => {
    if (links[5].matches(':hover')) { get_div(2); }
});
links[6].addEventListener("mousemove", () => {
    if (links[6].matches(':hover')) { get_div(3); }
});
links[9].addEventListener("mousemove", () => {
    if (links[9].matches(':hover')) { get_div(4); }
});
//links[5].addEventListener("mouseover", get_div(2));
//links[6].addEventListener("mouseover", get_div(3));
//links[9].addEventListener("mouseover", get_div(4));

let divs = document.querySelectorAll(".unactive");
divs.forEach(a => {
    a.addEventListener('mouseleave', function (e) {
        e.target.style.display = "none";
        let divs = document.querySelectorAll(".unactive");
        divs.forEach(a => {
            a.style.display = "none"
        })
    })
});


function get_div(number) {
    let div = document.getElementsByClassName("unactive");
    div[number].style.display = "block";
}

function del_div(number) {
    let div = document.getElementsByClassName("unactive");
    div[number].classList.add = 'unactive';
}
//#endregion






//#region wishlist-a-r
let wish_items = 0;
let icon_wish = document.querySelectorAll(".a-r-to-wishlist");

icon_wish.forEach(a => {
    a.addEventListener("click", function () {
        let b = (document.getElementsByClassName("favourites_goods")[0]).getElementsByTagName("span")[0];
        b.innerHTML = ++wish_items;
        document.getElementsByClassName("wishlist-a-r")[0].style.display = "block";
        document.getElementsByClassName("wishlist-add")[0].style.display = "block";
        const myT = setTimeout(function () {
            document.getElementsByClassName("wishlist-a-r")[0].style.display = "none";
            document.getElementsByClassName("wishlist-add")[0].style.display = "none"; }, 2000);
    })
});

//#endregion





//#region footer_and_icon
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    navlist.classList.toggle('open');
}
var flag = true;
var count = -1;
let foodivs = document.querySelectorAll(".footer-links div");
let uls = document.querySelectorAll(".footer-links ul");

for (let it = 0; it < 3; it++) {
    foodivs[it].addEventListener("click", function () {
        flag == flag ? true : false;
        

        uls[it].style.display = flag ? "block" : "none";
        flag = !flag;
    });
}



//#endregion