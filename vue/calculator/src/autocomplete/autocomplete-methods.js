methods: {
    //When enter pressed on the input
    enter() {
        this.selection = this.matches[this.current];
        this.open = false;
    },

    //When up pressed while suggestions are open
    up() {
        if(this.current > 0)
            this.current--;
    },

    //When up pressed while suggestions are open
    down() {
        if(this.current < this.suggestions.length - 1)
            this.current++;
    },

    //For highlighting element
    isActive(index) {
        return index === this.current;
    },

    //When the user changes input
    change() {
        if (this.open == false) {
            this.open = true;
            this.current = 0;
        }
    },

    //When one of the suggestion is clicked
    suggestionClick(index) {
        this.selection = this.matches[index];
        this.open = false;
    },
}