import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/users/Users";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/navbar/Navbar";

function App() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState("");

    const onClick = () => setToggle(prev => !prev);

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);

    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
//
// class MyPromise {
//     constructor(executor) {
//         this.status = 'pending';
//         this.value = undefined;
//         this.reason = undefined;
//         this.onResolvedCallbacks = [];
//         this.onRejectedCallbacks = [];
//
//         const resolve = value => {
//             if (this.status === 'pending') {
//                 this.status = 'fulfilled';
//                 this.value = value;
//                 this.onResolvedCallbacks.forEach(cb => cb());
//             }
//         };
//
//         const reject = reason => {
//             if (this.status === 'pending') {
//                 this.status = 'rejected';
//                 this.reason = reason;
//                 this.onRejectedCallbacks.forEach(cb => cb());
//             }
//         };
//
//         try {
//             executor(resolve, reject);
//         } catch (error) {
//             reject(error);
//         }
//     }
//
//     then(onFulfilled, onRejected) {
//         onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
//         onRejected = typeof onRejected === 'function' ? onRejected : reason => {
//             throw reason
//         };
//
//         const promise2 = new Promise((resolve, reject) => {
//             if (this.status === 'fulfilled') {
//                 setTimeout(() => {
//                     try {
//                         const x = onFulfilled(this.value);
//                         resolvePromise(promise2, x, resolve, reject);
//                     } catch (error) {
//                         reject(error);
//                     }
//                 });
//             }
//
//             if (this.status === 'rejected') {
//                 setTimeout(() => {
//                     try {
//                         const x = onRejected(this.reason);
//                         resolvePromise(promise2, x, resolve, reject);
//                     } catch (error) {
//                         reject(error);
//                     }
//                 });
//             }
//
//             if (this.status === 'pending') {
//                 this.onResolvedCallbacks.push(() => {
//                     setTimeout(() => {
//                         try {
//                             const x = onFulfilled(this.value);
//                             resolvePromise(promise2, x, resolve, reject);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     });
//                 });
//                 this.onRejectedCallbacks.push(() => {
//                     setTimeout(() => {
//                         try {
//                             const x = onRejected(this.reason);
//                             resolvePromise(promise2, x, resolve, reject);
//                         } catch (error) {
//                             reject(error);
//                         }
//                     });
//                 });
//             }
//         });
//
//         return promise2;
//     }
//
//     catch(onRejected) {
//         return this.then(null, onRejected);
//     }
// }
//
// const resolvePromise = (promise2, x, resolve, reject) => {
//     if (x === promise2) {
//         return reject(new TypeError('Circular reference'));
//     }
//
//     let called = false;
//
//     if (x instanceof Promise) {
//         x.then(value => {
//             resolvePromise(promise, value, resolve, reject);
//         }, reason => {
//             if (!called) {
//                 called = true;
//                 reject(reason);
//             }
//         });
//     } else {
//         resolve(x);
//     }
// };
//
// module.exports = Promise;
