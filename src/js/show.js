class node{
    constructor(){
        this.el = {
            show: null,
            showAll: [],
            track: null,
            trackAll: [],
            slide: null,
            slideAll: [],
            slideChild: null, 
            slideChildAll: [],
            nextprev: null,
            nextprevChild: null,
            nextprevChildAll: [],
            next: null,
            nextAll: [],
            prev: null,
            prevAll: [],
            pagination: null,
            paginationChild: null,
            paginationChildAll: [],
        }
        this.data = {
            id: '',
            form: '',
            speed: 400,
            auto: undefined,
            flow: undefined,
            current: 0,
            lastChild: 0,
        }
        this.is = {
            stop: 'is-stop',
        }
        this.form = {
            base: undefined,
            fade: 'fade'
        }
    }
}

class feature extends node {
    constructor(){
        super()
    }
    getNode(id){
        this.el.show = document.getElementById(id)
        this.el.track = this.el.show.querySelector('.show-track')
        this.el.slide = this.el.show.querySelector('.show-slide')
        this.el.slideChildAll = this.el.show.querySelectorAll('.show-slide__child')
        this.data.speed = this.el.show.dataset.showSpeed
        this.data.auto = this.el.show.dataset.showAuto
        this.data.lastChild = this.el.slideChildAll.length-1
        this.data.current = this.el.show.dataset.showCurrent
    }
    control(){
        clearTimeout(this.stopTimer)
        this.el.show.classList.add(this.is.stop)
        this.stopTimer = setTimeout(() => {
            this.stopEl = document.querySelectorAll('.' + this.is.stop)
            this.stopEl.forEach(el => {
                el.classList.remove(this.is.stop)
            })
        }, this.data.speed)
    }　
}

class base extends feature{ 
    constructor(showAll){
        super()
        
        this.el.showAll = showAll

        if(this.el.showAll.dataset.showAuto !== this.data.auto)
            this.data.auto = this.el.showAll.dataset.showAuto
        if(this.el.showAll.dataset.showFlow !== this.data.flow)
            this.data.flow = Boolean(this.el.showAll.dataset.showFlow)
        if(this.el.showAll.dataset.showSpeed !== this.data.speed)
            this.data.speed = this.el.showAll.dataset.showSpeed
        if(Number(this.data.auto) <= Number(this.data.speed))
            this.data.auto = Number(this.data.speed)+100
            this.el.showAll.dataset.showAuto = this.data.auto
        
        this.init()
    }
    init(){
        this.getNode(this.el.showAll.id)
        this.childFirst = this.el.slideChildAll[0].cloneNode(true)
        this.childLast = this.el.slideChildAll[this.data.lastChild].cloneNode(true)
        this.slideW = this.el.slide.clientWidth
        this.el.show.dataset.showCurrent = this.data.current = 1
        this.data.lastChild = this.data.lastChild+2
        this.el.slide.appendChild(this.childFirst)
        this.el.slide.insertBefore(this.childLast, this.el.slideChildAll[0])
        this.el.slide.style.transform = 'translate3d(-' + this.slideW + 'px, 0, 0)'
        setTimeout(() => {
            this.el.slide.style.transitionDuration = this.data.speed + 'ms'
        }, 100)
        if(this.data.auto) this.auto()
        if(this.data.flow) this.flow()
    }
    auto(){
        setInterval(() => {
            this.next(this.el.showAll.id)
        }, this.data.auto)
    }
    flow(){
        const w = this.slideW*this.data.lastChild-1
        let num = this.slideW
        setTimeout(() => {
            this.el.slide.style.transitionDuration = '0ms'
        }, 100)
        const start = () => {
            this.el.slide.style.transform = 'translate3d(-' + num + 'px, 0, 0)'
            num = num+1
            if(w <= num)
                num = this.slideW
                this.el.slide.style.transform = 'translate3d(-' + num + 'px, 0, 0)'
            window.requestAnimationFrame(start)
        }
        start()
    }
    next(id){
        this.getNode(id)
        let flag = this.el.show.classList.contains(this.is.stop) 
        if(!flag){
            this.control()
            if(this.data.current == this.data.lastChild){
                this.data.current = 1
                this.el.show.dataset.showCurrent = this.data.current
                this.el.slide.style.transitionDuration = '0ms'
                this.el.slide.style.transform = 'translate3d(-' + this.slideW + 'px, 0, 0)'
                setTimeout(() => {
                    this.data.current++
                    this.el.show.dataset.showCurrent = this.data.current
                    this.el.slide.style.transitionDuration = this.data.speed + 'ms'
                    this.el.slide.style.transform = 'translate3d(-' + this.slideW*this.data.current + 'px, 0, 0)'
                    setTimeout(() => {
                        this.el.slide.style.transitionDuration = '0ms'
                    }, this.data.speed)
                }, 100)
            }else{
                this.data.current++
                this.el.show.dataset.showCurrent = this.data.current
                this.el.slide.style.transitionDuration = this.data.speed + 'ms'
                this.el.slide.style.transform = 'translate3d(-' + this.slideW*this.data.current + 'px, 0, 0)'
                setTimeout(() => {
                    this.el.slide.style.transitionDuration = '0ms'
                }, this.data.speed)
            }
        }
    }
    prev(id){
        this.getNode(id)
        let flag = this.el.show.classList.contains(this.is.stop) 
        if(!flag){
            this.control()
            if(this.data.current == 0){
                this.data.current = this.data.lastChild-1
                this.el.show.dataset.showCurrent = this.data.current
                this.el.slide.style.transitionDuration = '0ms'
                this.el.slide.style.transform = 'translate3d(-' + this.slideW*this.data.current + 'px, 0, 0)'
                setTimeout(() => {
                    this.data.current--
                    this.el.show.dataset.showCurrent = this.data.current
                    this.el.slide.style.transitionDuration = this.data.speed + 'ms'
                    this.el.slide.style.transform = 'translate3d(-' + this.slideW*this.data.current + 'px, 0, 0)'
                    setTimeout(() => {
                        this.el.slide.style.transitionDuration = '0ms'
                    }, this.data.speed)
                }, 100)
            }else{
                this.data.current--
                this.el.show.dataset.showCurrent = this.data.current
                this.el.slide.style.transitionDuration = this.data.speed + 'ms'
                this.el.slide.style.transform = 'translate3d(-' + this.slideW*this.data.current + 'px, 0, 0)'
                setTimeout(() => {
                    this.el.slide.style.transitionDuration = '0ms'
                }, this.data.speed)
            }
        }
    }
}

