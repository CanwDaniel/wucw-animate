

// 设置 rem 函数
const setRem = function() {
// 基准大小
  const baseSize = 32;
  if (window.document.documentElement.clientWidth > 1024) {
    // 当前页面宽度相对于 1920 宽的缩放比例
    const scale = window.document.documentElement.clientWidth / 1920;
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 2)}px`;
  } else {
    document.documentElement.style.fontSize = '32px';
  }

  // console.log('1 clientWidth:', document.documentElement.clientWidth)
  // console.log('2 scale:', scale);
  // console.log('3 fontSize:', document.documentElement.style.fontSize);
}

// 初始化
setRem();

// 改变窗口大小时重新设置 rem
const resize = function() {
  // if (window.innerWidth <= 1024) {
  //   document.documentElement.style.fontSize = '16px'
  //   return
  // }
  setRem();
};
window.addEventListener('resize', resize);
