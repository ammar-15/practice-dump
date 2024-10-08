function day(day, month, year){
    let dictionary = {};
       dictionary[0] = "Saturday";
       dictionary[1] = "Sunday";
       dictionary[2] = "Monday";
       dictionary[3] = "Tuesday";
       dictionary[4] = "Wednesday";
       dictionary[5] = "Thursday";
       dictionary[6] = "Friday";
        function dayOfTheWeek(day, month, year) {
            let q = day; //day of the month (1-31)
            if (month<3){
                month+=12;
                year-=1
            }
            let m = month; //month (1-12)
            let y = year; //year (2014, 1997, 1467 etc)
            let k = y%100; //last two digits of the year
            let j = Math.floor(year/100) //first two digits of the year
            
            let h = (q+Math.floor((13*(m+1))/5)+k+Math.floor(k/4)+Math.floor(j/4)-(2*j))%7
            return Math.floor(h);
        }
        return dictionary[dayOfTheWeek(day,month,year)];
    }
console.log(day(8, 10, 2024)); 