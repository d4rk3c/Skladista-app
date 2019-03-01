import React, { Component } from 'react';
import '../css/styles.css';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexArray: "",


        };
        this.unesiMagacin = this.unesiMagacin.bind(this);
        this.izradiRezultat = this.izradiRezultat.bind(this)

    }

    myCallback = (dataFromComponent, ) => {
        this.setState({
            indexArray: dataFromComponent,

        });

    }

    izdradiRezultatOpt1(i, j, nizz, stringIspis) {
        let html1;
        let newHtml1;

        html1 = "<span>%nizz[i].plusminus%  %nizz[i].kolicina%  <b>%nizz[i].kataloski%</b>  %nizz[i].imeMagacina%  %parnjak sa:% %nizz[i+1].plusminus%  %nizz[i+1].kolicina%  <b>%nizz[i+1].kataloski%</b>  %nizz[i+1].imeMagacina% </span> <br/>"

        newHtml1 = html1.replace('%nizz[i].plusminus%', nizz[i].plusminus)
        newHtml1 = newHtml1.replace('%nizz[i+1].plusminus%', nizz[j].plusminus)
        newHtml1 = newHtml1.replace('%parnjak sa:%', stringIspis)

        newHtml1 = newHtml1.replace('%nizz[i+1].kolicina%', nizz[j].kolicina)
        newHtml1 = newHtml1.replace('%nizz[i+1].kataloski%', nizz[j].kataloski)
        newHtml1 = newHtml1.replace('%nizz[i].kataloski%', nizz[i].kataloski)
        newHtml1 = newHtml1.replace('%nizz[i].imeMagacina%', nizz[i].imeMagacina)
        newHtml1 = newHtml1.replace('%nizz[i+1].imeMagacina%', nizz[j].imeMagacina)




        nizz[i].kolicina = nizz[i].kolicina - nizz[j].kolicina

        newHtml1 = newHtml1.replace('%nizz[i].kolicina%', nizz[j].kolicina)
        document.getElementById("izvestaj").insertAdjacentHTML("beforeend", newHtml1)

        let position = nizz.indexOf(nizz[j])
        nizz.splice(position, 1);

    }

    izradiRezultatOpt2(i, j, nizz, stringIspis) {
        //mora da se radi i ispis
        let html2;
        let newHtml2;

        html2 = "<span>%nizz[i].plusminus%  %nizz[i].kolicina%  <b>%nizz[i].kataloski%</b>  %nizz[i].imeMagacina%  %parnjak sa:% %nizz[i+1].plusminus%  %nizz[i+1].kolicina%  <b>%nizz[i+1].kataloski%</b>  %nizz[i+1].imeMagacina% </span> <br/>"

        newHtml2 = html2.replace('%nizz[i].plusminus%', nizz[i].plusminus)
        newHtml2 = newHtml2.replace('%nizz[i+1].plusminus%', nizz[j].plusminus)
        newHtml2 = newHtml2.replace('%nizz[i].kolicina%', nizz[i].kolicina)
        newHtml2 = newHtml2.replace('%parnjak sa:%', stringIspis)

        newHtml2 = newHtml2.replace('%nizz[i+1].kataloski%', nizz[j].kataloski)
        newHtml2 = newHtml2.replace('%nizz[i].kataloski%', nizz[i].kataloski)
        newHtml2 = newHtml2.replace('%nizz[i].imeMagacina%', nizz[i].imeMagacina)
        newHtml2 = newHtml2.replace('%nizz[i+1].imeMagacina%', nizz[j].imeMagacina)


        nizz[j].kolicina = nizz[j].kolicina - nizz[i].kolicina
        newHtml2 = newHtml2.replace('%nizz[i+1].kolicina%', nizz[i].kolicina)
        document.getElementById("izvestaj").insertAdjacentHTML("beforeend", newHtml2)
        //povezujemo ta dva i izbacujemo iz niza {ovaj i}
        let position = nizz.indexOf(nizz[i])
        nizz.splice(position, 1);

    }

    unesiMagacin() {
        var forma = document.getElementById('hideee');
        var unesi = document.getElementById('unesi');
        forma.classList.remove("hideee");
        forma.classList.add("showww");
        unesi.disabled = true;
        console.log("HII");

    }
    izradiRezultat() {
        if (this.state.indexArray === "") {
            alert("Molim Vas prvo unesite sve magacine!")
        }
        else {
            let xxx = [];
            let yyy;
            let zzz = []


            // console.log(this.state.indexArray)

            //1. za sve ove keywords iz indexArray povuci sa local storage posebne nizove (ili u isti niz)
            for (let i = 0; i < this.state.indexArray.length; i++) {
                xxx = this.state.indexArray[i];
                for (let j = 0; j < xxx.length; j++) {
                    yyy = xxx[j];
                    console.log(yyy);
                    let getStringify = JSON.parse(localStorage.getItem(yyy));
                    zzz.push(getStringify)

                }

            }
            //console.log(zzz)
            let nizz = [];

            for (let i = 0; i < zzz.length; i++) {
                for (let j = 0; j < zzz[i].length; j++) {

                    nizz.push(zzz[i][j]) //stvoren niz svih objekata
                }
            }
            console.log(nizz)

            for (let i = 0; i < nizz.length; i++) {
                if (nizz[i].kolicina === 0) {
                    let pozicija = nizz.indexOf(nizz[i]);
                    nizz.splice(pozicija, 1);

                }
                else {
                    for (let j = 0; j < nizz.length; j++) {
                        if (nizz[i].plusminus !== nizz[j].plusminus) {
                            if (nizz[i].kataloski === nizz[j].kataloski) {
                                if (nizz[i].kolicina === nizz[j].kolicina) {

                                    //radi se ispis

                                    let html;
                                    let newHtml;

                                    html = "<span>%nizz[i].plusminus%  %nizz[i].kolicina%  <b>%nizz[i].kataloski%</b>  %nizz[i].imeMagacina%  PARNJAK SA: %nizz[i+1].plusminus%  %nizz[i+1].kolicina%  <b>%nizz[i+1].kataloski%</b>  %nizz[i+1].imeMagacina% </span> <br/>"

                                    newHtml = html.replace('%nizz[i].plusminus%', nizz[i].plusminus)
                                    newHtml = newHtml.replace('%nizz[i+1].plusminus%', nizz[j].plusminus)
                                    newHtml = newHtml.replace('%nizz[i].kolicina%', nizz[i].kolicina)
                                    newHtml = newHtml.replace('%nizz[i+1].kolicina%', nizz[j].kolicina)
                                    newHtml = newHtml.replace('%nizz[i+1].kataloski%', nizz[j].kataloski)
                                    newHtml = newHtml.replace('%nizz[i].kataloski%', nizz[i].kataloski)
                                    newHtml = newHtml.replace('%nizz[i].imeMagacina%', nizz[i].imeMagacina)
                                    newHtml = newHtml.replace('%nizz[i+1].imeMagacina%', nizz[j].imeMagacina)
                                    document.getElementById("izvestaj").insertAdjacentHTML("beforeend", newHtml)



                                    // ISPIS:  +- 1 kataloski naziv magacin parnjak sa +- 1 kataloski naziv magacin

                                    //izbacujemo ih iz niza!!!!!!!!!!
                                    let elementIDDD = nizz[j];
                                    //let elementID = elementIDDD.idElement

                                    let pozicija = nizz[i]
                                    let poz = nizz.indexOf(pozicija)
                                    nizz.splice(poz, 1);// ovde mora da bude koja je pozicija a ne sta se brise


                                    let position = nizz.indexOf(elementIDDD);
                                    nizz.splice(position, 1)

                                }

                            }

                        }


                    }


                }

            }


            //moze se probati i sa forEach!

            for (let i = 0; i < nizz.length - 1; i++) {
                if (nizz[i].kolicina === 0) {
                    let pozicija = nizz.indexOf(nizz[i]);
                    nizz.splice(pozicija, 1);

                }
                else {
                    for (let j = 0; j < nizz.length; j++) {

                        if (nizz[i].plusminus !== nizz[j].plusminus) {

                            if (nizz[i].kataloski === nizz[j].kataloski) {
                                let stringIspis = "PARNJAK SA: "
                                if (nizz[i].kolicina > nizz[j].kolicina) {
                                    //mora da se radi i ispis
                                    this.izdradiRezultatOpt1(i, j, nizz, stringIspis)


                                    //povezujemo ta dva i izbacujemo  iz niza {ovaj j}

                                }
                                else {
                                    this.izradiRezultatOpt2(i, j, nizz, stringIspis)

                                }
                            }
                        }
                    }


                }


            }



            //ODAVDE IDEMO DALJE - isti magacin naziv sa  . i slovom
            for (let i = 0; i < nizz.length - 1; i++) {
                if (nizz[i].kolicina === 0) {
                    let pozicija = nizz.indexOf(nizz[i]);
                    nizz.splice(pozicija, 1);

                }
                else {
                    for (let j = 0; j < nizz.length; j++) {
                        if (nizz[i].imeMagacina === nizz[j].imeMagacina) {
                            if (nizz[i].plusminus !== nizz[j].plusminus) {
                                let varijabla = nizz[i].kataloski;
                                let varijabla2 = nizz[j].kataloski
                                if (varijabla.indexOf(varijabla2) !== -1 || varijabla2.indexOf(varijabla) !== -1) {
                                    let stringIspis = "IZ SIFRE U SIFRU"
                                    if (nizz[i].kolicina > nizz[j].kolicina) {

                                        this.izdradiRezultatOpt1(i, j, nizz, stringIspis)
                                    }
                                    else {
                                        this.izradiRezultatOpt2(i, j, nizz, stringIspis)
                                    }
                                }
                            }
                        }
                        else {
                            if (nizz[i].plusminus !== nizz[j].plusminus) {
                                let varijabla = nizz[i].kataloski;
                                let varijabla2 = nizz[j].kataloski
                                if (varijabla.indexOf(varijabla2) !== -1 || varijabla2.indexOf(varijabla) !== -1) {
                                    let stringIspis = "IZ SIFRE U SIFRU"
                                    if (nizz[i].kolicina > nizz[j].kolicina) {

                                        this.izdradiRezultatOpt1(i, j, nizz, stringIspis)
                                    }
                                    else {
                                        this.izradiRezultatOpt2(i, j, nizz, stringIspis)
                                    }
                                }
                            }
                        }


                    }



                }

            }

            //ODAVDE IDE POREDJENJE PO CENI - Prvo isti magacin a zatim po svim magacinima
            for (let i = 0; i < nizz.length - 1; i++) {
                if (nizz[i].kolicina === 0) {
                    let pozicija = nizz.indexOf(nizz[i]);
                    nizz.splice(pozicija, 1);

                }
                else {
                    for (let j = 0; j < nizz.length; j++) {
                        if (nizz[i].imeMagacina === nizz[j].imeMagacina) {
                            if (nizz[i].plusminus !== nizz[j].plusminus) {
                                if (nizz[i].cena / nizz[j].cena < 1.3333 || nizz[j].cena / nizz[i].cena > 0.75) {

                                    let stringIspis = "GLEDANO PO CENI"
                                    if (nizz[i].kolicina > nizz[j].kolicina) {

                                        this.izdradiRezultatOpt1(i, j, nizz, stringIspis)
                                    }
                                    else {
                                        this.izradiRezultatOpt2(i, j, nizz, stringIspis)
                                    }
                                }
                            }
                        }
                        else {
                            if (nizz[i].plusminus !== nizz[j].plusminus) {
                                if (nizz[i].cena / nizz[j].cena < 1.3333 || nizz[j].cena / nizz[i].cena > 0.75) {

                                    let stringIspis = "GLEDANO PO CENI"
                                    if (nizz[i].kolicina > nizz[j].kolicina) {

                                        this.izdradiRezultatOpt1(i, j, nizz, stringIspis)
                                    }
                                    else {
                                        this.izradiRezultatOpt2(i, j, nizz, stringIspis)
                                    }
                                }
                            }

                        }


                    }



                }


            }
            //izbacuje rezultat neresivih
            console.log(nizz)
            for (let i = 0; i < nizz.length; i++) {
                if (nizz[i].kolicina === 0) {
                    let pozicija = nizz.indexOf(nizz[i]);
                    nizz.splice(pozicija, 1);

                }
                else {
                    let html
                    let newHtml
                    html = "<span> NERESENO: %nizz[i].plusminus%  %nizz[i].kolicina%  <b>%nizz[i].kataloski%</b>  %nizz[i].imeMagacina% </span> <br/>"

                    newHtml = html.replace('%nizz[i].plusminus%', nizz[i].plusminus)
                    newHtml = newHtml.replace('%nizz[i].kolicina%', nizz[i].kolicina)
                    newHtml = newHtml.replace('%nizz[i].kataloski%', nizz[i].kataloski)
                    newHtml = newHtml.replace('%nizz[i].imeMagacina%', nizz[i].imeMagacina)
                    document.getElementById("izvestaj").insertAdjacentHTML("beforeend", newHtml)
                }


            }


        }

        // f-ja za brisanje nizova iz localstorage!

    }

    render() {


        return (
            <div  >


                <div className="buttons">
                    <span><input id="unesi" type='submit' value="Unesi magacin" onClick={this.unesiMagacin} /></span>
                    <span><input id="izradi" type='submit' value="Izradi" onClick={this.izradiRezultat} /></span>
                    <span><input id="uputstvo" type='submit' value="Uputstvo" /></span>
                </div>


                <div className="printer">
                    <span id="hideee" className="hideee" >
                        <Forma callbackFromParent={this.myCallback} />
                    </span>
                    <span id="izvestaj"></span>
                </div>

            </div>
        );
    }
}









class Forma extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imeMagacina: "prvi",
            nizPlus: [],
            nizMinus: [],
            indexStore: [],
            indexStoreArray: [],
            idElement: 1
        };
        this.unesiImeMagacina = this.unesiImeMagacina.bind(this);
        this.unesiID = this.unesiID.bind(this);
        this.finishStore = this.finishStore.bind(this);
    };



    unesiImeMagacina() {
        var fieldset = document.querySelector("fieldset");
        var button = document.getElementById("unesiButton");
        var imeMagacina = document.getElementById("magacin");

        const ime = this.refs.magacin.value;



        //1. proveriti da li je uneto ime! ukoliko je empty zahtevati ime
        if (ime !== "") {
            fieldset.disabled = false;
            //console.log(ime)

            this.setState({
                imeMagacina: ime,

            }, e => {
                console.log(this.state.indexStore);
            })

            button.disabled = true;
            imeMagacina.disabled = true;

            console.log("Uneto!")

        }
        else {
            alert("Molim Vas unesite ime magacina!")
            console.log("Molim Vas unesite ime magacina!")
        }
    }


    unesiID() {
        //var fieldset = document.querySelector("fieldset")
        let plusminus = this.refs.plusminus.value;
        let kolicina = this.refs.kolicina.value;
        let kataloski = this.refs.kataloski.value;
        let naziv = this.refs.naziv.value;
        let cena = this.refs.cena.value;
        let objekat = {};
        let indexNiz = this.state.indexStore;
        let indexx = this.state.imeMagacina;
        let idElement = this.state.idElement + 1;
        this.setState({
            idElement: idElement
        })
        objekat.imeMagacina = this.state.imeMagacina;
        objekat.plusminus = plusminus;
        objekat.kolicina = kolicina;
        objekat.kataloski = kataloski;
        objekat.naziv = naziv;
        objekat.cena = cena;
        objekat.idElement = idElement;
        let niz = [];



        if (objekat.plusminus === "+") {
            niz = this.state.nizPlus;
            niz.push(objekat);
            let indeks = "'" + indexx + "+'"
            console.log(indeks);

            if (indexNiz.indexOf(indeks) == -1) {
                indexNiz.push(indeks)

            }
            this.setState({
                nizPlus: niz,
                indexStore: indexNiz

            }, () => {
                console.log(this.state.indexStore)
            });
            this.refs.plusminus.value = ""
            this.refs.kolicina.value = ""
            this.refs.kataloski.value = ""
            this.refs.naziv.value = ""
            this.refs.cena.value = ""

        }
        else if (objekat.plusminus === "-") {
            niz = this.state.nizMinus;
            niz.push(objekat);
            let indeks = "'" + indexx + "-'"
            console.log(indeks);
            if (indexNiz.indexOf(indeks) == -1) {
                indexNiz.push(indeks);

            }

            this.setState({
                nizMinus: niz,
                indexStore: indexNiz
            }, () => {
                console.log(this.state.indexStore)
            })
            this.refs.plusminus.value = ""
            this.refs.kolicina.value = ""
            this.refs.kataloski.value = ""
            this.refs.naziv.value = ""
            this.refs.cena.value = ""

        }
        else {
            alert("Neispravna vrednost +/-")
        }
        // var emptyButton = document.createElement("input");
        // emptyButton.setAttribute("type", "submit");
        // emptyButton.setAttribute("value", "x");
        // emptyButton.setAttribute("id", "obrisi");
        // fieldset.appendChild(emptyButton);
        // emptyButton.onclick=function(){
        //     //da se vidi sta i kako

        // }
    }

    finishStore() {
        let imeMagacina = document.getElementById("magacin");
        //ovde sada raditi sa indexStore
        var finalArray = this.state.indexStoreArray;
        finalArray.push(this.state.indexStore)
        var naziv1 = this.state.indexStore[0]
        var naziv1str = naziv1.toString();
        var naziv2 = this.state.indexStore[1]
        var naziv2str = naziv2.toString()
        var niz1 = this.state.nizPlus
        var niz2 = this.state.nizMinus
        localStorage.setItem(naziv1str, JSON.stringify(niz1))
        localStorage.setItem(naziv2str, JSON.stringify(niz2))
        //var testiranje = JSON.parse(localStorage.getItem("'test+'"));
        this.setState({
            indexStore: [],
            nizPlus: [],
            nizMinus: [],
            imeMagacina: "prvi"
        })
        //console.log(testiranje);
        //console.log(finalArray);
        var clearfields = function () {
            var magacin = document.getElementById("magacin");
            magacin.value = "";
            var fieldset = document.querySelector("fieldset");
            fieldset.disabled = true;
            var unesi = document.getElementById("unesiButton");
            unesi.disabled = false;

        };
        clearfields()
        this.props.callbackFromParent(this.state.indexStoreArray)

        imeMagacina.disabled = false;

        //NOTE: mora da ima i + i - za svaki magacin inace je bug



    }

    render() {
        return (
            <div>
                <span className="inputForma">
                    <label>Ime magacina</label> <input type="text" id="magacin" ref="magacin" />
                    <button id="unesiButton" value="Unesi" onClick={this.unesiImeMagacina}>Unesi</button>
                    <input id="zavrsi" type="submit" value="Kraj" onClick={this.finishStore} />

                    <fieldset disabled>
                        <input id="plusminus" type="text" placeholder="+/-" ref="plusminus" maxLength="1" />
                        <input id="kolicina" type="text" placeholder="kolicina" ref="kolicina" />
                        <input id="kataloski" type="text" placeholder="kataloski broj" ref="kataloski" />
                        <input id="naziv" type="text" placeholder="naziv dela" ref="naziv" />
                        <input id="cena" type="text" placeholder="cena" ref="cena" />
                        <input id="unesiID" type="submit" value="&#10004;" onClick={this.unesiID} />
                        {/* <input id="obrisi" type = "submit" value = "X" />   */}



                    </fieldset>


                </span>
            </div>
        );
    }
}




export default Button;
