
export default class Act {
static addPatient = (patientData) => ({
     type:'Add_Patient',
        patient_data :patientData
 })

static removePatient = (index) => ({
    type:'Remove_Patient',
    remove_index:index
 })
static addPatientVisit = (index,visit) => ({
        type :'Add_Patient_Visit' ,
        visit_data :{
                index,
                visit
        }

})

}