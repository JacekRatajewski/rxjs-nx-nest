import { Observable, Observer } from "rxjs";

export const ajax = {
    get(url: string, onSuccess: any, onError = (err: any) => { }) {

        return fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(res => (res.status >= 400) ? Promise.reject(res) : res)
            .then(res => res.json())
            .then(onSuccess)
            .catch(onError);
    },
    post(url: string, data: any, onSuccess: any, onError = (err: any) => { }) {

        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data),
        })
            .then(res => (res.status >= 400) ? Promise.reject(res) : res)
            .then(res => res.json())
            .then(onSuccess)
            .catch(onError);
    }
}

export const ajax2 = {
    get(url: string) {
        return fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(res => (res.status >= 400) ? Promise.reject(res) : res)
            .then(res => res.json());
    },
    post(url: string, data: any, signal?: any) {

        return fetch(url, {
            signal: signal,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => (res.status >= 400) ? Promise.reject(res) : res)
            .then(res => res.json());
    }
}

export const ajax$ = {
    get<T>(url: string) {
        return new Observable((observer: Observer<T>) => {
            const controller = new AbortController();
            fetch(url, {
                signal: controller.signal, method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then(x => x.json())
                .then(x => {
                    observer.next(x as any)
                    observer.complete()
                })
                .catch(err => observer.error(err))
            return () => controller.abort();
        });
    },
    post<T>(url: string, data: any) {
        return new Observable((observer: Observer<T>) => {
            const controller = new AbortController();
            fetch(url, {
                method: 'POST',
                signal: controller.signal,
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then(x => x.json())
                .then(x => {
                    observer.next(x as any)
                    observer.complete()
                })
                .catch(err => observer.error(err))
            return () => controller.abort();
        });
    }
}