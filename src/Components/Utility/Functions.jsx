import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { Typewriter, Cursor } from 'react-simple-typewriter'


export const SwalAlert = (title, text, icon) => {
    return Swal.fire({
        title,
        text,
        icon,
        showConfirmButton: false
    })
}
export const ToastAlert = (message) => {
    toast.success('message', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}
export const ErrorAlert = (message) => {
    toast.error('message', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

