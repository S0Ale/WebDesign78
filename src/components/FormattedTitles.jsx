const FormattedTitles = [
    //id 0
    {
        class: 'green',
        title: () => <> 
            <div className="line">Se non hai i</div>
            <div className="line"><span className="highlight2">MATTONI</span></div>
            <div className="line">usa i</div>
            <div className="line"><span className="highlight1 vert">DRONI</span></div>
        </>,
        title_plain: "Se non hai i MATTONI usa i DRONI"
    },
    //id 1
    {
        class: 'red',
        title: () => <> 
            <div className="line">Alza un</div>
            <div className="line down"><span className="highlight1">MURO</span> e passa la</div>
            <div className="line right"><span className="highlight1">PAURA</span></div>
        </>,
        title_plain: "Alza un MURO e passa la PAURA"
    },
    //id 2
    {
        class: 'orange',
        title: () => <> 
            <div className="line">Europei del</div>
            <div className="line"><span className="highlight2">SALTO DEL</span></div>
            <div className="line right"><span className="highlight1">MURO</span></div>
        </>,
        title_plain: "Europei del SALTO DEL MURO"
    },
    //id 3
    {
        class: 'blue',
        title: () => <> 
            <div className="line">Ma perchè non un</div>
            <div className="line"><span className="highlight1">MURO</span></div>
            <div className="line"><span className="highlight2">GALLEGGIANTE</span></div>
        </>,
        title_plain: "Ma perchè non un MURO GALLEGGIANTE"
    },
    //id 4
    {
        class: 'blue',
        title: () => <>
            <div className="line">Non sai dove</div>
            <div className="line"><span className="highlight1">ANDARE?</span></div>
            <div className="line right">tornatene a <span className=" highlight1">CASA</span></div>
        </>,
        title_plain: "Non sai dove ANDARE? TORNATENE a CASA"
    },
    //id 5
    {
        class: 'orange',
        title: () => <>
            <div className="line up right">Dona anche
                <span className="left-space highlight1">TU</span>
            </div>
            <div className="line" style={{position: 'absolute', top: '1.8em', left: '.2em'}}>per la costruzione di un </div>
            <div className="line"><span className="highlight1" style={{marginLeft: '1em'}}>MURO</span></div>
        </>,
        title_plain: "Dona anche TU per la costruzione di un MURO"
    },
    //id 6
    {
        class: 'red',
        title: () => <>
            <div className="line down"><span className="highlight1">I MURI</span> non sono mai</div>
            <div className="line"><span className="highlight2">ABBASTANZA</span></div>
        </>,
        title_plain: "I MURI non sono mai ABBASTANZA"
    },
    //id 7
    {
        class: 'green',
        title: () => <>
            <div className="line">Il sogno del</div>
            <div className="line"><span className="highlight1" style={{fontSize: '4.2em'}}>MURO</span></div>
            <div className="line"><span className="highlight3">AMERICANO</span></div>
        </>,
        title_plain: "Il SOGNO del MURO AMERICANO"
    },
    //id 8
    {
        class: 'green',
        title: () => <>
            <div className="line" style={{fontSize: '1.1em'}}>Melilla,</div>
            <div className="line"><span className="highlight1" style={{fontSize: '4.2em'}}>CHE</span></div>
            <div className="line"><span className="highlight1" style={{fontSize: '4.2em'}}>FOLLA!</span></div>
        </>,
        title_plain: "Melilla, CHE FOLLA!"
    },
    //id 9
    {
        class: 'red',
        title: () => <>
            <div className="line">Assalgono</div>
            <div className="line"><span className="highlight2">SEMPRE IL</span></div>
            <div className="line"><span className="highlight3">MEDITERRANEO</span></div>
        </>,
        title_plain: "Assalgono SEMPRE IL MEDITERRANEO"
    },
    //id 10
    {
        class: 'orange',
        title: () => <>
            <div className="line down"><span className="highlight1">VIVA</span><span className="left-space highlight2">la</span></div>
            <div className="line"><span className="highlight2">FORTEZZA</span></div>
            <div className="line right"><span className="highlight2" style={{fontFamily: 'Antonio, sans-serif'}}>Europa</span></div>
        </>,
        title_plain: "VIVA la FORTEZZA Europa"
    },
    //id 11
    {
        class: 'blue',
        title: () => <>
            <div className="line">Tragedia nel mediterraneo. Si dai,</div>
            <div className="line"><span className="highlight2 right-space">CHIUDIAMO</span></div>
            <div className="line right">un <span className="highlight1">OCCHIO</span></div>
        </>,
        title_plain: "Tragedia nel mediterraneo. Si dai, CHIUDIAMO un OCCHIO "
    },
    //id 12
    {
        class: 'blue',
        title: () => <>
            <div className="line">Ma il</div>
            <div className="line down"><span className="highlight1 right-space">MARE</span><span className="highlight2">non</span></div>
            <div className="line"><span className="highlight1">DIVIDE</span></div>
        </>,
        title_plain: "Ma il MARE non DIVIDE"
    },
    //id 13
    {
        class: 'orange',
        title: () => <>
            <div className="line">La saga dei</div>
            <div className="line"><span className="highlight1">MURI</span></div>
            <div className="line"><span className="highlight2">EUROPEI</span></div>
        </>,
        title_plain: "La saga dei MURI EUROPEI"
    },
    //id 14
    {
        class: 'red',
        title: () => <>
            <div className="line">CEUTA e MELILLA:</div>
            <div className="line"><span className="highlight2">FERMIAMO</span></div>
            <div className="line"><span className="highlight2">L'INVASIONE</span></div>
        </>,
        title_plain: "Ceuta e Melilla: FERMIAMO L'INVASIONE"
    },
    //id 15
    {
        class: 'green',
        title: () => <>
            <div className="line">Grecia:</div>
            <div className="line down"><span className="highlight1">“</span><span className="highlight2">CHISSA'</span></div>
            <div className="line down"><span className="right-space highlight3">COSA</span> troveremo questa</div>
            <div className="line"><span className="highlight1">VOLTA!”</span></div>
        </>,
        title_plain: "Grecia: “CHISSA' cosa troveremo questa VOLTA!”"
    },
    //id 16
    {
        class: 'green',
        title: () => <>
            <div className="line">Non sai dove</div>
            <div className="line"><span className="highlight2">METTERLO?</span></div>
            <div className="line right">LASCIALO AL</div>
            <div className="line right"><span className="highlight1" style={{fontSize: '3.2em'}}>CONFINE!</span></div>
        </>,
        title_plain: "Non sai dove METTERLO? LASCIALO AL CONFINE!"
    },
    //id 17
    {
        class: 'red',
        title: () => <>
            <div className="line">Slovenia: nemmeno i</div>
            <div className="line right down"><span className="right-space highlight1">MURI</span> riescono a</div>
            <div className="line right"><span className="highlight3">PROTEGGERCI</span></div>
            <div className="line right">ormai</div>
        </>,
        title_plain: "Slovenia: nemmeno i MURI riescono a PROTEGGERCI ormai"
    },
    //id 18
    {
        class: 'orange',
        title: () => <>
            <div className="line down"><span className="right-space highlight3">UE:</span> restringiamo il</div>
            <div className="line down"><span className="highlight1">MONDO,</span></div>
            <div className="line right down"><span className="right-space highlight3">TROPPE</span> PERSONE</div>
        </>,
        title_plain: "UE: restringiamo il MONDO, TROPPE PERSONE"
    },
    //id 19
    {
        class: 'blue',
        title: () => <>
            <div className="line">Allora i</div>
            <div className="line"><span className="highlight2">MIGRANTI</span></div>
            <div className="line down">non arrivano <span className="left-space highlight3">solo</span></div>
            <div className="line right">in <span className="highlight1">ITALIA</span></div>
        </>,
        title_plain: "Allora i MIGRANTI non arrivano solo in ITALIA"
    },
    //id 20
    {
        class: 'blue',
        title: () => <>
            <div className="line down"><span className="right-space highlight3">UE:</span> ops, li abbiamo</div>
            <div className="line down"><span className="highlight2">LASCIATI</span></div>
            <div className="line">al <span className="left-space highlight1">FREDDO</span></div>
        </>,
        title_plain: "UE: ops, li abbiamo LASCIATI al FREDDO"
    },
    //id 21
    {
        class: 'orange',
        title: () => <>
            <div className="line down"><span className="highlight1">"</span><span className="right-space highlight2">Prima</span> gli</div>
            <div className="line"><span className="highlight1">ITALIANI"</span></div>     
        </>,
        title_plain: "“prima gli italiani”"
    },
    //id 22
    {
        class: 'red',
        title: () => <>
            <div className="line down"><span className="right-space highlight3" style={{fontSize: '1.5em'}}>Croazia:</span> dai,</div>
            <div className="line"><span className="highlight3">PARTECIPIAMO</span></div>
            <div className="line right">anche <span className="left-space highlight1">NOI</span></div>
        </>,
        title_plain: "Croazia: dai, PARTECIPIAMO anche NOI"
    },
    //id 23
    {
        class: 'green',
        title: () => <>
            <div className="line down"><span className="right-space highlight3">Agenzia</span> europea</div>
            <div className="line center">per le frontiere: tanto</div>
            <div className="line down"><span className="highlight2">NESSUNO</span> ci</div>
            <div className="line right"><span className="highlight2">SCOPRIRA'</span></div>
        </>,
        title_plain: "Agenzia europea per le frontiere: tanto NESSUNO ci SCOPRIRA'"
    },
];

export default FormattedTitles;