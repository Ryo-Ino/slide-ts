"use strict";

interface Data{
    _id: string
    _form: string
    _inter: number
    _dur: number
    _lastItem: number
    _curr: number
}

interface El{
    _slide: HTMLInputElement
    _slideAll: NodeListOf<HTMLElement>
    _slideWrap: HTMLInputElement
    _slideWrapAll: NodeListOf<HTMLElement>
    _slideCont: HTMLInputElement
    _slideContAll: NodeListOf<HTMLElement>
    _slideItem: HTMLInputElement
    _slideItemAll: NodeListOf<HTMLElement>
    _np: HTMLInputElement
    _next: HTMLSpanElement
    _nextAll: NodeListOf<HTMLElement>
    _preview: HTMLSpanElement
    _previewAll: NodeListOf<HTMLElement>
    _pn: HTMLInputElement
    _pnItem: HTMLLIElement
    _pnItemAll: NodeListOf<HTMLElement>
}

class Form{

    constructor(
        id, form, inter, dur, slide, slideItemAll, lastItem, curr
    ){

    }

    // フェイド
    Fade(){

    }

    // 横
    Side(){

    }

}

class Model{

    constructor(
        id, form, inter, dur, slide, slideItemAll, lastItem, curr
    ){
        if(!form) form = "fade"
        if(!inter) inter = 3000
        if(!dur) dur = 600
        curr = 0

        for (let i = 0; i < slideItemAll.length; i++){
            slideItemAll[i].style.transitionDuration = dur+"ms"
        }
        this.Loop(id, form, inter, dur, slide, slideItemAll, lastItem, curr) 
    }

    Loop(id, form, inter, dur, slide, slideItemAll, lastItem, curr){
        setInterval(() => {
            this.Next(id, form, inter, dur, slide, slideItemAll, lastItem, curr)
        }, inter)  
    }

    Next(id, form, inter, dur, slide, slideItemAll, lastItem, curr){
        if(curr == lastItem){
            curr = 0
            if(form == "fade"){
                slideItemAll[lastItem].style.opacity = 0
                slideItemAll[curr].style.opacity = 1
            }else if(form == "side"){

            }
        }else{
            curr++
            if(form == "fade"){
                slideItemAll[curr-1].style.opacity = 0
                slideItemAll[curr].style.opacity = 1
            }else if(form == "side"){

            }
        }
    }

    Preview(id, form, inter, dur, slide, slideItemAll, lastItem, curr){
        if(curr == 0){
            curr = lastItem
            slideItemAll[0].style.opacity = 0
            slideItemAll[curr].style.opacity = 1
        }else{
            curr--
            slideItemAll[curr+1].style.opacity = 0
            slideItemAll[curr].style.opacity = 1
        }
    }

    pn(){

    }

}

class App implements Data, El{
    // Data
    _id: string
    _form: string
    _inter: number
    _dur: number
    _lastItem: number
    _curr: number

    // Element
    _slide: HTMLInputElement
    _slideAll: NodeListOf<HTMLElement>
    _slideWrap: HTMLInputElement
    _slideWrapAll: NodeListOf<HTMLElement>
    _slideCont: HTMLInputElement
    _slideContAll: NodeListOf<HTMLElement>
    _slideItem: HTMLInputElement
    _slideItemAll: NodeListOf<HTMLElement>
    _np: HTMLInputElement
    _next: HTMLSpanElement
    _nextAll: NodeListOf<HTMLElement>
    _preview: HTMLSpanElement
    _previewAll: NodeListOf<HTMLElement>
    _pn: HTMLInputElement
    _pnItem: HTMLLIElement
    _pnItemAll: NodeListOf<HTMLElement>


    constructor(){  
        this.Create()
    }
    
    Create(){
        this._slideAll = document.querySelectorAll(".slide")

        for (let i = 0; i < this._slideAll.length; i++) {
            this._id = this._slideAll[i].dataset.slideId
            this._inter = Number(this._slideAll[i].dataset.slideInter)
            this._form = this._slideAll[i].dataset.slideForm

            this._slide = document.querySelector("[data-slide-id='" + this._id + "']")
            this._slideCont = this._slide.querySelector(".slide-cont")
            this._slideItemAll = this._slide.querySelectorAll(".slide-cont__item")
            this._lastItem = this._slideItemAll.length-1
            this._np = this._slide.querySelector(".slide-np")
            this._pn = this._slide.querySelector(".slide-pn")

            // ネクストプレビュー生成
            if(this._np){
                this._next = document.createElement("span")
                this._preview = document.createElement("span")
                this._next.setAttribute("class", "slide-np__item slide-np__item--next")
                this._preview.setAttribute("class", "slide-np__item slide-np__item--preview")
                this._next.setAttribute("data-slide-id", this._id)
                this._preview.setAttribute("data-slide-id", this._id)
                this._np.appendChild(this._next)
                this._np.appendChild(this._preview)
            }

            // ページネーション生成
            if(this._pn){
                for (let i = 0; i < this._slideItemAll.length; i++) {
                    this._pnItem = document.createElement("li")
                    this._pnItem.setAttribute("class", "slide-pn__item")
                    this._pnItem.setAttribute("data-slide-id", this._id)
                    this._pnItem.setAttribute("data-slide-index", String(i))
                    this._pn.appendChild(this._pnItem);
                }
            }

            new Model(
                this._id,
                this._form,
                this._inter,
                this._dur,
                this._slide,
                this._slideItemAll,
                this._lastItem,
                this._curr
            )

            new Form(
                this._id,
                this._form,
                this._inter,
                this._dur,
                this._slide,
                this._slideItemAll,
                this._lastItem,
                this._curr
            )
        }
    }
}
new App();