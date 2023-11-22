import { ref, watch, onMounted, onUnmounted } from 'vue';
// composables/useToken.js
export const useToken = () => {
    const token = ref(process.client ? window.localStorage.getItem('token') : null);

    const updateToken = (newValue) => {
        if (newValue) {
            window.localStorage.setItem('token', newValue);
        } else {
            window.localStorage.removeItem('token');
        }
    };

    if (process.client) {
        watch(token, updateToken);
    }

    onMounted(() => {
        if (!process.client) {
            token.value = null;
        }
    });

    onUnmounted(() => {
        if (process.client) {
            updateToken(token.value);
        }
    });

    return token;
};
