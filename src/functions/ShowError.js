import { Dialog } from 'quasar'

export default function showErrorMessage(errorMessage){
    Dialog.create({
        title: 'Error',
        message: errorMessage
    })
}