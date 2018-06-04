declare global {
    interface Window {
        $: any;
        jquery: any;
    }
}

import jquery from 'jquery';
window.$ = window.jquery = jquery;
import 'bootstrap';
import 'popper.js';
import '../sass/style.scss';



const test = (): void => {
    console.log('Typescript added'); // tslint:disable-line
};

test();
