

export const openModel =()=>({
    type:"OPEN_MODEL"
});

export const closeModal =()=>({
    type:"ClOSE_MODEL"
});

export const handleOnChange =(event)=>({
    type:"HANDLE_ON_CHANGE",
    payload:event
});

export const handleSubmit =()=>({
    type:"HANDLE_SUBMIT"
});
export const chooseQuestion =()=>({
    type:"CHOOSE_QUESTION"
});

