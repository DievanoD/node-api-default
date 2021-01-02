class Object {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    getName() {
        this.name;
    }

    setName(value) {
        this.name = value;
    }

    getDescription() {
        this.description;
    }

    setDescription(value) {
        this.description = value;
    }
}

module.exports = Object;