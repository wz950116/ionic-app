import { Pipe, PipeTransform } from "@angular/core";
import { AppConfig } from "../app.config";

@Pipe({
  name: "dataDictFormate"
})
export class DataDictFormatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value && args && AppConfig.dataDict[args]) {
      if (value instanceof Array) {
        return value.map(val => {
          return AppConfig.dataDict[args].filter((v: any) => v.value === val)[0].label
        })
      } else if (AppConfig.dataDict[args].filter((v: any) => v.value === value)[0]) {
        return AppConfig.dataDict[args].filter((v: any) => v.value === value)[0].label
      } else {
        throw new Error(`${args}字段对应的值未在数据字典中匹配到相应label`)
      }
    }
    return value;
  }
}

@Pipe({
  name: "dateFormate"
})
export class DateFormatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      if (value.length === 8) {
        return value.slice(0, 4) + '-' + value.slice(4, 6) + '-' + value.slice(6, 8)
      } else {
        return value.slice(0, 10)
      }
    }
    return null;
  }
}

@Pipe({
  name: "numFormate"
})
export class NumFormatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value === '' || value === undefined || value === null) return
    if (!args) {
      value = value.toString()
    } else {
      value = Number(value).toFixed(args)
    }
    if (/\./.test(value)) {
      return value.replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(/\d{3}(?![.]|$)/g, '$&')
    } else {
      return value.replace(/\d(?=(\d{3})+$)/g, '$&,')
    }
  }
}
