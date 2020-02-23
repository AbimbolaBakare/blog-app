const initState = {
    projects: [
        {id: '1', title: "React is a good tool", content: "the learning curve is very great"},
        {id: '2', title: "Weekend Techstudio class", content: "consistency is the father of learning"},
        {id: '3', title: "Lagos state weather status", content: "the heat is really disturbing this days"}
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer