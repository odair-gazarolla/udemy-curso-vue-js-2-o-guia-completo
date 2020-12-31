data: {
    return() {
        open: false,
        current: 0
    }
},

computed: {

    //Filtering the suggestion based on the input
    matches() {
        return this.suggestions.filter((str) => {
            return str.indexOf(this.selection) >= 0;
        });
    },

    //The flag
    openSuggestion() {
        return this.selection !== "" &&
               this.matches.length != 0 &&
               this.open === true;
    }
}