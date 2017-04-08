const initial = {
    "colors": {
        "attribute": "lightgreen",
        "document": "lightcoral",
        "footer": "#0074b2",
        "header": "#0074b2",
        "hierarchy": "lightblue",
        "sequence": "yellow"
    },
    "layout": {
        "leftside": 40,
        "modules": {
            "attribute": {"height": 30},
            "document": {"height": 70},
            "footer": {"height": 5},
            "header": {"height": 5},
            "hierarchy": {"height": 50},
            "sequence": {"height": 50}
        },
        "rightside": 60
    }
};

const reduce = (state = initial, action) => {

    switch (action.type) {
    default:
        return state;
    }

};

export default reduce;
