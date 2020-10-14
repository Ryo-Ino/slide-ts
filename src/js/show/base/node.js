export default class node{
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
        this.active = {
            event: 'active-event',
            auto: 'active-auto'
        }
        this.form = {
            base: undefined,
            fade: 'fade'
        } 
    }
}