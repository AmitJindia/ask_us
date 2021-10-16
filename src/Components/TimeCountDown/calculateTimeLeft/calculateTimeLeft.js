import moment from "moment";

export const calculateTimeLeft = (acceptedOn,sla) => {
    let endTime = acceptedOn
debugger
    let slaTime = sla.split(" ");
    // for (let i in slaTime) {
        
        
        endTime=moment(endTime).add(+slaTime[0],slaTime[1].toString() )
    //   }
    endTime=moment(endTime).format("YYYY-MM-DD HH:mm:ss")
    const dateTime1 = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    return +new Date(endTime) - +new Date(dateTime1);
  }