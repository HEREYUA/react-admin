/**
 * 生成指定区间的随机整数
 * @param min
 * @param max
 * @returns {number}
 */
 export function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
 export function randomRgbColor() { //随机生成RGB颜色
    var r = Math.floor(Math.random() * 256); //随机生成256以内r值
    var g = Math.floor(Math.random() * 256); //随机生成256以内g值
    var b = Math.floor(Math.random() * 256); //随机生成256以内b值
    return "rgb(" + r + "," + g + "," + b + ")"; //返回rgb(r,g,b)格式颜色
}
