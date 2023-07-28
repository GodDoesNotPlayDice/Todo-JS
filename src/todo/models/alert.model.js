// import iziToast from 'izitoast';

export const alert_info = (message) => {
    if (window.innerWidth <= 1020) {
        iziToast.info({
            title: 'Add Task',
            message: `${message}`,
            position: 'topCenter'
        });
    } else {
        iziToast.info({
            title: 'Add Task',
            message: `${message}`,
            position: 'bottomRight',
        });
    }
};


export const alert_success = (title ,message) => {
    if (window.innerWidth <= 1020) {
        iziToast.success({
            title: `${title}`,
            message: `${message}`,
            position: 'topCenter'
        });
    } else {
        iziToast.success({
            title: `${title}`,
            message: `${message}`,
            position: 'bottomRight',
        });
    }
};

export const alert_delete = (message) => {
    if (window.innerWidth <= 1020) {
        iziToast.success({
            title: 'Delete',
            message: `${message}`,
            position: 'topCenter',
            backgroundColor : '#F06666'
        });
    } else {
        iziToast.success({
            title: 'Delete',
            message: `${message}`,
            position: 'bottomRight',
            backgroundColor : '#F06666'
        });
    }
};