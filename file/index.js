// 搜索

function search() {
    const filename = document.getElementById('filename')
    const value = filename.value;
    console.log(filename);
    const url = 'https://kxm1111.github.io/'
    const uv = url + value + '/';
    console.log(uv);
    location.href = uv;
}







