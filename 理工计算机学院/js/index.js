//获取到对应的html中img标签
const images = document.querySelectorAll('.carousel-img img')
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.container .next')
console.log(nextButton);
// //设置一个计数器，表示当前应该选择哪个图片
// let currentIndex = 0
// //获取应该展示的图片，形式参数是当前应显示图片的编号
// function showImage(index) {

//     //一种加强循环遍历所有的images，也就是所有的img标签
//     //参数：img是images中的所有元素，i是索引
//     images.forEach(img, i => {
//         //如果这个i索引正好是目标索引那就显示，否则就不显示
//         if (i == index) {
//             img.classList.add('active')
//         } else {
//             img.classList.remove('active')
//         }
//     })
    
// };
// //写右侧按钮的点击事件

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage(currentIndex);
//   });
// //左侧按钮同理
// prevButton.addEventListener('click', () => {
//     //首先要将目标索引向前增加一个，但是要考虑到循环的情况
//     currentIndex = (currentIndex -1+images.length) % images.length
//     //调用展示图片的方法
//     showImage(currentIndex)
// });

