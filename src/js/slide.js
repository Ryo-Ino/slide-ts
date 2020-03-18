class el{
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
            id: 0,
            form: "",
            inter: 0,
            dur: 0,
            curr: 0,
            lastItem: 0,
        }
        this.Create()
    }
    Create(){
        this.dom.slideAll = document.querySelectorAll(".slide")
    
        for (let i = 0; i < this.dom.slideAll.length; i++) {
            //　データ取得
            this.data.id = this.dom.slideAll[i].id
            this.data.form = this.dom.slideAll[i].dataset.slideForm
            this.data.inter = Number(this.dom.slideAll[i].dataset.slideInter)
            this.data.dur = Number(this.dom.slideAll[i].dataset.slideDur)
    
            // エレメント取得
            this.dom.slide = document.getElementById(this.data.id);
            this.dom.slideWrap = this.dom.slide.querySelector(".slide__wrap")
            this.dom.slideCont = this.dom.slide.querySelector(".slide-cont")
            this.dom.slideItemAll = this.dom.slide.querySelectorAll(".slide-cont__item")
            this.dom.np = this.dom.slide.querySelector(".slide-np")
            this.dom.pn = this.dom.slide.querySelector(".slide-pn")

            this.data.Curr = this.dom.slideAll[i].dataset.slideCurr = 0
            this.data.lastItem = this.dom.slideItemAll.length-1
    
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
        }
    }
} new el()