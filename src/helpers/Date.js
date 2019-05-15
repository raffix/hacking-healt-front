export class Date {

  static isoTODatePtBr(date) {
    let dateArray = date.substring(0, 10).split('-')

    return dateArray[2]+"/"+dateArray[1]+"/"+dateArray[0]
  }

}
