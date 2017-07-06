import $ from 'jquery';
// Lodash/fp npm and cdn version behaves differently a little bit...
import ___fp from 'lodash/fp'; const _ = window._ || ___fp;
import moment from 'moment';
import 'eonasdan-bootstrap-datetimepicker';
import React from 'react';
import ReactDOM from 'react-dom';

$(document).ready(() => {
    $("#hello").text("Hello world!" + _.get(4)([1,2,3,4,5]));
    console.log($().jquery);
    console.log(moment());
    console.log($().datetimepicker);
    console.log(React.createElement);
    console.log(ReactDOM.render);
    console.log(<tr/>);

    (async function () {
        let x = await $.get("https://ident.me");
        console.log(x);
    })();
});
