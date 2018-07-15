import * as moment from 'moment';

function dateFormat(timestamp){
    let utcDateTime = moment.utc(moment.unix(timestamp));
    return moment(utcDateTime).local().format('ddd DD MMM, HH:mm');;
}

export default {
    dateFormat: dateFormat
}