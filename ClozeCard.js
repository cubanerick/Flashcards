function ClozeCard(text, cloze){
    if ( text.indexOf(cloze) !== -1){
        this.cloze = cloze;
        this.partial = text.replace(cloze, "...");
        this.fulltext = text;
    }else{
    console.log("This text does not contian the cloze " + '"' + cloze + '"')
    }
};

module.exports = ClozeCard;