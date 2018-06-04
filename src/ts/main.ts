declare global {
    interface Window {
        $: any;
        jquery: any;
    }
}

import jquery from 'jquery';
window.$ = window.jquery = jquery;
import '../../node_modules/bootstrap/js/dist/index.js';
import '../sass/style.scss';



const test = (): void => {
    console.log('Typescript added'); // tslint:disable-line
};

test();
