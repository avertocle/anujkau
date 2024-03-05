import {redirect} from 'react-router-dom';

const storeKey = 'user_data';
const storeDataDefault = {
    profile: {
        user_id: null,
    },
    tokens: {
        access: {
            value: null,
            expiry: null,
        }
    },
};

export class StoreManager {
    static #instance;

    constructor() {
        this.data = storeDataDefault;
        this.key = storeKey;
    }

    static getI() {
        if (!StoreManager.#instance) {
            StoreManager.#instance = new StoreManager();
        }
        return StoreManager.#instance;
    }

    #storeUserData(userData) {
        localStorage.setItem(storeKey, JSON.stringify(userData));
    }

    #fetchUserData() {
        let userData = localStorage.getItem(storeKey);
        if (!userData) {
            return storeDataDefault;
        }
        return JSON.parse(userData);
    }

    persistLoginData(data) {
        let userData = this.#fetchUserData();
        userData.profile.user_id = data.profile.user_id;
        userData.tokens.access.value = data.access;
        this.#storeUserData(userData);
    }

    purgeAll() {
        localStorage.removeItem(storeKey);
    }

    fetchAccessToken() {
        return this.#fetchUserData()?.tokens?.doco_api_token?.access?.value;
    }

    fetchUserId() {
        return this.#fetchUserData()?.profile?.user_id;
    }

    isAuthenticated() {
        return true
        // let token = this.fetchAccessToken();
        // return !!token;
    }
}


export function getUserId() {
    return StoreManager.getI().fetchUserId();
}


export function authCheckLoader() {
    if (StoreManager.getI().isAuthenticated()) {
        return true;
    } else {
        return redirect('/auth');
    }
}

export function forceLogout() {
    StoreManager.getI().purgeAll();
    window.location.reload();
}
