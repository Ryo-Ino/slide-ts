class el{
    constructor(){
        this.slide
        this.slideAll
        this.slideWrap
        this.slideWrapAll
        this.slideCont
        this.slideContAll
        this.slideItem
        this.slideItemAll
        this.slideImg
        this.slideImgAll
        this.np
        this.next
        this.nextAll
        this.pre
        this.preAll
        this.pn
        this.pnItem
        this.pnItemAll
    }
}
const El = new el()

class data{
    constructor(){
        this.id
        this.form
        this.inter
        this.dur
        this.curr
        this.lastItem
    }
}
const Data = new data()

class module{
    constructor(){

    }
    Get(id){
        El.slide = document.getElementById(id)
        El.slideWrap = El.slide.querySelector(".slide__wrap")
        El.slideCont = El.slide.querySelector(".slide-cont")
        El.slideItemAll = El.slide.querySelectorAll(".slide-cont__item")
        El.np = El.slide.querySelector(".slide-np")
        El.pn = El.slide.querySelector(".slide-pn")
        El.nextAll = document.querySelectorAll(".slide-np__item--next")
        El.preAll = document.querySelectorAll(".slide-np__item--pre")
        El.pnItemAll = document.querySelectorAll(".slide-pn__item")
        Data.lastItem = El.slideItemAll.length-1
        Data.curr = El.slide.dataset.slideCurr
        Data.form = El.slide.dataset.slideForm
        Data.dur = El.slide.dataset.slideDur
    }
}
const Mod = new module()


/* form start
==============================*/

class fade{
    constructor(){}
    Init(slideItemAll, dur){
        for (let i = 0; i < slideItemAll.length; i++) {
            slideItemAll[i].style.transitionDuration = dur + "ms"
        }
    }
    Loop(){
    }
    Next(){
    }
    Pre(){
    }
}
const Fade = new fade()

class side{
    constructor(){
        this.itemFirst
        this.itemLast
        this.contW
    }
    Init(){
        this.itemFirst = El.slideItemAll[0].cloneNode(true)
        this.itemLast = El.slideItemAll[Data.lastItem].cloneNode(true)
        this.contW = El.slideCont.clientWidth
        Data.curr = El.slide.dataset.slideCurr = 1
        Data.lastItem = Data.lastItem +2
        El.slideCont.appendChild(this.itemFirst)
        El.slideCont.insertBefore(this.itemLast, El.slideItemAll[0])
        El.slideCont.style.transform = "translate3d(-" + this.contW + "px, 0, 0)"
        setTimeout(() => {
            El.slideCont.style.transitionDuration = Data.dur + "ms"
        }, 100)
    }
    Loop(){
        setInterval(() => {
            this.Next()
        }, Data.inter)
    }
    Next(){
        if(Data.curr == Data.lastItem){
            Data.curr = 1
            El.slide.dataset.slideCurr = Data.curr
            El.slideCont.style.transitionDuration = "0ms"
            El.slideCont.style.transform = "translate3d(-" + this.contW + "px, 0, 0)"
            setTimeout(() => {
                El.slideCont.style.transitionDuration = Data.dur + "ms"
                El.slideCont.style.transform = "translate3d(-" + this.contW*(Data.curr+1) + "px, 0, 0)"
                Data.curr++
                El.slide.dataset.slideCurr = Data.curr
            }, 100)
        }else{
            Data.curr++
            El.slide.dataset.slideCurr = Data.curr
            El.slideCont.style.transform = "translate3d(-" + this.contW*Data.curr + "px, 0, 0)"
        }
    }
    Pre(){
    }
}
const Side = new side()

/* form end
==============================*/

class app{
    constructor(){
        this.Create()        
    }

    Create(){
        El.slideAll = document.querySelectorAll(".slide")
    
        for (let i = 0; i < El.slideAll.length; i++) {
            //　データ取得
            Data.id = El.slideAll[i].id
            Data.form = El.slideAll[i].dataset.slideForm
            Data.inter = Number(El.slideAll[i].dataset.slideInter)
            Data.dur = Number(El.slideAll[i].dataset.slideDur)
    
            // エレメント取得
            El.slide = document.getElementById(Data.id);
            El.slideWrap = El.slide.querySelector(".slide__wrap")
            El.slideCont = El.slide.querySelector(".slide-cont")
            El.slideItemAll = El.slide.querySelectorAll(".slide-cont__item")
            El.np = El.slide.querySelector(".slide-np")
            El.pn = El.slide.querySelector(".slide-pn")

            Data.Curr = El.slideAll[i].dataset.slideCurr = 0
            Data.lastItem = El.slideItemAll.length-1
    
            // ネクストプレビュー生成
            if(El.np){
                El.next = document.createElement("span")
                El.pre = document.createElement("span")
                El.next.setAttribute("class", "slide-np__item slide-np__item--next")
                El.pre.setAttribute("class", "slide-np__item slide-np__item--pre")
                El.next.setAttribute("data-slide-id", Data.id)
                El.pre.setAttribute("data-slide-id", Data.id)
                El.np.appendChild(El.next)
                El.np.appendChild(El.pre)
                El.nextAll = document.querySelectorAll(".slide-np__item--next")
                El.preAll = document.querySelectorAll(".slide-np__item--pre")
            }
    
            // ページネーション生成
            if(El.pn){
                for (let i = 0; i < El.slideItemAll.length; i++) {
                    El.pnItem = document.createElement("li")
                    El.pnItem.setAttribute("class", "slide-pn__item")
                    El.pnItem.setAttribute("data-slide-id", Data.id)
                    El.pnItem.setAttribute("data-slide-index", String(i))
                    El.pn.appendChild(El.pnItem)
                    El.pnItemAll = document.querySelectorAll(".slide-pn__item")
                }
            }

            this.Init()
        }
    }

    Init(){
        // デフォルト設定
        if(!Data.form) Data.form = "fade"
        if(!Data.inter) Data.inter = 3000
        if(!Data.dur) Data.dur = 600
        
        switch (Data.form) {
            case "fade": break;
            case "side":
                Side.Init()
                Side.Loop()
                break;
        }
    }

    Next(){
        switch (Data.form) {
            case "fade":break;
            case "side":
                Side.Next();
                break;
        }
    }
}
const App = new app()


/* Event start
==============================*/

El.nextAll.forEach(el => {
    el.addEventListener("click", (e) => {
        const id = e.target.dataset.slideId
        Mod.Get(id)
        App.Next()
    })
})

El.preAll.forEach(el => {
    el.addEventListener("click", (e) => {
        
    })
})

El.pnItemAll.forEach(el => {
    el.addEventListener("click", (e) => {
        
    })
})

/* Event end
==============================*/