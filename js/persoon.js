export default class Persoon{

    #naam;
    #details;

    constructor(naam,details){
        this.#naam = naam;
        this.#details = details;
    }

    get naam() {return this.#naam;}
    get details(){return this.#details;}

}