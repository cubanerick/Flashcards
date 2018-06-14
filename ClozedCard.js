function ClozeCard(text, cloze){
    this.cloze = cloze,
    this.partial = text.replace(cloze, "..."),
    this.fulltext = text
};

module.exports = ClozeCard;