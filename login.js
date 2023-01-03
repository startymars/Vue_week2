

//第一步：先匯入要申請的api網址
const url = 'https://vue3-course-api.hexschool.io/v2'; // 請加入站點
const path = 'cream21'; // 請加入個人 API Path

console.log(url,path);

//第二步：登入後台並串接 API 資料
const app={
    data(){
        return{
            temp:{
                username:"",
                password:"",
            }
        }
    },
    methods:{
       login(){
           const api='https://vue3-course-api.hexschool.io/v2/admin/signin';
           axios.post(`${api}`,this.temp) //需輸入this不然會報錯
            .then((res)=>{
                console.log(res);   
                //取出token和expired
                const {token,expired}=res.data;
                console.log(token,expired);
                //儲存資料到cookie
                document.cookie=`week2Token=${token};expires=${new Date(expired)};`;
                window.location = 'products.html'; //跳轉至產品頁
            })
            .catch((err)=>{
                console.dir(err);
                alert(err.response.data.message);
            })
       }
        
    },
 

  
}

//使用CDN來建立環境時需要將建立VUE實體，需要加上 Vue. 不能直接套用
Vue.createApp(app).mount("#app")