class app extends feature{
    constructor(){
        super()
        this.create()
        this.next()
        this.prev()
    }
    create(){
        this.el.showAll = document.querySelectorAll('.show')
    
        for (let i = 0; i < this.el.showAll.length; i++) {
            this.data.id = this.el.showAll[i].id
            this.el.show = document.getElementById(this.data.id)
            this.el.slideAll = this.el.show.querySelectorAll('.show-slide__child')
            this.el.nextprev = this.el.show.querySelector('.show-nextprev')
            this.el.pagination = this.el.show.querySelector('.show-pagination')
    
            // ネクストプレビュー生成
            if(this.el.nextprev){
                this.el.next = document.createElement('li')
                this.el.prev = document.createElement('li')
                this.el.next.setAttribute('class', 'show-nextprev__child show-nextprev__child--next')
                this.el.prev.setAttribute('class', 'show-nextprev__child show-nextprev__child--prev')
                this.el.next.setAttribute('data-show-id', this.data.id)
                this.el.prev.setAttribute('data-show-id', this.data.id)
                this.el.nextprev.appendChild(this.el.next)
                this.el.nextprev.appendChild(this.el.prev)
                this.el.nextAll = document.querySelectorAll('.show-nextprev__child--next')
                this.el.prevAll = document.querySelectorAll('.show-nextprev__child--prev')
            }
    
            // ページネーション生成
            if(this.el.pagination){
                for (let i = 0; i < this.el.slideAll.length; i++) {
                    this.el.paginationChild = document.createElement('li')
                    this.el.paginationChild.setAttribute('class', 'show-pagination__child')
                    this.el.paginationChild.setAttribute('data-show-id', this.data.id)
                    this.el.paginationChild.setAttribute('data-show-index', String(i))
                    this.el.pagination.appendChild(this.el.paginationChild)
                    this.el.paginationChildAll = document.querySelectorAll('.show-pagination__child')
                }
            }

            this.data.form = this.el.show.dataset.showForm
            switch (this.data.form) {
                case this.form.base: this.base = new base(this.el.show); break;
            }
        }
    }
    next(){
        this.el.nextAll.forEach(el => {
            el.addEventListener('click', (e) => {
                switch (this.data.form) {
                    case this.form.base: this.base.next(e.target.dataset.showId); break;
                }
            })
        })
    }
    prev(){
        this.el.prevAll.forEach(el => {
            el.addEventListener('click', (e) => {
                switch (this.data.form) {
                    case this.form.base: this.base.prev(e.target.dataset.showId); break;
                }
            })
        })
    }
    pagination(){

    }
    scroll(){

    }
    drag(){

    }
    swipe(){

    }
}
new app()