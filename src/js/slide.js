class node{
    constructor(){
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
            dur: 600,
            curr: 0,
            lastItem: 0,
            inter: undefined,
            loop: undefined,
        }
        this.is = {
            stop: 'is-stop' 
        }
    }
}

class feature extends node {
    constructor(){
        super()
    }
    getNode(id){
        this.el.slide = document.getElementById(id)
        this.el.slideWrap = this.el.slide.querySelector('.slide__wrap')
        this.el.slideCont = this.el.slide.querySelector('.slide-cont')
        this.el.slideItemAll = this.el.slide.querySelectorAll('.slide-cont__item')
        this.data.dur = this.el.slide.dataset.slideDur
        this.data.inter = this.el.slide.dataset.slideInter
        this.data.lastItem = this.el.slideItemAll.length-1
        this.data.curr = this.el.slide.dataset.slideCurr
    }
    adjust(value){
        clearTimeout(this.stopTimer)
        if(value == 'inter'){
            this.num = this.data.inter
        }else if(value == 'event'){
            this.num = this.data.dur
        }
        this.el.slide.classList.add(this.is.stop)
        this.stopTimer = setTimeout(() => {
            this.el.slide.classList.remove(this.is.stop)
            console.log(this.num)
        }, this.num)
    }
    control(id, value){
        this.getNode(id)
        this.adjust(value)
    }
}

class base extends feature{
    constructor(slideAll){
        super()
        
        this.el.slideAll = slideAll

        if(this.el.slideAll.dataset.slideInter !== this.data.inter)
            this.data.inter = this.el.slideAll.dataset.slideInter
        if(this.el.slideAll.dataset.slideLoop !== this.data.loop)
            this.data.loop = Boolean(this.el.slideAll.dataset.slideLoop)
        if(this.el.slideAll.dataset.slideDur !== this.data.dur)
            this.data.dur = this.el.slideAll.dataset.slideDur
        if(Number(this.data.inter) <= Number(this.data.dur))
            this.data.inter = Number(this.data.dur)+100
            this.el.slideAll.dataset.slideInter = this.data.inter
        
        this.init()
    }
    init(){
        this.getNode(this.el.slideAll.id)
        this.itemFirst = this.el.slideItemAll[0].cloneNode(true)
        this.itemLast = this.el.slideItemAll[this.data.lastItem].cloneNode(true)
        this.contW = this.el.slideCont.clientWidth
        this.el.slide.dataset.slideCurr = this.data.curr = 1
        this.data.lastItem = this.data.lastItem+2
        this.el.slideCont.appendChild(this.itemFirst)
        this.el.slideCont.insertBefore(this.itemLast, this.el.slideItemAll[0])
        this.el.slideCont.style.transform = 'translate3d(-' + this.contW + 'px, 0, 0)'
        setTimeout(() => {
            this.el.slideCont.style.transitionDuration = this.data.dur + 'ms'
        }, 100)
        // if(this.data.inter) this.inter()
        if(this.data.loop) this.loop()
    }
    inter(){
        setInterval(() => {
            this.next(this.el.slideAll.id, 'inter')
        }, this.data.inter)
    }
    loop(){
        const w = this.contW*this.data.lastItem-1
        let num = this.contW
        setTimeout(() => {
            this.el.slideCont.style.transitionDuration = '0ms'
        }, 100)
        const start = () => {
            this.el.slideCont.style.transform = 'translate3d(-' + num + 'px, 0, 0)'
            num = num+1
            if(w <= num)
                num = this.contW
                this.el.slideCont.style.transform = 'translate3d(-' + num + 'px, 0, 0)'
            window.requestAnimationFrame(start)
        }
        start()
    }
    next(id, value){
        let flag = this.el.slide.classList.contains(this.is.stop)
        if(!flag){
            this.control(id, value)
            if(this.data.curr == this.data.lastItem){
                this.data.curr = 1
                this.el.slide.dataset.slideCurr = this.data.curr
                this.el.slideCont.style.transitionDuration = '0ms'
                this.el.slideCont.style.transform = 'translate3d(-' + this.contW + 'px, 0, 0)'
                setTimeout(() => {
                    this.data.curr++
                    this.el.slide.dataset.slideCurr = this.data.curr
                    this.el.slideCont.style.transitionDuration = this.data.dur + 'ms'
                    this.el.slideCont.style.transform = 'translate3d(-' + this.contW*this.data.curr + 'px, 0, 0)'
                }, 100)
            }else{
                this.data.curr++
                this.el.slide.dataset.slideCurr = this.data.curr
                this.el.slideCont.style.transform = 'translate3d(-' + this.contW*this.data.curr + 'px, 0, 0)'
            }
        }
    }
    pre(){
        if(this.data.curr == 0){
            this.data.curr = this.data.lastItem-1
            this.el.slide.dataset.slideCurr = this.data.curr
            this.el.slideCont.style.transitionDuration = '0ms'
            this.el.slideCont.style.transform = 'translate3d(-' + this.contW*this.data.curr + 'px, 0, 0)'
            setTimeout(() => {
                this.data.curr--
                this.el.slide.dataset.slideCurr = this.data.curr
                this.el.slideCont.style.transitionDuration = this.data.dur + 'ms'
                this.el.slideCont.style.transform = 'translate3d(-' + this.contW*this.data.curr + 'px, 0, 0)'
            }, 100)
        }else{
            this.data.curr--
            this.el.slide.dataset.slideCurr = this.data.curr
            this.el.slideCont.style.transform = 'translate3d(-' + this.contW*this.data.curr + 'px, 0, 0)'
        }
    }
}

class app extends feature{
    constructor(){
        super()
        this.create()
        this.next()
    }
    create(){
        this.el.slideAll = document.querySelectorAll('.slide')
    
        for (let i = 0; i < this.el.slideAll.length; i++) {
            this.data.id = this.el.slideAll[i].id
            this.el.slide = document.getElementById(this.data.id)
            this.el.slideItemAll = this.el.slide.querySelectorAll('.slide-cont__item')
            this.el.np = this.el.slide.querySelector('.slide-np')
            this.el.pn = this.el.slide.querySelector('.slide-pn')
    
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

            this.transfer()
        }
    }
    transfer(){
        this.data.form = this.el.slide.dataset.slideForm
        switch (this.data.form) {
            case undefined: this.base = new base(this.el.slide); break;
        }
    }
    next(){
        this.el.nextAll.forEach(el => {
            el.addEventListener('click', (e) => {
                switch (this.data.form) {
                    case undefined: this.base.next(e.target.dataset.slideId, 'event'); break;
                }
            })
        })
    }
}
new app()