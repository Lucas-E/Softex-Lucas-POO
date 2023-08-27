export function transformNumber(number:string):number|boolean{
    if(isNaN(Number(number))){
        return false
    }
    return Number(number)
}