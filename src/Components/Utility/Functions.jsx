// import { toast } from 'react-toastify'
import toast from 'react-hot-toast';
export const tokenName = 'invest session'

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
export const ErrorAlert = (message) => {
    toast.error(message,
        {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        }
    );
}

export const Roles = [
    {
        user: 'admin',
        url: '/admin'
    },
    {
        user: 'user',
        url: '/dashboard'
    },
]