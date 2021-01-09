export default function getOpenReservations(){
    const months = []
    for(let i = 0; i < 12; i++){
        const month = {}
        const dates = new Set();
        for(let i = 0; i < 30; i++){
        const newDate = Math.ceil(Math.random()*28);
        dates.add(newDate);
        }
        month.dates = Array.from(dates)
        month.dates = month.dates.reduce((acc, date)=>{
            acc[date] = {};
            for(let i = 0; i < 20; i++){
            let time = Math.ceil(Math.random()*12);
            if(time >= 5){
                if(acc[date][time]){
                    acc[date][time]++;
                }
                else{
                    acc[date][time] = 1;
                } 
            }
            }
            return acc;
        },{})
        months.push(month);
    }
    return months;
}