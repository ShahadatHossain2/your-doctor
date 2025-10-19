const getStoredDoctors = (key) => {
    const storedDoctorsStr = localStorage.getItem(key);
    if(storedDoctorsStr) {
        const storedDoctors = JSON.parse(storedDoctorsStr);
        return storedDoctors;
    }
    else{
        return [];
    }
}

const saveToDb = (id,key)=>{
    const prevStoredData = getStoredDoctors(key);
    
        prevStoredData.push(id);
        const newData = JSON.stringify(prevStoredData);
        localStorage.setItem(key,newData)
}

const deleteAppointment = (idx, key) => {
    const storedData = getStoredDoctors(key);
    const updatedData = storedData.filter(id => id !== idx)
    localStorage.setItem(key,JSON.stringify(updatedData))
}

export {getStoredDoctors, saveToDb, deleteAppointment}