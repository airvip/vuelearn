import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import Userinfo from './components/Userinfo.vue'
import Article from './components/Article.vue'

export default [

{path:'*',redirect:'/home'},
{path:'/home',component:Home},
{path:'/follow',component:Follow},
{path:'/column',component:Column},
{path:'/user-info',component:Userinfo},
{path:'/article/:id',component:Article}

];