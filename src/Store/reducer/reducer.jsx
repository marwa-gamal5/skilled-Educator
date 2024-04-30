const INITAL_VALUE ={
    lang:"en",
    translations:{}
}

export default function LangReducer (state=INITAL_VALUE , action) {
    switch (action.type) {
        case "CHANGE_LANG" :
            return{
                ...state,
                lang: action.payload
            };
        case "TRANSLATIONS" :
            return{
                ...state,
                translations: action.payload
            };


        default:
            return state;
    }
}