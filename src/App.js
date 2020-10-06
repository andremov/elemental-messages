import React, { Component, useState } from 'react';

export class App extends Component {
    
    state = {
        inputText : '',
        outputText : ''
    }
    
    setInput = ( value ) => this.setState({ inputText : value })
    
    trySolve = () => {
        const { inputText } = this.state;
        // console.log(inputText)
        let a = translate(inputText)
        console.log(a)
        this.setState({ outputText : a.join(' ') })
    }
    
    render() {
        const { outputText } = this.state;
        
        return (
            <div className={'main-body'}>
                <div className={'section'}>
                    <input onChange={e => this.setInput(e.target.value)} />
                </div>
                <div className={'section'}>
                    <div className={'fake-input'}>
                        {outputText}
                    </div>
                </div>
                <div className={'section'}>
                    <button onClick={this.trySolve}>
                        Solve
                    </button>
                </div>
            </div>
        );
    }
}

const elements = {
    h : { number : 1, name : 'hydrogen', },
    he : { number : 2, name : 'helium', },
    li : { number : 3, name : 'lithium', },
    be : { number : 4, name : 'beryllium', },
    b : { number : 5, name : 'boron', },
    c : { number : 6, name : 'carbon', },
    n : { number : 7, name : 'nitrogen', },
    o : { number : 8, name : 'oxygen', },
    f : { number : 9, name : 'fluorine', },
    ne : { number : 10, name : 'neon' },
    na : { number : 11, name : 'sodium' },
    mg : { number : 12, name : 'magnesium' },
    al : { number : 13, name : 'aluminum' },
    si : { number : 14, name : 'silicon' },
    p : { number : 15, name : 'phosphorus' },
    s : { number : 16, name : 'sulphur' },
    cl : { number : 17, name : 'chlorine' },
    ar : { number : 18, name : 'argon' },
    k : { number : 19, name : 'potassium' },
    ca : { number : 20, name : 'calcium' },
    sc : { number : 21, name : 'scandium' },
    ti : { number : 22, name : 'titanium' },
    v : { number : 23, name : 'vanadium' },
    cr : { number : 24, name : 'chromium' },
    mn : { number : 25, name : 'manganese' },
    fe : { number : 26, name : 'iron' },
    co : { number : 27, name : 'cobalt' },
    ni : { number : 28, name : 'nickel' },
    cu : { number : 29, name : 'copper' },
    zn : { number : 30, name : 'zinc' },
    ga : { number : 31, name : 'gallium' },
    ge : { number : 32, name : 'germanium' },
    as : { number : 33, name : 'arsenic' },
    se : { number : 34, name : 'selenium' },
    br : { number : 35, name : 'bromine' },
    kr : { number : 36, name : 'krypton' },
    rb : { number : 37, name : 'rubidium' },
    sr : { number : 38, name : 'strontium' },
    y : { number : 39, name : 'yttrium' },
    zr : { number : 40, name : 'zirconium' },
    nb : { number : 41, name : 'nioubium' },
    mo : { number : 42, name : 'molybdenum' },
    tc : { number : 43, name : 'technetium' },
    ru : { number : 44, name : 'ruthenium' },
    rh : { number : 45, name : 'rhodium' },
    pd : { number : 46, name : 'palladium' },
    ag : { number : 47, name : 'silver' },
    cd : { number : 48, name : 'cadmium' },
    in : { number : 49, name : 'indium' },
    sn : { number : 50, name : 'tin' },
    sb : { number : 51, name : 'antimony' },
    te : { number : 52, name : 'tin' },
    i : { number : 53, name : 'iodine' },
    xe : { number : 54, name : 'xenon' },
    cs : { number : 55, name : 'cesium' },
    ba : { number : 56, name : 'barium' },
    la : { number : 57, name : 'lanthanum' },
    ce : { number : 58, name : 'cerium' },
    pr : { number : 59, name : 'praseodymium' },
    nd : { number : 60, name : 'neodymium' },
    pm : { number : 61, name : 'promethium' },
    sm : { number : 62, name : 'samarium' },
    eu : { number : 63, name : 'europium' },
    gd : { number : 64, name : 'gadolinium' },
    tb : { number : 65, name : 'terbium' },
    dy : { number : 66, name : 'dysprosium' },
    ho : { number : 67, name : 'holmium' },
    er : { number : 68, name : 'erbium' },
    tm : { number : 69, name : 'thulium' },
    yb : { number : 70, name : 'ytterbium' },
    lu : { number : 71, name : 'lutetium' },
    hf : { number : 72, name : 'hafnium' },
    ta : { number : 73, name : 'tantalum' },
    w : { number : 74, name : 'tungsten' },
    re : { number : 75, name : 'rhenium' },
    os : { number : 76, name : 'osmium' },
    ir : { number : 77, name : 'iridium' },
    pt : { number : 78, name : 'platinum' },
    au : { number : 79, name : 'gold' },
    hg : { number : 80, name : 'mercury' },
    tl : { number : 81, name : 'thallium' },
    pb : { number : 82, name : 'lead' },
    bi : { number : 83, name : 'bismuth' },
    po : { number : 84, name : 'polonium' },
    at : { number : 85, name : 'astatine' },
    rn : { number : 86, name : 'radon' },
    fr : { number : 87, name : 'francium' },
    ra : { number : 88, name : 'radium' },
    ac : { number : 89, name : 'actinium' },
    th : { number : 90, name : 'thorium' },
    pa : { number : 91, name : 'protactinium' },
    u : { number : 92, name : 'uranium' },
    np : { number : 93, name : 'neptunium' },
    pu : { number : 94, name : 'plutonium' },
    am : { number : 95, name : 'americium' },
    cm : { number : 96, name : 'curium' },
    bk : { number : 97, name : 'berkelium' },
    cf : { number : 98, name : 'californium' },
    es : { number : 99, name : 'einsteinium' },
    fm : { number : 100, name : 'fermium' },
    md : { number : 101, name : 'mendelevium' },
    no : { number : 102, name : 'nobelium' },
    lr : { number : 103, name : 'lawrencium' },
    rf : { number : 104, name : 'rutherfordium' },
    db : { number : 105, name : 'dubnium' },
    sg : { number : 106, name : 'seaborgium' },
    bh : { number : 107, name : 'bohrium' },
    hs : { number : 108, name : 'hassium' },
    mt : { number : 109, name : 'meitnerium' },
    ds : { number : 110, name : 'darmstadtium' },
    rg : { number : 111, name : 'roentgenium' },
    cn : { number : 112, name : 'copernicium' },
    nh : { number : 113, name : 'nihonium' },
    fl : { number : 114, name : 'flerovium' },
    mc : { number : 115, name : 'moscovium' },
    lv : { number : 116, name : 'livermorium' },
    ts : { number : 117, name : 'tennessine' },
    og : { number : 118, name : 'oganesson' },
}

function translate( text ) {
    text = text.toLowerCase()
    if ( text === '' ) {
        return []
    }
    
    let solved1 = [];
    let one = text.substring(0, 1)
    
    if (one === ' ') {
        return translate(text.substring(1))
    }
    
    if ( elements[one] ) {
        solved1.push(elements[one].name)
        
        let following = translate(text.substring(1))
        if ( following ) {
            for ( let i = 0; i < following.length; i++ ) {
                solved1.push(following[i])
            }
        } else {
            solved1 = false;
        }
    } else {
        solved1 = false;
    }
    
    let solved2 = [];
    let two = text.substring(0, 2)
    if ( elements[two] ) {
        solved2.push(elements[two].name)
        
        let following = translate(text.substring(2))
        if ( following ) {
            for ( let i = 0; i < following.length; i++ ) {
                solved2.push(following[i])
            }
        } else {
            solved2 = false;
        }
    } else {
        solved2 = false;
    }
    
    if ( !solved1 && !solved2 ) {
        return false
    } else if ( !solved1 ) {
        return solved2
    } else if ( !solved2 ) {
        return solved1
    } else {
        return solved2
    }
}
