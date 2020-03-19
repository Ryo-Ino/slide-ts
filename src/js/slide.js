class El{
    constructor(){
        this.dom = {
            slide: null,
            slideAll: [],
            slideWrap: null,
            slideWrapAll: [],
            slideCont: null,
            slideContAll: [],
            slideItem: null,
            slideItemAll: [],
            slideImg: null,
            slideImgAll: [],
            np: null,
            next: null,
            nextAll: [],
            pre: null,
            preAll: [],
            pn: null,
            pnItem: null,
            pnItemAll: [],
        }
        this.data = {
            id: "",
            form: "",
            inter: 3000,
            dur: 600,
            curr: 0,
            lastItem: 0
        }
    }
}

class Module extends El {
    constructor(){
        super()
    }
}
const mod = new Module()

class Base extends El{
    constructor(BaseSlideAll){
        super()
        
        this.dom.slideAll = BaseSlideAll
        if(this.dom.slideAll.dataset.slideInter !== undefined)
            this.data.inter = this.dom.slideAll.dataset.slideInter
        if(this.dom.slideAll.dataset.slideDur !== undefined)
            this.data.dur = this.dom.slideAll.dataset.slideDur

        this.Init()
    }
    Init(){
        this.dom.slideCont = this.dom.slideAll.querySelector(".slide-cont")
        this.dom.slideItemAll = this.dom.slideAll.querySelectorAll(".slide-cont__item")
        this.data.lastItem = this.dom.slideItemAll.length-1
        this.itemFirst = this.dom.slideItemAll[0].cloneNode(true)
        this.itemLast = this.dom.slideItemAll[this.data.lastItem].cloneNode(true)
        this.contW = this.dom.slideCont.clientWidth
        this.dom.slideAll.dataset.slideCurr = 1
        this.data.lastItem = this.data.lastItem+2
        this.dom.slideCont.appendChild(this.itemFirst)
        this.dom.slideCont.insertBefore(this.itemLast, this.dom.slideItemAll[0])
        this.dom.slideCont.style.transform = "translate3d(-" + this.contW + "px, 0, 0)"
        setTimeout(() => {
            this.dom.slideCont.style.transitionDuration = this.data.dur + "ms"
        }, 100)
    }
    Inter(){

    }
    Next(){

    }
}

class Fade extends El{
    constructor(FadeSlideAll){
        super()
        this.dom.slideAll = FadeSlideAll
    }
}

class App extends El{
    constructor(){
        super()
        this.Create()
    }
    Create(){
        this.dom.slideAll = document.querySelectorAll(".slide")
    
        for (let i = 0; i < this.dom.slideAll.length; i++) {
            this.data.id = this.dom.slideAll[i].id
            this.dom.slide = document.getElementById(this.data.id);
            this.dom.slideItemAll = this.dom.slide.querySelectorAll(".slide-cont__item")
            this.dom.np = this.dom.slide.querySelector(".slide-np")
            this.dom.pn = this.dom.slide.querySelector(".slide-pn")
            this.data.form = this.dom.slide.dataset.slideForm
    
            // ネクストプレビュー生成
            if(this.dom.np){
                this.dom.next = document.createElement("span")
                this.dom.pre = document.createElement("span")
                this.dom.next.setAttribute("class", "slide-np__item slide-np__item--next")
                this.dom.pre.setAttribute("class", "slide-np__item slide-np__item--pre")
                this.dom.next.setAttribute("data-slide-id", this.data.id)
                this.dom.pre.setAttribute("data-slide-id", this.data.id)
                this.dom.np.appendChild(this.dom.next)
                this.dom.np.appendChild(this.dom.pre)
                this.dom.nextAll = document.querySelectorAll(".slide-np__item--next")
                this.dom.preAll = document.querySelectorAll(".slide-np__item--pre")
            }
    
            // ページネーション生成
            if(this.dom.pn){
                for (let i = 0; i < this.dom.slideItemAll.length; i++) {
                    this.dom.pnItem = document.createElement("li")
                    this.dom.pnItem.setAttribute("class", "slide-pn__item")
                    this.dom.pnItem.setAttribute("data-slide-id", this.data.id)
                    this.dom.pnItem.setAttribute("data-slide-index", String(i))
                    this.dom.pn.appendChild(this.dom.pnItem)
                    this.dom.pnItemAll = document.querySelectorAll(".slide-pn__item")
                }
            }

            switch (this.data.form) {
                case undefined: new Base(this.dom.slide); break;
                case "fade": new Fade(this.dom.slide); break;
            }
        }
    }
}
const app = new App()