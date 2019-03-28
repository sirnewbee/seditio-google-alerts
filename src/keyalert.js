const cheerio = require('cheerio');
const np = require('nested-property');
const reqHandler = require('./request-handler');

const alerts = require('./api.js');
const { HOW_OFTEN, DELIVER_TO, HOW_MANY, SOURCE_TYPE } = alerts;
const fs = require('fs');


alerts.configure({
    mail: 'kawin@seditio.ie',
    password: '6d4s544sd'
});

alerts.sync((err)=>{
    if(err) return console.log(err);

    const alertToCreate = {
        howOften: HOW_OFTEN.AT_MOST_ONCE_A_DAY,
        sources: SOURCE_TYPE.AUTOMATIC,
        lang: 'en',
        name: 'marketing',
        region: '',
        howMany: HOW_MANY.BEST,
        deliverTo: DELIVER_TO.RSS,
        deliverToData: '',
    }

    alerts.create(alertToCreate, (err,alert)=> {
        console.log("create");
        //if(err) return console.log(err);

        console.log(alert);
    });

    // const alertList = alerts.getAlerts();
    // alertList.forEach(alert => {
    //     printAlertInfo(alert);
    // });
});

function printAlertInfo(alert){
    console.log('name:', alert.name);

    if(alert.HOW_MANY === HOW_MANY.BEST){
        console.log('Best results');
    }else if(alert.HOW_MANY === HOW_MANY.ALL){
        console.log('All');
    }
}