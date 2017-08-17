import {createStore} from 'redux'
import PatientData from './reducers/PatientData'
import {AsyncStorage} from 'react-native'

const store = createStore(PatientData)

 AsyncStorage.getItem('patients', (err, result) => {
        console.log("Index js of store result "+result);
        const value = JSON.parse(result); 
        console.log(value !== null && typeof(value) === 'object')
        if (value !== null && typeof(value) === 'object'){
            console.log("in IF ")
            store.dispatch({
                type: 'SET_PATIENTS',
                patient_data: value.patient
            })
        console.log('localItem,',value)
        }
        else{
            console.log("In Else ")
            store.dispatch({
                type: 'SET_PATIENTS',
                patient_data: []
            })
        }
    });


export default store;