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
            dur: 600,
            curr: 0,
            lastItem: 0,
            inter: undefined,
            loop: undefined,
        }
        this.is = {
            StopInter: "is-StopInter" 
        }
    }
}

class Module extends El {
    constructor(){
        super()
    }
    El(id){
        this.dom.slide = document.getElementById(id);
        this.dom.slideWrap = this.dom.slide.querySelector(".slide-wrap")
        this.dom.slideCont = this.dom.slide.querySelector(".slide-cont")
        this.dom.slideItemAll = this.dom.slide.querySelector(".slide-cont__item")
        this.data.inter = this.dom.slide.dataset.slideInter
    }
    Control(id){
        clearTimeout(this.stopTimer);
        this.El(id)
        if(this.data.inter !== undefined){
            this.dom.slide.classList.add(this.is.StopInter)
            this.stopTimer = setTimeout(() => {
                this.dom.slide.classList.remove(this.is.StopInter)
            }, this.data.inter/2)
        }
    }
}
const mod = new Module()

class Base extends El{
    constructor(BaseSlideAll){
        super()
        
        this.dom.slideAll = BaseSlideAll

        if(this.dom.slideAll.dataset.slideInter !== this.data.inter)
            this.data.inter = this.dom.slideAll.dataset.slideInter
        if(this.dom.slideAll.dataset.slideLoop !== this.data.loop)
            this.data.loop = Boolean(this.dom.slideAll.dataset.slideLoop)
        if(this.dom.slideAll.dataset.slideDur !== this.data.dur)
            this.data.dur = this.dom.slideAll.dataset.slideDur
        if(Number(this.data.inter) <= Number(this.data.dur))
            this.data.inter = Number(this.data.dur)+100
            this.dom.slideAll.dataset.slideInter = this.data.inter
        
        this.Init()
    }
    Init(){
        this.data.curr = 1
        this.dom.slideAll
        this.dom.slideCont = this.dom.slideAll.querySelector(".slide-cont")
        this.dom.slideItemAll = this.dom.slideAll.querySelectorAll(".slide-cont__item")
        this.data.lastItem = this.dom.slideItemAll.length-1
        this.itemFirst = this.dom.slideItemAll[0].cloneNode(true)
        this.itemLast = this.dom.slideItemAll[this.data.lastItem].cloneNode(true)
        this.contW = this.dom.slideCont.clientWidth
        this.data.lastItem = this.data.lastItem+2
        this.dom.slideCont.appendChild(this.itemFirst)
        this.dom.slideCont.insertBefore(this.itemLast, this.dom.slideItemAll[0])
        this.dom.slideCont.style.transform = "translate3d(-" + this.contW + "px, 0, 0)"
        setTimeout(() => {
            this.dom.slideCont.style.transitionDuration = this.data.dur + "ms"
        }, 100);
        if(this.data.inter)
            this.Inter()
        if(this.data.loop)
            this.Loop()
    }
    Inter(){
        setInterval(() => {
            let flag = this.dom.slideAll.classList.contains(this.is.StopInter)
            if(!flag){
                this.Next()
            }
        }, this.data.inter)
    }
    Loop(){
        const w = this.contW*this.data.lastItem-1
        let num = this.contW
        setTimeout(() => {
            this.dom.slideCont.style.transitionDuration = "0ms"
        }, 100);
        const start = () => {
            this.dom.slideCont.style.transform = "translate3d(-" + num + "px, 0, 0)"
            num = num+1
            if(w <= num)
                num = this.contW
                this.dom.slideCont.style.transform = "translate3d(-" + num + "px, 0, 0)"
            window.requestAnimationFrame(start)
        }
        start()
    }
    Next(){
        if(this.data.curr == this.data.lastItem){
            this.data.curr = 1
            this.dom.slideCont.style.transitionDuration = "0ms"
            this.dom.slideCont.style.transform = "translate3d(-" + this.contW + "px, 0, 0)"
            setTimeout(() => {
                this.data.curr++
                this.dom.slideCont.style.transitionDuration = this.data.dur + "ms"
                this.dom.slideCont.style.transform = "translate3d(-" + this.contW*this.data.curr + "px, 0, 0)"
            }, 100);
        }else{
            this.data.curr++
            this.dom.slideCont.style.transform = "translate3d(-" + this.contW*this.data.curr + "px, 0, 0)"
        }
    }
    Pre(){
        if(this.data.curr == 0){
            this.data.curr = this.data.lastItem-1
            this.dom.slideCont.style.transitionDuration = "0ms"
            this.dom.slideCont.style.transform = "translate3d(-" + this.contW*this.data.curr + "px, 0, 0)"
            setTimeout(() => {
                this.data.curr--
                this.dom.slideCont.style.transitionDuration = this.data.dur + "ms"
                this.dom.slideCont.style.transform = "translate3d(-" + this.contW*this.data.curr + "px, 0, 0)"
            }, 100);
        }else{
            this.data.curr--
            this.dom.slideCont.style.transform = "translate3d(-" + this.contW*this.data.curr + "px, 0, 0)"
        }
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
        this.Next()
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
                case undefined: this.Base = new Base(this.dom.slide); break;
                case "fade": this.Fade = new Fade(this.dom.slide); break;
            }
        }
    }
    Next(){
        this.dom.nextAll.forEach(el => {
            el.addEventListener("click", (e) => {
                switch (this.data.form) {
                    case undefined: this.Base.Next(e.target.dataset.slideId); break;
                }
            })
        })
    }

}
const app = new App()