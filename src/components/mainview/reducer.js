const initial = {
    layout: {
        leftside: 40,
        rightside: 60,
        modules: {
            header: {height: 5},
            hierarchy: {height: 50},
            sequence: {height: 50},
            document: {height: 70},
            attribute: {height: 30},
            footer: {height: 5}
        }
    },
    colors: {
        header: "#0074b2",
        footer: "#0074b2",
        hierarchy: "lightblue",
        sequence: "yellow",
        document: "lightcoral",
        attribute: "lightgreen"
    }
}

function reduce(state = initial, action) {
    switch(action.type) {
    }
    return state;
}

export default reduce;