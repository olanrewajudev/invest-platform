// import { toast } from 'react-toastify'
import toast from 'react-hot-toast';

export const ToastAlert = (message) => {
    toast.success(message, {
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
    toast.error(message, {
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
export const HotAlert = (message) => {
    toast.success(message,
        {
            icon: '👏',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        }
    );
}
