class node{
    constructor(){
        this.form = {
            base: undefined,
            fade: 'fade'
        }
        this.el = {
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
            id: '',
            form: '',
            inter: undefined,
            loop: undefined,
            dur: 600,
            lastItem: 0,
            curr: 0,
        }
        this.is = {
            StopInter: 'is-StopInter'
        }
        this.create()
    }
    create(){
        this.el.slideAll = document.querySelectorAll('.slide')
    
        for (let i = 0; i < this.el.slideAll.length; i++) {
            this.data.id = this.el.slideAll[i].id
            this.el.slide = document.getElementById(this.data.id)
            this.el.slideItemAll = this.el.slide.querySelectorAll('.slide-cont__item')
            this.el.np = this.el.slide.querySelector('.slide-np')
            this.el.pn = this.el.slide.querySelector('.slide-pn')
            this.data.form = this.el.slide.dataset.slideForm
            
            // ネクストプレビュー生成
            if(this.el.np){
                this.el.next = document.createElement('span')
                this.el.pre = document.createElement('span')
                this.el.next.setAttribute('class', 'slide-np__item slide-np__item--next')
                this.el.pre.setAttribute('class', 'slide-np__item slide-np__item--pre')
                this.el.next.setAttribute('data-slide-id', this.data.id)
                this.el.pre.setAttribute('data-slide-id', this.data.id)

                this.el.np.appendChild(this.el.next)
                this.el.np.appendChild(this.el.pre)
                this.el.nextAll = document.querySelectorAll('.slide-np__item--next')
                this.el.preAll = document.querySelectorAll('.slide-np__item--pre')
            }
    
            // ページネーション生成
            if(this.el.pn){
                for (let i = 0; i < this.el.slideItemAll.length; i++) {
                    this.el.pnItem = document.createElement('li')
                    this.el.pnItem.setAttribute('class', 'slide-pn__item')
                    this.el.pnItem.setAttribute('data-slide-id', this.data.id)
                    this.el.pnItem.setAttribute('data-slide-index', String(i))
                    this.el.pn.appendChild(this.el.pnItem)
                    this.el.pnItemAll = document.querySelectorAll('.slide-pn__item')
                }
            }
        }
    }
}

class feature extends node{
    constructor(){
        super()
    }
    getNode(id){
        this.el.slide = document.getElementById(id)
        this.el.slideWrap = this.el.slide.querySelector('.slide__wrap')
        this.el.slideCont = this.el.slide.querySelector('.slide-cont')
        this.el.slideItemAll = this.el.slide.querySelectorAll('.slide-cont__item')
        this.data.inter = this.el.slide.dataset.slideInter
        this.data.loop = this.el.slide.dataset.slideLoop
        this.data.dur = this.el.slide.dataset.slideDur
        this.data.lastItem = this.el.slideItemAll.length-1
    }
}

class base extends feature{
    constructor(){
        super()
        for (let i = 0; i < this.el.slideAll.length; i++) {
            if(this.form.base === this.el.slideAll[i].dataset.slideForm){
                this.getNode(this.el.slideAll[i].id)
                this.itemFirst = this.el.slideItemAll[0].cloneNode(true)
                this.itemLast = this.el.slideItemAll[this.data.lastItem].cloneNode(true)
                this.contW = this.el.slideCont.clientWidth
                this.el.slideCont.appendChild(this.itemFirst)
                this.el.slideCont.insertBefore(this.itemLast, this.el.slideItemAll[0])
                this.el.slideCont.style.transform = 'translate3d(-' + this.contW + 'px, 0, 0)'
                this.data.curr = 1
                this.data.lastItem = this.data.lastItem+2
                let slideCont = this.el.slideCont
                let dur = this.data.dur
                setTimeout(() => {
                    slideCont.style.transitionDuration = dur + 'ms'
                }, 100)
                if(this.data.inter !== undefined) this.inter(this.data.inter)
                if(this.data.loop !== undefined) this.loop()
            }
        }
    }
    inter(inter){
        this.data.inter = inter
        setInterval(() => {
            for (let i = 0; i < this.el.slideAll.length; i++) {
                if(this.form.base === this.el.slideAll[i].dataset.slideForm)
                    this.getNode(this.el.slideAll[i].id)
                    this.next()
            }
        }, this.data.inter)
    }
    loop(){
    }
    next(){
        if(this.data.curr == this.data.lastItem){
            this.data.curr = 1
            this.el.slideCont.style.transitionDuration = '0ms'
            this.el.slideCont.style.transform = 'translate3d(-' + this.contW + 'px, 0, 0)'
            let slideCont = this.el.slideCont
            let dur = this.data.dur
            setTimeout(() => {
                this.data.curr++
                slideCont.style.transitionDuration = dur + 'ms'
                slideCont.style.transform = 'translate3d(-' + this.contW*this.data.curr + 'px, 0, 0)'
            }, 100)
        }else{
            this.data.curr++
            this.el.slideCont.style.transform = 'translate3d(-' + this.contW*this.data.curr + 'px, 0, 0)'
            console.log(this.data.curr)
        }
    }
    pre(){
    }
}
new base()