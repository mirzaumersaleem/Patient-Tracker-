
import {AsyncStorage} from 'react-native'

const initialState={
   patient :[],
};

function PatientData(state=initialState,action){
   var newState ={...state};
  switch(action.type){

           case 'SET_PATIENTS':
                newState.patient = action.patient_data
                var patients = (action.patient_data?[...action.patient_data] : [])
                console.log('alert',patients)
              for(i=0;i<patients.length;i++){
                  patients[i].ind = i
                  }
               newState.patient = patients
             break;

          case 'Add_Patient':
            console.log("Case hit Add_patient")
                
                  newState.patient = newState.patient.concat(action.patient_data)
                  save(newState);
                  console.log("new state data only medicine name" + newState.patient)
              break;

          case 'Remove_Patient':
                  newState.patient =[
                    ...newState.patient.slice(0,action.remove_index),
                    ...newState.patient.slice(action.remove_index + 1)
                  ]  
                    save(newState) 
              break;

           case 'Add_Patient_Visit' :
              newState.patient[action.visit_data.index].visit=[action.visit_data.visit]
              save (newState)
          default:
            console.log("NO MATCH in SWITCH");
            break;
   }
  
    console.log("Action.type  newstate"+action.type, newState)
    return newState;

}
  function save(par) {
      AsyncStorage.setItem('@patients', JSON.stringify(par), () => {
      AsyncStorage.mergeItem('patients', JSON.stringify(par), () => {
        AsyncStorage.getItem('patients', (err, result) => {
          console.log("Result "+result);
        });
      });
    })
    .catch((err) => {
      console.error(err)
    })
  }
export default PatientData;
